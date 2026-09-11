import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-6">
              <p className="font-serif text-2xl tracking-wide mb-1"
                style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)' }}>
                ANFEH
              </p>
              <p className="text-[9px] tracking-[0.3em] uppercase text-white/40">
                Municipality · Koura · Lebanon
              </p>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Our Town. Our Community. Our Future.
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'twitter'].map((s) => (
                <a
                  key={s}
                  href={`[${s} link]`}
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-colors text-xs"
                  aria-label={s}
                >
                  {s[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5">Navigate</p>
            <ul className="space-y-3">
              {[
                { label: 'Municipality', href: '/municipality' },
                { label: 'Municipal Council', href: '/municipality/council' },
                { label: 'Projects', href: '/municipality/projects' },
                { label: 'Announcements', href: '/municipality/announcements' },
                { label: 'Discover Anfeh', href: '/discover' },
                { label: 'Events', href: '/events' },
                { label: 'News', href: '/news' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5">Services</p>
            <ul className="space-y-3">
              {[
                { label: 'Submit a Request', href: '/services' },
                { label: 'Report an Issue', href: '/report' },
                { label: 'Municipal Documents', href: '/services' },
                { label: 'Permits', href: '/services' },
                { label: 'File a Complaint', href: '/services' },
                { label: 'Suggestions', href: '/services' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-5">Contact</p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-white/60">
                <MapPin size={15} className="text-white/30 mt-0.5 flex-none" />
                <span>[Municipality Address]<br />Anfeh, Koura, Lebanon</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Phone size={15} className="text-white/30 mt-0.5 flex-none" />
                <span>[Municipality Phone Number]</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Mail size={15} className="text-white/30 mt-0.5 flex-none" />
                <span>[Official Email Address]</span>
              </li>
              <li className="flex gap-3 text-sm text-white/60">
                <Clock size={15} className="text-white/30 mt-0.5 flex-none" />
                <span>[Opening Hours]</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Anfeh Municipality. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Accessibility</Link>
            <button className="text-xs text-white/30 hover:text-white/60 transition-colors tracking-widest">
              العربية
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
