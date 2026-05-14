import { SignJWT, jwtVerify } from 'jose'

const secret = () => new TextEncoder().encode(process.env.ADMIN_JWT_SECRET!)

export async function signAdminToken() {
  return new SignJWT({ admin: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret())
}

export async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret())
    return payload
  } catch {
    return null
  }
}
