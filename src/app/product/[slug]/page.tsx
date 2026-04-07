import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products, getProductBySlug, getRelatedProducts } from '@/data/products'
import { ProductGallery } from '@/components/product/ProductGallery'
import { ProductInfo } from '@/components/product/ProductInfo'
import { RelatedProducts } from '@/components/product/RelatedProducts'

interface ProductPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: 'Product Not Found' }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | MASTERLEATHER`,
      description: product.shortDescription,
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = getRelatedProducts(product, 4)

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Breadcrumb */}
      <div className="container-luxury py-4 border-b border-white/5">
        <nav className="flex items-center gap-2 font-sans text-xs text-cream/30" aria-label="Breadcrumb">
          <a href="/" className="hover:text-cream/60 transition-colors">Home</a>
          <span>/</span>
          <a href="/shop" className="hover:text-cream/60 transition-colors">Shop</a>
          <span>/</span>
          <span className="text-cream/50">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <div className="container-luxury py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>

        {/* Long description */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-white/8 max-w-2xl">
          <h2 className="font-serif text-2xl text-cream mb-5">About This Piece</h2>
          <p className="font-sans text-sm text-cream/60 leading-loose">{product.longDescription}</p>
        </div>
      </div>

      <RelatedProducts products={related} />
    </div>
  )
}
