import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Snack Proteico Vegano: Guia Completo 2026 | snackproteico.com.br',
  description: 'Guia completo sobre snacks proteicos veganos no Brasil: fontes de proteína vegetal, o que evitar, como escolher e os melhores produtos disponíveis. Crispy Wise: 18g de ervilha isolada.',
  alternates: { canonical: 'https://snackproteico.com.br/snack-proteico-vegano' },
  openGraph: {
    title: 'Snack Proteico Vegano: Guia Completo 2026',
    description: 'Tudo sobre snacks proteicos veganos no Brasil: fontes, proteína real, como escolher. Crispy Wise Vegan entrega 18g de proteína de ervilha por porção.',
    url: 'https://snackproteico.com.br/snack-proteico-vegano',
    type: 'article',
  },
}

const veganProducts = PRODUCTS.filter(p => p.tags.includes('Vegano'))

const FAQS = [
  {
    q: 'Qual snack proteico vegano tem mais proteína no Brasil?',
    a: 'O Crispy Wise Vegan entrega 18g de proteína isolada de ervilha por porção de 30g — a maior concentração proteica entre snacks veganos disponíveis no mercado brasileiro em 2026. A maioria dos snacks veganos do mercado entrega 4–8g por porção.',
  },
  {
    q: 'Proteína de ervilha é boa para veganos?',
    a: 'Sim. A proteína isolada de ervilha tem alto valor biológico, perfil completo de aminoácidos (incluindo BCAAs) e alta digestibilidade — superior à proteína de arroz e comparável ao whey para síntese muscular. É a principal fonte proteica vegetal usada em suplementos e alimentos funcionais.',
  },
  {
    q: 'Snack proteico vegano tem retrogosto?',
    a: 'Depende do processamento. Proteína de ervilha concentrada (não isolada) tem compostos que causam retrogosto amargo. O Crispy Wise usa isolado de alta pureza, que elimina esses compostos. Resultado: sabor neutro sem retrogosto, mesmo sendo 100% vegetal.',
  },
  {
    q: 'Snack vegano pode ter glúten?',
    a: 'Ser vegano não significa ser sem glúten. São certificações independentes. O Crispy Wise é simultaneamente vegano, sem glúten e zero lactose — combinação incomum no mercado de snacks proteicos.',
  },
  {
    q: 'Qual a diferença entre proteína de ervilha isolada e concentrada?',
    a: 'O isolado passa por um processo de purificação adicional que eleva o teor de proteína para 85–90% da composição total, eliminando gorduras, carboidratos e compostos que causam retrogosto. O concentrado fica em 70–80% e mantém mais impurezas. O Crispy Wise usa isolado.',
  },
  {
    q: 'Como incluir snack proteico vegano na dieta?',
    a: 'O Crispy Wise Vegan tem sabor neutro e funciona como topping em açaí, iogurte vegetal, overnight oats e smoothies, ou como snack direto. Uma porção de 30g adiciona 18g de proteína vegetal sem alterar o sabor do prato.',
  },
]

