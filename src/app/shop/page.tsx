import { Suspense } from 'react'
import type { Metadata } from 'next'
import { products } from '@/data/products'
import { ProductCategory } from '@/types'
import { ShopContent } from './ShopContent'

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Full-grain leather jackets, bags, wallets, belts, and accessories. Handcrafted for those who endure.',
}

interface ShopPageProps {
  searchParams: { category?: string; sort?: string }
}

function getFilteredProducts(category?: string, sort?: string) {
  let result = [...products]

  if (category && category !== 'all') {
    result = result.filter((p) => p.category === (category as ProductCategory))
  }

  switch (sort) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      result.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      result.sort((a, b) => b.rating - a.rating)
      break
    default:
      result.sort((a, b) => {
        if (a.isFeatured && !b.isFeatured) return -1
        if (!a.isFeatured && b.isFeatured) return 1
        if (a.isBestSeller && !b.isBestSeller) return -1
        if (!a.isBestSeller && b.isBestSeller) return 1
        return 0
      })
  }

  return result
}

export default function ShopPage({ searchParams }: ShopPageProps) {
  const { category, sort } = searchParams
  const filtered = getFilteredProducts(category, sort)

  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-28 min-h-screen">
      {/* Page header */}
      <div className="container-luxury mb-12 md:mb-14">
        <div className="border-b border-white/8 pb-10">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-4">
            The Collection
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-cream">
            {category && category !== 'all'
              ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')
              : 'All Products'}
          </h1>
          {(!category || category === 'all') && (
            <p className="font-sans text-sm text-cream/50 mt-3 max-w-lg leading-relaxed">
              Every piece hand-cut, hand-stitched, and built from the finest full-grain and shell
              cordovan leathers available.
            </p>
          )}
        </div>
      </div>

      <div className="container-luxury">
        <Suspense fallback={null}>
          <ShopContent
            products={filtered}
            activeCategory={category || 'all'}
            activeSort={sort || 'featured'}
          />
        </Suspense>
      </div>
    </div>
  )
}
