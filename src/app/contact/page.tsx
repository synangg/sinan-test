'use client'

import { useState, FormEvent } from 'react'
import { Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-28 min-h-screen">
      {/* Header */}
      <div className="container-luxury py-12 md:py-16 border-b border-white/8">
        <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-4">
          Get in Touch
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">Contact Us</h1>
        <p className="font-sans text-sm text-cream/50 max-w-lg leading-relaxed">
          We read every message personally. For order enquiries, please include your order number.
          We respond within 24 hours on business days.
        </p>
      </div>

      <div className="container-luxury py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Contact info */}
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-2xl text-cream mb-6">How to Reach Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-[0.15em] uppercase text-cream/40 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hello@blackhide.com"
                      className="font-sans text-sm text-cream hover:text-gold transition-colors"
                    >
                      hello@blackhide.com
                    </a>
                    <p className="font-sans text-xs text-cream/30 mt-0.5">
                      For orders: orders@blackhide.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-[0.15em] uppercase text-cream/40 mb-1">
                      Response Times
                    </p>
                    <p className="font-sans text-sm text-cream">Within 24 hours</p>
                    <p className="font-sans text-xs text-cream/30 mt-0.5">
                      Mon–Fri, 9am–6pm GMT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-[0.15em] uppercase text-cream/40 mb-1">
                      Workshop
                    </p>
                    <p className="font-sans text-sm text-cream">London, United Kingdom</p>
                    <p className="font-sans text-xs text-cream/30 mt-0.5">
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/8 pt-8">
              <h3 className="font-serif text-lg text-cream mb-4">Common Enquiries</h3>
              <div className="space-y-2">
                {[
                  'Order tracking and status',
                  'Custom sizing requests',
                  'Leather care advice',
                  'Repair service enquiries',
                  'Wholesale and stockist requests',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    <span className="font-sans text-sm text-cream/50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-5 text-center py-16">
                <CheckCircle size={40} className="text-gold" />
                <div>
                  <h3 className="font-serif text-2xl text-cream mb-2">Message Received</h3>
                  <p className="font-sans text-sm text-cream/50 max-w-sm leading-relaxed">
                    Thank you, {form.name}. We will get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-sans text-xs tracking-[0.15em] uppercase text-cream/40 block mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#141210] border border-white/10 px-4 py-3 text-cream placeholder:text-cream/20 font-sans text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="font-sans text-xs tracking-[0.15em] uppercase text-cream/40 block mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#141210] border border-white/10 px-4 py-3 text-cream placeholder:text-cream/20 font-sans text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="font-sans text-xs tracking-[0.15em] uppercase text-cream/40 block mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    className="w-full bg-[#141210] border border-white/10 px-4 py-3 text-cream font-sans text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-obsidian">Select a subject</option>
                    <option value="order" className="bg-obsidian">Order Enquiry</option>
                    <option value="product" className="bg-obsidian">Product Question</option>
                    <option value="repair" className="bg-obsidian">Repair Request</option>
                    <option value="custom" className="bg-obsidian">Custom Order</option>
                    <option value="other" className="bg-obsidian">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-sans text-xs tracking-[0.15em] uppercase text-cream/40 block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#141210] border border-white/10 px-4 py-3 text-cream placeholder:text-cream/20 font-sans text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                    placeholder="Tell us what you need..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gold text-obsidian font-sans font-semibold text-xs tracking-[0.25em] uppercase py-4 hover:bg-gold-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin" />
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
