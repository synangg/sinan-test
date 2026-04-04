'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { testimonials } from '@/data/products'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < rating ? 'text-gold fill-gold' : 'text-cream/20'}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const testimonial = testimonials[active]

  return (
    <section className="py-20 md:py-28 bg-obsidian overflow-hidden">
      <div className="container-luxury">
        <SectionTitle
          label="Testimonials"
          title="What Our Customers Say"
          className="mb-14 md:mb-16"
        />

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-center"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-cream leading-relaxed mt-6 mb-8 text-balance">
                &ldquo;{testimonial.comment}&rdquo;
              </blockquote>
              <div>
                <p className="font-sans text-sm text-cream font-medium">{testimonial.author}</p>
                <p className="font-sans text-xs text-cream/40 mt-1">
                  {testimonial.location} · Verified Purchase · {testimonial.product}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-cream/40 hover:text-cream hover:border-cream/40 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 ${
                    i === active
                      ? 'w-6 h-px bg-gold'
                      : 'w-2 h-px bg-cream/20 hover:bg-cream/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-cream/40 hover:text-cream hover:border-cream/40 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Review aggregate */}
        <div className="mt-14 md:mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="text-gold fill-gold" />
            ))}
          </div>
          <p className="font-sans text-sm text-cream/60">
            <span className="text-cream font-medium">4.9 / 5</span> from 1,200+ verified reviews
          </p>
        </div>
      </div>
    </section>
  )
}
