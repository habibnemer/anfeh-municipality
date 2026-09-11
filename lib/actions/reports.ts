'use server'

import { getDb } from "@/lib/db/supabase"
import { generateReference } from '@/lib/utils/reference'
import { revalidatePath } from 'next/cache'

export interface ReportSubmission {
  category: string
  description: string
  location: string
  name?: string
  phone?: string
  photoUrl?: string
}

export async function submitReport(data: ReportSubmission) {
  const reference = generateReference('ANF')

  const { error } = await getDb().from('reports').insert({
    reference,
    category: data.category,
    description: data.description,
    location: data.location,
    name: data.name || null,
    phone: data.phone || null,
    photo_url: data.photoUrl || null,
    status: 'new',
  })

  if (error) {
    console.error('submitReport error:', error)
    throw new Error('Failed to submit report. Please try again.')
  }

  return { reference }
}

export async function getReports() {
  const { data, error } = await getDb()
    .from('reports')
    .select('*')
    .order('submitted_at', { ascending: false })

  if (error) throw new Error(error.message)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data ?? []) as any[]
}

export async function updateReportStatus(id: string, status: string, adminNote?: string) {
  const { error } = await getDb()
    .from('reports')
    .update({ status, admin_note: adminNote ?? null, updated_at: new Date().toISOString() })
    .eq('id', id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin')
}
