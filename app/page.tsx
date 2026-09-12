'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown, AlertTriangle, FileText, Calendar } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import StatusBadge from '@/components/ui/StatusBadge'
import { projects, newsArticles, events, services, discoverItems } from '@/lib/data'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function HomePage() {
  const { t, lang } = useLanguage()
  const featuredNews = newsArticles.find((a) => a.featured)
  const sideNews = newsArticles.filter((a) => !a.featured).slice(0, 3)
  const upcomingEvents = events.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden" style={{ background: '#1A2E4A' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/municipality-building.jpg"
            alt="Anfeh Municipality Building"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,46,74,0.5) 0%, rgba(26,46,74,0.2) 40%, rgba(26,46,74,0.88) 100%)' }} />
        </div>

        <div className="relative z-10 container-site pb-20 pt-36">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6 animate-fade-up" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.home.eyebrow}</p>
            <h1 className="font-serif font-semibold text-white mb-6 animate-fade-up delay-100" style={{ fontFamily: lang === 'ar' ? 'var(--font-arabic, sans-serif)' : 'var(--font-cormorant,Georgia,serif)', fontSize: 'clamp(3.5rem,9vw,7rem)', lineHeight: 1, letterSpacing: '-0.02em' }}>
              {lang === 'ar' ? 'عنفه' : 'ANFEH'}
            </h1>
            <p className="font-serif mb-4 animate-fade-up delay-200" style={{ fontFamily: lang === 'ar' ? 'var(--font-arabic, sans-serif)' : 'var(--font-cormorant,Georgia,serif)', fontSize: 'clamp(1.25rem,2.5vw,1.75rem)', color: 'rgba(255,255,255,0.8)' }}>
              {t.home.tagline}
            </p>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-10 animate-fade-up delay-300" style={{ color: 'rgba(255,255,255,0.55)' }}>
              {t.home.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
              <Link href="/discover" className="btn-primary">{t.home.cta1} <ArrowRight size={15} /></Link>
              <Link href="/services" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>{t.home.cta2}</Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 pb-8 flex justify-center">
          <div className="flex flex-col items-center gap-2 animate-scroll-bounce">
            <ChevronDown size={16} style={{ color: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--color-navy-dark)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            {[
              { v: '1951', l: t.home.estLabel },
              { v: '5', l: t.home.projectsLabel },
              { v: '8,000+', l: t.home.residentsLabel },
              { v: lang === 'ar' ? '٤ كم' : '4 km', l: t.home.coastlineLabel },
            ].map((s) => (
              <div key={s.l} className="px-6 py-8 text-center" style={{ borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                <p className="font-serif text-2xl md:text-3xl text-white mb-1" style={{ fontFamily: lang === 'ar' ? 'var(--font-arabic, sans-serif)' : 'var(--font-cormorant,Georgia,serif)' }}>{s.v}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container-site">
          <div className="flex items-end justify-between gap-4 mb-8 md:mb-12">
            <SectionHeader label={t.home.servicesEyebrow} title={t.home.servicesTitle} subtitle={t.home.servicesSubtitle} />
            <Link href="/services" className="btn-ghost whitespace-nowrap hidden md:inline-flex">{t.home.allServices} <ArrowRight size={14} /></Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'var(--color-stone)' }}>
            {services.slice(0, 4).map((service) => (
              <Link key={service.id} href={service.href} className="bg-white active:bg-cream p-5 md:p-6 flex flex-col gap-3 md:gap-4 group transition-colors">
                <div className="w-9 h-9 md:w-10 md:h-10 border flex items-center justify-center" style={{ borderColor: 'var(--color-stone)' }}>
                  <FileText size={16} style={{ color: service.type === 'report' ? 'var(--color-terracotta)' : 'var(--color-navy)' }} />
                </div>
                <div>
                  <p className="font-medium text-xs md:text-sm mb-1" style={{ color: 'var(--color-charcoal)' }}>{service.title}</p>
                  <p className="text-xs leading-relaxed hidden md:block" style={{ color: 'var(--color-muted)' }}>{service.description}</p>
                </div>
                <ArrowRight size={13} style={{ color: 'var(--color-limestone)', marginTop: 'auto' }} />
              </Link>
            ))}
          </div>
          <div className="mt-4 md:hidden">
            <Link href="/services" className="btn-ghost w-full justify-center border" style={{ borderColor: 'var(--color-stone)' }}>{t.home.allServices} <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Report CTA */}
      <section style={{ background: 'var(--color-cream)', borderTop: '1px solid var(--color-stone)', borderBottom: '1px solid var(--color-stone)' }}>
        <div className="container-site py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center flex-none mt-1" style={{ background: 'rgba(184,92,56,0.1)' }}>
                <AlertTriangle size={22} style={{ color: 'var(--color-terracotta)' }} />
              </div>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl mb-2" style={{ fontFamily: lang === 'ar' ? 'var(--font-arabic, sans-serif)' : 'var(--font-cormorant,Georgia,serif)', color: 'var(--color-navy)' }}>
                  {t.home.reportTitle}
                </h3>
                <p className="text-sm max-w-md" style={{ color: 'var(--color-muted)' }}>
                  {t.home.reportDesc}
                </p>
              </div>
            </div>
            <Link href="/report" className="btn-primary whitespace-nowrap flex-none" style={{ background: 'var(--color-terracotta)' }}>
              {t.home.reportBtn} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeader label={t.home.projectsEyebrow} title={t.home.projectsTitle} />
            <Link href="/municipality/projects" className="btn-ghost whitespace-nowrap">{t.home.allProjects} <ArrowRight size={14} /></Link>
          </div>
          <div className="space-y-3">
            {projects.filter(p => p.status !== 'completed').slice(0, 3).map((project) => (
              <div key={project.id} className="card bg-white p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <StatusBadge status={project.status} />
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] tracking-wide uppercase" style={{ color: 'var(--color-limestone)' }}>{tag}</span>
                    ))}
                  </div>
                  <p className="font-medium text-sm mb-1" style={{ color: 'var(--color-charcoal)' }}>{project.name}</p>
                  <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--color-muted)' }}>{project.description}</p>
                </div>
                <div className="flex-none md:w-48">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{project.location}</span>
                    <span className="text-xs font-medium" style={{ color: 'var(--color-navy)' }}>{project.progress}%</span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--color-stone)' }}>
                    <div className="h-full rounded-full" style={{ width: `${project.progress}%`, background: 'var(--color-navy)' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover */}
      <section className="section-padding" style={{ background: 'var(--color-navy)' }}>
        <div className="container-site">
          <div className="flex items-end justify-between gap-4 mb-8 md:mb-12">
            <SectionHeader label={t.home.discoverEyebrow} title={t.home.discoverTitle} light />
            <Link href="/discover" className="btn-secondary whitespace-nowrap flex-none hidden md:inline-flex" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              {t.home.explore} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.08)' }}>
            {discoverItems.map((item) => (
              <Link key={item.id} href={`/discover?category=${item.category}`} className="group block relative overflow-hidden" style={{ height: 220 }}>
                {item.image && (
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                )}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(17,30,48,0.97) 0%, rgba(26,46,74,0.5) 50%, transparent 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
                  <p className="text-[8px] md:text-[9px] tracking-[0.25em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.tags[0]}</p>
                  <p className="font-serif text-base md:text-xl text-white leading-tight" style={{ fontFamily: lang === 'ar' ? 'var(--font-arabic, sans-serif)' : 'var(--font-cormorant,Georgia,serif)' }}>{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 md:hidden">
            <Link href="/discover" className="w-full justify-center text-sm py-3 flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {t.home.exploreAll} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-padding" style={{ background: 'var(--color-warm-white)' }}>
        <div className="container-site">
          <div className="flex items-end justify-between gap-4 mb-8 md:mb-12">
            <SectionHeader label={t.home.newsEyebrow} title={t.home.newsTitle} />
            <Link href="/news" className="btn-ghost whitespace-nowrap">{t.home.allNews} <ArrowRight size={14} /></Link>
          </div>

          {/* Mobile: stacked cards */}
          <div className="flex flex-col gap-px md:hidden" style={{ background: 'var(--color-stone)' }}>
            {[featuredNews, ...sideNews].filter(Boolean).slice(0, 3).map((article) => article && (
              <Link key={article.id} href={`/news/${article.slug}`} className="bg-white flex gap-4 p-4 group">
                {article.image && (
                  <div className="flex-none overflow-hidden" style={{ width: 90, height: 70 }}>
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] tracking-[0.25em] uppercase" style={{ color: 'var(--color-terracotta)' }}>{article.category}</span>
                  <p className="font-medium text-sm leading-snug mt-0.5 line-clamp-2" style={{ color: 'var(--color-charcoal)' }}>{article.title}</p>
                  <span className="text-[10px]" style={{ color: 'var(--color-limestone)' }}>{new Date(article.date).toLocaleDateString(lang === 'ar' ? 'ar-LB' : 'en-GB', { day: 'numeric', month: 'short' })}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop: featured + sidebar */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ background: 'var(--color-stone)' }}>
            {featuredNews && (
              <Link href={`/news/${featuredNews.slug}`} className="lg:col-span-2 bg-white p-6 md:p-8 flex flex-col group">
                <div className="mb-6 overflow-hidden" style={{ height: 260 }}>
                  {featuredNews.image ? (
                    <img src={featuredNews.image} alt={featuredNews.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  ) : (
                    <div className="w-full h-full img-placeholder" />
                  )}
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--color-terracotta)' }}>{featuredNews.category}</span>
                <h3 className="font-serif text-2xl md:text-3xl mb-3" style={{ fontFamily: lang === 'ar' ? 'var(--font-arabic, sans-serif)' : 'var(--font-cormorant,Georgia,serif)', color: 'var(--color-navy)' }}>{featuredNews.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-muted)' }}>{featuredNews.excerpt}</p>
                <div className="flex items-center justify-between mt-5 pt-5" style={{ borderTop: '1px solid var(--color-stone)' }}>
                  <span className="text-xs" style={{ color: 'var(--color-limestone)' }}>{new Date(featuredNews.date).toLocaleDateString(lang === 'ar' ? 'ar-LB' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  <ArrowRight size={14} style={{ color: 'var(--color-limestone)' }} />
                </div>
              </Link>
            )}
            <div className="flex flex-col bg-white">
              {sideNews.map((article) => (
                <Link key={article.id} href={`/news/${article.slug}`} className="p-5 flex flex-col gap-2 group" style={{ borderBottom: '1px solid var(--color-stone)' }}>
                  <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: 'var(--color-terracotta)' }}>{article.category}</span>
                  <h4 className="font-medium text-sm leading-snug" style={{ color: 'var(--color-charcoal)' }}>{article.title}</h4>
                  <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--color-muted)' }}>{article.excerpt}</p>
                  <span className="text-[10px]" style={{ color: 'var(--color-limestone)' }}>{new Date(article.date).toLocaleDateString(lang === 'ar' ? 'ar-LB' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section-padding" style={{ background: 'var(--color-cream)' }}>
        <div className="container-site">
          <div className="flex items-end justify-between gap-4 mb-8 md:mb-12">
            <SectionHeader label={t.home.eventsEyebrow} title={t.home.eventsTitle} />
            <Link href="/events" className="btn-ghost whitespace-nowrap">{t.home.allEvents} <ArrowRight size={14} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'var(--color-stone)' }}>
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white p-5 md:p-6 flex flex-row md:flex-col gap-4">
                <div className="w-14 h-14 flex flex-col items-center justify-center text-white flex-none" style={{ background: 'var(--color-navy)' }}>
                  <span className="font-serif font-semibold text-lg leading-none" style={{ fontFamily: lang === 'ar' ? 'var(--font-arabic, sans-serif)' : 'var(--font-cormorant,Georgia,serif)' }}>{new Date(event.date).getDate()}</span>
                  <span className="text-[9px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{new Date(event.date).toLocaleDateString(lang === 'ar' ? 'ar-LB' : 'en-GB', { month: 'short' })}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm mb-1" style={{ color: 'var(--color-charcoal)' }}>{event.title}</p>
                  <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--color-muted)' }}>{event.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs flex items-center gap-1" style={{ color: 'var(--color-limestone)' }}><Calendar size={10} /> {event.time}</span>
                    <span className="text-xs truncate" style={{ color: 'var(--color-limestone)' }}>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="section-padding" style={{ background: 'var(--color-navy)' }}>
        <div className="container-site text-center">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.3)' }}>{t.home.ctaEyebrow}</p>
          <h2 className="font-serif text-white mb-4" style={{ fontFamily: lang === 'ar' ? 'var(--font-arabic, sans-serif)' : 'var(--font-cormorant,Georgia,serif)', fontSize: 'clamp(2rem,6vw,3.5rem)' }}>
            {t.home.ctaTitle}
          </h2>
          <p className="text-sm md:text-base max-w-md mx-auto mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {t.home.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/services" className="btn-primary w-full sm:w-auto justify-center">{t.home.ctaBtn1} <ArrowRight size={15} /></Link>
            <Link href="/community" className="btn-secondary w-full sm:w-auto justify-center" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>{t.home.ctaBtn2}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
