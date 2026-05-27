import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Snack Proteico Pós-Treino: Quando e Como Usar | snackproteico.com.br',
  description: 'Snack proteico é uma boa opção pós-treino? Janela anabólica, quantidade ideal de proteína, timing e quais produtos funcionam. Crispy Wise: 18g em 30g, zero preparo.',
  alternates: { canonical: 'https://snackproteico.com.br/snack-proteico-pos-treino' },
  openGraph: {
    title: 'Snack Proteico Pós-Treino: Quando e Como Usar',
    description: 'Janela anabólica, quantidade ideal de proteína pós-treino e por que snacks proteicos são uma alternativa prática ao shake. Crispy Wise: 18g em 30g.',
    url: 'https://snackproteico.com.br/snack-proteico-pos-treino',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Snack proteico é bom pós-treino?',
    a: 'Sim, desde que entregue quantidade suficiente de proteína de alta qualidade. O Crispy Wise Vegan e o Crispy Wise Whey entregam 18g de proteína por porção de 30g — quantidade que já está dentro da faixa ideal de proteína pós-treino (20–40g) recomendada pela literatura científica. A vantagem prática: sem preparo, sem refrigeração, fácil de carregar na bolsa da academia.',
  },
  {
    q: 'Qual a quantidade ideal de proteína pós-treino?',
    a: 'A literatura científica atual (incluindo meta-análises de 2018 e 2022) indica que 20–40g de proteína de alta qualidade no período pós-treino otimiza a síntese proteica muscular. Valores abaixo de 20g são subótimos para adultos; valores acima de 40g não aumentam significativamente a síntese em uma única dose.',
  },
  {
    q: 'A janela anabólica pós-treino é real?',
    a: 'O conceito de "janela anabólica de 30 minutos" foi revisado pela ciência. A síntese proteica muscular permanece elevada por 24–48 horas após o treino, não apenas nos primeiros 30–60 minutos. O timing importa menos do que a distribuição total de proteína ao longo do dia. Dito isso, consumir proteína logo após o treino (seja em 30 minutos ou em 2 horas) é conveniente e não tem desvantagens.',
  },
  {
    q: 'Proteína de ervilha funciona para recuperação pós-treino?',
    a: 'Sim. O estudo Babault et al. (2015), com 161 homens em treinamento de resistência por 12 semanas, mostrou que o grupo que suplementou com isolado de ervilha teve ganhos musculares equivalentes ao grupo whey. A chave é a quantidade total de leucina ingerida por dose — o isolado de ervilha tem ~7–8% de leucina, levemente inferior ao whey (~10%), mas compensável com porção adequada.',
  },
  {
    q: 'Preciso de whey ou posso usar ervilha no pós-treino?',
    a: 'Para vegetarianos, veganos ou pessoas com intolerância à lactose, o isolado de ervilha é a alternativa mais eficaz documentada cientificamente. Para não-veganos, a diferença prática entre ervilha e whey na recuperação muscular é marginal em estudos clínicos. A escolha deve considerar tolerância digestiva, preferências alimentares e praticidade.',
  },
  {
    q: 'Snack proteico substitui shake pós-treino?',
    a: 'Em termos de entrega proteica, sim: uma porção de 30g de Crispy Wise Vegan (18g proteína) é equivalente a um scoop de whey de 30g. A diferença é que o snack não requer dissolução em água, pode ser consumido diretamente, tem textura sólida e não causa o mesmo desconforto digestivo imediato que shakes volumosos costumam causar em alguns atletas imediatamente após o treino.',
  },
]

const posTrainoProducts = PRODUCTS.filter(p => p.protein >= 15)

