'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Hide Selection',
    description:
      'We inspect every hide individually. Only full-grain leather with natural markings makes the cut — no corrections, no embossing.',
  },
  {
    number: '02',
    title: 'Pattern Cutting',
    description:
      'Each pattern is cut by hand using steel templates refined over a decade. The grain direction matters. The hand that cuts it matters.',
  },
  {
    number: '03',
    title: 'Saddle Stitching',
    description:
      'Two needles, one thread, a technique unchanged for centuries. Saddle stitching is stronger than machine stitching — if one stitch breaks, the others hold.',
  },
  {
    number: '04',
    title: 'Edge Finishing',
    description:
      'Every exposed edge is bevelled, burnished, and sealed by hand. The detail most brands skip. The detail you will notice in ten years.',
  },
]

export function Craftsmanship() {
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
            {/* Main image placeholder */}
            <div className="relative aspect-[4/5] overflow-hidden">
              {/*
                Replace with:
                <Image src="/images/craftsmanship-closeup.jpg" alt="Leatherworking process" fill className="object-cover" />
              */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-950/80 via-stone-900 to-obsidian flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-px bg-gold/40 mx-auto mb-4" />
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/60">
                    craftsmanship-closeup.jpg
                  </p>
                  <div className="w-24 h-px bg-gold/40 mx-auto mt-4" />
                </div>
              </div>

              {/* Leather texture overlay */}
              <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(196,148,58,0.1)_3px,rgba(196,148,58,0.1)_6px)]" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#141210] border border-white/8 p-6 w-40">
              <p className="font-serif text-4xl text-gold">12</p>
              <p className="font-sans text-xs text-cream/40 tracking-widest uppercase mt-1">
                Years of<br />Practice
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
                The Process
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mt-4 leading-tight">
                Made by Hand.
                <br />
                <em className="text-gold/80 not-italic">Every Time.</em>
              </h2>
              <p className="font-sans text-sm text-cream/50 mt-5 leading-relaxed max-w-md">
                We have never owned a stitching machine. Every BLACKHIDE piece passes through the same
                four hands — the leather cutter, the stitcher, the edge finisher, and the quality
                inspector. That is by design.
              </p>
            </motion.div>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex gap-6 items-start"
                >
                  <span className="font-serif text-4xl text-gold/20 leading-none flex-shrink-0 w-10">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg text-cream mb-2">{step.title}</h4>
                    <p className="font-sans text-sm text-cream/50 leading-relaxed">{step.description}</p>
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
                Learn About Our Process
                <span className="w-8 h-px bg-gold group-hover:w-12 transition-all duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
