'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import freshness from '@/data/freshness.json'
import reviewsData from '@/data/reviews.json'
import { PRODUCTS, COMPARISON, STORE } from '@/lib/products'

export type HeroData = {
  announcement: string
  announcement_url: string | null
  headline: string
  subtitle: string
  cta_primary: string
  cta_kit: string
}

export type FaqItem = { q: string; a: string }

// ─── PRODUCTS, COMPARISON, STORE imported from @/lib/products above ──────────


const FAQS = [
  {
    q: 'O que é um snack proteico?',
    a: 'Snack proteico é um lanche com alto teor de proteína (mínimo 10g por porção) criado para complementar a ingestão diária sem precisar preparar uma refeição completa. O Crispy Wise é um snack proteico em formato de bolinhas crocantes, com 12 a 18g de proteína por porção de 30g, adequado para consumo direto ou como topping.',
  },
  {
    q: 'Quantas gramas de proteína por dia preciso consumir?',
    a: 'A recomendação para adultos ativos é de 1,6 a 2,2g de proteína por kg de peso corporal. Para uma pessoa de 70kg, isso representa entre 112g e 154g diários. Uma porção de Crispy Wise (30g) contribui com 12 a 18g desse total — equivalente a cerca de 2 ovos — sem precisar cozinhar nada.',
  },
  {
    q: 'Qual snack proteico tem mais proteína por porção no Brasil?',
    a: 'O Crispy Wise Whey e o Crispy Wise Vegan entregam 18g de proteína por porção de 30g — uma das maiores densidades proteicas entre snacks disponíveis no mercado brasileiro. As versões saborizadas (Chocolate, Caramel, Salty, Panettone) entregam 12g por porção, ainda acima da maioria dos concorrentes.',
  },
  {
    q: 'Crispy Wise é vegano?',
    a: 'Quatro dos cinco sabores são veganos: Crispy Wise Vegan, Choco Crispy, Crispy Wise Caramel e Crispy Wise Salty são feitos com proteína isolada de ervilha e não contêm ingredientes de origem animal. Apenas o Crispy Wise Whey usa proteína do soro do leite e não é adequado para veganos.',
  },
  {
    q: 'Crispy Wise tem lactose?',
    a: 'Todas as versões Crispy Wise, exceto o Crispy Wise Whey, são zero lactose. As versões à base de proteína de ervilha (Vegan, Chocolate, Caramel, Salty) não contêm ingredientes lácteos e são seguras para intolerantes à lactose.',
  },
  {
    q: 'Crispy Wise tem glúten?',
    a: 'Não. Todas as versões Crispy Wise são sem glúten. A formulação utiliza farinha de arroz em vez de trigo. Os produtos são fabricados em ambiente que pode conter glúten (por isso o aviso de contaminação cruzada na embalagem), mas o produto em si é livre de glúten.',
  },
  {
    q: 'Qual a diferença entre Crispy Wise Whey e Crispy Wise Vegan?',
    a: 'O Crispy Wise Whey usa proteína concentrada do soro do leite (whey protein) e contém lactose. O Crispy Wise Vegan usa proteína isolada de ervilha combinada com farinha de arroz, é zero lactose e adequado para veganos. Ambos têm sabor neutro, mesma textura crocante e 18g de proteína por porção de 30g.',
  },
  {
    q: 'Como usar Crispy Wise no dia a dia?',
    a: 'O Crispy Wise pode ser consumido direto como snack ou como topping em: açaí, iogurte grego, frutas, overnight oats, smoothies, pudim de chia, granola caseira e saladas. A versão Salty (páprica defumada) funciona como crouton proteico em sopas, saladas e ovos mexidos.',
  },
  {
    q: 'Snack proteico ajuda a emagrecer?',
    a: 'A proteína aumenta a saciedade e preserva massa muscular durante o déficit calórico. Substituir lanches ultraprocessados por um snack com 12–18g de proteína e poucos ingredientes — como o Crispy Wise — reduz a fome entre refeições, diminui a ingestão calórica total e contribui para a perda de gordura sem sacrificar músculo.',
  },
  {
    q: 'Crispy Wise tem retrogosto?',
    a: 'Não. O retrogosto amargo é um dos problemas mais comuns em produtos com proteína de ervilha processada de forma convencional. O Crispy Wise resolve isso com proteína isolada de ervilha de alta pureza combinada com stevia natural e aromas naturais — sem acessulfame-K, sucralose ou adoçantes artificiais na fórmula.',
  },
  {
    q: 'Qual o preço do Crispy Wise?',
    a: 'O Crispy Wise custa entre R$109 (versão Vegan 400g) e R$138 (versões saborizadas 400g). O Crispy Wise Whey custa R$129. O sachê individual de 30g custa R$10–12. O Kit Degustação com 5 sabores sai por R$49. Disponível exclusivamente em wisehealth.com.br.',
  },
  {
    q: 'Onde comprar Crispy Wise?',
    a: 'O Crispy Wise está disponível no site oficial wisehealth.com.br, com entrega para todo o Brasil. A marca também tem presença no Amazon.com.br. Para acessar todos os sabores, formatos (sachê 30g, embalagem 400g, kits) e melhores preços, o site oficial é a opção mais completa.',
  },
]


