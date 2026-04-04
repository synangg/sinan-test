'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnail strip */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:max-h-[600px] pb-2 md:pb-0 md:w-20 flex-shrink-0">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`relative flex-shrink-0 w-16 md:w-full aspect-square overflow-hidden border-2 transition-all duration-300 ${
              i === activeIndex ? 'border-gold' : 'border-transparent hover:border-cream/20'
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <PlaceholderImage
              src={img}
              alt={`${productName} view ${i + 1}`}
              fill
              gradientFrom="from-stone-900"
              gradientTo="to-amber-950/40"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-[#141210] group">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <PlaceholderImage
              src={images[activeIndex]}
              alt={`${productName} — image ${activeIndex + 1}`}
              fill
              priority={activeIndex === 0}
              gradientFrom="from-stone-900"
              gradientTo="to-amber-950/60"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-obsidian/60 backdrop-blur-sm flex items-center justify-center text-cream/60 hover:text-cream hover:bg-obsidian/90 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-obsidian/60 backdrop-blur-sm flex items-center justify-center text-cream/60 hover:text-cream hover:bg-obsidian/90 transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 ${
                  i === activeIndex ? 'w-4 h-0.5 bg-gold' : 'w-1.5 h-0.5 bg-cream/30'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
