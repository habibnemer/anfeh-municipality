'use client'

import Link from 'next/link'
import { MapPin, Mail, Clock, Phone } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function Footer() {
  const { t, lang } = useLanguage()

  const navLinks = [
    { label: lang === 'ar' ? 'نبذة عن البلدية' : 'About the Municipality', href: '/municipality' },
    { label: t.nav.council, href: '/municipality/council' },
    { label: t.nav.projects, href: '/municipality/projects' },
    { label: t.nav.announcements, href: '/municipality/announcements' },
    { label: t.nav.discover, href: '/discover' },
    { label: t.nav.events, href: '/events' },
    { label: t.nav.news, href: '/news' },
  ]

  const serviceLinks = [
    { label: lang === 'ar' ? 'تقديم طلب' : 'Submit a Request', href: '/services' },
    { label: t.nav.reportIssue, href: '/report' },
    { label: lang === 'ar' ? 'وثائق البلدية' : 'Municipal Documents', href: '/services' },
    { label: lang === 'ar' ? 'التصاريح' : 'Permits', href: '/services' },
    { label: lang === 'ar' ? 'تقديم شكوى' : 'File a Complaint', href: '/services' },
    { label: lang === 'ar' ? 'اقتراحات' : 'Suggestions', href: '/services' },
    { label: t.nav.contact, href: '/contact' },
  ]

  return (
    <footer style={{ background: 'var(--color-navy)' }} className="text-white">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-6">
              <p className="font-serif text-2xl tracking-wide mb-1"
                style={{ fontFamily: lang === 'ar' ? 'var(--font-arabic, sans-serif)' : 'var(--font-cormorant, Georgia, serif)' }}>
                {lang === 'ar' ? 'عنفه' : 'ANFEH'}
              </p>
              <p className="text-[9px] tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {lang === 'ar' ? 'البلدية · الكورة · لبنان' : 'Municipality · Koura · Lebanon'}
              </p>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {t.footer.tagline}
            </p>
            <Link
              href="/report"
              className="inline-flex items-center gap-2 text-xs tracking-wider uppercase px-4 py-2.5 font-medium transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.7)' }}
            >
              {t.footer.reportIssue}
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {t.footer.navigate}
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseOver={e => (e.currentTarget.style.color = 'white')}
                    onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {t.footer.services}
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseOver={e => (e.currentTarget.style.color = 'white')}
                    onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {t.footer.contact}
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <MapPin size={15} className="flex-none mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }} />
                <span>{t.footer.address.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 ? <br /> : null}</span>
                ))}</span>
              </li>
              <li className="flex gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <Phone size={15} className="flex-none mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }} />
                <Link href="/contact" className="hover:text-white transition-colors">{t.footer.contactOnline}</Link>
              </li>
              <li className="flex gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <Mail size={15} className="flex-none mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }} />
                <Link href="/contact" className="hover:text-white transition-colors">{t.footer.sendMessage}</Link>
              </li>
              <li className="flex gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <Clock size={15} className="flex-none mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }} />
                <span>{t.footer.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} {lang === 'ar' ? 'بلدية عنفه.' : 'Anfeh Municipality.'} {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-xs transition-colors" style={{ color: 'rgba(255,255,255,0.3)' }}>{t.footer.privacy}</Link>
            <Link href="/contact" className="text-xs transition-colors" style={{ color: 'rgba(255,255,255,0.3)' }}>{t.footer.accessibility}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
