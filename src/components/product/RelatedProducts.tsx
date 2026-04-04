import { Product } from '@/types'
import { ProductCard } from '@/components/shop/ProductCard'
import { SectionTitle } from '@/components/ui/SectionTitle'

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section className="py-16 md:py-20 border-t border-white/8">
      <div className="container-luxury">
        <SectionTitle
          label="You May Also Like"
          title="Complete the Collection"
          align="left"
          titleSize="sm"
          className="mb-10"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
