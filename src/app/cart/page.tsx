'use client'

import Link from 'next/link'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { motion, AnimatePresence } from 'framer-motion'

export default function CartPage() {
  const { items, subtotal, removeItem, updateQuantity, clearCart } = useCart()

  const shipping = subtotal >= 150 ? 0 : 12.99
  const total = subtotal + shipping

  return (
    <div className="pt-24 md:pt-28 pb-20 md:pb-28 min-h-screen">
      {/* Header */}
      <div className="container-luxury py-10 border-b border-white/8">
        <h1 className="font-serif text-3xl md:text-4xl text-cream">Your Cart</h1>
        {items.length > 0 && (
          <p className="font-sans text-sm text-cream/40 mt-2">
            {items.reduce((s, i) => s + i.quantity, 0)} item
            {items.reduce((s, i) => s + i.quantity, 0) !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      <div className="container-luxury py-10 md:py-14">
        {items.length === 0 ? (
          <div className="text-center py-20 flex flex-col items-center gap-6">
            <ShoppingBag size={56} className="text-cream/10" />
            <div>
              <h2 className="font-serif text-2xl text-cream/40 mb-2">Your cart is empty</h2>
              <p className="font-sans text-sm text-cream/25">
                Discover handcrafted leather goods built to last.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-obsidian font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-300"
            >
              <ArrowLeft size={13} />
              Browse Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Items */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-cream/40 hover:text-cream transition-colors"
                >
                  <ArrowLeft size={12} />
                  Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="font-sans text-xs text-cream/25 hover:text-cream/60 transition-colors uppercase tracking-wider"
                >
                  Clear Cart
                </button>
              </div>

              <ul className="space-y-6">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.li
                      key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-5 pb-6 border-b border-white/8 last:border-0"
                    >
                      {/* Image */}
                      <div className="relative w-24 h-28 md:w-28 md:h-32 flex-shrink-0 overflow-hidden bg-[#141210]">
                        <PlaceholderImage
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          gradientFrom="from-stone-900"
                          gradientTo="to-amber-950/40"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <Link
                              href={`/product/${item.product.slug}`}
                              className="font-serif text-base text-cream hover:text-gold transition-colors leading-tight block"
                            >
                              {item.product.name}
                            </Link>
                            <div className="mt-1 space-y-0.5">
                              {item.selectedColor && (
                                <p className="font-sans text-xs text-cream/40">
                                  {item.selectedColor}
                                </p>
                              )}
                              {item.selectedSize && (
                                <p className="font-sans text-xs text-cream/40">
                                  Size: {item.selectedSize}
                                </p>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() =>
                              removeItem(item.product.id, item.selectedColor, item.selectedSize)
                            }
                            className="text-cream/20 hover:text-cream/60 transition-colors flex-shrink-0"
                            aria-label="Remove"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity */}
                          <div className="flex items-center border border-white/10">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1,
                                  item.selectedColor,
                                  item.selectedSize
                                )
                              }
                              className="w-9 h-9 flex items-center justify-center text-cream/50 hover:text-cream hover:bg-white/5 transition-colors"
                              aria-label="Decrease"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-9 text-center font-sans text-xs text-cream">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1,
                                  item.selectedColor,
                                  item.selectedSize
                                )
                              }
                              className="w-9 h-9 flex items-center justify-center text-cream/50 hover:text-cream hover:bg-white/5 transition-colors"
                              aria-label="Increase"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          <span className="font-sans text-sm text-cream font-medium">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>

            {/* Order summary */}
            <div>
              <div className="bg-[#141210] border border-white/8 p-6 md:p-8 sticky top-28">
                <h2 className="font-serif text-xl text-cream mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-sans text-sm text-cream/50">Subtotal</span>
                    <span className="font-sans text-sm text-cream">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans text-sm text-cream/50">Shipping</span>
                    <span className="font-sans text-sm text-cream">
                      {shipping === 0 ? (
                        <span className="text-gold">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="font-sans text-xs text-cream/30">
                      Add ${(150 - subtotal).toFixed(2)} more for free shipping
                    </p>
                  )}
                </div>

                <div className="border-t border-white/8 pt-4 mb-6">
                  <div className="flex justify-between items-baseline">
                    <span className="font-sans text-sm text-cream/70">Total</span>
                    <span className="font-serif text-2xl text-cream">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo code */}
                <div className="flex gap-0 mb-6">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 bg-obsidian border border-white/10 px-4 py-3 text-cream placeholder:text-cream/20 font-sans text-xs focus:outline-none focus:border-gold/50 transition-colors"
                  />
                  <button className="px-4 border border-l-0 border-white/10 font-sans text-xs tracking-widest uppercase text-cream/50 hover:text-cream hover:border-cream/30 transition-all">
                    Apply
                  </button>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-gold text-obsidian font-sans font-semibold text-xs tracking-[0.25em] uppercase py-4 hover:bg-gold-light transition-all duration-300 active:scale-[0.98]">
                  Proceed to Checkout
                  <ArrowRight size={13} />
                </button>

                <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
                  {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((brand) => (
                    <span
                      key={brand}
                      className="font-sans text-[9px] tracking-wider uppercase text-cream/20"
                    >
                      {brand}
                    </span>
                  ))}
                </div>

                <p className="font-sans text-[10px] text-cream/20 text-center mt-3 leading-relaxed">
                  30-day free returns · Secure checkout · Lifetime repairs
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
