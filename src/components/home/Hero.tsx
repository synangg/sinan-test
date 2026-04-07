'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import { useEffect, useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
}

const heroImages = [
  { src: '/images/craftsmanship-closeup.jpg', alt: 'Deri işçiliği' },
  { src: '/images/products/dana-derisi-bordo-01.jpg', alt: 'Ham dana derisi bordo' },
  { src: '/images/products/dana-derisi-taba-01.jpg', alt: 'Ham dana derisi taba' },
  { src: '/images/leather-bag-lifestyle.jpg', alt: 'El yapımı deri çanta' },
]


export function Hero() {
  const { t } = useLang()
  const h = t.hero

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <Image
              src={heroImages[current].src}
              alt={heroImages[current].alt}
              fill
              priority={current === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0B08]/70 via-[#1C1208]/50 to-[#0A0806]/70" />
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(196,148,58,0.03) 2px,rgba(196,148,58,0.03) 4px),repeating-linear-gradient(90deg,transparent,transparent 4px,rgba(255,255,255,0.01) 4px,rgba(255,255,255,0.01) 8px)`
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,8,6,0.7) 100%)' }} />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${i === current ? 'w-6 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-cream/30 hover:bg-cream/50'}`}
          />
        ))}
      </div>

      {/* Decorative lines */}
      <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-gold/40" />
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-cream/20 rotate-90 my-8 whitespace-nowrap">Scroll</span>
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-gold/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center">
        <motion.div initial="hidden" animate="visible" className="flex flex-col items-center gap-6 md:gap-8 max-w-4xl mx-auto">

          <motion.span variants={fadeUp} custom={0.1} className="font-sans text-xs tracking-[0.35em] uppercase text-gold font-medium">
            {h.badge}
          </motion.span>

          <motion.h1 variants={fadeUp} custom={0.25} className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-cream">
            {h.title1}
            <br />
            <em className="text-gold not-italic">{h.title2}</em>
            <br />
            {h.title3}
          </motion.h1>

          <motion.p variants={fadeUp} custom={0.4} className="font-sans text-base md:text-lg text-cream/50 max-w-md leading-relaxed">
            {h.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} custom={0.55} className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link href="/shop" className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-obsidian font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-300 active:scale-95 group">
              {h.cta1}
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/about" className="inline-flex items-center gap-3 px-8 py-4 border border-cream/20 text-cream font-sans text-xs tracking-[0.25em] uppercase hover:border-cream/60 hover:bg-cream/5 transition-all duration-300">
              {h.cta2}
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} custom={0.7} className="flex items-center gap-8 pt-8 md:pt-12">
            {[
              { value: h.stat1val, label: h.stat1label },
              { value: h.stat2val, label: h.stat2label },
              { value: h.stat3val, label: h.stat3label },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl md:text-3xl text-cream">{stat.value}</p>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream/30 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent" />
    </section>
  )
}
