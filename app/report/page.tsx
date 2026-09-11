'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Upload } from 'lucide-react'
import { reportCategories } from '@/lib/data'
import { submitReport } from '@/lib/actions/reports'

export default function ReportPage() {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [ref, setRef] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!category || !description.trim() || !location.trim()) {
      setError('Please select a category, describe the issue and provide a location.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const result = await submitReport({
        category,
        description,
        location,
        name: name.trim() || undefined,
        phone: phone.trim() || undefined,
      })
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
          <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-6" style={{borderColor:'var(--color-olive)'}}>
            <CheckCircle size={28} style={{color:'var(--color-olive)'}} />
          </div>
          <h1 className="font-serif text-3xl mb-3" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>
            Report Submitted
          </h1>
          <p className="text-sm mb-6" style={{color:'var(--color-muted)'}}>
            Thank you for helping keep Anfeh safe and clean. The municipality will review your report.
          </p>
          <div className="p-5 mb-8 border" style={{background:'var(--color-cream)',borderColor:'var(--color-stone)'}}>
            <p className="text-[10px] tracking-widest uppercase mb-2" style={{color:'var(--color-muted)'}}>Reference Number</p>
            <p className="font-serif text-2xl" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>{ref}</p>
            <p className="text-xs mt-2" style={{color:'var(--color-limestone)'}}>Keep this reference for follow-up</p>
          </div>
          <div className="space-y-3">
            <button onClick={()=>{setStep('form');setCategory('');setDescription('');setLocation('');setName('');setPhone('')}}
              className="btn-primary w-full justify-center">
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
      <div className="pt-32 pb-16" style={{background:'var(--color-navy)'}}>
        <div className="container-site">
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-6 transition-colors" style={{color:'rgba(255,255,255,0.5)'}}>
            <ArrowLeft size={14} /> Back
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-3" style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>
            See something that needs attention?
          </h1>
          <p className="text-base max-w-xl" style={{color:'rgba(255,255,255,0.6)'}}>
            Help us keep Anfeh safe, clean and connected. Reports are reviewed by the municipal team.
          </p>
        </div>
      </div>

      <section className="section-padding" style={{background:'var(--color-warm-white)'}}>
        <div className="container-site">
          <div className="max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Category */}
              <div>
                <label className="form-label">Issue Category *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {reportCategories.map((cat)=>(
                    <button
                      key={cat.id}
                      type="button"
                      onClick={()=>setCategory(cat.id)}
                      className="p-4 border text-left transition-all"
                      style={{
                        borderColor:category===cat.id?'var(--color-navy)':'var(--color-stone)',
                        background:category===cat.id?'white':'white',
                        boxShadow:category===cat.id?'inset 0 0 0 1px var(--color-navy)':undefined
                      }}
                    >
                      <span className="text-xl block mb-2">{cat.emoji}</span>
                      <span className="text-xs font-medium block" style={{color:'var(--color-charcoal)'}}>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="form-label">Describe the Issue *</label>
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder="Please describe what you've noticed and why it needs attention..."
                  value={description}
                  onChange={e=>setDescription(e.target.value)}
                />
              </div>

              {/* Location */}
              <div>
                <label className="form-label">Location *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Street name, landmark or area description"
                  value={location}
                  onChange={e=>setLocation(e.target.value)}
                />
              </div>

              {/* Photo */}
              <div>
                <label className="form-label">Photo (Optional)</label>
                <div className="border-2 border-dashed p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-navy/30 transition-colors" style={{borderColor:'var(--color-stone)'}}>
                  <Upload size={20} style={{color:'var(--color-limestone)'}} />
                  <p className="text-sm" style={{color:'var(--color-muted)'}}>Click to upload or drag a photo</p>
                  <p className="text-xs" style={{color:'var(--color-limestone)'}}>JPG, PNG — max 10MB</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <label className="form-label">Your Details (Optional)</label>
                <p className="text-xs mb-4" style={{color:'var(--color-muted)'}}>Providing your contact details helps the municipality follow up if needed. Reports can be submitted anonymously.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input type="text" className="form-input" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
                  <input type="tel" className="form-input" placeholder="Phone number" value={phone} onChange={e=>setPhone(e.target.value)} />
                </div>
              </div>

              {error && <p className="text-sm" style={{color:'#DC2626'}}>{error}</p>}

              <div className="pt-4">
                <button type="submit" disabled={loading} className="btn-primary w-full justify-center" style={{opacity:loading?0.6:1}}>
                  {loading ? 'Submitting...' : 'Submit Report'}
                </button>
                <p className="text-xs text-center mt-4" style={{color:'var(--color-limestone)'}}>
                  This is a prototype system. Reports are not transmitted to a live municipal system.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
