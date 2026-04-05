'use client'

import Link from 'next/link'
import { Instagram, Youtube, Mail } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

export function Footer() {
  const { t } = useLang()
  const f = t.footer

  const footerLinks = {
    [f.shop]: [
      { label: f.allProducts, href: '/shop' },
      { label: f.rawHide, href: '/shop?category=ham-deri' },
      { label: f.bags, href: '/shop?category=canta' },
      { label: f.wallets, href: '/shop?category=cuzdan' },
      { label: f.belts, href: '/shop?category=kemer' },
    ],
    [f.company]: [
      { label: f.ourCraft, href: '/about' },
      { label: f.sustainability, href: '/about#sustainability' },
      { label: f.journal, href: '/about#journal' },
      { label: f.contact, href: '/contact' },
    ],
    [f.support]: [
      { label: f.faq, href: '/faq' },
      { label: f.shipping, href: '/faq#shipping' },
      { label: f.care, href: '/faq#care' },
      { label: f.sizeGuide, href: '/faq#sizing' },
    ],
  }

  return (
    <footer className="bg-[#0A0806] border-t border-white/5">
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="font-serif text-2xl tracking-[0.15em] text-cream hover:text-gold transition-colors">
              BLACKHIDE
            </Link>
            <p className="font-sans text-sm text-cream/40 leading-relaxed max-w-xs">
              {f.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-cream/30 hover:text-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-cream/30 hover:text-gold transition-colors duration-300" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="mailto:hello@blackhide.com" className="text-cream/30 hover:text-gold transition-colors duration-300" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-cream/40 font-medium">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-sans text-sm text-cream/60 hover:text-cream transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/25">
            © {new Date().getFullYear()} BLACKHIDE. {f.rights}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/faq#privacy" className="font-sans text-xs text-cream/25 hover:text-cream/60 transition-colors">
              {f.privacy}
            </Link>
            <Link href="/faq#terms" className="font-sans text-xs text-cream/25 hover:text-cream/60 transition-colors">
              {f.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
