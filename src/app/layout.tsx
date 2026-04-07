import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import { LanguageProvider } from '@/context/LanguageContext'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/layout/CartDrawer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MASTERLEATHER — Premium Leather Goods',
    template: '%s | MASTERLEATHER',
  },
  description:
    'Handcrafted leather jackets, bags, wallets, and accessories. Full-grain leather built to last a lifetime. Free shipping on orders over $150.',
  keywords: [
    'leather goods',
    'leather jacket',
    'leather bag',
    'handcrafted leather',
    'full-grain leather',
    'premium leather',
    'shell cordovan wallet',
  ],
  authors: [{ name: 'MASTERLEATHER' }],
  creator: 'MASTERLEATHER',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'MASTERLEATHER',
    title: 'MASTERLEATHER — Premium Leather Goods',
    description:
      'Handcrafted leather jackets, bags, wallets, and accessories. Full-grain leather built to last a lifetime.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MASTERLEATHER — Premium Leather Goods',
    description: 'Handcrafted leather goods. Built to last.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          <CartProvider>
            <Navbar />
            <CartDrawer />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