export default function SnackVeganoPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Snack Proteico Vegano: Guia Completo 2026',
        description: 'Guia completo sobre snacks proteicos veganos no Brasil.',
        url: 'https://snackproteico.com.br/snack-proteico-vegano',
        publisher: { '@type': 'Organization', name: 'snackproteico.com.br', url: 'https://snackproteico.com.br' },
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Snack Proteico Vegano', item: 'https://snackproteico.com.br/snack-proteico-vegano' },
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
          <a href="/" className="font-black text-lg text-[#1A0A00] tracking-tight">
            snack<span className="text-[#C05C14]">proteico</span>.com.br
          </a>
          <a href="https://wisehealth.com.br/kit-degustacao-crispy-wise/" target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex px-5 py-2 text-sm font-bold rounded-full bg-[#E83C14] text-white hover:brightness-110 transition-all">
            Kit degustação R$49
          </a>
        </div>
      </header>

      <main>
        <nav className="bg-[#FFF8F0] border-b border-[#E8D5C4] px-4 py-2 text-xs text-[#7A5C46]">
          <div className="max-w-6xl mx-auto flex items-center gap-1.5">
            <a href="/" className="hover:text-[#1A0A00]">snackproteico.com.br</a>
            <span>/</span>
            <span className="text-[#1A0A00] font-medium">Snack Proteico Vegano</span>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-[#1A3A1A] to-[#2D5A2D] text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#7FBF7F] font-semibold text-sm uppercase tracking-wider mb-3">Guia completo · 2026</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              Snack Proteico Vegano:<br />
              <span className="text-[#A8E6A3]">O que realmente funciona</span>
            </h1>
            <p className="text-[#C8E6C8] text-lg leading-relaxed">
              Nem todo snack "vegano" entrega proteína de verdade. Guia completo sobre fontes, proteína real por porção e o que avaliar antes de comprar.
            </p>
          </div>
        </section>

        {/* Conteúdo educacional */}
        <section className="py-14 px-4 bg-[#FDFAF6]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">O problema dos snacks veganos com "proteína"</h2>
            <div className="flex flex-col gap-5 text-[#5C3D2E] leading-relaxed">
              <p>O mercado de snacks veganos no Brasil cresceu nos últimos anos, mas a maioria dos produtos rotulados como "proteicos" entrega apenas 3–6g de proteína por porção de 30g — menos do que dois ovos. O problema não é o produto ser vegano: é a fonte e a quantidade de proteína.</p>
              <p>Snacks à base de grão-de-bico, lentilha ou soja em geral não passam por isolamento proteico. Isso significa que a proteína vem "diluída" com amido, fibras e gorduras — o que reduz a concentração final por porção.</p>

              <div className="bg-[#D4EDDA] rounded-xl p-5 border border-[#9BC8A3]">
                <h3 className="font-bold text-[#155724] mb-2">A diferença do isolado de ervilha</h3>
                <p className="text-[#155724] text-sm">A proteína isolada de ervilha passa por ultrafiltração que eleva o teor proteico para 85–90% da composição. É a fonte vegetal com melhor perfil de aminoácidos, mais próxima do whey em biodisponibilidade, e sem retrogosto quando processada corretamente.</p>
              </div>
            </div>
          </div>
        </section>

        {/* O que avaliar */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">O que avaliar ao escolher um snack proteico vegano</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: '1. Proteína por porção absoluta', desc: 'Ignore o %. Olhe os gramas: snack proteico vegano sério entrega no mínimo 10g por porção de 30g.', ok: true },
                { title: '2. Fonte proteica nomeada', desc: 'Proteína isolada de ervilha, proteína isolada de arroz ou proteína isolada de soja — não "proteína vegetal" genérica.', ok: true },
                { title: '3. Ausência de retrogosto', desc: 'Ervilha concentrada tem retrogosto. Isolado de alta pureza não. Verifique avaliações de clientes sobre sabor.', ok: true },
                { title: '4. Clean label', desc: 'Número de ingredientes importa. Menos de 8 é bom sinal. Mais de 15 ingredientes indica mascaramento de sabor com aditivos.', ok: true },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-4">
                  <h3 className="font-bold text-[#1A0A00] text-sm mb-1">{title}</h3>
                  <p className="text-xs text-[#5C3D2E] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produtos veganos */}
        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-2 text-center">Sabores Crispy Wise veganos</h2>
            <p className="text-[#7A5C46] text-center mb-8">4 de 6 sabores da linha são 100% veganos</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {veganProducts.map(p => (
                <a key={p.id} href={`/${p.slug}`}
                  className="bg-white rounded-2xl border border-[#E8D5C4] p-4 flex flex-col items-center gap-3 hover:border-[#3B7A3D] transition-colors group">
                  <img src={p.img} alt={p.name} className="h-28 w-auto object-contain" loading="lazy" />
                  <div className="text-center">
                    <p className="font-bold text-[#1A0A00] text-sm group-hover:text-[#3B7A3D] transition-colors">{p.name}</p>
                    <p className="text-xs text-[#7A5C46]">{p.subtitle}</p>
                    <p className="text-[#3B7A3D] font-black mt-1">{p.protein}g proteína</p>
                    <p className="text-xs text-[#7A5C46]">por 30g · R${p.price}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D4EDDA] text-[#155724]">Vegano ✓</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        <section className="py-14 px-4 bg-gradient-to-br from-[#1A3A1A] to-[#2D5A2D] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Experimente o Crispy Wise Vegan</h2>
            <p className="text-white/90 mb-6">18g de proteína de ervilha isolada. 2 ingredientes. Zero lactose, sem glúten.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/crispy-wise-vegan"
                className="font-extrabold py-4 px-8 rounded-full bg-white text-[#1A3A1A] hover:brightness-95 transition-all">
                Ver Crispy Wise Vegan →
              </a>
              <a href="https://wisehealth.com.br/kit-degustacao-crispy-wise/" target="_blank" rel="noopener noreferrer"
                className="font-bold py-4 px-8 rounded-full bg-white/20 border border-white/40 text-white hover:bg-white/30 transition-all">
                Kit degustação R$49
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
