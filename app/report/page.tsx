'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Construction, Lightbulb, Trash2, Droplets, Zap, Trees, TriangleAlert, MoreHorizontal, MapPin } from 'lucide-react'
import { reportCategories } from '@/lib/data'
import { submitReport } from '@/lib/actions/reports'

const iconMap: Record<string, React.ElementType> = {
  Construction, Lightbulb, Trash2, Droplets, Zap, Trees, TriangleAlert, MoreHorizontal,
}

export default function ReportPage() {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [ref, setRef] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!category) { setError('Please select an issue category.'); return }
    if (!description.trim()) { setError('Please describe the issue.'); return }
    if (!location.trim()) { setError('Please provide a location.'); return }
    setLoading(true)
    setError('')
    try {
      const result = await submitReport({ category, description, location })
      setRef(result.reference)
      setStep('success')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20" style={{background:'var(--color-warm-white)'}}>
        <div className="w-full max-w-md text-center">
          <div className="w-16 h-16 border-2 flex items-center justify-center mx-auto mb-6" style={{borderColor:'var(--color-olive)'}}>
            <CheckCircle size={28} style={{color:'var(--color-olive)'}} />
          </div>
          <h1 className="font-serif text-3xl mb-3" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>
            Report Received
          </h1>
          <p className="text-sm mb-8 leading-relaxed" style={{color:'var(--color-muted)'}}>
            Thank you for helping keep Anfeh safe and clean. The municipal team will review your report and take action.
          </p>
          <div className="p-6 mb-8 border" style={{background:'var(--color-cream)',borderColor:'var(--color-stone)'}}>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{color:'var(--color-muted)'}}>Reference Number</p>
            <p className="font-serif text-3xl" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>{ref}</p>
            <p className="text-xs mt-2" style={{color:'var(--color-limestone)'}}>Save this number to follow up on your report</p>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => { setStep('form'); setCategory(''); setDescription(''); setLocation('') }}
              className="btn-primary w-full justify-center"
            >
              Submit Another Report
            </button>
            <Link href="/" className="btn-ghost w-full justify-center">Return Home</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <div className="pt-36 pb-20" style={{background:'var(--color-navy)'}}>
        <div className="container-site">
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-8 transition-opacity hover:opacity-70" style={{color:'rgba(255,255,255,0.5)'}}>
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{color:'rgba(255,255,255,0.3)'}}>
            Anfeh Municipality
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-5 leading-tight" style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>
            Report an Issue
          </h1>
          <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{color:'rgba(255,255,255,0.65)'}}>
            Help us keep Anfeh safe, clean and well-maintained. Reports are reviewed directly by the municipal team. You can report anonymously — no personal details required.
          </p>
        </div>
      </div>

      {/* Form */}
      <section className="section-padding" style={{background:'var(--color-warm-white)'}}>
        <div className="container-site">
          <div className="max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-10">

              {/* Category */}
              <div>
                <label className="form-label mb-4 block">Issue Category *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {reportCategories.map((cat) => {
                    const Icon = iconMap[cat.icon] || MoreHorizontal
                    const selected = category === cat.id
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setCategory(cat.id)}
                        className="p-4 border text-left transition-all duration-200 flex flex-col gap-3"
                        style={{
                          borderColor: selected ? 'var(--color-navy)' : 'var(--color-stone)',
                          background: selected ? 'var(--color-navy)' : 'white',
                          outline: selected ? '1px solid var(--color-navy)' : undefined,
                        }}
                      >
                        <Icon size={18} style={{color: selected ? 'rgba(255,255,255,0.9)' : 'var(--color-navy)'}} />
                        <span className="text-xs font-medium leading-tight block" style={{color: selected ? 'white' : 'var(--color-charcoal)'}}>{cat.label}</span>
                      </button>
                    )
                  })}
                </div>
                {category && (
                  <p className="text-xs mt-3" style={{color:'var(--color-muted)'}}>
                    {reportCategories.find(c => c.id === category)?.description}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="form-label">Describe the Issue *</label>
                <textarea
                  className="form-input"
                  rows={5}
                  placeholder="Describe what you've noticed — what it is, how serious it is, and how long it has been present..."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>

              {/* Location */}
              <div>
                <label className="form-label">Location *</label>
                <div className="relative">
                  <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{color:'var(--color-limestone)'}} />
                  <input
                    type="text"
                    className="form-input"
                    style={{paddingLeft:'2.5rem'}}
                    placeholder="Street name, landmark, or area description (e.g. Near the port, Main road towards Tripoli)"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                  />
                </div>
              </div>

              {/* Anonymous notice */}
              <div className="flex items-start gap-4 p-5 border" style={{background:'var(--color-cream)',borderColor:'var(--color-stone)'}}>
                <CheckCircle size={18} className="flex-none mt-0.5" style={{color:'var(--color-olive)'}} />
                <div>
                  <p className="text-sm font-medium mb-1" style={{color:'var(--color-charcoal)'}}>Anonymous reporting</p>
                  <p className="text-xs leading-relaxed" style={{color:'var(--color-muted)'}}>
                    Your identity is never required. Reports are submitted directly to the municipality without any personal information.
                  </p>
                </div>
              </div>

              {error && (
                <p className="text-sm px-4 py-3 border" style={{color:'#B91C1C',background:'#FEF2F2',borderColor:'#FECACA'}}>
                  {error}
                </p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4"
                  style={{opacity: loading ? 0.6 : 1, fontSize:'0.9rem'}}
                >
                  {loading ? 'Submitting...' : 'Submit Report to Municipality'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
