'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section className="py-20 md:py-24 bg-[#141210] border-y border-white/5">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-xl mx-auto text-center"
        >
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium">
            The Journal
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mt-4 mb-4 leading-tight">
            Craft Notes & First Access
          </h2>
          <p className="font-sans text-sm text-cream/50 mb-8 leading-relaxed">
            Join 12,000 subscribers. Monthly dispatches on leather care, new arrivals, and the
            occasional behind-the-scenes from the workshop. No noise.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 py-4"
            >
              <CheckCircle size={32} className="text-gold" />
              <p className="font-serif text-xl text-cream">You are in.</p>
              <p className="font-sans text-sm text-cream/50">
                Welcome to the BLACKHIDE community. Expect your first dispatch soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-obsidian border border-white/10 px-5 py-4 text-cream placeholder:text-cream/25 font-sans text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300"
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gold text-obsidian font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed min-w-[140px]"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe <ArrowRight size={12} />
                  </>
                )}
              </button>
            </form>
          )}

          {!submitted && (
            <p className="font-sans text-xs text-cream/25 mt-4">
              Unsubscribe at any time. No spam, ever.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
