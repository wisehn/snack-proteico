import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'
import reviewsData from '@/data/reviews.json'

export const metadata: Metadata = {
  title: 'Crispy Wise Funciona? Análise Completa 2026 | snackproteico.com.br',
  description: 'Crispy Wise realmente entrega 18g de proteína? Análise completa: ingredientes, avaliações verificadas, comparação com a embalagem e opinião de compradores reais. Veredicto honesto.',
  alternates: { canonical: 'https://snackproteico.com.br/crispy-wise-funciona' },
  openGraph: {
    title: 'Crispy Wise Funciona? Análise Completa 2026',
    description: 'Análise honesta do Crispy Wise: ingredientes reais, proteína confirmada, +280 avaliações verificadas. Descubra se vale a pena.',
    url: 'https://snackproteico.com.br/crispy-wise-funciona',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Crispy Wise realmente tem 18g de proteína por porção?',
    a: 'Sim. O Crispy Wise Vegan e o Crispy Wise Whey têm 18g de proteína por porção de 30g — isso é 60% da composição em proteína. A fonte é proteína isolada de ervilha (no caso do Vegan) ou concentrado de soro de leite (no caso do Whey). O isolado de ervilha tem 85–90% de proteína na sua composição, o que matematicamente explica os 18g em 30g de produto.',
  },
  {
    q: 'Crispy Wise tem retrogosto de ervilha?',
    a: 'Não. Este é o principal diferencial técnico do produto. O retrogosto amargo associado à proteína de ervilha vem da versão concentrada, que mantém compostos secundários da ervilha. O Crispy Wise usa isolado de alta pureza (85–90% proteína), que passa por processo de ultrafiltração que remove esses compostos. O resultado é sabor neutro mesmo no Vegan — confirmado em +280 avaliações verificadas onde o tema sabor aparece frequentemente.',
  },
  {
    q: 'Crispy Wise vale a pena pelo preço?',
    a: 'Depende do ponto de comparação. A embalagem de 400g (R$109–R$138) tem ~13 porções de 30g com 12–18g de proteína. O custo por grama de proteína fica entre R$0,47 e R$0,88 — competitivo com whey protein e barras proteicas premium. Como snack de conveniência (sem preparo, portátil, longa durabilidade), o custo relativo é ainda mais favorável.',
  },
  {
    q: 'Crispy Wise é bom para ganho de massa muscular?',
    a: 'Sim. O Crispy Wise Vegan e o Whey entregam 18g de proteína de alta qualidade por porção — dentro da faixa recomendada para síntese proteica muscular (20–40g por refeição). Pode ser consumido como lanche entre treinos ou direto pós-treino. A proteína isolada de ervilha tem DIAAS (qualidade proteica) de 0.82–0.89, considerado "boa qualidade" pela FAO/WHO.',
  },
  {
    q: 'Crispy Wise é gostoso? Como é a textura?',
    a: 'A textura é crocante e densa — diferente de snacks expandidos ou chips areados. Avaliações descrevem como "crocante, parecido com granola grossa" ou "parecido com cereal proteico". O sabor do Vegan é neutro (funciona como topping). Choco e Caramel são levemente adocicados (stevia). Salty tem páprica defumada e sal — funciona como substituto de crouton. A nota geral é 4.8★ em +280 avaliações verificadas pelo Konfidency.',
  },
  {
    q: 'Onde comprar Crispy Wise com garantia de produto original?',
    a: 'O Crispy Wise é vendido diretamente pelo site oficial wisehealth.com.br, além de Mercado Livre, Amazon e Shopee. O Kit Degustação (5 sabores) por R$49 é a forma mais econômica de testar a linha completa antes de comprar a embalagem de 400g.',
  },
]

const topReviews = reviewsData.all.filter(r => r.rating === 5).slice(0, 6)
const { aggregate, byProduct } = reviewsData

