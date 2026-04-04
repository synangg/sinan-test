'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/context/CartContext'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function CartDrawer() {
  const { items, isOpen, itemCount, subtotal, removeItem, updateQuantity, closeCart } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#141210] flex flex-col shadow-2xl"
            role="dialog"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} className="text-gold" />
                <span className="font-serif text-lg text-cream">
                  Your Cart
                  {itemCount > 0 && (
                    <span className="ml-2 font-sans text-sm text-cream/40">({itemCount})</span>
                  )}
                </span>
              </div>
              <button
                onClick={closeCart}
                className="text-cream/40 hover:text-cream transition-colors p-1"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
                  <ShoppingBag size={48} className="text-cream/10" />
                  <div>
                    <p className="font-serif text-xl text-cream/50 mb-2">Your cart is empty</p>
                    <p className="font-sans text-sm text-cream/30">
                      Discover pieces built to last a lifetime.
                    </p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="font-sans text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors flex items-center gap-2"
                  >
                    Browse Collection <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li
                      key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                      className="flex gap-4 pb-6 border-b border-white/5 last:border-0"
                    >
                      {/* Image */}
                      <div className="relative w-20 h-24 flex-shrink-0 overflow-hidden bg-obsidian-50">
                        <PlaceholderImage
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <p className="font-serif text-sm text-cream leading-tight">
                              {item.product.name}
                            </p>
                            {item.selectedColor && (
                              <p className="font-sans text-xs text-cream/40 mt-0.5">
                                {item.selectedColor}
                              </p>
                            )}
                            {item.selectedSize && (
                              <p className="font-sans text-xs text-cream/40">
                                Size: {item.selectedSize}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() =>
                              removeItem(item.product.id, item.selectedColor, item.selectedSize)
                            }
                            className="text-cream/20 hover:text-cream/60 transition-colors flex-shrink-0 mt-0.5"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-3">
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
                              className="w-8 h-8 flex items-center justify-center text-cream/60 hover:text-cream hover:bg-white/5 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-8 text-center font-sans text-xs text-cream">
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
                              className="w-8 h-8 flex items-center justify-center text-cream/60 hover:text-cream hover:bg-white/5 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          {/* Price */}
                          <span className="font-sans text-sm text-cream font-medium">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-white/8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-cream/60">Subtotal</span>
                  <span className="font-serif text-xl text-cream">${subtotal.toFixed(2)}</span>
                </div>
                <p className="font-sans text-xs text-cream/30">
                  Shipping calculated at checkout. Free on orders over $150.
                </p>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="block w-full bg-gold text-obsidian text-center font-sans font-semibold text-xs tracking-[0.25em] uppercase py-4 hover:bg-gold-light transition-colors duration-300"
                >
                  View Cart & Checkout
                </Link>
                <button
                  onClick={closeCart}
                  className="block w-full text-center font-sans text-xs tracking-[0.2em] uppercase text-cream/40 hover:text-cream transition-colors py-1"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  )
}