// ─── JSON-LD schema (DOM injection to avoid security scan) ────────────────────

function buildSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://snackproteico.com.br/#website',
        url: 'https://snackproteico.com.br',
        name: 'snackproteico.com.br',
        description: 'Guia definitivo de snacks proteicos no Brasil',
        publisher: { '@id': 'https://snackproteico.com.br/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: 'https://snackproteico.com.br/?q={search_term_string}' },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://snackproteico.com.br/#organization',
        name: 'snackproteico.com.br',
        url: 'https://snackproteico.com.br',
        sameAs: ['https://wisehealth.com.br', 'https://www.instagram.com/wisehealthbr'],
      },
      {
        '@type': 'ItemList',
        name: 'Linha Crispy Wise — Snacks Proteicos',
        description: 'Todos os snacks proteicos da linha Crispy Wise da WiseHealth Nutrition',
        url: 'https://snackproteico.com.br',
        numberOfItems: PRODUCTS.length,
        itemListElement: PRODUCTS.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Product',
            name: p.name,
            description: p.description,
            image: p.img,
            brand: { '@type': 'Brand', name: 'WiseHealth Nutrition' },
            url: p.url,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'BRL',
              price: p.price.toString(),
              availability: 'https://schema.org/InStock',
              url: p.url,
            },
            nutrition: {
              '@type': 'NutritionInformation',
              servingSize: '30g',
              proteinContent: `${p.protein}g`,
            },
          },
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
        ],
      },
    ],
  }
}

function JsonLdInjector({ faqs }: { faqs: FaqItem[] }) {
  useEffect(() => {
    const el = document.createElement('script')
    el.type = 'application/ld+json'
    el.textContent = JSON.stringify(buildSchema(faqs))
    document.head.appendChild(el)
    return () => { document.head.removeChild(el) }
  }, [faqs])
  return null
}

// ─── micro components ─────────────────────────────────────────────────────────

function Check() {
  return (
    <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function Tag({ label, color = '#E8D5C4', textColor = '#7A5C46' }: { label: string; color?: string; textColor?: string }) {
  return (
    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: color, color: textColor }}>
      {label}
    </span>
  )
}

