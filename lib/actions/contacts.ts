'use server'

import { getDb } from "@/lib/db/supabase"
import { revalidatePath } from 'next/cache'

export interface ContactSubmission {
  name: string
  phone?: string
  email?: string
  subject?: string
  message: string
}

export async function submitContact(data: ContactSubmission) {
  const { error } = await getDb().from('contacts').insert({
    name: data.name,
    phone: data.phone || null,
    email: data.email || null,
    subject: data.subject || null,
    message: data.message,
    read: false,
  })

  if (error) {
    console.error('submitContact error:', error)
    throw new Error('Failed to send message. Please try again.')
  }
}

export async function getContacts() {
  const { data, error } = await getDb()
    .from('contacts')
    .select('*')
    .order('submitted_at', { ascending: false })

  if (error) throw new Error(error.message)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data ?? []) as any[]
}

export async function markContactRead(id: string) {
  const { error } = await getDb()
    .from('contacts')
    .update({ read: true })
    .eq('id', id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin')
}
