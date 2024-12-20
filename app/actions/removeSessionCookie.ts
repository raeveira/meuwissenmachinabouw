'use server'

import { cookies } from 'next/headers'

export async function removeSessionCookie() {

    try {
        const cookieStore = await cookies()
        cookieStore.set('session', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 0
        })

        return { success: true }
    } catch (err) {
        console.error(err)
        return { success: false }
    }

}