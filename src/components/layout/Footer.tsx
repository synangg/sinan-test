import Link from 'next/link'
import { Instagram, Youtube, Mail } from 'lucide-react'

const footerLinks = {
  Shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'Jackets', href: '/shop?category=jackets' },
    { label: 'Bags', href: '/shop?category=bags' },
    { label: 'Wallets', href: '/shop?category=wallets' },
    { label: 'Belts', href: '/shop?category=belts' },
    { label: 'Accessories', href: '/shop?category=accessories' },
  ],
  Company: [
    { label: 'Our Craft', href: '/about' },
    { label: 'Sustainability', href: '/about#sustainability' },
    { label: 'Journal', href: '/about#journal' },
    { label: 'Contact', href: '/contact' },
  ],
  Support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/faq#shipping' },
    { label: 'Care Guide', href: '/faq#care' },
    { label: 'Size Guide', href: '/faq#sizing' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0A0806] border-t border-white/5">
      {/* Main footer */}
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="font-serif text-2xl tracking-[0.15em] text-cream hover:text-gold transition-colors">
              BLACKHIDE
            </Link>
            <p className="font-sans text-sm text-cream/40 leading-relaxed max-w-xs">
              Every piece we make is cut, stitched, and finished by hand. We use only full-grain and shell cordovan leathers — the finest grades available. No shortcuts.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-cream/30 hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-cream/30 hover:text-gold transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="mailto:hello@blackhide.com"
                className="text-cream/30 hover:text-gold transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-cream/40 font-medium">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-cream/60 hover:text-cream transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/25">
            © {new Date().getFullYear()} BLACKHIDE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/faq#privacy" className="font-sans text-xs text-cream/25 hover:text-cream/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/faq#terms" className="font-sans text-xs text-cream/25 hover:text-cream/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
