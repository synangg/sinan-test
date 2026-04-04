'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ProductCategory } from '@/types'
import { SlidersHorizontal } from 'lucide-react'

const categories: { label: string; value: ProductCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Jackets', value: 'jackets' },
  { label: 'Bags', value: 'bags' },
  { label: 'Duffle Bags', value: 'duffle-bags' },
  { label: 'Wallets', value: 'wallets' },
  { label: 'Belts', value: 'belts' },
  { label: 'Card Holders', value: 'card-holders' },
  { label: 'Accessories', value: 'accessories' },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

interface FilterBarProps {
  activeCategory: string
  activeSort: string
  resultCount: number
}

export function FilterBar({ activeCategory, activeSort, resultCount }: FilterBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'all' || value === 'featured') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    router.push(`/shop?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="border-b border-white/5 pb-6 mb-10">
      {/* Category pills */}
      <div className="flex items-center gap-2 flex-wrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => updateParam('category', cat.value)}
            className={`font-sans text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 ${
              (cat.value === 'all' && !activeCategory) || activeCategory === cat.value
                ? 'border-gold bg-gold/10 text-gold'
                : 'border-white/10 text-cream/50 hover:border-white/30 hover:text-cream'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sort + count row */}
      <div className="flex items-center justify-between gap-4">
        <p className="font-sans text-xs text-cream/30">
          {resultCount} {resultCount === 1 ? 'product' : 'products'}
        </p>

        <div className="flex items-center gap-2">
          <SlidersHorizontal size={14} className="text-cream/30" />
          <select
            value={activeSort || 'featured'}
            onChange={(e) => updateParam('sort', e.target.value)}
            className="bg-transparent border-0 font-sans text-xs tracking-[0.15em] uppercase text-cream/50 hover:text-cream focus:outline-none cursor-pointer appearance-none pr-4"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-obsidian text-cream">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
