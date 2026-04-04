'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    category: 'Orders & Shipping',
    id: 'shipping',
    items: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping takes 3–7 business days within the UK and US. International orders typically arrive within 7–14 business days. Express options are available at checkout.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes — we ship to over 60 countries. International shipping rates are calculated at checkout. Import duties and taxes are the responsibility of the recipient.',
      },
      {
        q: 'When will my order dispatch?',
        a: 'In-stock items dispatch within 1–2 business days. Made-to-order items (such as cut-to-length belts) dispatch within 5–7 business days.',
      },
      {
        q: 'How do I track my order?',
        a: 'You will receive a tracking number by email once your order dispatches. All orders are fully trackable from dispatch to delivery.',
      },
    ],
  },
  {
    category: 'Returns & Repairs',
    id: 'returns',
    items: [
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 30 days of delivery, no questions asked. Items must be in original condition with tags attached. We cover return shipping for orders placed in the UK and US.',
      },
      {
        q: 'Do you repair your products?',
        a: 'Yes — free, for life. If a seam fails, a zipper breaks, or hardware comes loose on any BLACKHIDE product, we repair it at no charge. You cover postage to us; we cover postage back.',
      },
      {
        q: 'How do I initiate a return or repair?',
        a: 'Email orders@blackhide.com with your order number and a brief description. We will send you a return label within 24 hours.',
      },
    ],
  },
  {
    category: 'Products & Materials',
    id: 'products',
    items: [
      {
        q: 'What is full-grain leather?',
        a: 'Full-grain leather is the outermost layer of the hide — the strongest, most durable, and most beautiful part. Unlike top-grain leather, it is not sanded or buffed, so it retains the natural grain pattern. It develops a patina over time, improving with age.',
      },
      {
        q: 'What is shell cordovan?',
        a: 'Shell cordovan is a non-porous leather cut from the rump muscle of a horse. It is incredibly dense and develops a mirror-like patina over years of use. Horween Leather Company in Chicago is the world\'s most respected cordovan tannery — and the source of all our cordovan.',
      },
      {
        q: 'Will my leather change colour over time?',
        a: 'Yes — and this is a feature, not a bug. Full-grain and vegetable-tanned leathers develop a patina that reflects the life of the owner. Pull-up leathers will show marks from use that buff back out with a thumb. This is the leather ageing as it should.',
      },
      {
        q: 'Do you offer custom sizing?',
        a: 'Belts are made to order in any waist size. For jackets and bag custom dimensions, please contact us directly at hello@blackhide.com.',
      },
    ],
  },
  {
    category: 'Leather Care',
    id: 'care',
    items: [
      {
        q: 'How do I care for my leather jacket?',
        a: 'Apply a quality leather conditioner every 3–6 months. Avoid prolonged exposure to rain. If the leather gets wet, allow it to dry naturally away from direct heat. Store on a padded hanger to maintain shape.',
      },
      {
        q: 'How do I care for my cordovan wallet?',
        a: 'Brush with a horsehair brush every few weeks to maintain lustre. Apply Saphir cordovan cream sparingly once or twice per year. Never use wax-based shoe polishes on cordovan.',
      },
      {
        q: 'What should I use to condition my leather bag?',
        a: 'For full-grain bags: Leather Honey or Bickmore Bick 4 are excellent, widely available conditioners. For vegetable-tanned leather: pure beeswax or neatsfoot oil. Apply sparingly, buff with a soft cloth.',
      },
      {
        q: 'My leather got wet — what do I do?',
        a: 'Allow it to dry naturally at room temperature. Do not use a hairdryer or place it near a radiator. Once dry, apply conditioner to restore suppleness. Water staining on veg-tan leather typically fades as the leather dries.',
      },
    ],
  },
  {
    category: 'Sizing',
    id: 'sizing',
    items: [
      {
        q: 'How do your jackets fit?',
        a: 'Our jackets are cut with a slim, tailored fit. If you are between sizes or prefer a relaxed fit, we recommend sizing up. Check the size guide on each product page for exact chest and sleeve measurements.',
      },
      {
        q: 'How do I measure for a belt?',
        a: 'Measure the circumference of your waist at the point where you wear your trousers — not your clothing size. Order the belt in that measurement. Our belts have 5 holes with 2.5cm spacing, so there is room to adjust.',
      },
    ],
  },
]

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
  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-28 min-h-screen">
      {/* Header */}
      <div className="container-luxury py-12 md:py-16 border-b border-white/8">
        <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-4">
          Help Centre
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
          Frequently Asked Questions
        </h1>
        <p className="font-sans text-sm text-cream/50 max-w-lg leading-relaxed">
          Everything you need to know about our products, orders, and leather care. Cannot find what
          you need?{' '}
          <a href="/contact" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4">
            Contact us directly.
          </a>
        </p>
      </div>

      <div className="container-luxury py-14 md:py-20">
        <div className="max-w-3xl">
          {/* Jump links */}
          <div className="flex flex-wrap gap-3 mb-14 pb-8 border-b border-white/5">
            {faqs.map((section) => (
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
            {faqs.map((section) => (
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
            <h3 className="font-serif text-xl text-cream mb-3">Still have a question?</h3>
            <p className="font-sans text-sm text-cream/50 mb-6">
              We respond to every message personally, within 24 hours.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-obsidian font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
