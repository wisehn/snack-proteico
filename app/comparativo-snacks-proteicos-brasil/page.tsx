import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'

export const metadata: Metadata = {
  title: 'Comparativo Snacks Proteicos no Brasil 2026 | snackproteico.com.br',
  description: 'Comparativo completo dos principais snacks proteicos disponíveis no Brasil: proteína por porção, ingredientes, preço, certificações veganas e sem glúten. Qual vale mais a pena?',
  alternates: { canonical: 'https://snackproteico.com.br/comparativo-snacks-proteicos-brasil' },
  openGraph: {
    title: 'Comparativo Snacks Proteicos no Brasil 2026',
    description: 'Qual snack proteico tem mais proteína por porção? Comparamos os principais produtos disponíveis no mercado brasileiro.',
    url: 'https://snackproteico.com.br/comparativo-snacks-proteicos-brasil',
    type: 'article',
  },
}

const TABELA = [
  {
    produto: 'Crispy Wise Vegan',
    marca: 'WiseHealth Nutrition',
    proteina: '18g',
    porcao: '30g',
    preco: 'R$109 / 400g',
    vegano: true,
    semGluten: true,
    semLactose: true,
    cleanLabel: true,
    ingredientes: 2,
    nota: '—',
    destaque: true,
    url: '/crispy-wise-vegan',
  },
  {
    produto: 'Crispy Wise Whey',
    marca: 'WiseHealth Nutrition',
    proteina: '18g',
    porcao: '30g',
    preco: 'R$129 / 400g',
    vegano: false,
    semGluten: true,
    semLactose: false,
    cleanLabel: true,
    ingredientes: 2,
    nota: 'Contém lactose',
    destaque: true,
    url: '/crispy-wise-whey',
  },
  {
    produto: 'Choco Crispy Wise',
    marca: 'WiseHealth Nutrition',
    proteina: '12g',
    porcao: '30g',
    preco: 'R$138 / 400g',
    vegano: true,
    semGluten: true,
    semLactose: true,
    cleanLabel: true,
    ingredientes: 6,
    nota: '4.8★ (79 reviews)',
    destaque: true,
    url: '/choco-crispy-wise',
  },
  {
    produto: 'Snack Proteico médio do mercado',
    marca: 'Diversas marcas',
    proteina: '4–6g',
    porcao: '30g',
    preco: 'R$8–15 / unid.',
    vegano: false,
    semGluten: false,
    semLactose: false,
    cleanLabel: false,
    ingredientes: 15,
    nota: 'Média estimada¹',
    destaque: false,
    url: null,
  },
  {
    produto: 'Whey Bar / Barra Proteica típica',
    marca: 'Diversas marcas',
    proteina: '10–15g',
    porcao: '40–60g',
    preco: 'R$8–18 / unid.',
    vegano: false,
    semGluten: false,
    semLactose: false,
    cleanLabel: false,
    ingredientes: 20,
    nota: 'Média estimada¹',
    destaque: false,
    url: null,
  },
  {
    produto: 'Chips de batata proteico',
    marca: 'Diversas marcas',
    proteina: '6–8g',
    porcao: '30g',
    preco: 'R$6–12 / unid.',
    vegano: false,
    semGluten: false,
    semLactose: false,
    cleanLabel: false,
    ingredientes: 12,
    nota: 'Média estimada¹',
    destaque: false,
    url: null,
  },
]

