'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { collections } from '@/data/products'

const gradients = [
  'from-stone-900 via-amber-950/60 to-stone-950',
  'from-amber-950 via-stone-900 to-amber-950/40',
  'from-stone-800 via-amber-900/40 to-stone-950',
]

export function FeaturedCollections() {
  return (
    <section className="py-20 md:py-28 bg-obsidian">
      <div className="container-luxury">
        <SectionTitle
          label="Collections"
          title="Explore the Range"
          subtitle="Every category, one standard: full-grain leather, handcrafted construction, built to last."
          className="mb-14 md:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {collections.map((collection, i) => (
            <motion.div
              key={collection.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link
                href={`/shop?category=${collection.slug}`}
                className="group relative block overflow-hidden aspect-[3/4] md:aspect-[4/5]"
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} transition-transform duration-700 group-hover:scale-105`}
                />
                {/*
                  Replace with:
                  <Image src={collection.image} alt={collection.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                */}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                    {collection.count} Styles
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-cream mb-2 leading-tight">
                    {collection.name}
                  </h3>
                  <p className="font-sans text-sm text-cream/50 mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-gold group-hover:gap-3 transition-all duration-300">
                    Shop Now <ArrowRight size={12} />
                  </span>
                </div>

                {/* Border effect on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-gold/20 transition-colors duration-500 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
