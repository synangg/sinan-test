'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'
import { extraTranslations } from '@/lib/translations'

export function LifestyleBanner() {
  const { lang } = useLang()
  const l = extraTranslations[lang].lifestyle

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/leather-bag-lifestyle.jpg"
          alt="MASTERLEATHER lifestyle"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-obsidian/65" />
      </div>

      <div className="relative z-10 container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto"
        >
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-gold font-medium mb-6 block">
            {l.label}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.95] mb-8">
            <em className="text-gold/90 not-italic">{l.quote}</em>
          </h2>
          <p className="font-sans text-sm md:text-base text-cream/50 leading-relaxed mb-10 max-w-lg mx-auto">
            {l.subtitle}
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-obsidian font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-300 active:scale-95"
          >
            {l.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
