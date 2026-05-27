import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import reviewsData from '@/data/reviews.json'
import { PRODUCTS } from '@/lib/products'
import ProductFAQ from './ProductFAQ'
import SchemaInjector from './SchemaInjector'

export async function generateStaticParams() {
  return PRODUCTS.map(p => ({ product: p.slug }))
}

export async function generateMetadata({ params }: { params: { product: string } }): Promise<Metadata> {
  const product = PRODUCTS.find(p => p.slug === params.product)
  if (!product) return {}
  const canonical = `https://snackproteico.com.br/${product.slug}`
  return {
    title: `${product.name} — ${product.protein}g Proteína por Porção | snackproteico.com.br`,
    description: product.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: `${product.name} — ${product.protein}g de Proteína`,
      description: product.metaDescription,
      images: [{ url: product.img, width: 700, height: 700, alt: product.name }],
      url: canonical,
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: product.name, description: product.metaDescription },
  }
}

export default function ProductPage({ params }: { params: { product: string } }) {
  const product = PRODUCTS.find(p => p.slug === params.product)
  if (!product) notFound()

  const reviews = product.reviewSku
    ? reviewsData.all.filter(r => r.sku === product.reviewSku).slice(0, 6)
    : []
  const stats = product.reviewFlavor
    ? reviewsData.byProduct.find(p => p.flavor === product.reviewFlavor)
    : null

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: product.name,
        description: product.longDescription,
        image: product.img,
        brand: { '@type': 'Brand', name: 'WiseHealth Nutrition' },
        url: `https://snackproteico.com.br/${product.slug}`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'BRL',
          price: product.price.toString(),
          availability: 'https://schema.org/InStock',
          url: product.url,
        },
        nutrition: {
          '@type': 'NutritionInformation',
          servingSize: '30g',
          proteinContent: `${product.protein}g`,
        },
        ...(stats ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: stats.rating,
            reviewCount: stats.count,
            bestRating: 5,
            worstRating: 1,
          },
        } : {}),
        ...(reviews.length > 0 ? {
          review: reviews.slice(0, 3).map(r => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: r.name },
            reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
            reviewBody: r.text,
            datePublished: r.date,
          })),
        } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: product.name, item: `https://snackproteico.com.br/${product.slug}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: product.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  }

  return (
    <>
      <SchemaInjector schema={schema} />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#FDFAF6]/95 backdrop-blur border-b border-[#E8D5C4]">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg text-[#1A0A00] tracking-tight">
            snack<span className="text-[#C05C14]">proteico</span>.com.br
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#7A5C46]">
            <a href="/#produtos" className="hover:text-[#1A0A00] transition-colors">Todos os sabores</a>
            <a href="/avaliacoes" className="hover:text-[#1A0A00] transition-colors">Avaliações</a>
          </nav>
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-bold rounded-full bg-[#E83C14] text-white hover:brightness-110 transition-all"
          >
            Comprar agora
          </a>
        </div>
      </header>

      <main>
        {/* Breadcrumb */}
        <nav className="bg-[#FFF8F0] border-b border-[#E8D5C4] px-4 py-2 text-xs text-[#7A5C46]" aria-label="Breadcrumb">
          <div className="max-w-6xl mx-auto flex items-center gap-1.5">
            <a href="/" className="hover:text-[#1A0A00] transition-colors">snackproteico.com.br</a>
            <span>/</span>
            <span className="text-[#1A0A00] font-medium">{product.name}</span>
          </div>
        </nav>

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="bg-[#FDFAF6] py-12 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="bg-[#FFF8F0] rounded-3xl p-8 border border-[#E8D5C4] w-full max-w-sm flex items-center justify-center" style={{ minHeight: 300 }}>
                <img
                  src={product.img}
                  alt={`${product.name} — ${product.subtitle}`}
                  className="h-64 w-auto object-contain"
                  width={700}
                  height={700}
                />
              </div>
            </div>

            <div className="flex flex-col gap-5" itemScope itemType="https://schema.org/Product">
              <meta itemProp="name" content={product.name} />
              <meta itemProp="description" content={product.longDescription} />

              <div>
                {product.highlight && (
                  <span
                    className="inline-block text-xs font-bold px-3 py-1 rounded-full text-white mb-3"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.highlight}
                  </span>
                )}
                <h1 className="text-3xl md:text-4xl font-black text-[#1A0A00] leading-tight mb-1">
                  {product.name}
                </h1>
                <p className="text-[#7A5C46] text-lg">{product.subtitle}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.tags.map(t => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: product.badge, color: product.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-xl border border-[#E8D5C4] p-3 text-center">
                  <span className="block text-2xl font-black text-[#C05C14]">{product.protein}g</span>
                  <span className="text-xs text-[#7A5C46]">proteína / porção</span>
                </div>
                <div className="bg-white rounded-xl border border-[#E8D5C4] p-3 text-center">
                  <span className="block text-2xl font-black text-[#1A0A00]">{product.weight}</span>
                  <span className="text-xs text-[#7A5C46]">embalagem</span>
                </div>
                <div className="bg-white rounded-xl border border-[#E8D5C4] p-3 text-center">
                  <span className="block text-2xl font-black text-[#C05C14]">R${product.price}</span>
                  <span className="text-xs text-[#7A5C46]">preço</span>
                </div>
              </div>

              {stats && (
                <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                  <span className="text-amber-400 text-lg">{'★'.repeat(Math.round(stats.rating))}</span>
                  <span className="font-bold text-[#1A0A00]">{stats.rating}</span>
                  <span className="text-sm text-[#7A5C46]">· {stats.count} avaliações · {stats.recommended}% recomendam</span>
                </div>
              )}

              {product.note && (
                <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  ⚠️ {product.note}
                </p>
              )}

              <div
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
                className="flex flex-col sm:flex-row gap-3"
              >
                <meta itemProp="price" content={product.price.toString()} />
                <meta itemProp="priceCurrency" content="BRL" />
                <meta itemProp="availability" content="https://schema.org/InStock" />
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center font-bold py-3.5 px-6 rounded-full bg-[#E83C14] text-white hover:brightness-110 active:scale-95 transition-all"
                >
                  Comprar agora — R${product.price}
                </a>
                <a
                  href="https://wisehealth.com.br/kit-degustacao-crispy-wise/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center font-bold py-3.5 px-6 rounded-full border-2 border-[#1A0A00] text-[#1A0A00] hover:bg-[#1A0A00] hover:text-white transition-all"
                >
                  Kit degustação R$49
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Descrição ─────────────────────────────────────────────────── */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-4">Sobre o {product.name}</h2>
            <p className="text-[#5C3D2E] text-lg leading-relaxed">{product.longDescription}</p>
          </div>
        </section>

        {/* ── Ingredientes ──────────────────────────────────────────────── */}
        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-4">Ingredientes</h2>
            <div className="bg-white rounded-2xl border border-[#E8D5C4] p-6">
              <p className="text-[#5C3D2E] text-base leading-relaxed font-medium">
                {product.ingredients}
              </p>
              <p className="text-xs text-[#7A5C46] mt-3">
                * Consulte a embalagem para informações nutricionais completas e avisos de alergênicos.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {product.tags.map(t => (
                <div key={t} className="bg-white rounded-xl border border-[#E8D5C4] p-3 text-center">
                  <span className="text-xs font-semibold text-[#1A0A00]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews ───────────────────────────────────────────────────── */}
        {reviews.length > 0 && stats && (
          <section className="py-12 px-4 bg-[#FDFAF6]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-[#C05C14] font-semibold text-sm uppercase tracking-wider mb-2">
                  Avaliações verificadas · Konfidency
                </p>
                <h2 className="text-2xl md:text-3xl font-black text-[#1A0A00] mb-3">
                  O que clientes dizem sobre o {product.name}
                </h2>
                <div className="flex items-center justify-center gap-6 mt-4">
                  <div className="text-center">
                    <span className="text-4xl font-black text-[#C05C14]">{stats.rating}</span>
                    <span className="text-amber-400 text-lg ml-1">★</span>
                    <p className="text-xs text-[#7A5C46] mt-0.5">nota geral</p>
                  </div>
                  <div className="text-center">
                    <span className="text-4xl font-black text-[#1A0A00]">+{stats.count}</span>
                    <p className="text-xs text-[#7A5C46] mt-0.5">reviews verificados</p>
                  </div>
                  <div className="text-center">
                    <span className="text-4xl font-black text-green-600">{stats.recommended}%</span>
                    <p className="text-xs text-[#7A5C46] mt-0.5">recomendam</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {reviews.map(r => (
                  <article
                    key={r.id}
                    className="bg-white rounded-2xl border border-[#E8D5C4] p-5 flex flex-col gap-3"
                    itemScope
                    itemType="https://schema.org/Review"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-amber-400" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                        <meta itemProp="ratingValue" content={r.rating.toString()} />
                        {'★'.repeat(r.rating)}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F5E6DA] text-[#7A5C46]">
                        {r.flavor}
                      </span>
                    </div>
                    <blockquote className="text-sm text-[#3B1F0A] leading-relaxed flex-1" itemProp="reviewBody">
                      "{r.text}"
                    </blockquote>
                    <div className="border-t border-[#E8D5C4] pt-3 flex items-center justify-between">
                      <p className="text-sm font-semibold text-[#1A0A00]" itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{r.name}</span>
                      </p>
                      <span className="text-xs text-[#7A5C46]">✓ verificado</span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="/avaliacoes"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#C05C14] text-[#C05C14] font-bold hover:bg-[#C05C14] hover:text-white transition-colors text-sm"
                >
                  Ver todas as {stats.count} avaliações →
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">
              Perguntas frequentes sobre {product.name}
            </h2>
            <ProductFAQ faqs={product.faqs} />
          </div>
        </section>

        {/* ── CTA final ─────────────────────────────────────────────────── */}
        <section className="py-14 px-4 bg-gradient-to-br from-[#C05C14] to-[#E8732A] text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black mb-3">
              Pronto para experimentar o {product.name}?
            </h2>
            <p className="text-white/90 mb-7 leading-relaxed">
              Comece pelo Kit Degustação (5 sabores · R$49) ou compre direto a embalagem de 400g.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold py-4 px-8 rounded-full bg-white text-[#C05C14] hover:brightness-95 transition-all text-base"
              >
                Comprar {product.name} — R${product.price}
              </a>
              <a
                href="https://wisehealth.com.br/kit-degustacao-crispy-wise/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold py-4 px-8 rounded-full bg-white/20 border border-white/40 text-white hover:bg-white/30 transition-all text-base"
              >
                Kit degustação R$49
              </a>
            </div>
          </div>
        </section>

        {/* ── Outros sabores ────────────────────────────────────────────── */}
        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-black text-[#1A0A00] mb-6 text-center">
              Outros sabores da linha Crispy Wise
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {PRODUCTS.filter(p => p.slug !== product.slug).map(p => (
                <a
                  key={p.id}
                  href={`/${p.slug}`}
                  className="bg-white rounded-xl border border-[#E8D5C4] p-4 flex flex-col items-center gap-2 hover:border-[#C05C14] transition-colors text-center group"
                >
                  <img src={p.img} alt={p.name} className="h-20 w-auto object-contain" loading="lazy" width={700} height={700} />
                  <span className="text-xs font-semibold text-[#1A0A00] group-hover:text-[#C05C14] transition-colors leading-tight">
                    {p.name}
                  </span>
                  <span className="text-xs text-[#C05C14] font-bold">{p.protein}g prot.</span>
                </a>
              ))}
            </div>
            <div className="text-center mt-6">
              <a href="/" className="text-sm text-[#C05C14] font-semibold hover:underline">
                ← Ver todos no guia completo
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A0A00] text-[#D4B8A0] py-8 px-4 text-center text-sm">
        <p className="font-black text-white text-base mb-1">
          snack<span className="text-[#E8732A]">proteico</span>.com.br
        </p>
        <p>Guia independente sobre snacks proteicos no Brasil.</p>
        <p className="mt-2">
          <a href="https://wisehealth.com.br" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            wisehealth.com.br
          </a>
        </p>
      </footer>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white border-t border-[#E8D5C4]">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center font-bold py-3 rounded-full bg-[#E83C14] text-white text-sm"
        >
          Comprar {product.name} — R${product.price}
        </a>
      </div>
    </>
  )
}
