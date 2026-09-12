'use client'

import { useState, useEffect, useRef } from 'react'
import { X, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const { lang } = useLanguage()

  // Show button after short delay
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const isAr = lang === 'ar'

  const prefilledMsg = isAr
    ? 'مرحباً، أتواصل مع بلدية عنفه وأودّ الاستفسار عن:'
    : 'Hello, I am contacting Anfeh Municipality and would like to enquire about:'

  const waUrl = `https://wa.me/96171813883?text=${encodeURIComponent(prefilledMsg)}`

  return (
    <div
      ref={popupRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Chat popup card */}
      {open && (
        <div
          className="w-72 bg-white shadow-2xl overflow-hidden"
          style={{
            borderRadius: 12,
            border: '1px solid rgba(0,0,0,0.08)',
            animation: 'scaleIn 0.2s ease',
            transformOrigin: 'bottom right',
          }}
        >
          {/* Header */}
          <div className="px-4 py-4 flex items-center justify-between" style={{ background: '#1A2E4A' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-none" style={{ background: 'rgba(255,255,255,0.12)' }}>
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 3.5C8.82 3.5 3 9.32 3 16.5c0 2.34.638 4.53 1.748 6.41L3.5 28.5l5.75-1.5A12.44 12.44 0 0016 29.5c7.18 0 13-5.82 13-13S23.18 3.5 16 3.5zM11.5 10.5c-.28 0-.73.1-1.11.52-.38.42-1.47 1.44-1.47 3.51s1.5 4.07 1.71 4.35c.21.28 2.96 4.52 7.17 6.16 1 .39 1.78.62 2.38.79.99.29 1.9.25 2.62.15.8-.11 2.46-.98 2.81-1.93.35-.95.35-1.76.25-1.93-.1-.17-.38-.27-.79-.48-.41-.21-2.43-1.2-2.81-1.34-.38-.14-.65-.21-.93.21-.28.42-1.07 1.34-1.31 1.62-.24.28-.48.31-.89.1-.41-.21-1.73-.64-3.29-2.04-1.22-1.09-2.04-2.43-2.28-2.84-.24-.41-.03-.63.18-.84.19-.19.41-.48.62-.72.21-.24.28-.41.42-.69.14-.28.07-.52-.03-.72-.1-.21-.93-2.24-1.27-3.07-.34-.8-.68-.69-.93-.7-.24-.01-.52-.01-.8-.01z" fill="#25D366"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">
                  {isAr ? 'بلدية عنفه' : 'Anfeh Municipality'}
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {isAr ? 'متاح الآن' : 'Available now'}
                  </span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 rounded transition-colors hover:bg-white/10">
              <X size={16} className="text-white/60" />
            </button>
          </div>

          {/* Message bubble */}
          <div className="px-4 py-5" style={{ background: '#F0F2F5' }}>
            <div className="bg-white rounded-lg px-4 py-3 shadow-sm max-w-[90%]" style={{ borderRadius: '0 12px 12px 12px' }}>
              <p className="text-sm leading-relaxed" style={{ color: '#1C1C1A' }}>
                {isAr
                  ? 'مرحباً 👋 كيف يمكننا مساعدتك؟ تواصل معنا مباشرة عبر واتساب وسنردّ عليك في أقرب وقت ممكن.'
                  : 'Hello 👋 How can we help you? Reach us directly on WhatsApp and we\'ll respond as soon as possible.'}
              </p>
              <p className="text-[10px] mt-2 text-right" style={{ color: '#A89880' }}>
                {isAr ? 'بلدية عنفه' : 'Anfeh Municipality'}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="px-4 pb-4" style={{ background: '#F0F2F5' }}>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: '#25D366', borderRadius: 8 }}
            >
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 3.5C8.82 3.5 3 9.32 3 16.5c0 2.34.638 4.53 1.748 6.41L3.5 28.5l5.75-1.5A12.44 12.44 0 0016 29.5c7.18 0 13-5.82 13-13S23.18 3.5 16 3.5zM11.5 10.5c-.28 0-.73.1-1.11.52-.38.42-1.47 1.44-1.47 3.51s1.5 4.07 1.71 4.35c.21.28 2.96 4.52 7.17 6.16 1 .39 1.78.62 2.38.79.99.29 1.9.25 2.62.15.8-.11 2.46-.98 2.81-1.93.35-.95.35-1.76.25-1.93-.1-.17-.38-.27-.79-.48-.41-.21-2.43-1.2-2.81-1.34-.38-.14-.65-.21-.93.21-.28.42-1.07 1.34-1.31 1.62-.24.28-.48.31-.89.1-.41-.21-1.73-.64-3.29-2.04-1.22-1.09-2.04-2.43-2.28-2.84-.24-.41-.03-.63.18-.84.19-.19.41-.48.62-.72.21-.24.28-.41.42-.69.14-.28.07-.52-.03-.72-.1-.21-.93-2.24-1.27-3.07-.34-.8-.68-.69-.93-.7-.24-.01-.52-.01-.8-.01z" fill="white"/>
              </svg>
              {isAr ? 'ابدأ المحادثة على واتساب' : 'Start Chat on WhatsApp'}
            </a>
            <p className="text-center text-[10px] mt-2" style={{ color: '#A89880' }}>
              {isAr ? 'سيتم فتح واتساب على جهازك' : 'WhatsApp will open on your device'}
            </p>
          </div>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={isAr ? 'فتح الدعم' : 'Open chat support'}
        className="relative flex items-center gap-2.5 pl-4 pr-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          background: open ? '#1A2E4A' : '#25D366',
          borderRadius: 50,
          boxShadow: open ? '0 4px 20px rgba(26,46,74,0.35)' : '0 4px 20px rgba(37,211,102,0.4)',
        }}
      >
        {/* Pulse only when closed */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping" style={{ background: 'rgba(37,211,102,0.3)', animationDuration: '2.5s' }} />
        )}

        {open ? (
          <X size={18} />
        ) : (
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 3.5C8.82 3.5 3 9.32 3 16.5c0 2.34.638 4.53 1.748 6.41L3.5 28.5l5.75-1.5A12.44 12.44 0 0016 29.5c7.18 0 13-5.82 13-13S23.18 3.5 16 3.5zM11.5 10.5c-.28 0-.73.1-1.11.52-.38.42-1.47 1.44-1.47 3.51s1.5 4.07 1.71 4.35c.21.28 2.96 4.52 7.17 6.16 1 .39 1.78.62 2.38.79.99.29 1.9.25 2.62.15.8-.11 2.46-.98 2.81-1.93.35-.95.35-1.76.25-1.93-.1-.17-.38-.27-.79-.48-.41-.21-2.43-1.2-2.81-1.34-.38-.14-.65-.21-.93.21-.28.42-1.07 1.34-1.31 1.62-.24.28-.48.31-.89.1-.41-.21-1.73-.64-3.29-2.04-1.22-1.09-2.04-2.43-2.28-2.84-.24-.41-.03-.63.18-.84.19-.19.41-.48.62-.72.21-.24.28-.41.42-.69.14-.28.07-.52-.03-.72-.1-.21-.93-2.24-1.27-3.07-.34-.8-.68-.69-.93-.7-.24-.01-.52-.01-.8-.01z" fill="white"/>
          </svg>
        )}

        <span>{isAr ? 'دعم فوري' : 'Chat Support'}</span>
      </button>
    </div>
  )
}
