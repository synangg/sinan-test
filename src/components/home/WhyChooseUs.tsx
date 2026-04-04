'use client'

import { motion } from 'framer-motion'
import { Shield, Scissors, Leaf, RotateCcw } from 'lucide-react'

const pillars = [
  {
    icon: Scissors,
    title: 'Handcrafted',
    description:
      'Every stitch placed by a craftsperson with years of practice. No assembly lines. No compromises.',
  },
  {
    icon: Shield,
    title: 'Full-Grain Leather',
    description:
      'We use only the top layer of the hide — the strongest, most beautiful part. It ages, not degrades.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Sourcing',
    description:
      'Our hides come from responsible tanneries with full traceability. Better for the craft and the planet.',
  },
  {
    icon: RotateCcw,
    title: 'Lifetime Repairs',
    description:
      'If a seam ever fails, we fix it. Free. For the life of the piece. We stand behind everything we make.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-obsidian relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold/30" />

      <div className="container-luxury">
        <div className="text-center mb-14 md:mb-16">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium">
            Why BLACKHIDE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-cream mt-4 leading-tight">
            Built Different. <em className="text-gold not-italic">Priced Fairly.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col items-center text-center gap-5 p-6 border border-white/5 hover:border-gold/20 transition-colors duration-500 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold/20 group-hover:border-gold/60 transition-colors duration-500">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-serif text-lg text-cream">{pillar.title}</h3>
                <p className="font-sans text-sm text-cream/50 leading-relaxed">{pillar.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Trust badges */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {[
              'Free shipping over $150',
              '30-day returns',
              'Lifetime repair guarantee',
              'Secure checkout',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gold" />
                <span className="font-sans text-xs tracking-[0.15em] uppercase text-cream/40">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
