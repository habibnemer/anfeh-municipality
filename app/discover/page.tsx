import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { discoverItems } from '@/lib/data'

export const metadata: Metadata = { title: 'Discover Anfeh' }

const categories = [
  {id:'all',label:'All'},
  {id:'history',label:'History'},
  {id:'heritage',label:'Heritage'},
  {id:'salt-pans',label:'Salt Pans'},
  {id:'coastline',label:'Coastline'},
  {id:'churches',label:'Churches'},
  {id:'beaches',label:'Beaches'},
  {id:'food',label:'Food'},
  {id:'stay',label:'Stay'},
  {id:'activities',label:'Activities'},
]


export default function DiscoverPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 relative" style={{background:'var(--color-navy)'}}>
        <div className="absolute inset-0" style={{background:'linear-gradient(160deg,#1A2E4A 0%,#1e3a5f 60%,#1A2E4A 100%)'}}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{backgroundImage:'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)',backgroundSize:'40px 40px'}} />
        </div>
        <div className="container-site relative z-10">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{color:'rgba(255,255,255,0.3)'}}>
            <Link href="/">Home</Link> / Discover Anfeh
          </p>
          <div className="max-w-2xl">
            <div className="divider mb-4" style={{background:'rgba(255,255,255,0.2)'}} />
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',lineHeight:1}}>
              Discover<br/>Anfeh
            </h1>
            <p className="text-base leading-relaxed" style={{color:'rgba(255,255,255,0.65)'}}>
              History, coastline, heritage and everyday life — a Mediterranean town unlike any other. From ancient salt pans to Byzantine ruins, from pristine beaches to village churches.
            </p>
          </div>
        </div>
      </div>

      {/* Category filter */}
      <div style={{background:'var(--color-cream)',borderBottom:'1px solid var(--color-stone)',position:'sticky',top:64,zIndex:30}}>
        <div className="container-site">
          <div className="flex gap-0 overflow-x-auto py-1">
            {categories.map((cat)=>(
              <Link key={cat.id} href={`/discover?category=${cat.id}`}
                className="px-4 py-3 text-xs tracking-widest uppercase whitespace-nowrap transition-colors"
                style={{color:'var(--color-muted)'}}>
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured: Salt Pans */}
      <section className="section-padding" style={{background:'var(--color-warm-white)'}}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{border:'1px solid var(--color-stone)'}}>
            <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden" style={{minHeight:360}}>
              <img
                src={discoverItems[0].image || ''}
                alt="Salt pans — Mediterranean"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.35em] uppercase mb-4" style={{color:'var(--color-terracotta)'}}>Salt Pans · Heritage</span>
              <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>
                The Ancient Salt Pans
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{color:'var(--color-muted)'}}>
                Among the oldest continuously operating salt pans in Lebanon, the Anfeh salt pans are a rare living heritage site. The shallow coastal pools have been harvesting sea salt for centuries, shaping the identity and economy of the town.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{color:'var(--color-muted)'}}>
                The salt pans are not only a cultural landmark but also a unique natural ecosystem, home to migratory birds and endemic species.
              </p>
              <Link href="/discover?category=salt-pans" className="btn-secondary inline-flex w-fit">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding" style={{background:'var(--color-cream)'}}>
        <div className="container-site">
          <SectionHeader label="Explore" title="What to Discover" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{background:'var(--color-stone)'}}>
            {discoverItems.map((item)=>(
              <div key={item.id} className="bg-white overflow-hidden group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{background:'linear-gradient(135deg,#E2DAD0,#C4BAA8)'}}>
                      <p className="text-xs tracking-widest uppercase" style={{color:'var(--color-sand)'}}>Photo Placeholder</p>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.tags.map(t=>(
                      <span key={t} className="text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-sm" style={{background:'var(--color-stone)',color:'var(--color-muted)'}}>{t}</span>
                    ))}
                  </div>
                  <h3 className="font-serif text-xl mb-2 group-hover:text-blue-700 transition-colors" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--color-muted)'}}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map CTA */}
      <section className="py-16" style={{background:'var(--color-navy)'}}>
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-serif text-3xl text-white mb-2" style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>Explore the Map</h3>
            <p className="text-sm" style={{color:'rgba(255,255,255,0.6)'}}>Find places to eat, stay, explore and discover across Anfeh.</p>
          </div>
          <Link href="/discover?map=true" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-navy whitespace-nowrap">
            Open Map <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
