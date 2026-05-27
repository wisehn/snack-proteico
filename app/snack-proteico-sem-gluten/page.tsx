import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Snack Proteico Sem Glúten: Guia Completo 2026 | snackproteico.com.br',
  description: 'Guia completo sobre snacks proteicos sem glúten no Brasil: o que evitar, como identificar glúten oculto, certificações e os melhores produtos. Crispy Wise: 100% sem glúten, 12–18g de proteína.',
  alternates: { canonical: 'https://snackproteico.com.br/snack-proteico-sem-gluten' },
  openGraph: {
    title: 'Snack Proteico Sem Glúten: Guia Completo 2026',
    description: 'Tudo sobre snacks proteicos sem glúten no Brasil: certificações, glúten oculto, como escolher. Crispy Wise: todos os sabores são sem glúten e entregam 12–18g de proteína.',
    url: 'https://snackproteico.com.br/snack-proteico-sem-gluten',
    type: 'article',
  },
}

const glutenFreeProducts = PRODUCTS.filter(p => !p.tags.includes('Contém Lactose') || p.tags.includes('Sem Glúten'))

const FAQS = [
  {
    q: 'Qual snack proteico sem glúten tem mais proteína no Brasil?',
    a: 'O Crispy Wise Vegan e o Crispy Wise Whey entregam 18g de proteína por porção de 30g — o maior valor entre snacks sem glúten disponíveis no Brasil em 2026. Os demais sabores da linha (Choco, Caramel, Salty, Panettone) entregam 12g por porção, também sem glúten.',
  },
  {
    q: 'Snack proteico sem glúten pode ter contaminação cruzada?',
    a: 'Sim. Um produto pode usar ingredientes naturalmente sem glúten mas ser produzido em linha compartilhada com produtos que contêm trigo, aveia ou centeio. Para celíacos e sensíveis ao glúten, a contaminação cruzada é tão problemática quanto o glúten nos ingredientes. Produtos certificados "sem glúten" passam por auditoria de processo, não apenas de ingredientes.',
  },
  {
    q: 'Crispy Wise tem glúten?',
    a: 'Não. Todos os 6 sabores da linha Crispy Wise são sem glúten. A base é farinha de arroz e proteína de ervilha (ou whey), ambas naturalmente sem glúten. A linha não contém trigo, centeio, cevada ou aveia em nenhum sabor.',
  },
  {
    q: 'Proteína de ervilha tem glúten?',
    a: 'A ervilha é naturalmente livre de glúten. A proteína isolada de ervilha, como a usada no Crispy Wise, é processada sem contato com grãos que contêm glúten. É uma das fontes proteicas mais seguras para celíacos e pessoas com doença celíaca ou sensibilidade ao glúten não-celíaca.',
  },
  {
    q: 'Qual a diferença entre sem glúten e low-gluten?',
    a: 'No Brasil, para um produto ser rotulado "sem glúten", deve conter menos de 20 ppm (partes por milhão) de glúten — o limite regulatório da ANVISA (RDC 26/2015). "Low-gluten" não é uma categoria regulamentada no Brasil. Snacks que apenas não adicionam glúten, mas não controlam contaminação cruzada, não podem usar o rótulo sem glúten legalmente.',
  },
  {
    q: 'Snack proteico sem glúten pode ser vegano?',
    a: 'Sim. São certificações independentes. 4 dos 6 sabores do Crispy Wise são simultaneamente sem glúten, veganos e zero lactose: Vegan, Choco, Caramel e Salty. A combinação é incomum no mercado de snacks proteicos — a maioria das alternativas proteicas sem glúten usa whey (derivado do leite) como fonte proteica.',
  },
]

