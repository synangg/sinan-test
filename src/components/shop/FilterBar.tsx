'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ProductCategory } from '@/types'
import { SlidersHorizontal } from 'lucide-react'
import { useLang } from '@/context/LanguageContext'

interface FilterBarProps {
  activeCategory: string
  activeSort: string
  resultCount: number
}

export function FilterBar({ activeCategory, activeSort, resultCount }: FilterBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t } = useLang()
  const s = t.shop

  const categories: { label: string; value: ProductCategory | 'all' }[] = [
    { label: s.categories.all, value: 'all' },
    { label: s.categories['ham-deri'], value: 'ham-deri' },
    { label: s.categories['canta'], value: 'canta' },
    { label: s.categories['cuzdan'], value: 'cuzdan' },
    { label: s.categories['kemer'], value: 'kemer' },
  ]

  const sortOptions = [
    { label: s.sort.featured, value: 'featured' },
    { label: s.sort['price-asc'], value: 'price-asc' },
    { label: s.sort['price-desc'], value: 'price-desc' },
    { label: s.sort.rating, value: 'rating' },
  ]

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

      <div className="flex items-center justify-between gap-4">
        <p className="font-sans text-xs text-cream/30">
          {resultCount} {s.products}
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
