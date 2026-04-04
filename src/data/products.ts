import { Product, Testimonial } from '@/types'

export const products: Product[] = [
  {
    id: '001',
    name: 'Midnight Moto Jacket',
    slug: 'midnight-moto-jacket',
    category: 'jackets',
    price: 485,
    shortDescription:
      'Full-grain cowhide moto jacket with asymmetric zip closure. Built to age with you.',
    longDescription:
      'The Midnight Moto Jacket is the cornerstone of the BLACKHIDE collection. Cut from a single hide of full-grain cowhide, each jacket carries the natural markings and character of the leather. The asymmetric zip closure, snap-button lapels, and quilted shoulder panels are finished entirely by hand. This jacket does not soften with dry heat — it earns its shape through wear, developing a patina unique to its owner.',
    materials: ['Full-grain cowhide leather', 'Solid brass hardware', 'Viscose lining'],
    dimensions: 'Available in S, M, L, XL, XXL',
    weight: '1.8 kg',
    images: [
      '/images/products/midnight-moto-jacket-01.jpg',
      '/images/products/midnight-moto-jacket-02.jpg',
      '/images/products/midnight-moto-jacket-03.jpg',
    ],
    variants: {
      colors: [
        { name: 'Midnight Black', hex: '#0D0D0D' },
        { name: 'Cognac', hex: '#8B4513' },
        { name: 'Slate Brown', hex: '#4A3728' },
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    tags: ['jacket', 'moto', 'bestseller', 'full-grain'],
    isBestSeller: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 284,
    careInstructions:
      'Apply leather conditioner every 3–6 months. Avoid prolonged moisture. Store on a padded hanger.',
  },
  {
    id: '002',
    name: 'Heritage Duffle',
    slug: 'heritage-duffle',
    category: 'duffle-bags',
    price: 345,
    shortDescription:
      'A weekend bag built for decades of travel. Full-grain leather with solid brass fittings.',
    longDescription:
      'The Heritage Duffle is a study in restraint. The main compartment holds a weekend\'s worth of clothing with room to spare. Internal organization keeps essentials accessible. The rolled leather handles and removable shoulder strap distribute weight naturally. Every seam is saddle-stitched with waxed linen thread — a technique unchanged for centuries because it works. This bag will outlive your passport.',
    materials: ['Full-grain vegetable-tanned leather', 'Solid brass hardware', 'Cotton canvas lining'],
    dimensions: '56cm × 28cm × 28cm',
    weight: '1.2 kg',
    images: [
      '/images/products/heritage-duffle-01.jpg',
      '/images/products/heritage-duffle-02.jpg',
      '/images/products/heritage-duffle-03.jpg',
    ],
    variants: {
      colors: [
        { name: 'Dark Tan', hex: '#8B6914' },
        { name: 'Mahogany', hex: '#5C1F0A' },
        { name: 'Midnight Black', hex: '#0D0D0D' },
      ],
    },
    tags: ['duffle', 'travel', 'weekend bag', 'full-grain'],
    isBestSeller: true,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 197,
    careInstructions:
      'Condition with pure neatsfoot oil twice yearly. Spot clean with a damp cloth. Allow to dry naturally away from direct heat.',
  },
  {
    id: '003',
    name: 'Cordovan Bifold',
    slug: 'cordovan-bifold',
    category: 'wallets',
    price: 125,
    originalPrice: 160,
    shortDescription:
      'Shell cordovan bifold wallet. Eight card slots, two cash pockets. Will last a lifetime.',
    longDescription:
      'Shell cordovan is the finest leather in the world — a non-porous, dense material cut from the rump of the horse. Unlike corrected-grain leathers, cordovan develops a mirror-like patina over years of use rather than cracking or peeling. The Cordovan Bifold features eight card slots, two full-length cash pockets, and an ID window. Slim enough for a front pocket from day one.',
    materials: ['Horween Shell Cordovan', 'Linen thread stitching'],
    dimensions: '11cm × 9.5cm × 1cm (flat)',
    weight: '65g',
    images: [
      '/images/products/cordovan-bifold-01.jpg',
      '/images/products/cordovan-bifold-02.jpg',
    ],
    variants: {
      colors: [
        { name: 'Colour 8 (Oxblood)', hex: '#4A0E0E' },
        { name: 'Natural', hex: '#C8956A' },
        { name: 'Black', hex: '#1A1A1A' },
      ],
    },
    tags: ['wallet', 'bifold', 'cordovan', 'slim'],
    isBestSeller: true,
    isFeatured: false,
    rating: 5.0,
    reviewCount: 412,
    careInstructions:
      'Polish with a horsehair brush. Apply cordovan cream sparingly every 6 months. Never use wax polish.',
  },
  {
    id: '004',
    name: 'Garrison Belt',
    slug: 'garrison-belt',
    category: 'belts',
    price: 95,
    shortDescription:
      'One-piece full-grain leather dress belt. Solid brass roller buckle. Cut to order.',
    longDescription:
      'The Garrison Belt is cut from a single piece of full-grain leather — no layers, no lamination, no compromise. The solid brass roller buckle is hand-set with a secure screw post. Available in half-inch size increments for a perfect fit. The leather is thick enough to hold its shape but supple enough from the first wear. Available in 1.25" and 1.5" widths for dress and casual wear respectively.',
    materials: ['Full-grain Hermann Oak leather', 'Solid brass roller buckle'],
    dimensions: 'Cut to order — specify waist size at checkout',
    weight: '280g',
    images: [
      '/images/products/garrison-belt-01.jpg',
      '/images/products/garrison-belt-02.jpg',
    ],
    variants: {
      colors: [
        { name: 'Dark Havana', hex: '#3D1F0A' },
        { name: 'Saddle Tan', hex: '#A0622A' },
        { name: 'Black', hex: '#1A1A1A' },
      ],
      sizes: ['28"', '30"', '32"', '34"', '36"', '38"', '40"', '42"', '44"'],
    },
    tags: ['belt', 'dress', 'full-grain', 'made-to-order'],
    isBestSeller: false,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 156,
    careInstructions:
      'Apply leather conditioner twice yearly. Avoid prolonged contact with water.',
  },
  {
    id: '005',
    name: 'Nomad Messenger',
    slug: 'nomad-messenger',
    category: 'bags',
    price: 275,
    shortDescription:
      'Full-grain leather messenger bag with an adjustable strap and magnetic closure.',
    longDescription:
      'Built for the daily commute and the cross-continental journey alike, the Nomad Messenger carries a 15" laptop, documents, and daily essentials with ease. The magnetic front flap conceals two secondary pockets. The padded laptop compartment protects your tech. The solid brass D-ring and sliding shoulder pad make it the most comfortable bag you will carry. The leather will only get better.',
    materials: ['Full-grain pull-up leather', 'Solid brass hardware', 'Padded laptop compartment'],
    dimensions: '40cm × 30cm × 10cm',
    weight: '900g',
    images: [
      '/images/products/nomad-messenger-01.jpg',
      '/images/products/nomad-messenger-02.jpg',
    ],
    variants: {
      colors: [
        { name: 'Chestnut', hex: '#6B3A2A' },
        { name: 'Black', hex: '#1A1A1A' },
      ],
    },
    tags: ['messenger', 'bag', 'laptop', 'daily carry'],
    isBestSeller: false,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 88,
    careInstructions:
      'Condition every 3 months. The pull-up effect means light scratches buff out with a thumb.',
  },
  {
    id: '006',
    name: 'Slim Card Sleeve',
    slug: 'slim-card-sleeve',
    category: 'card-holders',
    price: 65,
    shortDescription:
      'Holds 4–8 cards and cash. Shell cordovan construction. Fits any front pocket.',
    longDescription:
      'When you want nothing but your cards and a little cash, the Slim Card Sleeve is the answer. Two outer card pockets fan your cards for quick access. The center slot holds folded notes flat. At 4mm thick when loaded, it disappears into any pocket. Hand-stitched from the same Horween Shell Cordovan as our flagship wallet, it will develop the same legendary patina over the years.',
    materials: ['Horween Shell Cordovan', 'Waxed linen thread'],
    dimensions: '10cm × 7cm × 0.4cm (loaded)',
    weight: '28g',
    images: [
      '/images/products/slim-card-sleeve-01.jpg',
      '/images/products/slim-card-sleeve-02.jpg',
    ],
    variants: {
      colors: [
        { name: 'Colour 8 (Oxblood)', hex: '#4A0E0E' },
        { name: 'Natural', hex: '#C8956A' },
        { name: 'Whiskey', hex: '#C47B2B' },
      ],
    },
    tags: ['card holder', 'slim', 'minimalist', 'cordovan'],
    isBestSeller: true,
    isFeatured: false,
    rating: 4.9,
    reviewCount: 331,
    careInstructions:
      'Brush with a horsehair brush. Polish with cordovan cream to maintain lustre.',
  },
  {
    id: '007',
    name: 'Navigator Tote',
    slug: 'navigator-tote',
    category: 'bags',
    price: 295,
    originalPrice: 340,
    shortDescription:
      'Open-top tote in vegetable-tanned leather. Structured base, open interior, two side pockets.',
    longDescription:
      'The Navigator Tote is for those who carry everything and want it to look intentional. The structured leather base maintains the bag\'s shape regardless of how full it is. The vegetable-tanned leather starts stiff and pale, darkening and softening with every day of carry. Two interior slip pockets keep small items from getting lost. The wide top handles are double-stitched and reinforced at the attachment points. A bag that rewards daily use.',
    materials: ['Vegetable-tanned Hermann Oak leather', 'Solid brass rivets', 'Linen canvas lining'],
    dimensions: '38cm × 30cm × 14cm',
    weight: '1.1 kg',
    images: [
      '/images/products/navigator-tote-01.jpg',
      '/images/products/navigator-tote-02.jpg',
    ],
    variants: {
      colors: [
        { name: 'Natural Veg Tan', hex: '#D4A86A' },
        { name: 'Dark Chestnut', hex: '#5C3018' },
      ],
    },
    tags: ['tote', 'bag', 'everyday', 'vegetable-tanned'],
    isBestSeller: false,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 74,
    careInstructions:
      'Veg-tan leather darkens naturally with exposure to sunlight and use. Condition with natural beeswax.',
  },
  {
    id: '008',
    name: 'Expedition Passport Wallet',
    slug: 'expedition-passport-wallet',
    category: 'accessories',
    price: 115,
    shortDescription:
      'Holds a passport, 6 cards, boarding passes, and cash. Full-grain leather.',
    longDescription:
      'Everything you need at the airport, nothing you don\'t. The Expedition Passport Wallet holds a full-size passport flat against the back panel. Six card slots fan across the front. A wide slot holds boarding passes, SIM cards, and folded currency. A pen loop on the spine keeps a slim pen accessible. The full-grain cowhide construction means it gets better every trip. The passport holder that travels as hard as you do.',
    materials: ['Full-grain cowhide', 'Solid brass pen holder loop', 'Linen stitching'],
    dimensions: '14cm × 10cm × 1.5cm',
    weight: '120g',
    images: [
      '/images/products/expedition-passport-01.jpg',
      '/images/products/expedition-passport-02.jpg',
    ],
    variants: {
      colors: [
        { name: 'Dark Tan', hex: '#8B6914' },
        { name: 'Black', hex: '#1A1A1A' },
        { name: 'Cognac', hex: '#8B4513' },
      ],
    },
    tags: ['passport', 'travel', 'accessory', 'full-grain'],
    isBestSeller: false,
    isFeatured: false,
    rating: 4.8,
    reviewCount: 143,
    careInstructions:
      'Wipe clean with a damp cloth. Apply leather balm to keep supple during long trips.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    author: 'James R.',
    location: 'New York, USA',
    rating: 5,
    comment:
      'I have owned a lot of leather jackets. The Midnight Moto is in another category entirely. Six months in and it fits like it was made for me. The hardware is solid, the leather is thick, and the stitching is flawless. Worth every cent.',
    product: 'Midnight Moto Jacket',
    date: '2024-11-12',
    verified: true,
  },
  {
    id: 't2',
    author: 'Marcus T.',
    location: 'London, UK',
    rating: 5,
    comment:
      'The Heritage Duffle has been on three continents with me. The leather has darkened beautifully and the stitching looks as tight as the day it arrived. This is what "investment piece" actually means.',
    product: 'Heritage Duffle',
    date: '2024-10-03',
    verified: true,
  },
  {
    id: 't3',
    author: 'Daniel K.',
    location: 'Berlin, Germany',
    rating: 5,
    comment:
      'Two years with the Cordovan Bifold and it is developing the most insane mirror patina. My grandfather carried a shell cordovan wallet until he died. Now I understand why.',
    product: 'Cordovan Bifold',
    date: '2025-01-20',
    verified: true,
  },
  {
    id: 't4',
    author: 'Oliver M.',
    location: 'Sydney, Australia',
    rating: 5,
    comment:
      'The craftsmanship is extraordinary. Every detail considered, nothing wasted. BLACKHIDE makes things that are meant to last — and they do.',
    product: 'Garrison Belt',
    date: '2025-02-08',
    verified: true,
  },
]

export const collections = [
  {
    name: 'Jackets',
    slug: 'jackets',
    description: 'Full-grain leather jackets built for a lifetime.',
    image: '/images/collections/jackets.jpg',
    count: 3,
  },
  {
    name: 'Bags',
    slug: 'bags',
    description: 'Structured leather bags for every journey.',
    image: '/images/collections/bags.jpg',
    count: 5,
  },
  {
    name: 'Wallets & Cardholders',
    slug: 'wallets',
    description: 'Shell cordovan and full-grain essentials.',
    image: '/images/collections/wallets.jpg',
    count: 4,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit)
    .concat(
      products
        .filter((p) => p.id !== product.id && p.category !== product.category)
        .slice(0, Math.max(0, limit - products.filter((p) => p.id !== product.id && p.category === product.category).length))
    )
    .slice(0, limit)
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured)
}
