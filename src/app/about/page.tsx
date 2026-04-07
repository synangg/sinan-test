'use client'

import Link from 'next/link'
import { useLang } from '@/context/LanguageContext'
import { aboutTranslations } from '@/lib/translations'

export default function AboutPage() {
  const { lang } = useLang()
  const a = aboutTranslations[lang]

  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-white/8">
        <div className="container-luxury max-w-4xl">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-6">
            {a.hero.label}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-8">
            {a.hero.title1}
            <br />
            <em className="text-gold not-italic">{a.hero.title2}</em>
          </h1>
          <p className="font-sans text-base text-cream/60 leading-loose max-w-2xl">
            {a.hero.desc}
          </p>
        </div>
      </section>

      {/* Visual split */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-950/60 via-stone-900 to-obsidian overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-px bg-gold/40 mx-auto mb-4" />
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/40">
                    leather-bag-lifestyle.jpg
                  </p>
                  <div className="w-24 h-px bg-gold/40 mx-auto mt-4" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-obsidian/80 backdrop-blur-sm border border-white/8 p-4 text-center">
                <p className="font-serif text-2xl text-gold">2024</p>
                <p className="font-sans text-[10px] tracking-widest uppercase text-cream/40 mt-0.5">{a.foundedBadge}</p>
              </div>
            </div>

            <div>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-5">
                {a.philosophy.label}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6 leading-tight">
                {a.philosophy.title1}
                <br />{a.philosophy.title2}
              </h2>
              <div className="space-y-4 text-cream/60 font-sans text-sm leading-loose">
                <p>{a.philosophy.p1}</p>
                <p>{a.philosophy.p2}</p>
                <p>{a.philosophy.p3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#0A0806]">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-4">
              {a.values.label}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream">{a.values.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {a.values.items.map((value) => (
              <div key={value.title} className="bg-[#0A0806] p-8 md:p-10">
                <h3 className="font-serif text-xl text-gold mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-cream/55 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship detail */}
      <section className="py-20 md:py-28">
        <div className="container-luxury max-w-3xl text-center">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-6">
            {a.workshop.label}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6 leading-tight">
            {a.workshop.title1}
            <br />{a.workshop.title2}
          </h2>
          <p className="font-sans text-sm text-cream/55 leading-loose mb-10">
            {a.workshop.desc}
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-obsidian font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-300 active:scale-95"
          >
            {a.workshop.cta}
          </Link>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-20 md:py-24 bg-[#0A0806] border-t border-white/5">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-4">
                {a.sustainability.label}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-cream">
                {a.sustainability.title}
              </h2>
            </div>
            <div className="md:col-span-2 font-sans text-sm text-cream/55 leading-loose space-y-4">
              <p>{a.sustainability.p1}</p>
              <p>{a.sustainability.p2}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
