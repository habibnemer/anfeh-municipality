'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  {
    label: 'Municipality',
    href: '/municipality',
    children: [
      { label: 'About', href: '/municipality' },
      { label: 'Municipal Council', href: '/municipality/council' },
      { label: 'Projects', href: '/municipality/projects' },
      { label: 'Announcements', href: '/municipality/announcements' },
    ],
  },
  { label: 'Services', href: '/services' },
  { label: 'Discover Anfeh', href: '/discover' },
  { label: 'Report an Issue', href: '/report' },
  { label: 'Events', href: '/events' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

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
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span
                className={`font-serif text-xl md:text-2xl font-semibold tracking-wide transition-colors ${
                  scrolled || open ? 'text-navy' : 'text-white'
                }`}
                style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)' }}
              >
                ANFEH
              </span>
              <span
                className={`text-[9px] tracking-[0.25em] uppercase font-sans transition-colors ${
                  scrolled || open ? 'text-muted' : 'text-white/70'
                }`}
              >
                Municipality
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.label)}
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
                        className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 pt-1 animate-slide-down">
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
                    } ${link.label === 'Report an Issue' ? 'ml-2' : ''}`}
                  >
                    {link.label === 'Report an Issue' ? (
                      <span
                        className={`px-4 py-1.5 text-xs tracking-wider uppercase font-medium border transition-colors ${
                          scrolled
                            ? 'border-navy text-navy hover:bg-navy hover:text-white'
                            : 'border-white text-white hover:bg-white hover:text-navy'
                        }`}
                      >
                        Report Issue
                      </span>
                    ) : (
                      link.label
                    )}
                  </Link>
                )
              )}
              <Link
                href="#"
                className={`ml-3 text-xs tracking-widest font-medium transition-colors ${
                  scrolled ? 'text-muted hover:text-charcoal' : 'text-white/60 hover:text-white'
                }`}
              >
                ع
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 -mr-2 transition-colors"
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
      </header>

      {/* Mobile full-screen menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-navy flex flex-col animate-fade-in lg:hidden">
          <div className="flex items-center justify-between h-16 container-site">
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-serif text-xl text-white tracking-wide"
                style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)' }}>
                ANFEH
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase text-white/50">Municipality</span>
            </Link>
            <button onClick={() => setOpen(false)} className="p-2 -mr-2">
              <X size={22} className="text-white" />
            </button>
          </div>

          <nav className="flex-1 container-site py-8 overflow-y-auto">
            <div className="space-y-1">
              {navLinks.map((link, i) => (
                <div key={link.label}>
                  {link.children ? (
                    <div className="mb-2">
                      <p
                        className="text-white/40 text-[10px] tracking-[0.3em] uppercase px-2 py-2 mt-4"
                      >
                        {link.label}
                      </p>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-white/80 hover:text-white text-lg font-light transition-colors"
                          style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)' }}
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
                      style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)' }}
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
                Report an Issue
              </Link>
              <button className="text-white/40 text-sm tracking-widest">العربية</button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
