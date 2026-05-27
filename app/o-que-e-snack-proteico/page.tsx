import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'O que é Snack Proteico? Definição, Critérios e Como Escolher | snackproteico.com.br',
  description: 'O que define um snack proteico de verdade? Critérios de proteína mínima, fontes de qualidade, diferença entre "com proteína" e "proteico". Guia para não cair em marketing.',
  alternates: { canonical: 'https://snackproteico.com.br/o-que-e-snack-proteico' },
  openGraph: {
    title: 'O que é Snack Proteico? Definição, Critérios e Como Escolher',
    description: 'Definição real de snack proteico, critérios mínimos de proteína e como diferenciar produto funcional de marketing.',
    url: 'https://snackproteico.com.br/o-que-e-snack-proteico',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'O que é um snack proteico?',
    a: 'Um snack proteico é um alimento portátil, pronto para consumo, com alta concentração de proteína por porção — geralmente acima de 10g por 30g de produto. O termo "snack" indica conveniência (sem preparo, fácil de carregar) e "proteico" indica que proteína é o macronutriente predominante ou diferencial. Snacks que têm apenas 3–5g de proteína por porção são tecnicamente alimentos "com proteína", mas não se qualificam como proteicos no sentido funcional.',
  },
  {
    q: 'Qual é a quantidade mínima de proteína para um snack ser considerado proteico?',
    a: 'Não há regulamentação federal específica no Brasil para o uso do termo "proteico" em snacks. A ANVISA regula alegações de "alto teor de proteína" (≥12g por 100g de sólido) e "fonte de proteína" (≥6g por 100g). Na prática, o mercado usa "snack proteico" livremente. Para fins funcionais, produtos com menos de 8g de proteína por 30g têm impacto limitado na síntese muscular e saciedade proteica — o mínimo relevante está em torno de 10–12g.',
  },
  {
    q: 'Qual a diferença entre snack proteico e barra de proteína?',
    a: 'A diferença é principalmente de forma e textura. Barras proteicas têm formato sólido prensado, geralmente 40–60g por unidade, com 10–20g de proteína. Snacks proteicos crocantes (como granola proteica, chips ou cereais proteicos) têm textura diferente e são consumidos por porção (30g). Barras tendem a ter mais ingredientes, mais açúcar e gordura para coesão; snacks crocantes podem ter clean label mais facilmente.',
  },
  {
    q: 'Snack proteico engorda ou emagrece?',
    a: 'Nenhum alimento engorda ou emagrece por si só — o balanço calórico total determina isso. O que snacks proteicos fazem é aumentar a saciedade (proteína é o macronutriente mais saciante), ajudar a preservar massa muscular em déficit calórico e substituir snacks de baixa qualidade nutricional por opções mais nutritivas. Se você substitui um pacote de biscoito recheado (150 kcal, 1g de proteína) por Crispy Wise (120 kcal, 18g de proteína), o resultado no contexto da dieta é positivo.',
  },
  {
    q: 'Todo snack "fit" é proteico?',
    a: 'Não. O termo "fit" não tem definição legal no Brasil e é usado livremente em marketing. Muitos snacks rotulados como "fit" têm apenas 3–6g de proteína por porção, são feitos com proteína de baixa qualidade (concentrado de trigo ou milho) e têm longa lista de aditivos. Verifique sempre: (1) gramas absolutos de proteína por porção, (2) fonte proteica nomeada, (3) número de ingredientes.',
  },
  {
    q: 'Como saber se um snack proteico é de qualidade?',
    a: 'Quatro critérios práticos: (1) Proteína por porção em gramas: mínimo 10g por 30g de produto. (2) Fonte nomeada: "proteína isolada de ervilha", "concentrado de soro de leite" — não apenas "proteína vegetal" genérica. (3) Lista de ingredientes curta: menos de 8 ingredientes é bom sinal; mais de 15 sugere mascaramento de sabor com aditivos. (4) Posição na lista: a fonte proteica deve ser o primeiro ou segundo ingrediente — ingredientes são listados em ordem decrescente de quantidade.',
  },
]