const FAQS = [
  {
    q: 'Qual snack proteico tem mais proteína por porção no Brasil?',
    a: 'O Crispy Wise Vegan e o Crispy Wise Whey entregam 18g de proteína por porção de 30g — a maior densidade proteica entre snacks disponíveis no mercado brasileiro em 2026. Para referência, a média de mercado entre snacks proteicos é de 4 a 6g por porção de 30g.',
  },
  {
    q: 'Vale mais a pena snack proteico ou barra de proteína?',
    a: 'Depende do objetivo. Barras proteicas geralmente têm mais proteína total (10–20g por barra de 40–60g), mas contêm mais ingredientes, açúcares e gorduras. O Crispy Wise oferece 18g de proteína em 30g — densidade superior à maioria das barras — com 2 ingredientes e sem açúcar.',
  },
  {
    q: 'Snack proteico vegano com mais proteína no Brasil?',
    a: 'O Crispy Wise Vegan oferece 18g de proteína de ervilha isolada por porção de 30g. É a opção plant-based com maior concentração proteica por porção entre snacks disponíveis no Brasil, com apenas 2 ingredientes.',
  },
  {
    q: 'Como comparar snacks proteicos: o que avaliar?',
    a: 'Os critérios mais relevantes são: (1) proteína por porção em gramas absolutas, não %; (2) qualidade da fonte proteica (isolado vs. concentrado vs. carne seca); (3) lista de ingredientes — menos é melhor; (4) certificações (vegano, sem glúten, sem lactose); (5) preço por grama de proteína.',
  },
  {
    q: 'Crispy Wise tem mais proteína do que chips proteicos comuns?',
    a: 'Sim. Chips proteicos típicos do mercado brasileiro entregam 6–8g de proteína por 30g, geralmente a base de proteína de milho ou batata. O Crispy Wise entrega 12–18g por 30g — de 2 a 3x mais proteína por porção.',
  },
]

