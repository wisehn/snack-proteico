import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Snack Proteico para Emagrecer: Como Funciona e Qual Escolher | snackproteico.com.br',
  description: 'Proteína emagrece? Snack proteico ajuda a perder peso? Guia baseado em evidências: saciedade, termogênese, preservação muscular e qual produto escolher. Crispy Wise: 12–18g por 30g.',
  alternates: { canonical: 'https://snackproteico.com.br/snack-proteico-emagrecer' },
  openGraph: {
    title: 'Snack Proteico para Emagrecer: Como Funciona e Qual Escolher',
    description: 'Como a proteína ajuda no emagrecimento: saciedade, termogênese e preservação muscular. Qual snack proteico escolher para perder peso com saúde.',
    url: 'https://snackproteico.com.br/snack-proteico-emagrecer',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Snack proteico ajuda a emagrecer?',
    a: 'Sim, por três mecanismos: (1) Saciedade: proteína é o macronutriente mais saciante — aumenta GLP-1 e PYY (hormônios da saciedade) e reduz grelina (hormônio da fome), o que reduz a ingestão calórica total. (2) Termogênese: o corpo gasta mais energia para digerir proteína do que carboidratos ou gorduras — 20–35% das calorias da proteína são gastas na digestão vs. 5–10% de carboidratos. (3) Preservação muscular: em déficit calórico, proteína suficiente evita catabolismo, mantendo a taxa metabólica basal mais alta.',
  },
  {
    q: 'Qual o melhor horário para comer snack proteico quando quer emagrecer?',
    a: 'Entre refeições principais — especialmente quando há um intervalo longo (3+ horas) que levaria a chegar com muita fome na próxima refeição. Um snack de 30g com 18g de proteína reduz o apetite sem comprometer o déficit calórico. Também funciona bem como substituto de salgadinhos e doces ultraprocessados, que têm caloria alta e saciedade baixa.',
  },
  {
    q: 'Snack proteico engorda?',
    a: 'Não por si só. Emagrecimento e ganho de peso são determinados pelo balanço calórico total. O Crispy Wise Vegan tem ~120 kcal por porção de 30g com 18g de proteína. Em comparação, um pacote de salgadinho convencional de 30g tem 150–180 kcal com menos de 2g de proteína. Substituir snacks ultraprocessados por Crispy Wise reduz calorias e aumenta saciedade simultaneamente.',
  },
  {
    q: 'Quantas gramas de proteína preciso para emagrecer?',
    a: 'Para quem está em déficit calórico, a recomendação é 1.6–2.4g de proteína por kg de peso corporal por dia — acima da recomendação geral. O aumento é necessário para preservar massa muscular durante a perda de gordura. Para uma pessoa de 70kg, isso representa 112–168g de proteína/dia. Uma porção de 30g de Crispy Wise contribui com 12–18g dessa meta.',
  },
  {
    q: 'Proteína de ervilha é boa para emagrecer?',
    a: 'Sim. O isolado de ervilha tem 85–90% de proteína na composição, com mínimo de gordura e carboidrato. Estudos mostram que proteína de ervilha tem índice de saciedade comparável ao whey. Para perda de peso, a fonte proteica é menos relevante do que a quantidade total — o isolado de ervilha entrega a mesma resposta de saciedade que proteínas animais.',
  },
  {
    q: 'Posso comer snack proteico todos os dias na dieta de emagrecimento?',
    a: 'Sim. O Crispy Wise tem clean label (2–6 ingredientes), sem açúcar adicionado, sem ultraprocessados e com alto teor proteico. Pode ser consumido diariamente como lanche entre refeições, como topping de salada (versão Salty) ou como substituto de sobremesa (versão Choco). O objetivo é que substitua alimentos mais calóricos e menos nutritivos dentro do plano alimentar.',
  },
]

const slimmingProducts = PRODUCTS.filter(p => !p.tags.includes('Contém Lactose'))

