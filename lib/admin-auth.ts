import { SignJWT, jwtVerify, type JWTPayload } from 'jose'

// Single source of truth for admin JWT signing/verifying (HS256).
// Both the API routes and middleware use these helpers so there is only one
// implementation to keep in sync.

function secret(): Uint8Array {
  const value = process.env.ADMIN_JWT_SECRET
  if (!value) {
    // Fail loud instead of silently signing/verifying with an empty key,
    // which previously made the admin area mysteriously unusable.
    throw new Error('ADMIN_JWT_SECRET is not set — admin auth cannot operate')
  }
  return new TextEncoder().encode(value)
}

export async function signAdminToken() {
  return new SignJWT({ admin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret())
}

export async function verifyAdminToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret())
    return payload
  } catch {
    return null
  }
}
