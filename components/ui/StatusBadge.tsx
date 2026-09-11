import type { ReportStatus, ProjectStatus } from '@/lib/types'

type Status = ReportStatus | ProjectStatus | string

const styles: Record<string, string> = {
  new: 'status-new',
  review: 'status-review',
  progress: 'status-progress',
  resolved: 'status-resolved',
  planning: 'status-planning',
  'in-progress': 'status-progress',
  completed: 'status-completed',
  cancelled: 'status-cancelled',
}

const labels: Record<string, string> = {
  new: 'New',
  review: 'Under Review',
  progress: 'In Progress',
  resolved: 'Resolved',
  planning: 'Planning',
  'in-progress': 'In Progress',
  completed: 'Completed',
  cancelled: 'Cancelled',
}

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 text-[10px] font-medium tracking-wide uppercase rounded-sm ${styles[status] || 'bg-gray-100 text-gray-600'}`}>
      {labels[status] || status}
    </span>
  )
}
