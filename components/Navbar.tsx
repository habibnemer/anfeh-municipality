'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { lang, setLang, t } = useLanguage()

  const navLinks = [
    {
      label: t.nav.municipality,
      href: '/municipality',
      children: [
        { label: t.nav.about, href: '/municipality' },
        { label: t.nav.council, href: '/municipality/council' },
        { label: t.nav.projects, href: '/municipality/projects' },
        { label: t.nav.announcements, href: '/municipality/announcements' },
      ],
    },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.discover, href: '/discover' },
    { label: t.nav.reportIssue, href: '/report' },
    { label: t.nav.events, href: '/events' },
    { label: t.nav.news, href: '/news' },
    { label: t.nav.contact, href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-white border-b border-stone-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group flex-none">
              <span
                className={`font-serif text-xl md:text-2xl font-semibold tracking-wide transition-colors ${
                  scrolled || open ? 'text-navy' : 'text-white'
                }`}
                style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)' }}
              >
                {lang === 'ar' ? 'أنفه' : 'ANFEH'}
              </span>
              <span
                className={`text-[9px] tracking-[0.25em] uppercase font-sans transition-colors ${
                  scrolled || open ? 'text-muted' : 'text-white/70'
                }`}
              >
                {lang === 'ar' ? 'البلدية' : 'Municipality'}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-end">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? 'text-navy'
                          : scrolled
                          ? 'text-charcoal hover:text-navy'
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform ${activeDropdown === link.href ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {activeDropdown === link.href && (
                      <div className={`absolute top-full pt-1 animate-slide-down ${lang === 'ar' ? 'right-0' : 'left-0'}`}>
                        <div className="bg-white border border-stone-200 shadow-lg min-w-[180px] py-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2.5 text-sm transition-colors hover:bg-cream ${
                                pathname === child.href ? 'text-navy font-medium' : 'text-charcoal'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-navy'
                        : scrolled
                        ? 'text-charcoal hover:text-navy'
                        : 'text-white/90 hover:text-white'
                    } ${link.href === '/report' ? 'ml-2' : ''}`}
                  >
                    {link.href === '/report' ? (
                      <span
                        className={`px-4 py-1.5 text-xs tracking-wider uppercase font-medium border transition-colors ${
                          scrolled
                            ? 'border-navy text-navy hover:bg-navy hover:text-white'
                            : 'border-white text-white hover:bg-white hover:text-navy'
                        }`}
                      >
                        {link.label}
                      </span>
                    ) : (
                      link.label
                    )}
                  </Link>
                )
              )}

            </nav>

            {/* Language toggle — always visible, right side */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              title={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              className="flex-none flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-all"
              style={{
                background: scrolled || open ? 'var(--color-navy)' : 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.35)',
                borderRadius: 2,
              }}
            >
              <Globe size={12} />
              <span>{lang === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            {/* Mobile: hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="p-2 -mr-2 transition-colors"
                aria-label={open ? 'Close menu' : 'Open menu'}
              >
                {open ? (
                  <X size={22} className="text-navy" />
                ) : (
                  <Menu
                    size={22}
                    className={scrolled ? 'text-charcoal' : 'text-white'}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-navy flex flex-col animate-fade-in lg:hidden">
          <div className="flex items-center justify-between h-16 container-site">
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-serif text-xl text-white tracking-wide"
                style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)' }}>
                {lang === 'ar' ? 'أنفه' : 'ANFEH'}
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-white/50">
                {lang === 'ar' ? 'البلدية' : 'Municipality'}
              </span>
            </Link>
            <button onClick={() => setOpen(false)} className="p-2 -mr-2">
              <X size={22} className="text-white" />
            </button>
          </div>

          <nav className="flex-1 container-site py-8 overflow-y-auto">
            <div className="space-y-1">
              {navLinks.map((link, i) => (
                <div key={link.href}>
                  {link.children ? (
                    <div className="mb-2">
                      <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase px-2 py-2 mt-4">
                        {link.label}
                      </p>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-white/80 hover:text-white text-lg font-light transition-colors"
                          style={{ fontFamily: lang === 'ar' ? 'var(--font-arabic, sans-serif)' : 'var(--font-cormorant, Georgia, serif)' }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-2 py-3 text-xl font-light transition-colors ${
                        isActive(link.href) ? 'text-white' : 'text-white/70 hover:text-white'
                      } ${i === 0 ? 'mt-2' : ''}`}
                      style={{ fontFamily: lang === 'ar' ? 'var(--font-arabic, sans-serif)' : 'var(--font-cormorant, Georgia, serif)' }}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <Link
                href="/report"
                className="btn-primary w-full justify-center mb-4"
                style={{ background: 'var(--color-terracotta)' }}
              >
                {t.nav.reportIssue}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
