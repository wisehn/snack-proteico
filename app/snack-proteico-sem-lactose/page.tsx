import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Snack Proteico Sem Lactose: Guia Completo 2026 | snackproteico.com.br',
  description: 'Guia completo sobre snacks proteicos zero lactose no Brasil: por que a maioria contém lactose, como identificar, e as melhores opções. Crispy Wise: 5 de 6 sabores zero lactose.',
  alternates: { canonical: 'https://snackproteico.com.br/snack-proteico-sem-lactose' },
  openGraph: {
    title: 'Snack Proteico Sem Lactose: Guia Completo 2026',
    description: '70% dos brasileiros têm intolerância à lactose. Guia sobre como encontrar snacks proteicos que não causam desconforto digestivo.',
    url: 'https://snackproteico.com.br/snack-proteico-sem-lactose',
    type: 'article',
  },
}

const zeroLactoseProducts = PRODUCTS.filter(p => p.tags.includes('Zero Lactose'))

const FAQS = [
  {
    q: 'Por que a maioria dos snacks proteicos tem lactose?',
    a: 'A fonte proteica mais comum em snacks é o concentrado ou isolado de proteína de soro de leite (whey), que é derivado da produção de queijo. Mesmo o whey isolado, que passa por filtração adicional, pode conter traços de lactose. Para quem tem intolerância severa, qualquer derivado de leite pode causar desconforto. A alternativa é buscar produtos com proteína de origem vegetal — ervilha, arroz ou soja.',
  },
  {
    q: 'Crispy Wise tem lactose?',
    a: 'Depende do sabor. O Crispy Wise Whey contém concentrado de soro de leite e não é adequado para intolerantes à lactose. Os outros 5 sabores — Vegan, Choco, Caramel, Salty e Panettone — são todos zero lactose, baseados em proteína isolada de ervilha.',
  },
  {
    q: 'Snack proteico zero lactose tem a mesma proteína?',
    a: 'Sim. O Crispy Wise Vegan, que usa isolado de ervilha, entrega 18g de proteína por 30g — igual ao Crispy Wise Whey. Os demais sabores zero lactose (Choco, Caramel, Salty, Panettone) entregam 12g. A quantidade de proteína não depende da fonte ser animal ou vegetal, mas da concentração do isolado usado.',
  },
  {
    q: 'Intolerante à lactose pode comer proteína de ervilha?',
    a: 'Sim. A proteína de ervilha não tem nenhuma relação com leite ou derivados lácteos. É 100% vegetal, produzida a partir da ervilha-amarela, sem nenhum componente lácteo na cadeia de produção. É uma das fontes proteicas mais seguras para intolerantes à lactose.',
  },
  {
    q: 'Como saber se um snack proteico tem lactose oculta?',
    a: 'Além de "leite" e "lactose" na lista de ingredientes, fique atento a: soro de leite (whey), caseinato, caseína, lactoalbumina, lactoglobulina, proteína de leite, extrato de leite, creme de leite e manteiga. Qualquer um desses indica presença de lactose. Produtos com a declaração "zero lactose" devem conter menos de 0,1g por 100g, conforme ANVISA.',
  },
  {
    q: 'Proteína sem lactose atrapalha o ganho de massa muscular?',
    a: 'Não. Estudos comparando isolado de ervilha e whey para ganho de massa muscular mostram resultados equivalentes quando a quantidade total de proteína é equiparada. O Crispy Wise Vegan (zero lactose) com 18g de proteína por porção é tão eficaz quanto o Crispy Wise Whey para recuperação e síntese muscular, com a vantagem de não causar desconforto digestivo em intolerantes.',
  },
]

