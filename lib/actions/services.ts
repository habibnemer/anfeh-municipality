'use server'

import { getDb } from "@/lib/db/supabase"
import { generateReference } from '@/lib/utils/reference'
import { revalidatePath } from 'next/cache'

export interface ServiceRequestSubmission {
  type: string
  fullName: string
  phone?: string
  email?: string
  requestType?: string
  message: string
}

export async function submitServiceRequest(data: ServiceRequestSubmission) {
  const reference = generateReference('SVC')

  const { error } = await getDb().from('service_requests').insert({
    reference,
    type: data.type,
    full_name: data.fullName,
    phone: data.phone || null,
    email: data.email || null,
    request_type: data.requestType || null,
    message: data.message,
    status: 'new',
  })

  if (error) {
    console.error('submitServiceRequest error:', error)
    throw new Error('Failed to submit request. Please try again.')
  }

  return { reference }
}

export async function getServiceRequests() {
  const { data, error } = await getDb()
    .from('service_requests')
    .select('*')
    .order('submitted_at', { ascending: false })

  if (error) throw new Error(error.message)
  return data ?? []
}

export async function updateServiceStatus(id: string, status: string) {
  const { error } = await getDb()
    .from('service_requests')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin')
}
