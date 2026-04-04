'use client'

import { motion } from 'framer-motion'
import { Product } from '@/types'
import { FilterBar } from '@/components/shop/FilterBar'
import { ProductCard } from '@/components/shop/ProductCard'

interface ShopContentProps {
  products: Product[]
  activeCategory: string
  activeSort: string
}

export function ShopContent({ products, activeCategory, activeSort }: ShopContentProps) {
  return (
    <>
      <FilterBar
        activeCategory={activeCategory}
        activeSort={activeSort}
        resultCount={products.length}
      />

      {products.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-serif text-2xl text-cream/30 mb-3">No products found</p>
          <p className="font-sans text-sm text-cream/20">Try a different category.</p>
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
