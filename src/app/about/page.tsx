import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Craft',
  description:
    'The story behind MASTERLEATHER — genuine leather goods made by hand, built to last a lifetime.',
}

const values = [
  {
    title: 'No Shortcuts',
    description:
      'We saddle-stitch every seam. We bevel and burnish every edge. We inspect every hide. This adds time. It is worth it.',
  },
  {
    title: 'Honest Materials',
    description:
      'We use full-grain and shell cordovan leathers only. No bonded leather. No top-grain. No PU. The real thing, always.',
  },
  {
    title: 'Responsible Sourcing',
    description:
      'Our hides come from a small number of tanneries we have visited personally. We know where our leather comes from.',
  },
  {
    title: 'Priced to Last',
    description:
      'We price our goods to reflect real craft, not to inflate margins. A $400 jacket that lasts 20 years is the best value available.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-white/8">
        <div className="container-luxury max-w-4xl">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-6">
            The Story
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-8">
            We Make Things
            <br />
            <em className="text-gold not-italic">That Last.</em>
          </h1>
          <p className="font-sans text-base text-cream/60 leading-loose max-w-2xl">
            MASTERLEATHER was founded in 2012 with one belief: that the best thing you can do for the
            environment — and your wallet — is buy something well-made, once. We started with wallets.
            Then belts. Then bags. Then jackets. In every category, the answer to every design
            question has been the same: what will this look like in twenty years?
          </p>
        </div>
      </section>

      {/* Visual split */}
      <section className="py-20 md:py-28">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Placeholder image */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-950/60 via-stone-900 to-obsidian overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-px bg-gold/40 mx-auto mb-4" />
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold/40">
                    leather-bag-lifestyle.jpg
                  </p>
                  <div className="w-24 h-px bg-gold/40 mx-auto mt-4" />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-4 right-4 bg-obsidian/80 backdrop-blur-sm border border-white/8 p-4 text-center">
                <p className="font-serif text-2xl text-gold">2012</p>
                <p className="font-sans text-[10px] tracking-widest uppercase text-cream/40 mt-0.5">Founded</p>
              </div>
            </div>

            <div>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-5">
                Our Philosophy
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6 leading-tight">
                We Exist to Make Things
                <br />You Keep Forever
              </h2>
              <div className="space-y-4 text-cream/60 font-sans text-sm leading-loose">
                <p>
                  The leather goods industry is full of brands that use the word &ldquo;quality&rdquo; and
                  then cut every corner available. Corrected-grain leather. Machine stitching. Glued
                  seams. Nickel hardware that tarnishes in a year.
                </p>
                <p>
                  We started MASTERLEATHER because we could not find what we were looking for at a price
                  that was not ludicrous. Full-grain leather, saddle-stitched by hand, with solid
                  brass hardware — available to anyone who takes their gear seriously.
                </p>
                <p>
                  We still make each piece the same way we did in 2012. The tools are better. The
                  patterns have been refined. The standard has not moved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#0A0806]">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-4">
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream">The MASTERLEATHER Standard</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {values.map((value) => (
              <div key={value.title} className="bg-[#0A0806] p-8 md:p-10">
                <h3 className="font-serif text-xl text-gold mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-cream/55 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship detail */}
      <section className="py-20 md:py-28">
        <div className="container-luxury max-w-3xl text-center">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-6">
            The Workshop
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6 leading-tight">
            Four Craftspeople.
            <br />Every Piece, Every Time.
          </h2>
          <p className="font-sans text-sm text-cream/55 leading-loose mb-10">
            We do not outsource. We do not scale by adding machines. Every MASTERLEATHER piece passes
            through the same four pairs of hands: the leather cutter, the saddle stitcher, the edge
            finisher, and the quality inspector. We have been offered the opportunity to license our
            patterns to factories. We have declined, every time.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-obsidian font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-300 active:scale-95"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="py-20 md:py-24 bg-[#0A0806] border-t border-white/5">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium block mb-4">
                Sustainability
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-cream">
                The most sustainable product is one you never throw away.
              </h2>
            </div>
            <div className="md:col-span-2 font-sans text-sm text-cream/55 leading-loose space-y-4">
              <p>
                Leather is a by-product of the meat industry. The hides we use would otherwise be
                discarded. We work with tanneries that use chrome-free, vegetable-based tanning
                processes where possible, and we maintain relationships only with suppliers who can
                demonstrate responsible wastewater management.
              </p>
              <p>
                More than any of that: the most environmentally responsible choice is to buy one
                good thing and keep it for thirty years instead of buying five cheap things that end
                up in landfill. We make the one good thing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
