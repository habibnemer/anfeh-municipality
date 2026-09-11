'use client'

import { useState, useCallback, useTransition } from 'react'
import { X, Phone, MessageSquare, Eye, AlertCircle, CheckCircle, Clock, FileText, LogOut, Trash2 } from 'lucide-react'
import StatusBadge from '@/components/ui/StatusBadge'
import { updateReportStatus, deleteReport } from '@/lib/actions/reports'
import { logoutAdmin } from '@/lib/actions/admin'
import type { ReportStatus } from '@/lib/types'

interface Report {
  id: string
  reference: string
  category: string
  description: string
  location: string
  name: string | null
  phone: string | null
  photo_url: string | null
  status: string
  admin_note: string | null
  submitted_at: string
  updated_at: string
}

const statusCycle: ReportStatus[] = ['new', 'review', 'progress', 'resolved']

function fmtDate(s: string) {
  return new Date(s).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
}

export default function ReportsClient({ initialReports }: { initialReports: Report[] }) {
  const [reports, setReports] = useState<Report[]>(initialReports)
  const [filter, setFilter] = useState<ReportStatus | 'all'>('all')
  const [selected, setSelected] = useState<Report | null>(null)
  const [note, setNote] = useState('')
  const [isPending, startTransition] = useTransition()

  const counts = {
    all: reports.length,
    new: reports.filter(r => r.status === 'new').length,
    review: reports.filter(r => r.status === 'review').length,
    progress: reports.filter(r => r.status === 'progress').length,
    resolved: reports.filter(r => r.status === 'resolved').length,
  }

  const filtered = filter === 'all' ? reports : reports.filter(r => r.status === filter)

  const handleStatusUpdate = useCallback((id: string, status: ReportStatus) => {
    startTransition(async () => {
      await updateReportStatus(id, status, note || undefined)
      setReports(prev => prev.map(r => r.id === id ? { ...r, status, updated_at: new Date().toISOString() } : r))
      setSelected(prev => prev?.id === id ? { ...prev, status } : prev)
    })
  }, [note])

  const handleDelete = useCallback((id: string) => {
    if (!confirm('Delete this report permanently? This cannot be undone.')) return
    startTransition(async () => {
      await deleteReport(id)
      setReports(prev => prev.filter(r => r.id !== id))
      setSelected(null)
    })
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#F8F7F5' }}>
      {/* Top bar */}
      <div className="bg-white border-b px-4 md:px-6 py-4 flex items-center justify-between sticky top-0 z-30" style={{ borderColor: 'var(--color-stone)' }}>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--color-charcoal)' }}>Anfeh Municipality — Admin</p>
          <p className="text-xs" style={{ color: 'var(--color-muted)' }}>Issue Reports Dashboard</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            {[
              { v: counts.new, l: 'New', c: '#EF4444' },
              { v: counts.progress, l: 'In Progress', c: '#8B5CF6' },
              { v: counts.resolved, l: 'Resolved', c: '#10B981' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <p className="text-lg font-serif font-semibold" style={{ fontFamily: 'var(--font-cormorant,Georgia,serif)', color: s.c }}>{s.v}</p>
                <p className="text-[10px] uppercase tracking-wide" style={{ color: 'var(--color-muted)' }}>{s.l}</p>
              </div>
            ))}
          </div>
          <form action={logoutAdmin}>
            <button type="submit" className="flex items-center gap-1.5 text-xs px-3 py-2 transition-colors" style={{ color: 'var(--color-muted)', border: '1px solid var(--color-stone)' }}>
              <LogOut size={12} /> Sign out
            </button>
          </form>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 md:px-6 py-5 grid grid-cols-2 md:grid-cols-5 gap-3">
        {[
          { v: counts.all, l: 'Total', icon: FileText, color: 'var(--color-navy)' },
          { v: counts.new, l: 'New', icon: AlertCircle, color: '#EF4444' },
          { v: counts.review, l: 'Under Review', icon: Eye, color: '#3B82F6' },
          { v: counts.progress, l: 'In Progress', icon: Clock, color: '#8B5CF6' },
          { v: counts.resolved, l: 'Resolved', icon: CheckCircle, color: '#10B981' },
        ].map(({ icon: Icon, ...s }) => (
          <div key={s.l} className="bg-white border p-4 flex items-center gap-3" style={{ borderColor: 'var(--color-stone)' }}>
            <Icon size={18} style={{ color: s.color, flexShrink: 0 }} />
            <div>
              <p className="font-serif text-2xl font-semibold" style={{ fontFamily: 'var(--font-cormorant,Georgia,serif)', color: 'var(--color-charcoal)' }}>{s.v}</p>
              <p className="text-[10px] uppercase tracking-wide" style={{ color: 'var(--color-muted)' }}>{s.l}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter tabs + Table */}
      <div className="px-4 md:px-6">
        <div className="bg-white border flex gap-0 overflow-x-auto" style={{ borderColor: 'var(--color-stone)' }}>
          {(['all', 'new', 'review', 'progress', 'resolved'] as const).map(s => (
            <button key={s} onClick={() => setFilter(s)}
              className="px-5 py-3 text-xs font-medium tracking-wide uppercase whitespace-nowrap border-b-2 transition-colors"
              style={{
                borderBottomColor: filter === s ? 'var(--color-navy)' : 'transparent',
                color: filter === s ? 'var(--color-navy)' : 'var(--color-muted)',
              }}>
              {s === 'all' ? 'All' : s === 'review' ? 'Under Review' : s === 'progress' ? 'In Progress' : s.charAt(0).toUpperCase() + s.slice(1)}
              {' '}({counts[s]})
            </button>
          ))}
        </div>

        <div className="bg-white border-x border-b overflow-hidden" style={{ borderColor: 'var(--color-stone)' }}>
          {reports.length === 0 ? (
            <div className="py-16 text-center">
              <CheckCircle size={32} style={{ color: 'var(--color-limestone)', margin: '0 auto 12px' }} />
              <p className="text-sm font-medium" style={{ color: 'var(--color-charcoal)' }}>No reports yet</p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>Reports submitted by residents will appear here</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-stone)', background: 'var(--color-cream)' }}>
                    {['Reference', 'Category', 'Location', 'Submitted by', 'Date', 'Status', ''].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-[10px] tracking-wider uppercase font-medium" style={{ color: 'var(--color-muted)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((report, i) => (
                    <tr key={report.id} style={{ borderBottom: '1px solid var(--color-stone)', background: i % 2 === 0 ? 'white' : 'rgba(250,248,245,0.5)' }}>
                      <td className="px-4 py-3">
                        <p className="text-xs font-mono font-medium" style={{ color: 'var(--color-navy)' }}>{report.reference}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs font-medium" style={{ color: 'var(--color-charcoal)' }}>{report.category}</p>
                      </td>
                      <td className="px-4 py-3 max-w-[160px]">
                        <p className="text-xs truncate" style={{ color: 'var(--color-muted)' }}>{report.location}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs" style={{ color: 'var(--color-muted)' }}>{report.name || 'Anonymous'}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs" style={{ color: 'var(--color-muted)' }}>{fmtDate(report.submitted_at)}</p>
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={report.status as ReportStatus} />
                      </td>
                      <td className="px-4 py-3">
                        <button onClick={() => { setSelected(report); setNote(report.admin_note || '') }}
                          className="text-xs px-3 py-1.5 transition-colors"
                          style={{ border: '1px solid var(--color-stone)', color: 'var(--color-navy)' }}>
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtered.length === 0 && (
                <p className="text-sm text-center py-12" style={{ color: 'var(--color-limestone)' }}>No reports in this category</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Detail panel */}
      {selected && (
        <div className="fixed inset-0 z-50 flex" style={{ background: 'rgba(26,46,74,0.6)' }} onClick={(e) => { if (e.target === e.currentTarget) setSelected(null) }}>
          <div className="ml-auto w-full max-w-md bg-white h-full overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b sticky top-0 bg-white z-10" style={{ borderColor: 'var(--color-stone)' }}>
              <div>
                <p className="text-xs font-mono" style={{ color: 'var(--color-navy)' }}>{selected.reference}</p>
                <p className="font-medium text-sm mt-0.5" style={{ color: 'var(--color-charcoal)' }}>{selected.category}</p>
              </div>
              <button onClick={() => setSelected(null)} className="p-1" style={{ color: 'var(--color-muted)' }}>
                <X size={18} />
              </button>
            </div>

            <div className="p-5 space-y-6">
              {/* Status */}
              <div>
                <p className="form-label mb-2">Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {statusCycle.map(s => (
                    <button key={s} onClick={() => handleStatusUpdate(selected.id, s)}
                      disabled={isPending}
                      className="px-3 py-1.5 text-[10px] tracking-wider uppercase font-medium border transition-all"
                      style={{
                        borderColor: selected.status === s ? 'var(--color-navy)' : 'var(--color-stone)',
                        background: selected.status === s ? 'var(--color-navy)' : 'white',
                        color: selected.status === s ? 'white' : 'var(--color-muted)',
                        opacity: isPending ? 0.6 : 1,
                      }}>
                      {s === 'review' ? 'Under Review' : s === 'progress' ? 'In Progress' : s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="form-label">Description</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-charcoal)' }}>{selected.description}</p>
              </div>

              {/* Location */}
              <div>
                <p className="form-label">Location</p>
                <p className="text-sm" style={{ color: 'var(--color-charcoal)' }}>{selected.location}</p>
              </div>

              {/* Photo */}
              {selected.photo_url && (
                <div>
                  <p className="form-label mb-2">Photo</p>
                  <img src={selected.photo_url} alt="Report photo" className="w-full rounded-sm object-cover" style={{ maxHeight: 240 }} />
                </div>
              )}

              {/* Submitted by */}
              <div>
                <p className="form-label">Submitted by</p>
                <p className="text-sm font-medium" style={{ color: 'var(--color-charcoal)' }}>
                  {selected.name || <span style={{ color: 'var(--color-limestone)', fontStyle: 'italic' }}>Anonymous</span>}
                </p>
                {selected.phone && <p className="text-sm mt-0.5" style={{ color: 'var(--color-muted)' }}>{selected.phone}</p>}
              </div>

              {/* Admin note */}
              <div>
                <p className="form-label">Internal Note</p>
                <textarea
                  value={note}
                  onChange={e => setNote(e.target.value)}
                  className="form-input resize-none"
                  rows={3}
                  placeholder="Add an internal note…"
                />
              </div>

              {/* Contact buttons */}
              {selected.phone && (
                <div className="flex gap-3">
                  <a href={`tel:${selected.phone.replace(/\D/g, '')}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 border text-sm transition-colors"
                    style={{ border: '1px solid var(--color-stone)', color: 'var(--color-charcoal)' }}>
                    <Phone size={14} /> Call
                  </a>
                  <a href={`https://wa.me/${selected.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello, this is Anfeh Municipality regarding your report ${selected.reference}.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 text-white text-sm"
                    style={{ background: '#25D366' }}>
                    <MessageSquare size={14} /> WhatsApp
                  </a>
                </div>
              )}

              {/* Timestamps */}
              <div className="text-xs pt-4 border-t space-y-1" style={{ borderColor: 'var(--color-stone)', color: 'var(--color-limestone)' }}>
                <p>Submitted: {fmtDate(selected.submitted_at)}</p>
                <p>Last updated: {fmtDate(selected.updated_at)}</p>
              </div>

              {/* Delete */}
              <div className="pt-2 border-t" style={{ borderColor: 'var(--color-stone)' }}>
                <button
                  onClick={() => handleDelete(selected.id)}
                  disabled={isPending}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs tracking-wider uppercase font-medium transition-colors"
                  style={{ border: '1px solid #FCA5A5', color: '#DC2626', background: '#FEF2F2' }}
                >
                  <Trash2 size={12} /> Delete Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