export default function SnackEmagrecer() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Snack Proteico para Emagrecer: Como Funciona e Qual Escolher',
        description: 'Como proteína ajuda no emagrecimento e como escolher o melhor snack proteico para perda de peso.',
        url: 'https://snackproteico.com.br/snack-proteico-emagrecer',
        publisher: { '@type': 'Organization', name: 'snackproteico.com.br', url: 'https://snackproteico.com.br' },
        datePublished: '2026-05-27',
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Snack Proteico para Emagrecer', item: 'https://snackproteico.com.br/snack-proteico-emagrecer' },
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
            <span className="text-[#1A0A00] font-medium">Snack Proteico para Emagrecer</span>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-[#0A2A1A] to-[#1A4A2A] text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#7FDBA0] font-semibold text-sm uppercase tracking-wider mb-3">Baseado em evidências · 2026</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              Snack Proteico para Emagrecer:<br />
              <span className="text-[#A8F0C8]">O que realmente funciona</span>
            </h1>
            <p className="text-[#C8E8D8] text-lg leading-relaxed">
              Proteína é o macronutriente mais saciante. Entenda como ela age no emagrecimento e como um snack proteico pode substituir alimentos que sabotam a dieta.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-[#FDFAF6]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">3 mecanismos pelos quais proteína ajuda a emagrecer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { num: '1', title: 'Saciedade hormonal', desc: 'Proteína aumenta GLP-1 e PYY (hormônios da saciedade) e reduz grelina (hormônio da fome). Resultado: você come menos nas próximas refeições sem sentir privação.', stat: '~20% menos calorias', src: 'Westerterp-Plantenga 2009' },
                { num: '2', title: 'Termogênese', desc: 'O corpo gasta 20–35% das calorias da proteína só para digeri-la. Para cada 100 kcal de proteína consumidas, o custo de digestão é de 20–35 kcal — vs. 5–10 kcal dos carboidratos.', stat: '3× mais termogênese', src: 'Halton & Hu 2004' },
                { num: '3', title: 'Preservação muscular', desc: 'Em déficit calórico, proteína suficiente evita que o corpo queime músculo como energia. Mais músculo = metabolismo mais alto = mais gordura queimada em repouso.', stat: '1.6–2.4g/kg/dia', src: 'Morton et al. 2018' },
              ].map(({ num, title, desc, stat, src }) => (
                <div key={num} className="bg-white rounded-2xl border border-[#E8D5C4] p-5">
                  <div className="w-8 h-8 rounded-full bg-[#0A2A1A] text-white flex items-center justify-center font-black text-sm mb-3">{num}</div>
                  <h3 className="font-bold text-[#1A0A00] mb-2">{title}</h3>
                  <p className="text-xs text-[#5C3D2E] leading-relaxed mb-3">{desc}</p>
                  <p className="text-[#1A6A3A] font-black text-sm">{stat}</p>
                  <p className="text-xs text-[#7A5C46] italic">{src}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Snack proteico vs. salgadinho: comparativo calórico</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1A0A00] text-white">
                    <th className="text-left p-3 rounded-tl-lg">Produto</th>
                    <th className="text-center p-3">Calorias / 30g</th>
                    <th className="text-center p-3">Proteína / 30g</th>
                    <th className="text-center p-3 rounded-tr-lg">Saciedade</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { prod: 'Crispy Wise Vegan', cal: '~120 kcal', prot: '18g', sac: '↑↑ Alta' },
                    { prod: 'Batata frita (snack)', cal: '~155 kcal', prot: '2g', sac: '↓ Baixa' },
                    { prod: 'Biscoito recheado', cal: '~145 kcal', prot: '1g', sac: '↓↓ Muito baixa' },
                    { prod: 'Castanha de caju', cal: '~170 kcal', prot: '5g', sac: '↑ Média' },
                    { prod: 'Barra de proteína típica', cal: '~180 kcal', prot: '10–15g', sac: '↑ Média' },
                  ].map(({ prod, cal, prot, sac }, i) => (
                    <tr key={prod} className={`border-b border-[#E8D5C4] ${i === 0 ? 'bg-[#D4EDDA]' : i % 2 === 0 ? 'bg-[#FFF8F0]' : 'bg-white'}`}>
                      <td className={`p-3 font-medium ${i === 0 ? 'text-[#155724]' : 'text-[#1A0A00]'}`}>{prod}</td>
                      <td className="p-3 text-center">{cal}</td>
                      <td className={`p-3 text-center font-bold ${i === 0 ? 'text-[#155724]' : 'text-[#7A5C46]'}`}>{prot}</td>
                      <td className="p-3 text-center text-xs">{sac}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-2 text-center">Sabores Crispy Wise para quem quer emagrecer</h2>
            <p className="text-[#7A5C46] text-center mb-8">Sem açúcar adicionado · Clean label · Alta proteína</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {slimmingProducts.map(p => (
                <a key={p.id} href={`/${p.slug}`} className="bg-white rounded-2xl border border-[#E8D5C4] p-3 flex flex-col items-center gap-2 hover:border-[#1A6A3A] transition-colors group text-center">
                  <img src={p.img} alt={p.name} className="h-20 w-auto object-contain" loading="lazy" width={700} height={700} />
                  <p className="font-bold text-[#1A0A00] text-xs group-hover:text-[#1A6A3A] transition-colors leading-tight">{p.name}</p>
                  <p className="text-[#1A6A3A] font-black text-sm">{p.protein}g prot.</p>
                  <p className="text-xs text-[#7A5C46]">~{Math.round(p.protein * 4 + 5 * 9 + (30 - p.protein * 1.1) * 4)} kcal</p>
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
              <a href="/quantas-gramas-proteina-por-dia" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Quantas gramas de proteína por dia?</p>
                <p className="text-xs text-[#7A5C46] mt-1">Calculadora por peso e objetivo</p>
              </a>
              <a href="/snack-proteico-pos-treino" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Pós-Treino</p>
                <p className="text-xs text-[#7A5C46] mt-1">Timing, janela anabólica e quantidade ideal</p>
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
