import {
  createCipheriv,
  createDecipheriv,
  randomBytes,
  scryptSync,
  timingSafeEqual,
} from 'crypto'

// Node-only crypto helpers. Do NOT import this from middleware.ts — it runs on
// the Edge runtime where the `crypto` module is unavailable. API routes run on
// the Node runtime, so they can use these freely.

/**
 * Constant-time string comparison. Guards secret comparisons (admin password,
 * API bearer tokens) against timing side-channels. Returns false on any length
 * mismatch without leaking which one differed.
 */
export function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) {
    // Still do a comparison against self so the timing doesn't depend on length
    // being the discriminator between the common wrong-guess cases.
    timingSafeEqual(bufA, bufA)
    return false
  }
  return timingSafeEqual(bufA, bufB)
}

// ─── Encryption at rest (AES-256-GCM) ────────────────────────────────────────
// Used to encrypt the admin credentials vault before it is written to Supabase,
// so a database dump never exposes stored passwords / client secrets in plain
// text. The key is derived from CREDENTIALS_SECRET via scrypt.

const ENC_PREFIX = 'enc:v1:'

function key(): Buffer | null {
  const secret = process.env.CREDENTIALS_SECRET
  if (!secret) return null
  // Fixed salt is acceptable here: the secret is high-entropy and the salt only
  // needs to be stable so the same secret always derives the same key.
  return scryptSync(secret, 'meghroop-credentials-v1', 32)
}

/** True when a value produced by encryptSecret() is passed in. */
export function isEncrypted(value: string): boolean {
  return typeof value === 'string' && value.startsWith(ENC_PREFIX)
}

/**
 * Encrypt a plaintext string. Format: `enc:v1:<iv>:<authTag>:<ciphertext>`
 * (all base64). If CREDENTIALS_SECRET is not configured, the plaintext is
 * returned unchanged so the app still works (with a runtime warning), matching
 * the pre-encryption behaviour rather than crashing.
 */
export function encryptSecret(plaintext: string): string {
  const k = key()
  if (!k) {
    console.warn('[crypto] CREDENTIALS_SECRET not set — storing credentials unencrypted')
    return plaintext
  }
  const iv = randomBytes(12)
  const cipher = createCipheriv('aes-256-gcm', k, iv)
  const ct = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()])
  const tag = cipher.getAuthTag()
  return `${ENC_PREFIX}${iv.toString('base64')}:${tag.toString('base64')}:${ct.toString('base64')}`
}

/**
 * Decrypt a value from encryptSecret(). Legacy plaintext values (no `enc:v1:`
 * prefix) are returned as-is so existing rows keep working during migration.
 */
export function decryptSecret(value: string): string {
  if (!isEncrypted(value)) return value // legacy plaintext
  const k = key()
  if (!k) {
    console.warn('[crypto] CREDENTIALS_SECRET not set — cannot decrypt stored credentials')
    return value
  }
  try {
    const [, , ivB64, tagB64, ctB64] = value.split(':')
    const iv = Buffer.from(ivB64, 'base64')
    const tag = Buffer.from(tagB64, 'base64')
    const ct = Buffer.from(ctB64, 'base64')
    const decipher = createDecipheriv('aes-256-gcm', k, iv)
    decipher.setAuthTag(tag)
    return Buffer.concat([decipher.update(ct), decipher.final()]).toString('utf8')
  } catch (err) {
    console.error('[crypto] Failed to decrypt credentials value:', err)
    return value
  }
}
