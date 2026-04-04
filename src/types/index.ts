export type ProductCategory =
  | 'jackets'
  | 'bags'
  | 'wallets'
  | 'belts'
  | 'duffle-bags'
  | 'card-holders'
  | 'accessories'

export interface ProductColor {
  name: string
  hex: string
}

export interface ProductVariants {
  colors?: ProductColor[]
  sizes?: string[]
}

export interface Product {
  id: string
  name: string
  slug: string
  category: ProductCategory
  price: number
  originalPrice?: number
  shortDescription: string
  longDescription: string
  materials: string[]
  dimensions?: string
  weight?: string
  images: string[]
  variants: ProductVariants
  tags: string[]
  isBestSeller: boolean
  isFeatured: boolean
  rating: number
  reviewCount: number
  careInstructions?: string
}

export interface CartItem {
  product: Product
  quantity: number
  selectedColor?: string
  selectedSize?: string
}

export interface Testimonial {
  id: string
  author: string
  location: string
  rating: number
  comment: string
  product: string
  date: string
  verified: boolean
}
