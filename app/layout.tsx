import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Noto_Kufi_Arabic } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { LanguageProvider } from '@/lib/context/LanguageContext'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const notoKufi = Noto_Kufi_Arabic({
  variable: '--font-arabic',
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Anfeh Municipality — Koura, Lebanon',
    template: '%s | Anfeh Municipality',
  },
  description: 'The official digital platform of Anfeh Municipality, Koura, Lebanon. Municipal services, community news, events and more.',
  keywords: ['Anfeh', 'Municipality', 'Koura', 'Lebanon', 'بلدية انفه', 'الكورة'],
  openGraph: {
    title: 'Anfeh Municipality',
    description: 'Our Town. Our Community. Our Future.',
    siteName: 'Anfeh Municipality',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${notoKufi.variable}`}>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
