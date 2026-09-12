'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react'
import { submitContact } from '@/lib/actions/contacts'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      await submitContact({
        name: data.get('name') as string,
        phone: (data.get('phone') as string) || undefined,
        email: (data.get('email') as string) || undefined,
        subject: (data.get('subject') as string) || undefined,
        message: data.get('message') as string,
      })
      setSubmitted(true)
    } catch {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="pt-32 pb-16" style={{ background: 'var(--color-navy)' }}>
        <div className="container-site">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
            <Link href="/">{t.common.home}</Link> / {t.contact.title}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-3" style={{ fontFamily: 'var(--font-cormorant,Georgia,serif)' }}>
            {t.contact.title}
          </h1>
          <p className="text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {t.contact.subtitle}
          </p>
        </div>
      </div>

      <section className="section-padding" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Info */}
            <div>
              <h2 className="font-serif text-2xl mb-8" style={{ fontFamily: 'var(--font-cormorant,Georgia,serif)', color: 'var(--color-navy)' }}>
                {t.contact.officeTitle}
              </h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: t.contact.address, value: t.contact.addressValue },
                  { icon: Phone, label: t.contact.phoneLabel, value: t.contact.phoneValue },
                  { icon: Mail, label: t.contact.emailLabel, value: t.contact.emailValue },
                  { icon: Clock, label: t.contact.hours, value: t.contact.hoursValue },
                ].map(({ icon: Icon, ...item }) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 border flex items-center justify-center flex-none" style={{ borderColor: 'var(--color-stone)' }}>
                      <Icon size={16} style={{ color: 'var(--color-navy)' }} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: 'var(--color-muted)' }}>{item.label}</p>
                      {item.value.split('\n').map((line, i) => (
                        <p key={i} className="text-sm" style={{ color: 'var(--color-charcoal)' }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10 aspect-video flex items-center justify-center border" style={{ background: 'linear-gradient(135deg,#E2DAD0,#D4CABC)', borderColor: 'var(--color-stone)' }}>
                <div className="text-center">
                  <MapPin size={24} className="mx-auto mb-2" style={{ color: 'var(--color-limestone)' }} />
                  <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-sand)' }}>{t.contact.addressValue}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl mb-8" style={{ fontFamily: 'var(--font-cormorant,Georgia,serif)', color: 'var(--color-navy)' }}>
                {t.contact.sendTitle}
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={40} className="mx-auto mb-4" style={{ color: 'var(--color-olive)' }} />
                  <h3 className="font-serif text-2xl mb-2" style={{ fontFamily: 'var(--font-cormorant,Georgia,serif)', color: 'var(--color-navy)' }}>{t.contact.successTitle}</h3>
                  <p className="text-sm mb-6" style={{ color: 'var(--color-muted)' }}>{t.contact.successDesc}</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">{t.contact.another}</button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="form-label">{t.contact.nameLabel} *</label><input name="name" type="text" className="form-input" required /></div>
                    <div><label className="form-label">{t.contact.phoneLabel}</label><input name="phone" type="tel" className="form-input" /></div>
                  </div>
                  <div><label className="form-label">{t.contact.emailLabel}</label><input name="email" type="email" className="form-input" /></div>
                  <div>
                    <label className="form-label">{t.contact.subjectLabel}</label>
                    <select name="subject" className="form-input">
                      {t.contact.subjects.map((s) => (
                        <option key={s} value={s === t.contact.subjects[0] ? '' : s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div><label className="form-label">{t.contact.messageLabel} *</label><textarea name="message" className="form-input" rows={5} required /></div>
                  {error && <p className="text-sm" style={{ color: 'var(--color-terracotta)' }}>{error}</p>}
                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center" style={{ opacity: loading ? 0.6 : 1 }}>
                    {loading ? t.contact.sending : t.contact.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
