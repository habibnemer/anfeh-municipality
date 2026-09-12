import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Users, Leaf, Music } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { communityOrgs } from '@/lib/data'

export const metadata: Metadata = { title: 'Community' }

export default function CommunityPage() {
  return (
    <>
      <div className="pt-32 pb-16" style={{background:'var(--color-navy)'}}>
        <div className="container-site">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{color:'rgba(255,255,255,0.3)'}}>
            <Link href="/">Home</Link> / Community
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-3" style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>
            Anfeh Community
          </h1>
          <p className="text-base max-w-2xl" style={{color:'rgba(255,255,255,0.6)'}}>
            This platform belongs to the residents of Anfeh. From local organizations to volunteer opportunities, community is at the heart of everything we do.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-16 border-b" style={{background:'var(--color-cream)',borderColor:'var(--color-stone)'}}>
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{background:'var(--color-stone)'}}>
            {[
              {icon:Users,label:'Local Organizations',desc:'Connecting residents and groups'},
              {icon:Heart,label:'Volunteering',desc:'Opportunities to give back'},
              {icon:Music,label:'Culture & Arts',desc:'Celebrating local identity'},
              {icon:Leaf,label:'Environment',desc:'Protecting our coastline & nature'},
            ].map(({icon:Icon,...item})=>(
              <div key={item.label} className="bg-white p-6 text-center flex flex-col items-center gap-3">
                <Icon size={24} style={{color:'var(--color-navy)'}} />
                <p className="font-medium text-sm" style={{color:'var(--color-charcoal)'}}>{item.label}</p>
                <p className="text-xs" style={{color:'var(--color-muted)'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="section-padding" style={{background:'var(--color-warm-white)'}}>
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeader label="Community" title="Local Organizations" subtitle="Groups and associations active in Anfeh's community life." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communityOrgs.map((org)=>(
              <div key={org.id} className="card bg-white p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-medium" style={{color:'var(--color-charcoal)'}}>{org.name}</h3>
                  <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-sm flex-none" style={{background:'var(--color-stone)',color:'var(--color-muted)'}}>{org.type}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{color:'var(--color-muted)'}}>{org.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="section-padding" style={{background:'var(--color-navy)'}}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader label="Get Involved" title="Volunteer in Anfeh" subtitle="There are many ways to contribute to the community, environment and heritage of Anfeh. Get in touch with the municipality to find out how." light />
              <div className="mt-8">
                <Link href="/contact" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-navy">
                  Contact Municipality <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {[
                {title:'Environmental Volunteers',desc:'Help protect the coastline, salt pans and natural habitats.'},
                {title:'Cultural Initiatives',desc:'Support heritage documentation and cultural events.'},
                {title:'Youth Programs',desc:'Mentor and support youth activities and community sports.'},
                {title:'Community Events',desc:'Help organize and run local community gatherings.'},
              ].map(item=>(
                <div key={item.title} className="p-4 flex gap-4" style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)'}}>
                  <Heart size={16} className="flex-none mt-0.5" style={{color:'var(--color-terracotta)'}} />
                  <div>
                    <p className="text-sm font-medium text-white mb-0.5">{item.title}</p>
                    <p className="text-xs" style={{color:'rgba(255,255,255,0.55)'}}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
