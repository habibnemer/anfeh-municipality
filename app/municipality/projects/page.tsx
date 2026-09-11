import type { Metadata } from 'next'
import Link from 'next/link'
import StatusBadge from '@/components/ui/StatusBadge'
import SectionHeader from '@/components/ui/SectionHeader'
import { projects } from '@/lib/data'

export const metadata: Metadata = { title: 'Municipal Projects' }

export default function ProjectsPage() {
  const active = projects.filter(p => p.status === 'in-progress')
  const planning = projects.filter(p => p.status === 'planning')
  const completed = projects.filter(p => p.status === 'completed')

  return (
    <>
      <div className="pt-32 pb-16" style={{background:'var(--color-navy)'}}>
        <div className="container-site">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-4" style={{color:'rgba(255,255,255,0.3)'}}>
            <Link href="/">Home</Link> / <Link href="/municipality">Municipality</Link> / Projects
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white" style={{fontFamily:'var(--font-cormorant,Georgia,serif)'}}>
            Municipal Projects
          </h1>
          <p className="mt-4 text-base max-w-2xl" style={{color:'rgba(255,255,255,0.6)'}}>
            A complete overview of ongoing, planned and completed projects across the municipality.
          </p>
        </div>
      </div>

      <div style={{background:'var(--color-cream)',borderBottom:'1px solid var(--color-stone)'}}>
        <div className="container-site">
          <div className="flex gap-0 overflow-x-auto">
            {[{label:'Overview',href:'/municipality'},{label:'Council',href:'/municipality/council'},{label:'Projects',href:'/municipality/projects'},{label:'Announcements',href:'/municipality/announcements'}].map((l)=>(
              <Link key={l.href} href={l.href} className="px-5 py-4 text-xs tracking-widest uppercase font-medium whitespace-nowrap transition-colors border-b-2"
                style={{borderBottomColor:l.href==='/municipality/projects'?'var(--color-navy)':'transparent',color:l.href==='/municipality/projects'?'var(--color-navy)':'var(--color-muted)'}}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div style={{background:'var(--color-warm-white)',borderBottom:'1px solid var(--color-stone)'}}>
        <div className="container-site py-8">
          <div className="grid grid-cols-3 gap-6">
            {[{v:active.length,l:'In Progress'},{v:planning.length,l:'Planning'},{v:completed.length,l:'Completed'}].map(s=>(
              <div key={s.l} className="text-center">
                <p className="font-serif text-3xl mb-1" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>{s.v}</p>
                <p className="text-[10px] tracking-widest uppercase" style={{color:'var(--color-muted)'}}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding" style={{background:'var(--color-warm-white)'}}>
        <div className="container-site space-y-12">
          {[
            {title:'Active Projects', items:active},
            {title:'Planning Stage', items:planning},
            {title:'Completed Projects', items:completed},
          ].filter(g=>g.items.length>0).map((group)=>(
            <div key={group.title}>
              <h2 className="font-serif text-2xl mb-6" style={{fontFamily:'var(--font-cormorant,Georgia,serif)',color:'var(--color-navy)'}}>{group.title}</h2>
              <div className="space-y-3">
                {group.items.map((project)=>(
                  <div key={project.id} className="card bg-white p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <StatusBadge status={project.status} />
                          {project.tags.map((t)=>(
                            <span key={t} className="text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-sm" style={{background:'var(--color-stone)',color:'var(--color-muted)'}}>{t}</span>
                          ))}
                        </div>
                        <h3 className="font-medium mb-2" style={{color:'var(--color-charcoal)'}}>{project.name}</h3>
                        <p className="text-sm leading-relaxed mb-4" style={{color:'var(--color-muted)'}}>{project.description}</p>
                        <div className="flex flex-wrap gap-6 text-xs" style={{color:'var(--color-muted)'}}>
                          <span>📍 {project.location}</span>
                          <span>📅 Started {project.startDate}</span>
                          {project.endDate && <span>✅ Completed {project.endDate}</span>}
                          {project.budget && <span>💰 {project.budget}</span>}
                        </div>
                      </div>
                      {project.status !== 'completed' && (
                        <div className="flex-none md:w-48">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs" style={{color:'var(--color-muted)'}}>Progress</span>
                            <span className="text-sm font-medium" style={{color:'var(--color-navy)'}}>{project.progress}%</span>
                          </div>
                          <div className="h-2 rounded-full overflow-hidden" style={{background:'var(--color-stone)'}}>
                            <div className="h-full rounded-full" style={{width:`${project.progress}%`,background:'var(--color-navy)'}} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
