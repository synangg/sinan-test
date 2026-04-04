'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProductCard } from '@/components/shop/ProductCard'
import { getBestSellers } from '@/data/products'

export function BestSellers() {
  const bestSellers = getBestSellers()

  return (
    <section className="py-20 md:py-28 bg-[#0A0806]">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <SectionTitle
            label="Best Sellers"
            title="The Favourites"
            subtitle="The pieces our customers keep coming back for."
            align="left"
            className="max-w-lg"
          />
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors duration-300 group flex-shrink-0"
          >
            View All
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {bestSellers.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
