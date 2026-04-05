'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Star } from 'lucide-react'
import { Product } from '@/types'
import { useCart } from '@/context/CartContext'
import { useLang } from '@/context/LanguageContext'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { t, lang } = useLang()
  const [imageIndex, setImageIndex] = useState(0)
  const [adding, setAdding] = useState(false)

  const displayName = lang === 'en' && product.nameEn ? product.nameEn : product.name
  const displayDesc = lang === 'en' && product.shortDescriptionEn ? product.shortDescriptionEn : product.shortDescription

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    setAdding(true)
    addItem(product, 1, product.variants.colors?.[0]?.name, product.variants.sizes?.[0])
    await new Promise((r) => setTimeout(r, 600))
    setAdding(false)
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      {/* Image container */}
      <div
        className="relative overflow-hidden aspect-[3/4] bg-[#141210] mb-4"
        onMouseEnter={() => product.images[1] && setImageIndex(1)}
        onMouseLeave={() => setImageIndex(0)}
      >
        {/* Product image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            imageIndex === 0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <PlaceholderImage
            src={product.images[0]}
            alt={product.name}
            fill
            gradientFrom="from-stone-900"
            gradientTo="to-amber-950/50"
          />
        </div>

        {/* Second image on hover */}
        {product.images[1] && (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              imageIndex === 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <PlaceholderImage
              src={product.images[1]}
              alt={`${product.name} — alternate view`}
              fill
              gradientFrom="from-amber-950"
              gradientTo="to-stone-900"
            />
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.isBestSeller && (
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase bg-gold text-obsidian px-2 py-1 font-semibold">
              {t.product.bestSeller}
            </span>
          )}
          {discount && (
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase bg-cream text-obsidian px-2 py-1 font-semibold">
              −{discount}%
            </span>
          )}
        </div>

        {/* Quick add button */}
        <motion.button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-gold text-obsidian font-sans font-semibold text-[10px] tracking-[0.25em] uppercase py-3.5 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
          aria-label={`Add ${product.name} to cart`}
        >
          {adding ? (
            <span className="w-3 h-3 border border-obsidian/30 border-t-obsidian rounded-full animate-spin" />
          ) : (
            <>
              <ShoppingBag size={12} />
              {t.product.quickAdd}
            </>
          )}
        </motion.button>

        {/* Color dots */}
        {product.variants.colors && product.variants.colors.length > 1 && (
          <div className="absolute bottom-14 left-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {product.variants.colors.map((color) => (
              <span
                key={color.name}
                className="w-3 h-3 rounded-full border border-white/20"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-base text-cream group-hover:text-gold transition-colors duration-300 leading-tight">
            {displayName}
          </h3>
        </div>
        <p className="font-sans text-xs text-cream/40 leading-relaxed line-clamp-2">
          {displayDesc}
        </p>
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <span className="font-sans text-sm text-cream font-medium">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="font-sans text-xs text-cream/30 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Star size={10} className="text-gold fill-gold" />
            <span className="font-sans text-xs text-cream/40">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
