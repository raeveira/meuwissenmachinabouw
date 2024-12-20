'use server'

import { cookies } from 'next/headers'
import { sign } from 'jsonwebtoken'
import { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export async function authenticate(formData: FormData) {
    const password = formData.get('password')
    const storedPassword = process.env.ADMIN_PASSWORD

    if (!storedPassword) {
        throw new Error('ADMIN_PASSWORD is not set in .env file')
    }

    if (password === storedPassword) {
        const jwtSecret = process.env.JWT_SECRET || 'fallback_secret'
        const payload: JwtPayload = { role: 'admin' }
        const token = sign(payload, jwtSecret, { expiresIn: '1h' })

        const cookieStore = await cookies()
        cookieStore.set('session', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600 // 1 hour
        })

        return { success: true }
    }

    return {
        success: false,
        error: 'Invalid password'
    }
}
