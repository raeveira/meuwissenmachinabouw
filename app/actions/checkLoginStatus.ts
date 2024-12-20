'use server'
import { cookies } from 'next/headers'

export async function checkLoginStatus() {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')
    return { isLoggedIn: !!session }
}