import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, Target, Eye, CheckCircle } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata: Metadata = { title: 'Municipality' }

export default function MunicipalityPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-16" style={{background:'var(--color-navy)'}}>
        <div className="container-site">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{color:'rgba(255,255,255,0.3)'}}>
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link> / Municipality
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white" style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>
            About the Municipality
          </h1>
          <p className="mt-4 text-base max-w-2xl" style={{color:'rgba(255,255,255,0.6)'}}>
            The Anfeh Municipality is the elected local authority responsible for the administration and development of Anfeh, Koura, Lebanon.
          </p>
        </div>
      </div>

      {/* Quick nav */}
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
                style={{borderBottomColor:l.href==='/municipality'?'var(--color-navy)':'transparent',color:l.href==='/municipality'?'var(--color-navy)':'var(--color-muted)'}}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="section-padding" style={{background:'var(--color-warm-white)'}}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader label="Overview" title="Who We Are" />
              <div className="space-y-4 mt-4">
                <p className="text-base leading-relaxed" style={{color:'var(--color-muted)'}}>
                  The Anfeh Municipality is the elected local governing body serving the residents, businesses and community of Anfeh in the Koura District of North Lebanon.
                </p>
                <p className="text-base leading-relaxed" style={{color:'var(--color-muted)'}}>
                  The municipality is responsible for local governance, infrastructure, public services, community development and the preservation of Anfeh's unique heritage and natural environment.
                </p>
                <p className="text-base leading-relaxed" style={{color:'var(--color-muted)'}}>
                  Anfeh is one of Lebanon's most distinctive coastal towns, known for its ancient Phoenician salt pans, Byzantine heritage sites, and warm Mediterranean character. The municipality is committed to preserving this identity while investing in modern infrastructure and services for all residents.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 border" style={{borderColor:'var(--color-stone)',background:'white'}}>
                <div className="flex items-center gap-3 mb-3">
                  <Target size={18} style={{color:'var(--color-terracotta)'}} />
                  <h3 className="font-medium" style={{color:'var(--color-navy)'}}>Our Mission</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{color:'var(--color-muted)'}}>
                  To serve every resident of Anfeh with fairness, efficiency and transparency — delivering quality public services, maintaining our infrastructure, and creating a safe, clean environment where our community can thrive.
                </p>
              </div>
              <div className="p-6 border" style={{borderColor:'var(--color-stone)',background:'white'}}>
                <div className="flex items-center gap-3 mb-3">
                  <Eye size={18} style={{color:'var(--color-blue)'}} />
                  <h3 className="font-medium" style={{color:'var(--color-navy)'}}>Our Vision</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{color:'var(--color-muted)'}}>
                  A modern, connected and proud Anfeh — where heritage is preserved, the coastline is protected, residents are heard, and every family has access to the services and opportunities they deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="section-padding" style={{background:'var(--color-cream)'}}>
        <div className="container-site">
          <SectionHeader label="Responsibilities" title="What the Municipality Does" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{background:'var(--color-stone)'}}>
            {[
              {title:'Infrastructure',desc:'Roads, pavements, street lighting, drainage and public utility maintenance.'},
              {title:'Environment & Cleanliness',desc:'Waste collection, public cleanliness, parks and green spaces.'},
              {title:'Community Services',desc:'Community events, local sports, cultural activities and youth programs.'},
              {title:'Building & Planning',desc:'Construction permits, urban planning and land use management.'},
              {title:'Heritage Preservation',desc:'Protection and promotion of Anfeh\'s architectural and cultural heritage.'},
              {title:'Emergency Response',desc:'Coordination with relevant authorities during emergencies and natural events.'},
            ].map((item)=>(
              <div key={item.title} className="p-6 bg-white flex gap-4">
                <CheckCircle size={18} className="flex-none mt-0.5" style={{color:'var(--color-olive)'}} />
                <div>
                  <p className="font-medium text-sm mb-2" style={{color:'var(--color-charcoal)'}}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{color:'var(--color-muted)'}}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section links */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{background:'var(--color-stone)'}}>
            {[
              {title:'Municipal Council',desc:'Meet the elected council members serving Anfeh.',href:'/municipality/council',icon:Building2},
              {title:'Projects',desc:'View ongoing and completed municipal projects.',href:'/municipality/projects',icon:Target},
              {title:'Announcements',desc:'Official notices and announcements from the municipality.',href:'/municipality/announcements',icon:CheckCircle},
            ].map((item)=>(
              <Link key={item.href} href={item.href} className="bg-white p-8 flex flex-col gap-4 group">
                <item.icon size={24} style={{color:'var(--color-navy)'}} />
                <div>
                  <p className="font-serif text-xl mb-2" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>{item.title}</p>
                  <p className="text-sm" style={{color:'var(--color-muted)'}}>{item.desc}</p>
                </div>
                <ArrowRight size={16} style={{color:'var(--color-limestone)',marginTop:'auto'}} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
