'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  const { lang } = useLanguage()

  const tooltip = lang === 'ar' ? 'تواصل معنا عبر واتساب' : 'Chat with us on WhatsApp'
  const href = 'https://wa.me/96171813883'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={tooltip}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-300"
      style={{ filter: hovered ? 'drop-shadow(0 8px 24px rgba(37,211,102,0.45))' : 'drop-shadow(0 4px 12px rgba(0,0,0,0.2))' }}
    >
      {/* Tooltip */}
      <span
        className="text-xs font-medium px-3 py-2 whitespace-nowrap transition-all duration-200"
        style={{
          background: 'white',
          color: '#1C1C1A',
          borderRadius: 4,
          boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(8px)',
          pointerEvents: 'none',
        }}
      >
        {tooltip}
      </span>

      {/* Button */}
      <div
        className="relative w-14 h-14 flex items-center justify-center flex-none transition-transform duration-200"
        style={{
          background: '#25D366',
          borderRadius: '50%',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: 'rgba(37,211,102,0.35)', animationDuration: '2.5s' }}
        />
        {/* WhatsApp SVG icon */}
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 2C8.268 2 2 8.268 2 16c0 2.484.674 4.81 1.848 6.807L2 30l7.394-1.82A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
            fill="white"
            fillOpacity="0.15"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 3.5C8.82 3.5 3 9.32 3 16.5c0 2.34.638 4.53 1.748 6.41L3.5 28.5l5.75-1.5A12.44 12.44 0 0016 29.5c7.18 0 13-5.82 13-13S23.18 3.5 16 3.5zM11.5 10.5c-.28 0-.73.1-1.11.52-.38.42-1.47 1.44-1.47 3.51s1.5 4.07 1.71 4.35c.21.28 2.96 4.52 7.17 6.16 1 .39 1.78.62 2.38.79.99.29 1.9.25 2.62.15.8-.11 2.46-.98 2.81-1.93.35-.95.35-1.76.25-1.93-.1-.17-.38-.27-.79-.48-.41-.21-2.43-1.2-2.81-1.34-.38-.14-.65-.21-.93.21-.28.42-1.07 1.34-1.31 1.62-.24.28-.48.31-.89.1-.41-.21-1.73-.64-3.29-2.04-1.22-1.09-2.04-2.43-2.28-2.84-.24-.41-.03-.63.18-.84.19-.19.41-.48.62-.72.21-.24.28-.41.42-.69.14-.28.07-.52-.03-.72-.1-.21-.93-2.24-1.27-3.07-.34-.8-.68-.69-.93-.7-.24-.01-.52-.01-.8-.01z"
            fill="white"
          />
        </svg>
      </div>
    </a>
  )
}
