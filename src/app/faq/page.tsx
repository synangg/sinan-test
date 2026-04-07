'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'
import { faqTranslations } from '@/lib/translations'

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/8">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-start justify-between w-full py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-sans text-sm text-cream/80 hover:text-cream transition-colors leading-relaxed">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`text-cream/30 flex-shrink-0 mt-0.5 transition-transform duration-300 ${
            open ? 'rotate-180 text-gold' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm text-cream/50 leading-loose pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqPage() {
  const { lang } = useLang()
  const f = faqTranslations[lang]

  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-28 min-h-screen">
      {/* Header */}
      <div className="container-luxury py-12 md:py-16 border-b border-white/8">
        <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-4">
          {f.headerLabel}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
          {f.title}
        </h1>
        <p className="font-sans text-sm text-cream/50 max-w-lg leading-relaxed">
          {f.desc}{' '}
          <a href="/contact" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4">
            {f.contactLink}
          </a>
        </p>
      </div>

      <div className="container-luxury py-14 md:py-20">
        <div className="max-w-3xl">
          {/* Jump links */}
          <div className="flex flex-wrap gap-3 mb-14 pb-8 border-b border-white/5">
            {f.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="font-sans text-xs tracking-[0.15em] uppercase px-4 py-2 border border-white/10 text-cream/50 hover:border-gold/40 hover:text-gold transition-all duration-300"
              >
                {section.category}
              </a>
            ))}
          </div>

          {/* FAQ sections */}
          <div className="space-y-14">
            {f.sections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 className="font-serif text-xl text-cream mb-6">{section.category}</h2>
                <div>
                  {section.items.map((item) => (
                    <FaqItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still need help */}
          <div className="mt-16 p-8 border border-white/8 bg-[#141210] text-center">
            <h3 className="font-serif text-xl text-cream mb-3">{f.stillNeedHelp}</h3>
            <p className="font-sans text-sm text-cream/50 mb-6">
              {f.stillDesc}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-obsidian font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              {f.contactUs}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
