import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, Mail } from 'lucide-react'

export const metadata: Metadata = { title: 'Municipal Council' }

const roles = [
  { role: 'Mayor', badge: true, primary: true },
  { role: 'Vice Mayor', badge: true, primary: false },
  { role: 'Council Member', badge: false, primary: false },
  { role: 'Council Member', badge: false, primary: false },
  { role: 'Council Member', badge: false, primary: false },
  { role: 'Council Member', badge: false, primary: false },
]

export default function CouncilPage() {
  return (
    <>
      <div className="pt-32 pb-16" style={{background:'var(--color-navy)'}}>
        <div className="container-site">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{color:'rgba(255,255,255,0.3)'}}>
            <Link href="/">Home</Link> / <Link href="/municipality">Municipality</Link> / Council
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white" style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>
            Municipal Council
          </h1>
          <p className="mt-4 text-base max-w-2xl" style={{color:'rgba(255,255,255,0.6)'}}>
            The elected council members responsible for governing and representing the residents of Anfeh.
          </p>
        </div>
      </div>

      <div style={{background:'var(--color-cream)',borderBottom:'1px solid var(--color-stone)'}}>
        <div className="container-site">
          <div className="flex gap-0 overflow-x-auto">
            {[
              {label:'Overview',href:'/municipality'},
              {label:'Council',href:'/municipality/council'},
              {label:'Projects',href:'/municipality/projects'},
              {label:'Announcements',href:'/municipality/announcements'},
            ].map((l)=>(
              <Link key={l.href} href={l.href}
                className="px-5 py-4 text-xs tracking-widest uppercase font-medium whitespace-nowrap transition-colors border-b-2"
                style={{borderBottomColor:l.href==='/municipality/council'?'var(--color-navy)':'transparent',color:l.href==='/municipality/council'?'var(--color-navy)':'var(--color-muted)'}}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding" style={{background:'var(--color-warm-white)'}}>
        <div className="container-site">

          {/* Council intro */}
          <div className="max-w-2xl mb-16">
            <p className="text-base leading-relaxed mb-4" style={{color:'var(--color-muted)'}}>
              The Anfeh Municipal Council is composed of six elected members, including the Mayor and Vice Mayor, serving a six-year term in accordance with Lebanese municipal law.
            </p>
            <p className="text-base leading-relaxed" style={{color:'var(--color-muted)'}}>
              The council meets regularly in public session to deliberate on local matters, approve the municipal budget, oversee public works, and represent the interests of all residents of Anfeh.
            </p>
          </div>

          {/* Council seats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {roles.map((item, i) => (
              <div key={i} className="card bg-white overflow-hidden">
                <div className="aspect-[4/3] flex items-center justify-center" style={{background:'linear-gradient(135deg,#E8E2D8,#D4CABC)'}}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{background:'rgba(26,46,74,0.12)'}}>
                    <Users size={28} style={{color:'var(--color-limestone)'}} />
                  </div>
                </div>
                <div className="p-6">
                  {item.primary && (
                    <span className="text-[9px] tracking-[0.25em] uppercase font-medium px-2 py-0.5 mb-3 inline-block" style={{background:'var(--color-navy)',color:'white'}}>
                      {item.role}
                    </span>
                  )}
                  {item.badge && !item.primary && (
                    <span className="text-[9px] tracking-[0.25em] uppercase font-medium px-2 py-0.5 mb-3 inline-block" style={{background:'var(--color-stone)',color:'var(--color-navy)'}}>
                      {item.role}
                    </span>
                  )}
                  <p className="font-serif text-xl mb-1" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>
                    {item.role}
                  </p>
                  <p className="text-xs tracking-widest uppercase" style={{color:'var(--color-limestone)'}}>Anfeh Municipality</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="p-8 border flex flex-col md:flex-row items-center justify-between gap-6" style={{background:'var(--color-cream)',borderColor:'var(--color-stone)'}}>
            <div>
              <p className="font-serif text-xl mb-1" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>Contact the Municipal Council</p>
              <p className="text-sm" style={{color:'var(--color-muted)'}}>For enquiries, petitions or to attend a council session, contact the municipal office.</p>
            </div>
            <Link href="/contact" className="btn-primary whitespace-nowrap flex-none">
              <Mail size={14} /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