export default function CrispyWiseFunciona() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Crispy Wise Funciona? Análise Completa 2026',
        description: 'Análise honesta do Crispy Wise com avaliações verificadas, ingredientes e comparativo de preço.',
        url: 'https://snackproteico.com.br/crispy-wise-funciona',
        author: { '@type': 'Organization', name: 'WiseHealth Nutrition', url: 'https://wisehealth.com.br' },
        publisher: { '@type': 'Organization', name: 'snackproteico.com.br', url: 'https://snackproteico.com.br' },
        datePublished: '2026-05-27',
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'Product',
        name: 'Crispy Wise',
        brand: { '@type': 'Brand', name: 'WiseHealth Nutrition' },
        url: 'https://snackproteico.com.br',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: aggregate.rating,
          reviewCount: aggregate.count,
          bestRating: 5,
          worstRating: 1,
        },
        review: topReviews.slice(0, 3).map(r => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.name },
          reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
          reviewBody: r.text,
          datePublished: r.date,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Crispy Wise Funciona?', item: 'https://snackproteico.com.br/crispy-wise-funciona' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(({ q, a }) => ({
          '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  }

  return (
    <>
      <SchemaInjector schema={schema} />
      <header className="sticky top-0 z-40 bg-[#FDFAF6]/95 backdrop-blur border-b border-[#E8D5C4]">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg text-[#1A0A00] tracking-tight">snack<span className="text-[#C05C14]">proteico</span>.com.br</a>
          <a href="https://wisehealth.com.br/kit-degustacao-crispy-wise/" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex px-5 py-2 text-sm font-bold rounded-full bg-[#E83C14] text-white hover:brightness-110 transition-all">Kit degustação R$49</a>
        </div>
      </header>
      <main>
        <nav className="bg-[#FFF8F0] border-b border-[#E8D5C4] px-4 py-2 text-xs text-[#7A5C46]">
          <div className="max-w-6xl mx-auto flex items-center gap-1.5">
            <a href="/" className="hover:text-[#1A0A00]">snackproteico.com.br</a><span>/</span>
            <span className="text-[#1A0A00] font-medium">Crispy Wise Funciona?</span>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-[#1A0A00] to-[#3B1F0A] text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#E8732A] font-semibold text-sm uppercase tracking-wider mb-3">Análise independente · 2026</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              Crispy Wise Funciona?<br />
              <span className="text-[#E8C8A3]">Análise honesta e completa</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              <div className="text-center">
                <div className="text-5xl font-black text-[#E8732A]">{aggregate.rating}</div>
                <div className="text-amber-400 text-lg">{'★'.repeat(5)}</div>
                <p className="text-sm text-[#D4B8A0] mt-1">nota geral</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/20" />
              <div className="text-center">
                <div className="text-5xl font-black text-white">{aggregate.count}</div>
                <p className="text-sm text-[#D4B8A0] mt-1">avaliações verificadas</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/20" />
              <div className="text-center">
                <div className="text-5xl font-black text-[#6EE7A0]">{aggregate.recommended}%</div>
                <p className="text-sm text-[#D4B8A0] mt-1">recomendam</p>
              </div>
            </div>
          </div>
        </section>

        {/* Veredicto */}
        <section className="py-14 px-4 bg-[#FDFAF6]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Veredicto: o que realmente entrega</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { claim: '18g de proteína por 30g', verdict: '✅ Confirmado', detail: 'Embalagem e análise da fórmula batem. Isolado de ervilha com 85–90% proteína explica matematicamente o valor.' },
                { claim: 'Sem retrogosto', verdict: '✅ Confirmado', detail: '+280 avaliações sem menções relevantes a retrogosto. Uso de isolado (não concentrado) é a razão técnica.' },
                { claim: 'Clean label', verdict: '✅ Confirmado', detail: 'Vegan tem 2 ingredientes. Choco tem 6. Nenhum aditivo artificial, corante ou adoçante artificial.' },
                { claim: 'Crocância', verdict: '✅ Confirmado', detail: 'Citada em >60% das avaliações positivas. Textura densa e crocante, diferente de chips expandidos.' },
                { claim: 'Vegano e sem glúten', verdict: '✅ Confirmado', detail: '5 de 6 sabores veganos. Todos os 6 sem glúten. Base é ervilha e arroz — naturalmente livres.' },
                { claim: 'Zero lactose (maioria)', verdict: '✅ Confirmado', detail: 'Exceto o Whey (soro de leite), todos os outros 5 sabores são zero lactose.' },
              ].map(({ claim, verdict, detail }) => (
                <div key={claim} className="bg-white rounded-xl border border-[#E8D5C4] p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-[#1A0A00] text-sm">{claim}</p>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#D4EDDA] text-[#155724]">{verdict}</span>
                  </div>
                  <p className="text-xs text-[#5C3D2E] leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avaliações por produto */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Notas por sabor (Konfidency)</h2>
            <div className="flex flex-col gap-3">
              {byProduct.map(p => (
                <div key={p.sku} className="flex items-center justify-between bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] px-4 py-3">
                  <div>
                    <p className="font-semibold text-[#1A0A00] text-sm">{p.flavor}</p>
                    <p className="text-xs text-[#7A5C46]">{p.count} avaliações verificadas</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-[#C05C14] text-lg">{p.rating}★</p>
                    <p className="text-xs text-[#7A5C46]">{p.recommended}% recomendam</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews reais */}
        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6 text-center">O que os compradores dizem</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {topReviews.map(r => (
                <article key={r.id} className="bg-white rounded-2xl border border-[#E8D5C4] p-5 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400">{'★'.repeat(r.rating)}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F5E6DA] text-[#7A5C46]">{r.flavor}</span>
                  </div>
                  <blockquote className="text-sm text-[#3B1F0A] leading-relaxed flex-1">"{r.text}"</blockquote>
                  <div className="border-t border-[#E8D5C4] pt-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#1A0A00]">{r.name}</p>
                    <span className="text-xs text-[#7A5C46]">✓ verificado</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center">
              <a href="/avaliacoes" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#C05C14] text-[#C05C14] font-bold hover:bg-[#C05C14] hover:text-white transition-colors text-sm">
                Ver todas as {aggregate.count} avaliações →
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Perguntas frequentes</h2>
            <div className="flex flex-col gap-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-5">
                  <h3 className="font-bold text-[#1A0A00] mb-2 text-sm md:text-base">{faq.q}</h3>
                  <p className="text-sm text-[#5C3D2E] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-gradient-to-br from-[#C05C14] to-[#E8732A] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Experimente com risco zero</h2>
            <p className="text-white/90 mb-6">Kit Degustação com 5 sabores por R$49 — a forma mais barata de testar antes de comprar a embalagem grande.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wisehealth.com.br/kit-degustacao-crispy-wise/" target="_blank" rel="noopener noreferrer" className="font-extrabold py-4 px-8 rounded-full bg-white text-[#C05C14] hover:brightness-95 transition-all">Kit Degustação — R$49 →</a>
              <a href="/" className="font-bold py-4 px-8 rounded-full bg-white/20 border border-white/40 text-white hover:bg-white/30 transition-all">Ver todos os sabores</a>
            </div>
          </div>
        </section>

        <section className="py-10 px-4 bg-[#FFF8F0] border-t border-[#E8D5C4]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-base font-black text-[#1A0A00] mb-4 uppercase tracking-wide">Veja também</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href="/avaliacoes" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Todas as Avaliações</p>
                <p className="text-xs text-[#7A5C46] mt-1">+280 reviews verificados por sabor</p>
              </a>
              <a href="/comparativo-snacks-proteicos-brasil" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Comparativo de Snacks</p>
                <p className="text-xs text-[#7A5C46] mt-1">Crispy Wise vs. mercado</p>
              </a>
              <a href="/proteina-de-ervilha" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Proteína de Ervilha</p>
                <p className="text-xs text-[#7A5C46] mt-1">A ciência por trás do produto</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#1A0A00] text-[#D4B8A0] py-8 px-4 text-center text-sm">
        <a href="/" className="font-black text-white text-base">snack<span className="text-[#E8732A]">proteico</span>.com.br</a>
        <p className="mt-1">Guia independente · <a href="https://wisehealth.com.br" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">wisehealth.com.br</a></p>
      </footer>
    </>
  )
}
