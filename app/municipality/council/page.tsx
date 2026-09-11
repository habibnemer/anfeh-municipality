import type { Metadata } from 'next'
import Link from 'next/link'
import { councilMembers } from '@/lib/data'

export const metadata: Metadata = { title: 'Municipal Council' }

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
            {[{label:'Overview',href:'/municipality'},{label:'Council',href:'/municipality/council'},{label:'Projects',href:'/municipality/projects'},{label:'Announcements',href:'/municipality/announcements'}].map((l)=>(
              <Link key={l.href} href={l.href} className="px-5 py-4 text-xs tracking-widest uppercase font-medium whitespace-nowrap transition-colors border-b-2"
                style={{borderBottomColor:l.href==='/municipality/council'?'var(--color-navy)':'transparent',color:l.href==='/municipality/council'?'var(--color-navy)':'var(--color-muted)'}}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding" style={{background:'var(--color-warm-white)'}}>
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {councilMembers.map((member, i) => (
              <div key={member.id} className="card bg-white overflow-hidden">
                {/* Photo placeholder */}
                <div className="aspect-[4/3] flex items-center justify-center" style={{background:'linear-gradient(135deg,#E2DAD0,#C4BAA8)'}}>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center" style={{background:'var(--color-limestone)'}}>
                      <span className="font-serif text-2xl text-white" style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-[10px] tracking-widest uppercase" style={{color:'var(--color-sand)'}}>Photo Placeholder</p>
                  </div>
                </div>
                <div className="p-6">
                  {i === 0 && (
                    <span className="text-[9px] tracking-[0.25em] uppercase font-medium px-2 py-0.5 mb-3 inline-block" style={{background:'var(--color-navy)',color:'white'}}>
                      Mayor
                    </span>
                  )}
                  {i === 1 && (
                    <span className="text-[9px] tracking-[0.25em] uppercase font-medium px-2 py-0.5 mb-3 inline-block" style={{background:'var(--color-stone)',color:'var(--color-navy)'}}>
                      Vice Mayor
                    </span>
                  )}
                  <p className="font-serif text-xl mb-1" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>{member.name}</p>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{color:'var(--color-muted)'}}>{member.role}</p>
                  <p className="text-sm leading-relaxed" style={{color:'var(--color-muted)'}}>{member.bio}</p>
                  {member.since && (
                    <p className="text-xs mt-4 pt-4" style={{color:'var(--color-limestone)',borderTop:'1px solid var(--color-stone)'}}>
                      Council member since {member.since}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 text-xs" style={{background:'var(--color-cream)',border:'1px solid var(--color-stone)',color:'var(--color-muted)'}}>
            ℹ️ Council member information will be updated with verified official data. All names and details shown are placeholders.
          </div>
        </div>
      </section>
    </>
  )
}
