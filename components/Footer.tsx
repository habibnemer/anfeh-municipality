import Link from 'next/link'
import { MapPin, Mail, Clock, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{background:'var(--color-navy)'}} className="text-white">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-6">
              <p className="font-serif text-2xl tracking-wide mb-1"
                style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>
                ANFEH
              </p>
              <p className="text-[9px] tracking-[0.3em] uppercase" style={{color:'rgba(255,255,255,0.4)'}}>
                Municipality · Koura · Lebanon
              </p>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{color:'rgba(255,255,255,0.55)'}}>
              Serving the residents of Anfeh with transparency, accountability and dedication to our community's future.
            </p>
            <Link
              href="/report"
              className="inline-flex items-center gap-2 text-xs tracking-wider uppercase px-4 py-2.5 font-medium transition-colors"
              style={{border:'1px solid rgba(255,255,255,0.25)',color:'rgba(255,255,255,0.7)'}}
            >
              Report an Issue
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{color:'rgba(255,255,255,0.3)'}}>Navigate</p>
            <ul className="space-y-3">
              {[
                {label:'About the Municipality',href:'/municipality'},
                {label:'Municipal Council',href:'/municipality/council'},
                {label:'Projects',href:'/municipality/projects'},
                {label:'Announcements',href:'/municipality/announcements'},
                {label:'Discover Anfeh',href:'/discover'},
                {label:'Events',href:'/events'},
                {label:'News',href:'/news'},
              ].map((l)=>(
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors" style={{color:'rgba(255,255,255,0.55)'}}
                    onMouseOver={e=>(e.currentTarget.style.color='white')}
                    onMouseOut={e=>(e.currentTarget.style.color='rgba(255,255,255,0.55)')}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{color:'rgba(255,255,255,0.3)'}}>Services</p>
            <ul className="space-y-3">
              {[
                {label:'Submit a Request',href:'/services'},
                {label:'Report an Issue',href:'/report'},
                {label:'Municipal Documents',href:'/services'},
                {label:'Permits',href:'/services'},
                {label:'File a Complaint',href:'/services'},
                {label:'Suggestions',href:'/services'},
                {label:'Contact Us',href:'/contact'},
              ].map((l)=>(
                <li key={l.label}>
                  <Link href={l.href} className="text-sm transition-colors" style={{color:'rgba(255,255,255,0.55)'}}
                    onMouseOver={e=>(e.currentTarget.style.color='white')}
                    onMouseOut={e=>(e.currentTarget.style.color='rgba(255,255,255,0.55)')}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{color:'rgba(255,255,255,0.3)'}}>Contact</p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm" style={{color:'rgba(255,255,255,0.55)'}}>
                <MapPin size={15} className="flex-none mt-0.5" style={{color:'rgba(255,255,255,0.3)'}} />
                <span>Anfeh, Koura<br />North Lebanon</span>
              </li>
              <li className="flex gap-3 text-sm" style={{color:'rgba(255,255,255,0.55)'}}>
                <Phone size={15} className="flex-none mt-0.5" style={{color:'rgba(255,255,255,0.3)'}} />
                <Link href="/contact" className="hover:text-white transition-colors">Contact us online</Link>
              </li>
              <li className="flex gap-3 text-sm" style={{color:'rgba(255,255,255,0.55)'}}>
                <Mail size={15} className="flex-none mt-0.5" style={{color:'rgba(255,255,255,0.3)'}} />
                <Link href="/contact" className="hover:text-white transition-colors">Send a message</Link>
              </li>
              <li className="flex gap-3 text-sm" style={{color:'rgba(255,255,255,0.55)'}}>
                <Clock size={15} className="flex-none mt-0.5" style={{color:'rgba(255,255,255,0.3)'}} />
                <span>Mon – Fri: 8:00 AM – 3:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{borderTop:'1px solid rgba(255,255,255,0.08)'}}>
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{color:'rgba(255,255,255,0.3)'}}>
            © {new Date().getFullYear()} Anfeh Municipality. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-xs transition-colors" style={{color:'rgba(255,255,255,0.3)'}}>Privacy</Link>
            <Link href="/contact" className="text-xs transition-colors" style={{color:'rgba(255,255,255,0.3)'}}>Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