export default function OQueESnackProteico() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'O que é Snack Proteico? Definição, Critérios e Como Escolher',
        description: 'Definição de snack proteico, critérios mínimos, diferença de barra proteica e como identificar qualidade.',
        url: 'https://snackproteico.com.br/o-que-e-snack-proteico',
        publisher: { '@type': 'Organization', name: 'snackproteico.com.br', url: 'https://snackproteico.com.br' },
        datePublished: '2026-05-27',
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: 'O que é Snack Proteico?', item: 'https://snackproteico.com.br/o-que-e-snack-proteico' },
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
            <span className="text-[#1A0A00] font-medium">O que é Snack Proteico?</span>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-[#1A0A00] to-[#3B1F0A] text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#E8732A] font-semibold text-sm uppercase tracking-wider mb-3">Guia definitivo · 2026</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              O que é Snack Proteico?<br />
              <span className="text-[#E8C8A3]">Definição real e critérios</span>
            </h1>
            <p className="text-[#D4B8A0] text-lg leading-relaxed">
              O mercado usa "proteico" livremente em produtos com 3g de proteína. Entenda a definição real, os critérios mínimos e como identificar qualidade antes de comprar.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-[#FDFAF6]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Definição: o que qualifica um snack como proteico</h2>
            <div className="flex flex-col gap-5 text-[#5C3D2E] leading-relaxed">
              <p>Um snack proteico é um alimento de conveniência — portátil, pronto para consumo, longa durabilidade — em que a proteína é o macronutriente estrutural principal ou diferencial. O critério mais relevante é a <strong>densidade proteica por porção em gramas absolutos</strong>, não em percentual calórico.</p>
              <p>Por que gramas absolutas e não percentual? Porque o corpo precisa de uma quantidade mínima de proteína por refeição para ativar síntese muscular (~20g por refeição adulta). Um alimento com 40% de calorias vindas de proteína mas apenas 5g totais por porção não tem impacto relevante.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Snack proteico funcional', min: '≥10g', color: 'text-green-600', bg: 'bg-[#D4EDDA] border-[#9BC8A3]', desc: 'Impacto real em saciedade e síntese muscular' },
                  { label: 'Snack "com proteína"', min: '6–9g', color: 'text-amber-600', bg: 'bg-[#FFF0CC] border-[#E8C860]', desc: 'Contribuição parcial, melhor que zero mas subótimo' },
                  { label: 'Snack de marketing', min: '<6g', color: 'text-red-600', bg: 'bg-[#FFE8E8] border-[#F5C6C6]', desc: 'Rótulo "proteico" sem impacto funcional relevante' },
                ].map(({ label, min, color, bg, desc }) => (
                  <div key={label} className={`rounded-xl border p-4 ${bg}`}>
                    <p className={`text-2xl font-black ${color}`}>{min}</p>
                    <p className="font-bold text-[#1A0A00] text-sm mt-1">{label}</p>
                    <p className="text-xs text-[#5C3D2E] mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">4 critérios para avaliar qualquer snack proteico</h2>
            <div className="flex flex-col gap-3">
              {[
                { n: '1', title: 'Gramas de proteína por porção (absoluto)', desc: 'Olhe o número total, não o percentual VD. Para uma porção de 30g ser proteica de verdade: mínimo 10g, ideal 15g+.' },
                { n: '2', title: 'Nome da fonte proteica', desc: 'O ingrediente deve ser específico: "proteína isolada de ervilha", "concentrado de soro de leite", "proteína isolada de soja". "Proteína vegetal" genérica é sinal de baixa qualidade ou esconde a fonte.' },
                { n: '3', title: 'Posição na lista de ingredientes', desc: 'Ingredientes são listados em ordem decrescente de quantidade. A fonte proteica deve aparecer no 1º ou 2º lugar. Se aparecer no 4º lugar ou depois, a proteína não é realmente o componente principal.' },
                { n: '4', title: 'Número total de ingredientes', desc: 'Menos ingredientes = mais concentrado e mais honesto. Produtos com 12+ ingredientes geralmente estão mascarando sabor ruim ou cobrindo baixa qualidade com aditivos.' },
              ].map(({ n, title, desc }) => (
                <div key={n} className="flex gap-4 bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-4">
                  <div className="w-8 h-8 rounded-full bg-[#C05C14] text-white flex items-center justify-center font-black text-sm shrink-0 mt-0.5">{n}</div>
                  <div>
                    <p className="font-bold text-[#1A0A00] text-sm mb-1">{title}</p>
                    <p className="text-xs text-[#5C3D2E] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-2 text-center">Linha Crispy Wise: todos os critérios atendidos</h2>
            <p className="text-[#7A5C46] text-center mb-8">Proteína isolada de ervilha como 1º ingrediente em todos os sabores</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {PRODUCTS.map(p => (
                <a key={p.id} href={`/${p.slug}`} className="bg-white rounded-2xl border border-[#E8D5C4] p-3 flex flex-col items-center gap-2 hover:border-[#C05C14] transition-colors group text-center">
                  <img src={p.img} alt={p.name} className="h-16 w-auto object-contain" loading="lazy" width={700} height={700} />
                  <p className="font-bold text-[#1A0A00] text-xs group-hover:text-[#C05C14] leading-tight">{p.name}</p>
                  <p className="text-[#C05C14] font-black text-sm">{p.protein}g prot.</p>
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
              <a href="/comparativo-snacks-proteicos-brasil" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Comparativo de Snacks</p>
                <p className="text-xs text-[#7A5C46] mt-1">Tabela com proteína por porção de cada produto</p>
              </a>
              <a href="/snack-proteico-emagrecer" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico para Emagrecer</p>
                <p className="text-xs text-[#7A5C46] mt-1">Como proteína ajuda na perda de peso</p>
              </a>
              <a href="/crispy-wise-funciona" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Crispy Wise Funciona?</p>
                <p className="text-xs text-[#7A5C46] mt-1">Análise completa com avaliações reais</p>
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