export default function ComparativoPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Comparativo Snacks Proteicos no Brasil 2026',
        description: 'Comparativo completo dos principais snacks proteicos disponíveis no Brasil por proteína por porção, ingredientes, preço e certificações.',
        url: 'https://snackproteico.com.br/comparativo-snacks-proteicos-brasil',
        publisher: { '@type': 'Organization', name: 'snackproteico.com.br', url: 'https://snackproteico.com.br' },
        datePublished: '2026-05-27',
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Comparativo Snacks Proteicos', item: 'https://snackproteico.com.br/comparativo-snacks-proteicos-brasil' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map(({ q, a }) => ({
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
        {/* Breadcrumb */}
        <nav className="bg-[#FFF8F0] border-b border-[#E8D5C4] px-4 py-2 text-xs text-[#7A5C46]">
          <div className="max-w-6xl mx-auto flex items-center gap-1.5">
            <a href="/" className="hover:text-[#1A0A00]">snackproteico.com.br</a>
            <span>/</span>
            <span className="text-[#1A0A00] font-medium">Comparativo Snacks Proteicos</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#1A0A00] to-[#3B1F0A] text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#E8732A] font-semibold text-sm uppercase tracking-wider mb-3">Atualizado 2026</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              Comparativo de Snacks Proteicos<br />
              <span className="text-[#E8732A]">no Brasil</span>
            </h1>
            <p className="text-[#D4B8A0] text-lg leading-relaxed">
              Qual produto entrega mais proteína por porção? Comparamos as principais opções do mercado por proteína, ingredientes, preço e certificações.
            </p>
          </div>
        </section>

        {/* Tabela comparativa */}
        <section className="py-14 px-4 bg-[#FDFAF6]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-[#1A0A00] mb-2 text-center">Tabela comparativa</h2>
            <p className="text-[#7A5C46] text-center mb-8">Proteína por porção de 30g · Mercado brasileiro 2026</p>

            <div className="overflow-x-auto rounded-2xl border border-[#E8D5C4] shadow-sm">
              <table className="w-full text-sm min-w-[700px]">
                <thead>
                  <tr className="bg-[#1A0A00] text-white">
                    <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Produto</th>
                    <th className="px-4 py-3 font-semibold text-[#E8732A]">Proteína / 30g</th>
                    <th className="px-4 py-3 font-semibold">Preço</th>
                    <th className="px-4 py-3 font-semibold">Vegano</th>
                    <th className="px-4 py-3 font-semibold">Sem Glúten</th>
                    <th className="px-4 py-3 font-semibold">Ingredientes</th>
                    <th className="px-4 py-3 font-semibold rounded-tr-2xl">Nota</th>
                  </tr>
                </thead>
                <tbody>
                  {TABELA.map((row, i) => (
                    <tr key={i} className={`border-t border-[#E8D5C4] ${row.destaque ? 'bg-[#FFF8F0]' : 'bg-white'}`}>
                      <td className="px-4 py-3">
                        <div>
                          {row.url ? (
                            <a href={row.url} className="font-semibold text-[#1A0A00] hover:text-[#C05C14] transition-colors">
                              {row.produto}
                            </a>
                          ) : (
                            <span className="font-semibold text-[#1A0A00]">{row.produto}</span>
                          )}
                          <p className="text-xs text-[#7A5C46]">{row.marca}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`font-black text-lg ${row.destaque ? 'text-[#C05C14]' : 'text-[#7A5C46]'}`}>
                          {row.proteina}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center text-[#5C3D2E] font-medium">{row.preco}</td>
                      <td className="px-4 py-3 text-center">{row.vegano ? '✅' : '⚠️'}</td>
                      <td className="px-4 py-3 text-center">{row.semGluten ? '✅' : '⚠️'}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`font-semibold ${row.ingredientes <= 6 ? 'text-green-600' : 'text-[#7A5C46]'}`}>
                          {row.ingredientes}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center text-xs text-[#7A5C46]">{row.nota}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#7A5C46] mt-3">
              ¹ Valores de mercado são estimativas baseadas em análise de produtos disponíveis no mercado brasileiro em 2026. Valores do Crispy Wise são exatos conforme embalagem.
            </p>
          </div>
        </section>

        {/* Análise */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">O que os números mostram</h2>
            <div className="flex flex-col gap-5 text-[#5C3D2E] leading-relaxed">
              <div className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-5">
                <h3 className="font-bold text-[#1A0A00] mb-2">Proteína por porção: 2–4x acima da média</h3>
                <p>Com 18g de proteína em 30g, o Crispy Wise Vegan e o Crispy Wise Whey entregam entre 2 e 4 vezes mais proteína por porção do que a média dos snacks proteicos disponíveis no Brasil. A comparação mais relevante não é com alimentos comuns, mas dentro da categoria de snacks que se apresentam como proteicos.</p>
              </div>
              <div className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-5">
                <h3 className="font-bold text-[#1A0A00] mb-2">Custo por grama de proteína</h3>
                <p>A embalagem de 400g do Crispy Wise Vegan (R$109) contém ~13 porções de 30g com 18g de proteína cada = ~234g de proteína total. Isso resulta em ~R$0,47 por grama de proteína — competitivo com barras proteicas e superior em termos de ingredientes limpos e densidade por porção.</p>
              </div>
              <div className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-5">
                <h3 className="font-bold text-[#1A0A00] mb-2">Clean label: o diferencial ignorado pelo mercado</h3>
                <p>A maioria dos snacks proteicos no Brasil usa de 12 a 20 ingredientes, incluindo maltodextrina, glutamato monossódico, corantes e adoçantes artificiais. O Crispy Wise Vegan tem 2 ingredientes. O Choco Crispy Wise tem 6. Essa diferença não aparece na tabela nutricional, mas é determinante para quem acompanha a qualidade do que consome.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-4 bg-[#FFF8F0]">
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

        {/* Veja também */}
        <section className="py-10 px-4 bg-[#FFF8F0] border-t border-[#E8D5C4]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-base font-black text-[#1A0A00] mb-4 uppercase tracking-wide">Veja também</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href="/snack-proteico-vegano" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Vegano</p>
                <p className="text-xs text-[#7A5C46] mt-1">Guia completo sobre proteína de ervilha e opções plant-based</p>
              </a>
              <a href="/snack-proteico-sem-gluten" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Sem Glúten</p>
                <p className="text-xs text-[#7A5C46] mt-1">Certificações, glúten oculto e como escolher com segurança</p>
              </a>
              <a href="/avaliacoes" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Avaliações Verificadas</p>
                <p className="text-xs text-[#7A5C46] mt-1">+280 reviews de compradores reais · 4.8★</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-4 bg-gradient-to-br from-[#C05C14] to-[#E8732A] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Experimente a linha com maior proteína por porção</h2>
            <p className="text-white/90 mb-6">Kit Degustação com 5 sabores por R$49 — a forma mais barata de testar toda a linha.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wisehealth.com.br/kit-degustacao-crispy-wise/" target="_blank" rel="noopener noreferrer"
                className="font-extrabold py-4 px-8 rounded-full bg-white text-[#C05C14] hover:brightness-95 transition-all">
                Kit Degustação — R$49 →
              </a>
              <a href="/" className="font-bold py-4 px-8 rounded-full bg-white/20 border border-white/40 text-white hover:bg-white/30 transition-all">
                Ver todos os produtos
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
