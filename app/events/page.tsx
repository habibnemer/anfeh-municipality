import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, MapPin } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { events } from '@/lib/data'

export const metadata: Metadata = { title: 'Events' }

const categoryColors: Record<string, string> = {
  community: 'bg-blue-50 text-blue-700',
  culture: 'bg-purple-50 text-purple-700',
  sports: 'bg-green-50 text-green-700',
  religious: 'bg-amber-50 text-amber-700',
  family: 'bg-pink-50 text-pink-700',
  municipality: 'bg-gray-50 text-gray-700',
}

export default function EventsPage() {
  return (
    <>
      <div className="pt-32 pb-16" style={{background:'var(--color-navy)'}}>
        <div className="container-site">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{color:'rgba(255,255,255,0.3)'}}>
            <Link href="/">Home</Link> / Events
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-3" style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>
            Events
          </h1>
          <p className="text-base max-w-xl" style={{color:'rgba(255,255,255,0.6)'}}>
            What's happening in Anfeh — community gatherings, cultural events, sports and more.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div style={{background:'var(--color-cream)',borderBottom:'1px solid var(--color-stone)'}}>
        <div className="container-site">
          <div className="flex gap-0 overflow-x-auto">
            {['All','Community','Culture','Sports','Religious','Family','Municipality'].map((cat)=>(
              <Link key={cat} href={`/events?category=${cat.toLowerCase()}`}
                className="px-5 py-4 text-xs tracking-widest uppercase whitespace-nowrap transition-colors border-b-2"
                style={{borderBottomColor:cat==='All'?'var(--color-navy)':'transparent',color:cat==='All'?'var(--color-navy)':'var(--color-muted)'}}>
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding" style={{background:'var(--color-warm-white)'}}>
        <div className="container-site">
          <div className="mb-4 p-4 text-xs" style={{background:'var(--color-cream)',border:'1px solid var(--color-stone)',color:'var(--color-muted)'}}>
            ℹ️ Events shown are placeholder content. Replace with verified events from the municipality.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{background:'var(--color-stone)'}}>
            {events.map((event)=>(
              <div key={event.id} className="bg-white flex flex-col">
                {/* Date header */}
                <div className="flex items-center gap-4 p-5 border-b" style={{borderColor:'var(--color-stone)'}}>
                  <div className="w-14 h-14 flex flex-col items-center justify-center text-white flex-none" style={{background:'var(--color-navy)'}}>
                    <span className="font-serif font-semibold text-xl leading-none" style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>{new Date(event.date).getDate()}</span>
                    <span className="text-[8px] tracking-widest uppercase mt-0.5" style={{color:'rgba(255,255,255,0.5)'}}>{new Date(event.date).toLocaleDateString('en-GB',{month:'short'})}</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{color:'var(--color-charcoal)'}}>{new Date(event.date).toLocaleDateString('en-GB',{weekday:'long'})}</p>
                    <p className="text-xs" style={{color:'var(--color-limestone)'}}>{new Date(event.date).toLocaleDateString('en-GB',{month:'long',year:'numeric'})}</p>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-medium text-sm leading-snug flex-1" style={{color:'var(--color-charcoal)'}}>{event.title}</h3>
                    <span className={`text-[9px] tracking-wider uppercase px-2 py-1 rounded-sm font-medium flex-none ${categoryColors[event.category]||'bg-gray-50 text-gray-600'}`}>
                      {event.category}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed flex-1" style={{color:'var(--color-muted)'}}>{event.description}</p>
                  <div className="flex flex-col gap-1.5 pt-3 border-t" style={{borderColor:'var(--color-stone)'}}>
                    <span className="flex items-center gap-2 text-xs" style={{color:'var(--color-limestone)'}}>
                      <Clock size={11} /> {event.time}{event.endTime?` – ${event.endTime}`:''}
                    </span>
                    <span className="flex items-center gap-2 text-xs" style={{color:'var(--color-limestone)'}}>
                      <MapPin size={11} /> {event.location}
                    </span>
                  </div>
                  <button className="btn-ghost text-xs mt-1 -ml-2 justify-start">
                    <Calendar size={12} /> Add to Calendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