export default function SnackSemLactosePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Snack Proteico Sem Lactose: Guia Completo 2026',
        description: 'Guia completo sobre snacks proteicos zero lactose no Brasil.',
        url: 'https://snackproteico.com.br/snack-proteico-sem-lactose',
        publisher: { '@type': 'Organization', name: 'snackproteico.com.br', url: 'https://snackproteico.com.br' },
        datePublished: '2026-05-27',
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Snack Proteico Sem Lactose', item: 'https://snackproteico.com.br/snack-proteico-sem-lactose' },
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
            <span className="text-[#1A0A00] font-medium">Snack Proteico Sem Lactose</span>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-[#1A0A2A] to-[#3A1A5A] text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#C8A8E8] font-semibold text-sm uppercase tracking-wider mb-3">Guia completo · 2026</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              Snack Proteico Sem Lactose:<br />
              <span className="text-[#E8C8FF]">Para os 70% que precisam</span>
            </h1>
            <p className="text-[#D4B8F0] text-lg leading-relaxed">
              Cerca de 70% dos brasileiros adultos têm algum grau de intolerância à lactose. A maioria dos snacks proteicos do mercado usa whey. Veja como encontrar alternativas que entregam a mesma proteína sem o desconforto.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-[#FDFAF6]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">O problema da lactose nos snacks proteicos</h2>
            <div className="flex flex-col gap-5 text-[#5C3D2E] leading-relaxed">
              <p>O whey protein — concentrado ou isolado de soro de leite — é a fonte proteica mais comum em snacks, barras e suplementos. O problema: mesmo o whey isolado, que passa por filtração mais intensa, pode conter traços de lactose. Para intolerantes à lactose com sensibilidade moderada a severa, isso é suficiente para causar gases, inchaço e desconforto digestivo.</p>
              <p>A solução não é abrir mão de proteína — é escolher a fonte certa. Proteínas de origem vegetal como ervilha, arroz e soja são naturalmente livres de lactose, sem comprometer quantidade nem qualidade proteica.</p>
              <div className="bg-[#F0E6FF] rounded-xl p-5 border border-[#C8A8E8]">
                <h3 className="font-bold text-[#3A1A5A] mb-2">Lactose nos snacks: o que diz a ANVISA</h3>
                <p className="text-[#3A1A5A] text-sm">Para um produto ser rotulado "zero lactose", deve conter menos de 0,1g por 100g — conforme RDC 136/2017 da ANVISA. Produtos rotulados apenas como "sem adição de lactose" podem ainda conter lactose residual dos ingredientes. Sempre verifique a fonte proteica na lista de ingredientes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Fontes proteicas: com e sem lactose</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1A0A00] text-white">
                    <th className="text-left p-3 rounded-tl-lg">Fonte proteica</th>
                    <th className="text-center p-3">Lactose</th>
                    <th className="text-center p-3">Proteína / 30g</th>
                    <th className="text-center p-3 rounded-tr-lg">Vegano</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { fonte: 'Isolado de ervilha', lactose: '❌ Zero', prot: '25–27g', vegan: '✅' },
                    { fonte: 'Isolado de arroz', lactose: '❌ Zero', prot: '22–24g', vegan: '✅' },
                    { fonte: 'Isolado de soja', lactose: '❌ Zero', prot: '25–27g', vegan: '✅' },
                    { fonte: 'Whey isolado', lactose: '⚠️ Traços', prot: '25–28g', vegan: '❌' },
                    { fonte: 'Whey concentrado', lactose: '⚠️ Presente', prot: '20–24g', vegan: '❌' },
                    { fonte: 'Caseína', lactose: '⚠️ Presente', prot: '22–25g', vegan: '❌' },
                  ].map(({ fonte, lactose, prot, vegan }, i) => (
                    <tr key={fonte} className={`border-b border-[#E8D5C4] ${i % 2 === 0 ? 'bg-[#FFF8F0]' : 'bg-white'}`}>
                      <td className="p-3 font-medium text-[#1A0A00]">{fonte}</td>
                      <td className="p-3 text-center">{lactose}</td>
                      <td className="p-3 text-center font-semibold text-[#C05C14]">{prot}</td>
                      <td className="p-3 text-center">{vegan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-2 text-center">Crispy Wise: 5 de 6 sabores zero lactose</h2>
            <p className="text-[#7A5C46] text-center mb-8">Todos com proteína isolada de ervilha · 12–18g por porção</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {zeroLactoseProducts.map(p => (
                <a key={p.id} href={`/${p.slug}`} className="bg-white rounded-2xl border border-[#E8D5C4] p-4 flex flex-col items-center gap-3 hover:border-[#3A1A5A] transition-colors group">
                  <img src={p.img} alt={p.name} className="h-28 w-auto object-contain" loading="lazy" width={700} height={700} />
                  <div className="text-center">
                    <p className="font-bold text-[#1A0A00] text-sm group-hover:text-[#3A1A5A] transition-colors">{p.name}</p>
                    <p className="text-xs text-[#7A5C46]">{p.subtitle}</p>
                    <p className="text-[#C05C14] font-black mt-1">{p.protein}g proteína</p>
                    <p className="text-xs text-[#7A5C46]">por 30g · R${p.price}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F0E6FF] text-[#3A1A5A]">Zero Lactose ✓</span>
                </a>
              ))}
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

        <section className="py-10 px-4 bg-[#FFF8F0] border-t border-[#E8D5C4]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-base font-black text-[#1A0A00] mb-4 uppercase tracking-wide">Veja também</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href="/snack-proteico-vegano" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Vegano</p>
                <p className="text-xs text-[#7A5C46] mt-1">Proteína de ervilha: fontes e qualidade</p>
              </a>
              <a href="/snack-proteico-sem-gluten" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Sem Glúten</p>
                <p className="text-xs text-[#7A5C46] mt-1">Certificações e como identificar glúten oculto</p>
              </a>
              <a href="/comparativo-snacks-proteicos-brasil" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Comparativo de Snacks</p>
                <p className="text-xs text-[#7A5C46] mt-1">Qual produto tem mais proteína por porção?</p>
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