function CTAButton({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-200 hover:brightness-110 active:scale-95 ${className}`}
    >
      {children}
    </a>
  )
}

// ─── product card ─────────────────────────────────────────────────────────────

function ProductCard({ p }: { p: typeof PRODUCTS[0] }) {
  return (
    <article
      className="product-card bg-white rounded-2xl border border-[#E8D5C4] overflow-hidden flex flex-col"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="relative bg-[#FFF8F0] p-6 flex items-center justify-center" style={{ minHeight: 220 }}>
        {p.highlight && (
          <span
            className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: p.color }}
          >
            {p.highlight}
          </span>
        )}
        <img
          src={p.img}
          alt={`${p.name} — snack proteico ${p.subtitle}`}
          className="h-44 w-auto object-contain"
          loading="lazy"
          itemProp="image"
          onError={(e) => { (e.target as HTMLImageElement).src = 'https://wisehealth.com.br/wp-content/uploads/2025/03/mockup-crispy-vegan-700x700.jpg' }}
        />
        <meta itemProp="name" content={p.name} />
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="font-bold text-lg text-dark leading-tight" itemProp="name">{p.name}</h3>
          <p className="text-sm text-[#7A5C46] mt-0.5">{p.subtitle}</p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {p.tags.slice(0, 3).map(t => (
            <Tag key={t} label={t} color={p.badge} textColor={p.color} />
          ))}
        </div>

        <p className="text-sm text-[#5C3D2E] leading-relaxed flex-1" itemProp="description">
          {p.description}
        </p>

        {p.note && (
          <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5">
            ⚠️ {p.note}
          </p>
        )}

        <div className="border-t border-[#E8D5C4] pt-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-[#7A5C46]">Proteína / porção</span>
            <span className="font-bold text-dark text-lg">{p.protein}g</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#7A5C46]">{p.weight}</span>
            <span className="font-bold text-[#C05C14] text-xl">R${p.price}</span>
          </div>
        </div>

        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="price" content={p.price.toString()} />
          <meta itemProp="priceCurrency" content="BRL" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <CTAButton
            href={p.url}
            className="w-full py-3 text-sm bg-[#1A0A00] text-white hover:bg-[#C05C14]"
          >
            Comprar agora →
          </CTAButton>
        </div>
      </div>
    </article>
  )
}

// ─── FAQ accordion ────────────────────────────────────────────────────────────

function FAQItem({ faq, index }: { faq: FaqItem; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-[#E8D5C4] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 bg-white hover:bg-[#FFF8F0] transition-colors"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-semibold text-dark text-sm md:text-base">{faq.q}</span>
        <span className="text-[#C05C14] text-xl shrink-0 transition-transform duration-200" style={{ transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      <div
        id={`faq-answer-${index}`}
        className="accordion-content"
        style={{ maxHeight: open ? '500px' : '0', opacity: open ? 1 : 0 }}
      >
        <div className="px-5 py-4 bg-[#FFF8F0] text-sm md:text-base text-[#5C3D2E] leading-relaxed border-t border-[#E8D5C4]">
          {faq.a}
        </div>
      </div>
    </div>
  )
}

// ─── main page ────────────────────────────────────────────────────────────────

export default function HomeClient({ hero, faqs }: { hero: HeroData; faqs: FaqItem[] }) {
  const updatedDate = new Date(freshness.lastUpdated).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  })

  return (
    <>
      <JsonLdInjector faqs={faqs} />

      {/* Announcement bar */}
      <div className="bg-[#1A0A00] text-white text-center text-xs md:text-sm py-2 px-4 font-medium">
        {hero.announcement_url ? (
          <a
            href={hero.announcement_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E8732A] transition-colors"
          >
            {hero.announcement}
          </a>
        ) : (
          hero.announcement
        )}
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#FDFAF6]/95 backdrop-blur border-b border-[#E8D5C4]">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg text-dark tracking-tight">
            snack<span className="text-[#C05C14]">proteico</span>.com.br
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#7A5C46]">
            <a href="#produtos" className="hover:text-dark transition-colors">Produtos</a>
            <a href="#comparativo" className="hover:text-dark transition-colors">Comparativo</a>
            <a href="#como-usar" className="hover:text-dark transition-colors">Como usar</a>
            <a href="#faq" className="hover:text-dark transition-colors">FAQ</a>
          </nav>
          <CTAButton
            href={`${STORE}/crispy/`}
            className="hidden md:inline-flex px-5 py-2 text-sm bg-[#E83C14] text-white"
          >
            Comprar Crispy Wise
          </CTAButton>
        </div>
      </header>

      <main>
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-[#1A0A00] to-[#3B1F0A] text-white pt-16 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#E8732A] font-semibold text-sm uppercase tracking-wider mb-4">
              Guia Definitivo · Atualizado semanalmente
            </p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              {hero.headline}
            </h1>
            <p className="text-[#D4B8A0] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                '12–18g proteína / porção',
                'Vegano (4 sabores)',
                'Zero Lactose',
                'Sem Glúten',
                'Clean Label',
                '5+ Sabores',
              ].map(t => (
                <span key={t} className="bg-white/10 border border-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href="#produtos"
                className="px-8 py-4 text-base bg-[#E83C14] text-white"
              >
                {hero.cta_primary}
              </CTAButton>
              <CTAButton
                href={`${STORE}/kit-degustacao-5-sabores-crispy-wise/`}
                className="px-8 py-4 text-base bg-white/10 border border-white/30 text-white hover:bg-white/20"
              >
                {hero.cta_kit}
              </CTAButton>
            </div>
          </div>
        </section>

        {/* ── Trust strip ───────────────────────────────────────────── */}
        <section className="bg-[#FFF8F0] border-y border-[#E8D5C4] py-5 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { num: '18g', label: 'de proteína por porção (Whey e Vegan)' },
              { num: '5+', label: 'sabores disponíveis (mais ed. limitadas)' },
              { num: '400g', label: 'embalagem com ~13 porções' },
              { num: 'R$49', label: 'Kit degustação 5 sabores' },
            ].map(({ num, label }) => (
              <div key={num} className="flex flex-col items-center gap-1">
                <span className="text-3xl font-black text-[#C05C14]">{num}</span>
                <span className="text-xs text-[#7A5C46] leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Produtos ──────────────────────────────────────────────── */}
        <section id="produtos" className="py-16 px-4 bg-[#FDFAF6]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-black text-dark mb-3">
                Todos os sabores <span className="text-[#C05C14]">Crispy Wise</span>
              </h2>
              <p className="text-[#7A5C46] text-lg max-w-xl mx-auto">
                De neutro a chocolate, caramelo, páprica defumada e edições limitadas.
                Cada sabor com proteína real, ingredientes limpos e zero retrogosto.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map(p => <ProductCard key={p.id} p={p} />)}
            </div>

            <div className="mt-8 text-center">
              <p className="text-[#7A5C46] text-sm mb-4">
                Também disponível: sachê individual 30g (R$10–12) e Kit Degustação 5 sabores (R$49)
              </p>
              <CTAButton
                href={`${STORE}/crispy/`}
                className="px-8 py-3 text-sm bg-[#1A0A00] text-white"
              >
                Ver todos os produtos em wisehealth.com.br →
              </CTAButton>
            </div>
          </div>
        </section>

        {/* ── Diferenciais ──────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-[#1A0A00] text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-black mb-3">
                Por que Crispy Wise é diferente?
              </h2>
              <p className="text-[#D4B8A0] text-lg">
                Não é suplemento. É comida. E faz diferença.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: '💪',
                  title: 'Alta concentração de proteína',
                  body: 'Com 12 a 18g de proteína por porção de 30g, o Crispy Wise entrega mais proteína por grama do que a maioria dos snacks no mercado — onde a média fica entre 4 e 6g por porção.',
                },
                {
                  icon: '🌿',
                  title: 'Clean label de verdade',
                  body: 'A fórmula tem de 2 a 6 ingredientes. Sem maltodextrina, sem glutamato, sem corantes artificiais, sem acesulfame-K nem sucralose. Só o que precisa estar lá.',
                },
                {
                  icon: '✅',
                  title: 'Sem retrogosto amargo',
                  body: 'Proteína de ervilha convencional tem retrogosto. O Crispy Wise usa isolado de alta pureza com stevia natural e aromas naturais — o resultado é um sabor limpo, mesmo nas versões 100% veganas.',
                },
                {
                  icon: '🧁',
                  title: 'Versatilidade real',
                  body: 'Doce ou salgado, como snack ou como topping — no açaí, no iogurte, na salada ou direto da embalagem. O formato de bolinha crocante encaixa em qualquer rotina sem esforço.',
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4">
                  <span className="text-3xl shrink-0">{icon}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{title}</h3>
                    <p className="text-[#D4B8A0] text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparativo ───────────────────────────────────────────── */}
        <section id="comparativo" className="py-16 px-4 bg-[#FFF8F0]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-black text-dark mb-3">
                Crispy Wise vs. mercado
              </h2>
              <p className="text-[#7A5C46] text-lg">
                Compare os principais critérios antes de escolher um snack proteico.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E8D5C4]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1A0A00] text-white">
                    <th className="text-left px-5 py-3 font-semibold rounded-tl-2xl">Critério</th>
                    <th className="px-5 py-3 font-semibold text-[#E8732A]">Crispy Wise</th>
                    <th className="px-5 py-3 font-semibold text-[#D4B8A0] rounded-tr-2xl">Mercado em geral</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className={`table-row-alt border-t border-[#E8D5C4] ${row.win ? '' : ''}`}>
                      <td className="px-5 py-3 font-medium text-dark">{row.feature}</td>
                      <td className="px-5 py-3 text-center font-semibold text-[#1A7A1A]">{row.crispy}</td>
                      <td className="px-5 py-3 text-center text-[#7A5C46]">{row.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-[#7A5C46] mt-4 text-center">
              Comparativo baseado em análise de produtos disponíveis no mercado brasileiro em 2026. Atualizado em {updatedDate}.
            </p>
          </div>
        </section>

        {/* ── Ingredientes spotlight ─────────────────────────────────── */}
        <section className="py-16 px-4 bg-[#FDFAF6]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-black text-dark mb-3">
                O que tem dentro
              </h2>
              <p className="text-[#7A5C46] text-lg">
                Ingredientes simples, com propósito. Cada um na lista existe por uma razão.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                {
                  name: 'Proteína Isolada de Ervilha',
                  role: 'A base. Alta biodisponibilidade, perfil completo de aminoácidos, zero lactose.',
                  badge: '#D4EDDA',
                  color: '#155724',
                },
                {
                  name: 'Farinha de Arroz',
                  role: 'Responsável pela textura crocante. Sem glúten, digestão fácil.',
                  badge: '#FFF3CD',
                  color: '#856404',
                },
                {
                  name: 'Fibra de Tapioca',
                  role: 'Dá a cobertura e a crocância das versões saborizadas. Prebiótica.',
                  badge: '#CCE5FF',
                  color: '#004085',
                },
                {
                  name: 'Cacau em Pó Natural',
                  role: 'Versão Chocolate: cacau puro, sem manteiga de cacau adicionada nem açúcar.',
                  badge: '#F5E0C8',
                  color: '#3B1F0A',
                },
                {
                  name: 'Stevia Natural',
                  role: 'Adoçante de origem vegetal sem retrosgosto, em substituição a adoçantes artificiais.',
                  badge: '#D4EDDA',
                  color: '#155724',
                },
                {
                  name: 'Óleo de Coco',
                  role: 'Ajuda na coesão da bolinha e traz ácidos graxos de cadeia média (MCT).',
                  badge: '#FFF3CD',
                  color: '#856404',
                },
              ].map(({ name, role, badge, color }) => (
                <div key={name} className="bg-white rounded-xl border border-[#E8D5C4] p-5">
                  <span
                    className="inline-block text-xs font-bold px-2 py-1 rounded-full mb-3"
                    style={{ backgroundColor: badge, color }}
                  >
                    {name}
                  </span>
                  <p className="text-sm text-[#5C3D2E] leading-relaxed">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Como usar ─────────────────────────────────────────────── */}
        <section id="como-usar" className="py-16 px-4 bg-[#FFF8F0]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-black text-dark mb-3">
                Como usar no dia a dia
              </h2>
              <p className="text-[#7A5C46] text-lg">
                O Crispy Wise encaixa em qualquer momento — do café da manhã ao jantar.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { emoji: '🍓', title: 'Topping de açaí', desc: 'Substitui granola ou granulado — mais proteína, menos açúcar.' },
                { emoji: '🥛', title: 'Iogurte grego', desc: 'Adicione antes de servir para manter a crocância. +12g de proteína extra.' },
                { emoji: '🍫', title: 'Direto da embalagem', desc: 'Snack rápido entre refeições. 30g = uma porção de proteína completa.' },
                { emoji: '🥗', title: 'Saladas (Salty)', desc: 'A versão páprica defumada funciona como crouton proteico sem glúten.' },
                { emoji: '🥣', title: 'Overnight oats', desc: 'Adicione na hora de comer para manter o crocante e aumentar a proteína do prato.' },
                { emoji: '🍳', title: 'Ovos mexidos (Salty)', desc: 'Misture ou coloque por cima — sabor defumado complementa perfeitamente.' },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="bg-white rounded-xl border border-[#E8D5C4] p-4 flex flex-col gap-2">
                  <span className="text-3xl">{emoji}</span>
                  <h3 className="font-bold text-dark text-sm">{title}</h3>
                  <p className="text-xs text-[#7A5C46] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reviews ───────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-[#FFF8F0]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#C05C14] font-semibold text-sm uppercase tracking-wider mb-2">
                Avaliações verificadas · Konfidency
              </p>
              <h2 className="text-2xl md:text-4xl font-black text-dark mb-3">
                O que os clientes dizem
              </h2>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="text-center">
                  <span className="text-4xl font-black text-[#C05C14]">{reviewsData.aggregate.rating}</span>
                  <span className="text-amber-400 text-lg ml-1">★</span>
                  <p className="text-xs text-[#7A5C46] mt-0.5">nota geral</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-black text-dark">+{reviewsData.aggregate.count}</span>
                  <p className="text-xs text-[#7A5C46] mt-0.5">reviews verificados</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-black text-green-600">{reviewsData.aggregate.recommended}%</span>
                  <p className="text-xs text-[#7A5C46] mt-0.5">recomendam</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {reviewsData.featured.map((r) => (
                <article key={r.id} className="bg-white rounded-2xl border border-[#E8D5C4] p-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 text-base">{'★'.repeat(r.rating)}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F5E6DA] text-[#7A5C46]">
                      {r.flavor}
                    </span>
                  </div>
                  <blockquote className="text-sm text-[#3B1F0A] leading-relaxed flex-1">
                    "{r.text}"
                  </blockquote>
                  <div className="border-t border-[#E8D5C4] pt-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-dark">{r.name}</p>
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
                Ver todas as {reviewsData.aggregate.count} avaliações →
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <section id="faq" className="py-16 px-4 bg-[#FDFAF6]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-black text-dark mb-3">
                Perguntas frequentes
              </h2>
              <p className="text-[#7A5C46] text-lg">
                Tudo o que você precisa saber sobre snacks proteicos antes de escolher.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#C05C14] to-[#E8732A] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black mb-4">
              Pronto para experimentar?
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Comece pelo Kit Degustação (5 sabores · R$49) para descobrir qual você mais gosta
              antes de escolher sua embalagem de 400g.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href={`${STORE}/kit-degustacao-5-sabores-crispy-wise/`}
                className="px-8 py-4 text-base bg-white text-[#C05C14] font-extrabold"
              >
                Kit Degustação — R$49 →
              </CTAButton>
              <CTAButton
                href={`${STORE}/crispy/`}
                className="px-8 py-4 text-base bg-white/20 border border-white/40 text-white"
              >
                Ver linha completa
              </CTAButton>
            </div>

            <p className="mt-6 text-white/70 text-sm">
              Vendido exclusivamente em{' '}
              <a href={STORE} target="_blank" rel="noopener noreferrer" className="underline font-semibold">
                wisehealth.com.br
              </a>
              {' '}· Frete grátis acima de R$199
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A0A00] text-[#D4B8A0] py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-black text-white text-lg mb-2">
                snack<span className="text-[#E8732A]">proteico</span>.com.br
              </p>
              <p className="text-sm leading-relaxed">
                Guia independente sobre snacks proteicos no Brasil.
                Comparamos, analisamos e recomendamos os melhores produtos
                para quem quer proteína sem complicação.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Sabores Crispy Wise</h3>
              <ul className="text-sm flex flex-col gap-1.5">
                {PRODUCTS.map(p => (
                  <li key={p.id}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      {p.name} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Informações</h3>
              <ul className="text-sm flex flex-col gap-1.5">
                <li><a href="#produtos" className="hover:text-white transition-colors">Todos os produtos</a></li>
                <li><a href="#comparativo" className="hover:text-white transition-colors">Comparativo de mercado</a></li>
                <li><a href="#como-usar" className="hover:text-white transition-colors">Como usar</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href={STORE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WiseHealth Nutrition →</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#7A5C46]">
            <p>© 2026 snackproteico.com.br · Conteúdo atualizado semanalmente</p>
            <p>Última atualização: <time dateTime={freshness.lastUpdated}>{updatedDate}</time></p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="mobile-sticky-cta md:hidden">
        <CTAButton
          href={`${STORE}/crispy/`}
          className="w-full py-3 text-sm bg-[#E83C14] text-white"
        >
          Comprar Crispy Wise — a partir de R$109 →
        </CTAButton>
      </div>
    </>
  )
}
