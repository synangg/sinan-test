import { Hero } from '@/components/home/Hero'
import { FeaturedCollections } from '@/components/home/FeaturedCollections'
import { BestSellers } from '@/components/home/BestSellers'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { Craftsmanship } from '@/components/home/Craftsmanship'
import { LifestyleBanner } from '@/components/home/LifestyleBanner'
import { Testimonials } from '@/components/home/Testimonials'
import { Newsletter } from '@/components/home/Newsletter'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <BestSellers />
      <WhyChooseUs />
      <Craftsmanship />
      <LifestyleBanner />
      <Testimonials />
      <Newsletter />
    </>
  )
}
