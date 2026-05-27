import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'

export const metadata: Metadata = {
  title: 'Quantas Gramas de Proteína por Dia? Calculadora por Peso e Objetivo | snackproteico.com.br',
  description: 'Quanto de proteína você precisa por dia? Recomendações por peso, objetivo (hipertrofia, emagrecimento, manutenção) e como snacks proteicos ajudam a atingir a meta diária.',
  alternates: { canonical: 'https://snackproteico.com.br/quantas-gramas-proteina-por-dia' },
  openGraph: {
    title: 'Quantas Gramas de Proteína por Dia? Calculadora por Peso e Objetivo',
    description: 'Resposta baseada em ciência: proteína por kg de peso para hipertrofia, emagrecimento e saúde geral. Como snacks proteicos ajudam a atingir a meta.',
    url: 'https://snackproteico.com.br/quantas-gramas-proteina-por-dia',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Quantas gramas de proteína por dia para ganhar massa muscular?',
    a: 'A recomendação baseada em evidências para hipertrofia (ganho de massa muscular) é de 1.6 a 2.2g de proteína por kg de peso corporal por dia — conforme meta-análise de Morton et al. (2018) com 49 estudos e 1.863 participantes. Para uma pessoa de 70kg: 112–154g de proteína por dia. Valores acima de 2.2g/kg não aumentam adicionalmente a síntese muscular em pessoas sem uso de esteroides.',
  },
  {
    q: 'Quantas gramas de proteína por dia para emagrecer?',
    a: 'Em déficit calórico, a recomendação aumenta para 1.6 a 2.4g/kg/dia — o excesso proteico protege a massa muscular quando calorias totais estão reduzidas. Para uma pessoa de 70kg buscando emagrecimento: 112–168g de proteína por dia. A proteína também é o macronutriente mais saciante, reduzindo a fome total durante a dieta.',
  },
  {
    q: 'Quantas gramas de proteína por dia para manutenção?',
    a: 'Para pessoas sedentárias sem objetivo de ganho muscular, a recomendação mínima da OMS é 0.8g/kg/dia. Para adultos ativos que fazem exercício 3x por semana ou mais, 1.2–1.6g/kg/dia é mais adequado para manter massa magra. Para uma pessoa de 70kg ativa: 84–112g de proteína por dia.',
  },
  {
    q: 'Como distribuir a proteína ao longo do dia?',
    a: 'A distribuição importa tanto quanto o total. Estudos mostram que 3–5 refeições com 20–40g de proteína cada otimizam a síntese proteica muscular ao longo do dia — melhor do que concentrar toda a proteína em uma ou duas refeições. Snacks proteicos de 12–18g entre refeições principais ajudam a atingir essa distribuição sem adicionar refeições completas.',
  },
  {
    q: 'Proteína vegetal conta igual à proteína animal para a meta diária?',
    a: 'Em quantidade equivalente, sim. Proteína de ervilha isolada tem DIAAS de 0.82–0.89 — ligeiramente inferior ao whey (1.09) mas dentro da faixa de "boa qualidade" da FAO. Isso significa que para atingir o mesmo efeito anabólico, a dose de proteína vegetal pode ser marginalmente maior (10–15% a mais). Na prática, 18g de proteína de ervilha no pós-treino produz resposta muscular comparável a 18g de whey.',
  },
  {
    q: 'Snack proteico conta para a meta de proteína diária?',
    a: 'Sim. Cada grama de proteína consumida, independentemente da fonte ou formato, conta para o total diário. Uma porção de 30g de Crispy Wise Vegan (18g de proteína) representa 10–16% da meta diária de uma pessoa de 70kg buscando hipertrofia (112–154g/dia). Usado 2x por dia como lanche, contribui com 36g — aproximadamente 1/4 da meta diária.',
  },
]

const TABELA_METAS = [
  { peso: 60, manutencao: '72–96g', hipertrofia: '96–132g', emagrecimento: '96–144g' },
  { peso: 70, manutencao: '84–112g', hipertrofia: '112–154g', emagrecimento: '112–168g' },
  { peso: 80, manutencao: '96–128g', hipertrofia: '128–176g', emagrecimento: '128–192g' },
  { peso: 90, manutencao: '108–144g', hipertrofia: '144–198g', emagrecimento: '144–216g' },
  { peso: 100, manutencao: '120–160g', hipertrofia: '160–220g', emagrecimento: '160–240g' },
]

