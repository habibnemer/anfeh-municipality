import { getReports } from '@/lib/actions/reports'
import ReportsClient from '@/components/admin/ReportsClient'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  let reports: Awaited<ReturnType<typeof getReports>> = []

  try {
    reports = await getReports()
  } catch (err) {
    // Supabase not configured yet — show empty state
    console.error('Admin getReports error:', err)
  }

  return <ReportsClient initialReports={reports} />
}
