'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function LifestyleBanner() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/*
          Replace with:
          <Image src="/images/leather-bag-lifestyle.jpg" alt="BLACKHIDE lifestyle" fill className="object-cover" />
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C0E06] via-[#2A1508] to-[#1C0E06]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(196, 148, 58, 0.15) 0%, transparent 60%),
                              radial-gradient(circle at 80% 50%, rgba(139, 69, 19, 0.2) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-obsidian/50" />

      <div className="relative z-10 container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto"
        >
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-gold font-medium mb-6 block">
            The BLACKHIDE Standard
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.95] mb-8">
            "Leather tells the story
            <br />
            <em className="text-gold/90 not-italic">of those who carry it."</em>
          </h2>
          <p className="font-sans text-sm md:text-base text-cream/50 leading-relaxed mb-10 max-w-lg mx-auto">
            Every scratch, fold, and darkened edge is a mark of real use. We make leather that
            rewards the life you live in it.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-obsidian font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-300 active:scale-95"
          >
            Start Your Story
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