export default function QuantasGramasProteina() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Quantas Gramas de Proteína por Dia? Calculadora por Peso e Objetivo',
        description: 'Recomendações de proteína diária por peso corporal e objetivo: hipertrofia, emagrecimento e manutenção.',
        url: 'https://snackproteico.com.br/quantas-gramas-proteina-por-dia',
        publisher: { '@type': 'Organization', name: 'snackproteico.com.br', url: 'https://snackproteico.com.br' },
        datePublished: '2026-05-27',
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Quantas Gramas de Proteína por Dia?', item: 'https://snackproteico.com.br/quantas-gramas-proteina-por-dia' },
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
            <span className="text-[#1A0A00] font-medium">Quantas Gramas de Proteína por Dia?</span>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-[#1A0A00] to-[#3B1F0A] text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#E8732A] font-semibold text-sm uppercase tracking-wider mb-3">Baseado em ciência · 2026</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              Quantas Gramas de<br />
              <span className="text-[#E8C8A3]">Proteína por Dia?</span>
            </h1>
            <p className="text-[#D4B8A0] text-lg leading-relaxed">
              A resposta depende do seu peso e objetivo. Tabela completa por kg corporal para hipertrofia, emagrecimento e manutenção — mais como snacks ajudam a atingir a meta.
            </p>
          </div>
        </section>

        {/* Resposta rápida */}
        <section className="py-10 px-4 bg-[#FDFAF6]">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#1A0A00] rounded-2xl p-6 text-white text-center">
              <h2 className="text-xl font-black mb-4">Resposta rápida por objetivo</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { objetivo: 'Manutenção', formula: '1.2–1.6g / kg', ex70: '84–112g', color: 'text-[#A8E6A3]' },
                  { objetivo: 'Hipertrofia', formula: '1.6–2.2g / kg', ex70: '112–154g', color: 'text-[#E8732A]' },
                  { objetivo: 'Emagrecimento', formula: '1.6–2.4g / kg', ex70: '112–168g', color: 'text-[#6EE7A0]' },
                ].map(({ objetivo, formula, ex70, color }) => (
                  <div key={objetivo} className="bg-white/10 rounded-xl p-4">
                    <p className="text-sm text-[#D4B8A0] mb-1">{objetivo}</p>
                    <p className={`text-2xl font-black ${color}`}>{formula}</p>
                    <p className="text-xs text-[#A08070] mt-1">Ex.: 70kg = {ex70}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#A08070] mt-4">Fontes: Morton et al. 2018, ISSN Position Stand 2017, ACSM Guidelines</p>
            </div>
          </div>
        </section>

        {/* Tabela por peso */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Tabela de proteína por peso corporal</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1A0A00] text-white">
                    <th className="text-center p-3 rounded-tl-lg">Peso</th>
                    <th className="text-center p-3">Manutenção</th>
                    <th className="text-center p-3 text-[#E8732A]">Hipertrofia</th>
                    <th className="text-center p-3 rounded-tr-lg text-[#6EE7A0]">Emagrecimento</th>
                  </tr>
                </thead>
                <tbody>
                  {TABELA_METAS.map(({ peso, manutencao, hipertrofia, emagrecimento }, i) => (
                    <tr key={peso} className={`border-b border-[#E8D5C4] ${i % 2 === 0 ? 'bg-[#FFF8F0]' : 'bg-white'}`}>
                      <td className="p-3 text-center font-black text-[#1A0A00] text-lg">{peso}kg</td>
                      <td className="p-3 text-center text-[#5C3D2E] font-medium">{manutencao}</td>
                      <td className="p-3 text-center font-black text-[#C05C14]">{hipertrofia}</td>
                      <td className="p-3 text-center font-semibold text-[#1A6A3A]">{emagrecimento}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#7A5C46] mt-3">Baseado em 1.2–1.6g/kg (manutenção), 1.6–2.2g/kg (hipertrofia), 1.6–2.4g/kg (emagrecimento).</p>
          </div>
        </section>

        {/* Como snacks ajudam */}
        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Como snacks proteicos ajudam a atingir a meta</h2>
            <div className="flex flex-col gap-4 text-[#5C3D2E]">
              <p>Para uma pessoa de 70kg buscando hipertrofia (meta: ~130g/dia), um plano realista com 3 refeições principais deixa gaps de proteína entre refeições. Snacks proteicos preenchem esses gaps sem adicionar refeições completas:</p>
              <div className="bg-white rounded-xl border border-[#E8D5C4] overflow-hidden">
                <div className="bg-[#1A0A00] text-white px-4 py-2 text-xs font-semibold">Exemplo de distribuição diária — 70kg / hipertrofia</div>
                {[
                  { horario: 'Café da manhã', refeicao: 'Ovos + iogurte', proteina: '30g' },
                  { horario: 'Lanche manhã', refeicao: 'Crispy Wise (30g)', proteina: '18g' },
                  { horario: 'Almoço', refeicao: 'Frango + arroz + feijão', proteina: '40g' },
                  { horario: 'Pré/pós-treino', refeicao: 'Crispy Wise (30g)', proteina: '18g' },
                  { horario: 'Jantar', refeicao: 'Peixe + legumes', proteina: '30g' },
                ].map(({ horario, refeicao, proteina }) => (
                  <div key={horario} className="flex items-center justify-between px-4 py-3 border-b border-[#E8D5C4] last:border-0">
                    <div>
                      <p className="text-xs text-[#7A5C46]">{horario}</p>
                      <p className="font-medium text-[#1A0A00] text-sm">{refeicao}</p>
                    </div>
                    <p className="font-black text-[#C05C14]">{proteina}</p>
                  </div>
                ))}
                <div className="flex items-center justify-between px-4 py-3 bg-[#FFF8F0]">
                  <p className="font-black text-[#1A0A00]">Total diário</p>
                  <p className="font-black text-[#C05C14] text-lg">136g ✓</p>
                </div>
              </div>
              <p className="text-sm">Os dois snacks de Crispy Wise contribuem com 36g — mais de 25% da meta diária — com zero preparo.</p>
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
              <a href="/snack-proteico-emagrecer" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico para Emagrecer</p>
                <p className="text-xs text-[#7A5C46] mt-1">Como proteína ajuda na perda de peso</p>
              </a>
              <a href="/snack-proteico-pos-treino" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Pós-Treino</p>
                <p className="text-xs text-[#7A5C46] mt-1">Janela anabólica e quantidade ideal</p>
              </a>
              <a href="/proteina-vegetal-fontes" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Fontes de Proteína Vegetal</p>
                <p className="text-xs text-[#7A5C46] mt-1">Ervilha, soja, arroz: qual é melhor?</p>
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