export default function SnackPosTreinoPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Snack Proteico Pós-Treino: Quando e Como Usar',
        description: 'Guia sobre uso de snack proteico no pós-treino: janela anabólica, quantidade ideal e timing.',
        url: 'https://snackproteico.com.br/snack-proteico-pos-treino',
        publisher: { '@type': 'Organization', name: 'snackproteico.com.br', url: 'https://snackproteico.com.br' },
        datePublished: '2026-05-27',
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Snack Proteico Pós-Treino', item: 'https://snackproteico.com.br/snack-proteico-pos-treino' },
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
            <span className="text-[#1A0A00] font-medium">Snack Proteico Pós-Treino</span>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-[#1A0A00] to-[#3B1F0A] text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#E8732A] font-semibold text-sm uppercase tracking-wider mb-3">Guia baseado em evidências · 2026</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              Snack Proteico Pós-Treino:<br />
              <span className="text-[#E8C8A3]">O que a ciência diz</span>
            </h1>
            <p className="text-[#D4B8A0] text-lg leading-relaxed">
              Janela anabólica, quantidade certa de proteína, timing e por que um snack pode ser tão eficaz quanto um shake.
            </p>
          </div>
        </section>

        {/* Base científica */}
        <section className="py-14 px-4 bg-[#FDFAF6]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">O que a ciência diz sobre proteína pós-treino</h2>
            <div className="flex flex-col gap-5 text-[#5C3D2E] leading-relaxed">
              <p>O consenso atual da literatura (ISSN, ACSM) indica que o pós-treino imediato é um período favorável para ingestão de proteína, mas a "janela anabólica de 30 minutos" foi significativamente revisada. A síntese proteica muscular permanece elevada por 24–48 horas após o exercício de resistência — o que torna a distribuição total de proteína ao longo do dia mais relevante do que o timing preciso.</p>
              <p>O que permanece consensual: consumir 20–40g de proteína de alta qualidade por refeição maximiza a síntese muscular. Valores abaixo de 20g são subótimos para síntese; valores acima de 40g numa dose única não aumentam a resposta anabólica proporcionalmente.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { num: '20–40g', desc: 'Proteína por refeição para síntese ótima', src: 'ISSN / ACSM' },
                  { num: '24–48h', desc: 'Janela anabólica real pós-treino de resistência', src: 'Meta-análise 2022' },
                  { num: '1.6–2.2g', desc: 'Proteína/kg/dia para hipertrofia', src: 'Morton et al.' },
                ].map(({ num, desc, src }) => (
                  <div key={num} className="bg-white rounded-xl border border-[#E8D5C4] p-4 text-center">
                    <p className="text-3xl font-black text-[#C05C14]">{num}</p>
                    <p className="text-xs text-[#5C3D2E] mt-1 leading-snug">{desc}</p>
                    <p className="text-xs text-[#7A5C46] mt-1 italic">{src}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Snack vs shake */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Snack proteico vs. shake: comparativo prático</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1A0A00] text-white">
                    <th className="text-left p-3 rounded-tl-lg">Critério</th>
                    <th className="text-center p-3">Crispy Wise (30g)</th>
                    <th className="text-center p-3 rounded-tr-lg">Shake whey (30g)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { criterio: 'Proteína por porção', snack: '18g', shake: '20–25g' },
                    { criterio: 'Precisa de água', snack: '❌ Não', shake: '✅ Sim' },
                    { criterio: 'Precisa de coqueteleira', snack: '❌ Não', shake: '✅ Sim' },
                    { criterio: 'Temperatura controlada', snack: '❌ Não', shake: '❌ Não' },
                    { criterio: 'Digestão imediata', snack: 'Lenta (sólido)', shake: 'Rápida (líquido)' },
                    { criterio: 'Saciação', snack: '↑ Maior', shake: '↓ Menor' },
                    { criterio: 'Opção vegana disponível', snack: '✅ Sim', shake: '✅ Sim' },
                    { criterio: 'Praticidade', snack: '↑↑ Alta', shake: '↑ Média' },
                  ].map(({ criterio, snack, shake }, i) => (
                    <tr key={criterio} className={`border-b border-[#E8D5C4] ${i % 2 === 0 ? 'bg-[#FFF8F0]' : 'bg-white'}`}>
                      <td className="p-3 font-medium text-[#1A0A00]">{criterio}</td>
                      <td className="p-3 text-center text-[#C05C14] font-semibold">{snack}</td>
                      <td className="p-3 text-center text-[#5C3D2E]">{shake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Produtos recomendados pós-treino */}
        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-2 text-center">Crispy Wise: opções com 18g de proteína</h2>
            <p className="text-[#7A5C46] text-center mb-8">Os dois sabores com maior proteína da linha — ideais para pós-treino</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {posTrainoProducts.map(p => (
                <a key={p.id} href={`/${p.slug}`}
                  className="bg-white rounded-2xl border border-[#E8D5C4] p-6 flex flex-col items-center gap-3 hover:border-[#C05C14] transition-colors group">
                  <img src={p.img} alt={p.name} className="h-32 w-auto object-contain" loading="lazy" width={700} height={700} />
                  <div className="text-center">
                    <p className="font-bold text-[#1A0A00] text-base group-hover:text-[#C05C14] transition-colors">{p.name}</p>
                    <p className="text-sm text-[#7A5C46]">{p.subtitle}</p>
                    <p className="text-[#C05C14] font-black text-2xl mt-2">{p.protein}g proteína</p>
                    <p className="text-xs text-[#7A5C46]">por 30g · R${p.price}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {p.tags.slice(0, 3).map(t => (
                      <span key={t} className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#FFF8F0] text-[#7A5C46] border border-[#E8D5C4]">{t}</span>
                    ))}
                  </div>
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

        {/* Veja também */}
        <section className="py-10 px-4 bg-[#FFF8F0] border-t border-[#E8D5C4]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-base font-black text-[#1A0A00] mb-4 uppercase tracking-wide">Veja também</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href="/proteina-de-ervilha" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Proteína de Ervilha</p>
                <p className="text-xs text-[#7A5C46] mt-1">Isolado vs. concentrado, DIAAS e comparação com whey</p>
              </a>
              <a href="/snack-proteico-vegano" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Vegano</p>
                <p className="text-xs text-[#7A5C46] mt-1">Fontes de proteína vegetal de alta qualidade</p>
              </a>
              <a href="/comparativo-snacks-proteicos-brasil" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Comparativo de Snacks</p>
                <p className="text-xs text-[#7A5C46] mt-1">Qual produto tem mais proteína por porção?</p>
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 px-4 bg-gradient-to-br from-[#1A0A00] to-[#3B1F0A] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-3">18g de proteína. Zero preparo. Direto da bolsa.</h2>
            <p className="text-white/90 mb-6">O snack proteico mais prático para o pós-treino — sem coqueteleira, sem água, sem desculpa.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/crispy-wise-vegan"
                className="font-extrabold py-4 px-8 rounded-full bg-[#E83C14] text-white hover:brightness-110 transition-all">
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
