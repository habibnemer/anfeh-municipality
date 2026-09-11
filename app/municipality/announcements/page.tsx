import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertCircle } from 'lucide-react'
import { announcements } from '@/lib/data'

export const metadata: Metadata = { title: 'Announcements' }

export default function AnnouncementsPage() {
  return (
    <>
      <div className="pt-32 pb-16" style={{background:'var(--color-navy)'}}>
        <div className="container-site">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{color:'rgba(255,255,255,0.3)'}}>
            <Link href="/">Home</Link> / <Link href="/municipality">Municipality</Link> / Announcements
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white" style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>
            Announcements
          </h1>
          <p className="mt-4 text-base max-w-2xl" style={{color:'rgba(255,255,255,0.6)'}}>
            Official notices and announcements from Anfeh Municipality.
          </p>
        </div>
      </div>

      <div style={{background:'var(--color-cream)',borderBottom:'1px solid var(--color-stone)'}}>
        <div className="container-site">
          <div className="flex gap-0 overflow-x-auto">
            {[{label:'Overview',href:'/municipality'},{label:'Council',href:'/municipality/council'},{label:'Projects',href:'/municipality/projects'},{label:'Announcements',href:'/municipality/announcements'}].map((l)=>(
              <Link key={l.href} href={l.href} className="px-5 py-4 text-xs tracking-widest uppercase font-medium whitespace-nowrap transition-colors border-b-2"
                style={{borderBottomColor:l.href==='/municipality/announcements'?'var(--color-navy)':'transparent',color:l.href==='/municipality/announcements'?'var(--color-navy)':'var(--color-muted)'}}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding" style={{background:'var(--color-warm-white)'}}>
        <div className="container-site max-w-3xl">
          <div className="mb-6 p-4 text-xs flex gap-3" style={{background:'var(--color-cream)',border:'1px solid var(--color-stone)',color:'var(--color-muted)'}}>
            <AlertCircle size={14} className="flex-none mt-0.5" style={{color:'var(--color-terracotta)'}} />
            All announcements shown are placeholder content for demonstration purposes. Replace with verified official announcements from the municipality.
          </div>

          <div className="space-y-4">
            {announcements.map((announcement)=>(
              <div key={announcement.id} className="bg-white p-6 border" style={{borderColor:announcement.important?'var(--color-terracotta)':'var(--color-stone)'}}>
                {announcement.important && (
                  <span className="text-[9px] tracking-widest uppercase font-medium px-2 py-0.5 mb-3 inline-block" style={{background:'var(--color-terracotta)',color:'white'}}>
                    Important
                  </span>
                )}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-medium" style={{color:'var(--color-charcoal)'}}>{announcement.title}</h3>
                  <span className="text-xs flex-none" style={{color:'var(--color-limestone)'}}>
                    {new Date(announcement.date).toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{color:'var(--color-muted)'}}>{announcement.content}</p>
                <div className="mt-3">
                  <span className="text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-sm" style={{background:'var(--color-stone)',color:'var(--color-muted)'}}>{announcement.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
