'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Star, Truck, RotateCcw, Shield, ChevronDown } from 'lucide-react'
import { Product } from '@/types'
import { useCart } from '@/context/CartContext'

interface ProductInfoProps {
  product: Product
}

const accordionItems = [
  {
    id: 'materials',
    label: 'Materials & Construction',
  },
  {
    id: 'shipping',
    label: 'Shipping & Returns',
    content: 'Free shipping on all orders over $150. Standard delivery 3–7 business days. Express available at checkout. Free returns within 30 days — no questions asked.',
  },
  {
    id: 'care',
    label: 'Leather Care',
  },
]

export function ProductInfo({ product }: ProductInfoProps) {
  const { addItem } = useCart()
  const [selectedColor, setSelectedColor] = useState(product.variants.colors?.[0]?.name)
  const [selectedSize, setSelectedSize] = useState(product.variants.sizes?.[0])
  const [quantity, setQuantity] = useState(1)
  const [adding, setAdding] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null

  const handleAddToCart = async () => {
    setAdding(true)
    addItem(product, quantity, selectedColor, selectedSize)
    await new Promise((r) => setTimeout(r, 600))
    setAdding(false)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold">
            {product.category.replace('-', ' ')}
          </span>
          {product.isBestSeller && (
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase bg-gold text-obsidian px-2 py-0.5 font-semibold">
              Best Seller
            </span>
          )}
        </div>
        <h1 className="font-serif text-3xl md:text-4xl text-cream leading-tight mb-4">
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={13}
                className={
                  i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-cream/20'
                }
              />
            ))}
          </div>
          <span className="font-sans text-sm text-cream/50">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3 pb-6 border-b border-white/8">
        <span className="font-serif text-3xl text-cream">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <>
            <span className="font-sans text-base text-cream/30 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className="font-sans text-xs bg-gold/15 text-gold px-2 py-0.5 tracking-widest uppercase">
              Save {discount}%
            </span>
          </>
        )}
      </div>

      {/* Short description */}
      <p className="font-sans text-sm text-cream/60 leading-relaxed">{product.shortDescription}</p>

      {/* Color selector */}
      {product.variants.colors && product.variants.colors.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs tracking-[0.15em] uppercase text-cream/50">
              Colour
            </span>
            <span className="font-sans text-xs text-cream">{selectedColor}</span>
          </div>
          <div className="flex gap-2">
            {product.variants.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`relative w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                  selectedColor === color.name
                    ? 'border-gold scale-110'
                    : 'border-transparent hover:border-cream/30'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
                aria-label={color.name}
              >
                {selectedColor === color.name && (
                  <span className="absolute inset-0 rounded-full ring-1 ring-offset-2 ring-offset-obsidian ring-gold" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size selector */}
      {product.variants.sizes && product.variants.sizes.length > 0 && (
        <div className="space-y-3">
          <span className="font-sans text-xs tracking-[0.15em] uppercase text-cream/50 block">
            Size
          </span>
          <div className="flex flex-wrap gap-2">
            {product.variants.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[48px] px-3 py-2 border font-sans text-xs tracking-wider transition-all duration-300 ${
                  selectedSize === size
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-white/10 text-cream/60 hover:border-cream/40 hover:text-cream'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity + Add to Cart */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex items-center border border-white/10">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-12 h-12 flex items-center justify-center text-cream/60 hover:text-cream hover:bg-white/5 transition-colors text-lg"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-12 text-center font-sans text-sm text-cream">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-12 h-12 flex items-center justify-center text-cream/60 hover:text-cream hover:bg-white/5 transition-colors text-lg"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={adding}
          className="flex-1 flex items-center justify-center gap-3 bg-gold text-obsidian font-sans font-semibold text-xs tracking-[0.25em] uppercase py-4 hover:bg-gold-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
        >
          {adding ? (
            <span className="w-4 h-4 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin" />
          ) : (
            <>
              <ShoppingBag size={14} />
              Add to Cart
            </>
          )}
        </button>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-3 pt-2">
        {[
          { icon: Truck, label: 'Free shipping $150+' },
          { icon: RotateCcw, label: '30-day returns' },
          { icon: Shield, label: 'Lifetime repairs' },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1.5 text-center">
            <Icon size={14} className="text-gold" />
            <span className="font-sans text-[9px] tracking-wider uppercase text-cream/30 leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Accordion */}
      <div className="border-t border-white/8 space-y-0">
        {/* Materials */}
        <div className="border-b border-white/8">
          <button
            onClick={() => setOpenAccordion(openAccordion === 'materials' ? null : 'materials')}
            className="flex items-center justify-between w-full py-4 text-left"
          >
            <span className="font-sans text-xs tracking-[0.15em] uppercase text-cream/70">
              Materials & Construction
            </span>
            <ChevronDown
              size={14}
              className={`text-cream/40 transition-transform duration-300 ${
                openAccordion === 'materials' ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openAccordion === 'materials' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pb-5 space-y-2">
                  {product.materials.map((m) => (
                    <div key={m} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      <span className="font-sans text-sm text-cream/60">{m}</span>
                    </div>
                  ))}
                  {product.dimensions && (
                    <p className="font-sans text-sm text-cream/60 mt-3">
                      <span className="text-cream/40">Dimensions: </span>
                      {product.dimensions}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Shipping */}
        <div className="border-b border-white/8">
          <button
            onClick={() => setOpenAccordion(openAccordion === 'shipping' ? null : 'shipping')}
            className="flex items-center justify-between w-full py-4 text-left"
          >
            <span className="font-sans text-xs tracking-[0.15em] uppercase text-cream/70">
              Shipping & Returns
            </span>
            <ChevronDown
              size={14}
              className={`text-cream/40 transition-transform duration-300 ${
                openAccordion === 'shipping' ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openAccordion === 'shipping' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="font-sans text-sm text-cream/60 pb-5 leading-relaxed">
                  Free shipping on all orders over $150. Standard delivery 3–7 business days.
                  Express available at checkout. Free returns within 30 days — no questions asked.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Care */}
        {product.careInstructions && (
          <div className="border-b border-white/8">
            <button
              onClick={() => setOpenAccordion(openAccordion === 'care' ? null : 'care')}
              className="flex items-center justify-between w-full py-4 text-left"
            >
              <span className="font-sans text-xs tracking-[0.15em] uppercase text-cream/70">
                Leather Care
              </span>
              <ChevronDown
                size={14}
                className={`text-cream/40 transition-transform duration-300 ${
                  openAccordion === 'care' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {openAccordion === 'care' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="font-sans text-sm text-cream/60 pb-5 leading-relaxed">
                    {product.careInstructions}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}
