'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const SESSION_COOKIE = 'anfeh_admin_session'
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'anfeh-admin-2026'

export async function loginAdmin(pin: string): Promise<{ success: boolean; error?: string }> {
  const adminPin = process.env.ADMIN_PIN
  if (!adminPin) return { success: false, error: 'Admin not configured.' }

  if (pin !== adminPin) return { success: false, error: 'Incorrect PIN.' }

  const cookieStore = await cookies()
  cookieStore.set(SESSION_COOKIE, SESSION_SECRET, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 8, // 8 hours
    path: '/',
  })

  return { success: true }
}

export async function logoutAdmin() {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
  redirect('/admin/login')
}

export async function verifyAdminSession(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get(SESSION_COOKIE)
  return session?.value === SESSION_SECRET
}
