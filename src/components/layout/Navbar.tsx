'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu, X, Search } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Craft', href: '/about' },
  { label: 'Journal', href: '/about#journal' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const { itemCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-obsidian/95 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-18 md:h-22">
            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-cream/70 hover:text-cream transition-colors p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="font-serif text-xl md:text-2xl tracking-[0.15em] text-cream hover:text-gold transition-colors duration-300 absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0"
              onClick={() => setMenuOpen(false)}
            >
              BLACKHIDE
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-xs tracking-[0.2em] uppercase text-cream/60 hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                className="hidden md:flex text-cream/60 hover:text-cream transition-colors duration-300"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                onClick={openCart}
                className="relative text-cream/70 hover:text-cream transition-colors duration-300"
                aria-label={`Cart — ${itemCount} items`}
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-gold text-obsidian text-[10px] font-bold font-sans rounded-full flex items-center justify-center leading-none">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-30 bg-obsidian flex flex-col pt-24 px-8 pb-12 md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-serif text-3xl text-cream/80 hover:text-cream py-3 border-b border-white/5 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto">
              <p className="font-sans text-xs text-cream/30 tracking-widest uppercase">
                Handcrafted Since 2012
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
