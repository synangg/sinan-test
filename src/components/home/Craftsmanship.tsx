'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

export function Craftsmanship() {
  const { t } = useLang()
  const c = t.craftsmanship

  return (
    <section className="py-20 md:py-28 bg-[#0A0806]">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/craftsmanship-closeup.jpg"
                alt="Leather craftsmanship"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#141210] border border-white/8 p-6 w-40">
              <p className="font-serif text-4xl text-gold">12</p>
              <p className="font-sans text-xs text-cream/40 tracking-widest uppercase mt-1 whitespace-pre-line">
                {c.yearsLabel}
              </p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-10"
            >
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium">
                {c.label}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mt-4 leading-tight">
                {c.title1}
                <br />
                <em className="text-gold/80 not-italic">{c.title2}</em>
              </h2>
              <p className="font-sans text-sm text-cream/50 mt-5 leading-relaxed max-w-md">
                {c.subtitle}
              </p>
            </motion.div>

            <div className="space-y-8">
              {c.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex gap-6 items-start"
                >
                  <span className="font-serif text-4xl text-gold/20 leading-none flex-shrink-0 w-10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg text-cream mb-2">{step.title}</h4>
                    <p className="font-sans text-sm text-cream/50 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.25em] uppercase text-gold hover:text-gold-light transition-colors duration-300 group"
              >
                {c.learnMore}
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