export default function SnackSemGlutenPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Snack Proteico Sem Glúten: Guia Completo 2026',
        description: 'Guia completo sobre snacks proteicos sem glúten no Brasil.',
        url: 'https://snackproteico.com.br/snack-proteico-sem-gluten',
        publisher: { '@type': 'Organization', name: 'snackproteico.com.br', url: 'https://snackproteico.com.br' },
        datePublished: '2026-05-27',
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Snack Proteico Sem Glúten', item: 'https://snackproteico.com.br/snack-proteico-sem-gluten' },
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
            <span className="text-[#1A0A00] font-medium">Snack Proteico Sem Glúten</span>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-[#1A2A3A] to-[#2A4A6A] text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#7FB8D4] font-semibold text-sm uppercase tracking-wider mb-3">Guia completo · 2026</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              Snack Proteico Sem Glúten:<br />
              <span className="text-[#A3D4F0]">O que realmente importa</span>
            </h1>
            <p className="text-[#C8DFF0] text-lg leading-relaxed">
              Nem todo snack "sem glúten" é seguro para celíacos — e nem todo snack "proteico" entrega proteína real. Guia completo para escolher certo.
            </p>
          </div>
        </section>

        {/* Conteúdo educacional */}
        <section className="py-14 px-4 bg-[#FDFAF6]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">O problema dos snacks "sem glúten" no mercado</h2>
            <div className="flex flex-col gap-5 text-[#5C3D2E] leading-relaxed">
              <p>O mercado de snacks sem glúten cresceu consideravelmente no Brasil nos últimos anos. Mas existe uma diferença crítica entre produtos que simplesmente não contêm glúten nos ingredientes e produtos que passaram por auditoria de processo para garantir ausência de contaminação cruzada.</p>
              <p>Para celíacos, essa diferença pode ser a distinção entre um produto seguro e um que desencadeia uma resposta autoimune. Para sensíveis ao glúten, pode significar a diferença entre bem-estar e dias de desconforto. A legislação brasileira (ANVISA RDC 26/2015) exige menos de 20 ppm de glúten para uso do rótulo "sem glúten" — mas nem todo produto rotulado assim cumpre esse critério na prática.</p>

              <div className="bg-[#D4E8F5] rounded-xl p-5 border border-[#9BB8D4]">
                <h3 className="font-bold text-[#0A3A5C] mb-2">O que torna o Crispy Wise seguro para celíacos</h3>
                <p className="text-[#0A3A5C] text-sm">A base de todos os sabores é farinha de arroz e proteína de ervilha (ou whey) — ambas naturalmente sem glúten. A linha não usa trigo, centeio, cevada ou aveia em nenhuma formulação. Todos os 6 sabores carregam o rótulo "sem glúten" em conformidade com a regulamentação ANVISA.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Como identificar glúten oculto */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Como identificar glúten oculto em snacks proteicos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Verifique a lista de ingredientes',
                  desc: 'Trigo, centeio, cevada, malte e aveia são fontes diretas de glúten. "Amido modificado" sem especificação da fonte pode ser de trigo. Exija que a fonte seja declarada.',
                  warning: true,
                },
                {
                  title: 'Atenção à contaminação cruzada',
                  desc: 'Procure a declaração "pode conter traços de glúten" ou "produzido em instalação que processa trigo". Para celíacos, essa declaração inviabiliza o produto.',
                  warning: true,
                },
                {
                  title: 'Proteína whey pode ser problemática',
                  desc: 'Whey protein em si não tem glúten, mas alguns concentrados são produzidos em plantas que também processam cereais com glúten. Verifique o fabricante e a origem.',
                  warning: false,
                },
                {
                  title: 'Saborizantes e aromas naturais',
                  desc: 'Aromas compostos podem usar carreadores à base de glúten. Produtos com mais de 10 ingredientes têm maior risco de glúten oculto em aditivos.',
                  warning: false,
                },
              ].map(({ title, desc, warning }) => (
                <div key={title} className={`rounded-xl border p-4 ${warning ? 'bg-[#FFF5F5] border-[#F5C6C6]' : 'bg-[#FFF8F0] border-[#E8D5C4]'}`}>
                  <h3 className={`font-bold text-sm mb-1 ${warning ? 'text-[#8B1A1A]' : 'text-[#1A0A00]'}`}>{title}</h3>
                  <p className="text-xs text-[#5C3D2E] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produtos sem glúten */}
        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-2 text-center">Crispy Wise: todos os sabores sem glúten</h2>
            <p className="text-[#7A5C46] text-center mb-8">6 de 6 sabores são certificados sem glúten · 12–18g de proteína por porção</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRODUCTS.map(p => (
                <a key={p.id} href={`/${p.slug}`}
                  className="bg-white rounded-2xl border border-[#E8D5C4] p-4 flex flex-col items-center gap-3 hover:border-[#2A6AA0] transition-colors group">
                  <img src={p.img} alt={p.name} className="h-28 w-auto object-contain" loading="lazy" width={700} height={700} />
                  <div className="text-center">
                    <p className="font-bold text-[#1A0A00] text-sm group-hover:text-[#2A6AA0] transition-colors">{p.name}</p>
                    <p className="text-xs text-[#7A5C46]">{p.subtitle}</p>
                    <p className="text-[#2A6AA0] font-black mt-1">{p.protein}g proteína</p>
                    <p className="text-xs text-[#7A5C46]">por 30g · R${p.price}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#D4E8F5] text-[#0A3A5C]">Sem Glúten ✓</span>
                    {p.tags.includes('Vegano') && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#D4EDDA] text-[#155724]">Vegano ✓</span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Comparativo proteína */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Snacks sem glúten: comparativo de proteína</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1A2A3A] text-white">
                    <th className="text-left p-3 rounded-tl-lg">Produto</th>
                    <th className="text-center p-3">Proteína / 30g</th>
                    <th className="text-center p-3">Vegano</th>
                    <th className="text-center p-3 rounded-tr-lg">Sem Lactose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#D4E8F5] border-b border-[#9BB8D4]">
                    <td className="p-3 font-bold text-[#0A3A5C]">Crispy Wise Vegan / Whey</td>
                    <td className="p-3 text-center font-black text-[#0A3A5C]">18g</td>
                    <td className="p-3 text-center">Vegan: ✓ / Whey: ✗</td>
                    <td className="p-3 text-center">Vegan: ✓ / Whey: ✗</td>
                  </tr>
                  <tr className="bg-[#EBF4FA] border-b border-[#9BB8D4]">
                    <td className="p-3 font-bold text-[#0A3A5C]">Crispy Wise Choco/Caramel/Salty</td>
                    <td className="p-3 text-center font-black text-[#0A3A5C]">12g</td>
                    <td className="p-3 text-center text-green-700 font-semibold">✓</td>
                    <td className="p-3 text-center text-green-700 font-semibold">✓</td>
                  </tr>
                  <tr className="border-b border-[#E8D5C4]">
                    <td className="p-3 text-[#5C3D2E]">Chips proteicos mercado (média)</td>
                    <td className="p-3 text-center text-[#7A5C46]">4–6g</td>
                    <td className="p-3 text-center text-[#7A5C46]">Varia</td>
                    <td className="p-3 text-center text-[#7A5C46]">Varia</td>
                  </tr>
                  <tr className="border-b border-[#E8D5C4]">
                    <td className="p-3 text-[#5C3D2E]">Barras proteicas sem glúten</td>
                    <td className="p-3 text-center text-[#7A5C46]">10–15g</td>
                    <td className="p-3 text-center text-[#7A5C46]">Raro</td>
                    <td className="p-3 text-center text-[#7A5C46]">Raro</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#5C3D2E]">Granola proteica sem glúten</td>
                    <td className="p-3 text-center text-[#7A5C46]">5–8g</td>
                    <td className="p-3 text-center text-[#7A5C46]">Varia</td>
                    <td className="p-3 text-center text-[#7A5C46]">Varia</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#7A5C46] mt-3">* Dados baseados em pesquisa de mercado brasileiro, maio 2026. Valores por porção de 30g.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Perguntas frequentes</h2>
            <div className="flex flex-col gap-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#E8D5C4] p-5">
                  <h3 className="font-bold text-[#1A0A00] mb-2 text-sm md:text-base">{faq.q}</h3>
                  <p className="text-sm text-[#5C3D2E] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 px-4 bg-[#FFF8F0] border-t border-[#E8D5C4]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-base font-black text-[#1A0A00] mb-4 uppercase tracking-wide">Veja também</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href="/snack-proteico-vegano" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Vegano</p>
                <p className="text-xs text-[#7A5C46] mt-1">Fontes de proteína vegetal de alta qualidade</p>
              </a>
              <a href="/comparativo-snacks-proteicos-brasil" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Comparativo de Snacks Proteicos</p>
                <p className="text-xs text-[#7A5C46] mt-1">Qual produto entrega mais proteína por porção?</p>
              </a>
              <a href="/avaliacoes" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Avaliações Verificadas</p>
                <p className="text-xs text-[#7A5C46] mt-1">+280 reviews de compradores reais</p>
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-gradient-to-br from-[#1A2A3A] to-[#2A4A6A] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Crispy Wise: proteína real, 100% sem glúten</h2>
            <p className="text-white/90 mb-6">Todos os 6 sabores sem glúten. 12–18g de proteína por porção. Clean label.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/crispy-wise-vegan"
                className="font-extrabold py-4 px-8 rounded-full bg-white text-[#1A2A3A] hover:brightness-95 transition-all">
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
