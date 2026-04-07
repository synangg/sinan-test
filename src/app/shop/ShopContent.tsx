'use client'

import { motion } from 'framer-motion'
import { Product } from '@/types'
import { FilterBar } from '@/components/shop/FilterBar'
import { ProductCard } from '@/components/shop/ProductCard'
import { useLang } from '@/context/LanguageContext'

interface ShopContentProps {
  products: Product[]
  activeCategory: string
  activeSort: string
}

export function ShopContent({ products, activeCategory, activeSort }: ShopContentProps) {
  const { t } = useLang()
  const s = t.shop

  const categoryLabel = activeCategory && activeCategory !== 'all'
    ? (s.categories[activeCategory as keyof typeof s.categories] ?? activeCategory)
    : s.allProducts

  return (
    <>
      {/* Page header */}
      <div className="mb-12 md:mb-14">
        <div className="border-b border-white/8 pb-10">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-4">
            {s.label}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-cream">
            {categoryLabel}
          </h1>
          {(!activeCategory || activeCategory === 'all') && (
            <p className="font-sans text-sm text-cream/50 mt-3 max-w-lg leading-relaxed">
              {s.subtitle}
            </p>
          )}
        </div>
      </div>

      <FilterBar
        activeCategory={activeCategory}
        activeSort={activeSort}
        resultCount={products.length}
      />

      {products.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-serif text-2xl text-cream/30 mb-3">{s.noProducts}</p>
          <p className="font-sans text-sm text-cream/20">{s.tryDifferent}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      )}
    </>
  )
}
