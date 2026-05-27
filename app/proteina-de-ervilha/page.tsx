import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'

export const metadata: Metadata = {
  title: 'Proteína de Ervilha: O que é, benefícios e diferença do Whey | snackproteico.com.br',
  description: 'Guia completo sobre proteína de ervilha: valor biológico, perfil de aminoácidos, diferença entre isolado e concentrado, comparação com whey e como usar. Crispy Wise usa isolado de ervilha.',
  alternates: { canonical: 'https://snackproteico.com.br/proteina-de-ervilha' },
  openGraph: {
    title: 'Proteína de Ervilha: O que é, benefícios e diferença do Whey',
    description: 'Tudo sobre proteína de ervilha: isolado vs. concentrado, BCAAs, biodisponibilidade, comparação com whey. Base científica para a escolha certa.',
    url: 'https://snackproteico.com.br/proteina-de-ervilha',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Proteína de ervilha é tão boa quanto whey?',
    a: 'Para síntese muscular, estudos mostram que o isolado de ervilha produz ganhos comparáveis ao whey quando consumido em quantidade equivalente. A principal diferença está no perfil de aminoácidos: o whey tem mais leucina (o aminoácido mais importante para síntese proteica), mas o isolado de ervilha tem perfil completo e DIAAS (Digestible Indispensable Amino Acid Score) acima de 0.8 — considerado "boa qualidade" pela FAO.',
  },
  {
    q: 'Qual a diferença entre proteína de ervilha isolada e concentrada?',
    a: 'O isolado de ervilha passa por ultrafiltração adicional que eleva o teor proteico para 85–90% da composição, elimina gorduras residuais e compostos que causam retrogosto. O concentrado fica em 70–80% e mantém mais impurezas. Para snacks e fórmulas clean label, o isolado é superior — é o que o Crispy Wise utiliza.',
  },
  {
    q: 'Proteína de ervilha tem todos os aminoácidos essenciais?',
    a: 'Sim. A proteína de ervilha contém os 9 aminoácidos essenciais, incluindo BCAAs (leucina, isoleucina e valina). É levemente mais baixa em metionina do que proteínas animais, mas a diferença é irrelevante em uma dieta variada. Quando combinada com proteína de arroz (como no Crispy Wise), o perfil se complementa para cobrir todas as necessidades.',
  },
  {
    q: 'Proteína de ervilha causa retrogosto?',
    a: 'O retrogosto amargo associado à ervilha vem da proteína concentrada, que mantém compostos secundários. O isolado de ervilha de alta pureza, como o usado no Crispy Wise, passa por processo que remove esses compostos. O resultado é proteína de ervilha com sabor neutro — sem retrogosto, mesmo em snacks e fórmulas sem outros ingredientes mascaradores.',
  },
  {
    q: 'Proteína de ervilha é boa para ganho de massa muscular?',
    a: 'Sim. Um estudo clínico duplo-cego de 2015 (Babault et al.) comparou suplementação com isolado de ervilha vs. whey vs. placebo em 161 homens. O grupo ervilha teve ganhos musculares equivalentes ao grupo whey e significativamente superiores ao placebo. A chave é consumir quantidade suficiente — a ervilha tem teor de leucina ligeiramente menor, então doses maiores (ou mais frequentes) compensam.',
  },
  {
    q: 'Proteína de ervilha é adequada para celíacos?',
    a: 'Sim. A ervilha é naturalmente livre de glúten. O isolado de ervilha processado adequadamente (sem contaminação cruzada) é uma das fontes proteicas mais seguras para celíacos e pessoas com doença celíaca ou sensibilidade ao glúten. O Crispy Wise, que usa isolado de ervilha, é certificado sem glúten em todos os sabores.',
  },
]

export default function ProteinaErvilhaPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Proteína de Ervilha: O que é, benefícios e diferença do Whey',
        description: 'Guia completo sobre proteína de ervilha isolada: valor biológico, aminoácidos, comparação com whey e como usar.',
        url: 'https://snackproteico.com.br/proteina-de-ervilha',
        publisher: { '@type': 'Organization', name: 'snackproteico.com.br', url: 'https://snackproteico.com.br' },
        datePublished: '2026-05-27',
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Proteína de Ervilha', item: 'https://snackproteico.com.br/proteina-de-ervilha' },
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
            <span className="text-[#1A0A00] font-medium">Proteína de Ervilha</span>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-[#1A3A1A] to-[#2D5A2D] text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#7FBF7F] font-semibold text-sm uppercase tracking-wider mb-3">Guia técnico · 2026</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              Proteína de Ervilha:<br />
              <span className="text-[#A8E6A3]">Base científica completa</span>
            </h1>
            <p className="text-[#C8E6C8] text-lg leading-relaxed">
              Valor biológico, aminoácidos, diferença do whey, isolado vs. concentrado — tudo que você precisa saber antes de escolher.
            </p>
          </div>
        </section>

        {/* O que é */}
        <section className="py-14 px-4 bg-[#FDFAF6]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">O que é proteína de ervilha</h2>
            <div className="flex flex-col gap-5 text-[#5C3D2E] leading-relaxed">
              <p>A proteína de ervilha é extraída da ervilha-amarela (Pisum sativum) por um processo de separação úmida que remove amido e fibras, concentrando o conteúdo proteico. O resultado pode ser um <strong>concentrado</strong> (70–80% proteína) ou um <strong>isolado</strong> (85–90% proteína), dependendo do nível de processamento.</p>
              <p>É a fonte proteica vegetal de mais rápido crescimento em aplicações alimentícias — usada em suplementos, snacks proteicos, bebidas e substitutos de carne. A razão é técnica: além do bom perfil nutricional, o isolado de ervilha tem excelente funcionalidade tecnológica (emulsificação, texturização) e sabor neutro quando processado corretamente.</p>

              <div className="bg-[#D4EDDA] rounded-xl p-5 border border-[#9BC8A3]">
                <h3 className="font-bold text-[#155724] mb-3">Composição nutricional: isolado de ervilha por 30g</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Proteína', value: '25–27g' },
                    { label: 'Carboidratos', value: '1–2g' },
                    { label: 'Gorduras', value: '0.5–1g' },
                    { label: 'Calorias', value: '~110 kcal' },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center bg-white/60 rounded-lg p-2">
                      <p className="font-black text-[#155724] text-lg">{value}</p>
                      <p className="text-xs text-[#155724]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparativo com whey */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Ervilha vs. Whey: comparativo técnico</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1A0A00] text-white">
                    <th className="text-left p-3 rounded-tl-lg">Critério</th>
                    <th className="text-center p-3">Isolado de Ervilha</th>
                    <th className="text-center p-3 rounded-tr-lg">Whey Isolado</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { criterio: 'Proteína por 30g', ervilha: '25–27g', whey: '25–28g' },
                    { criterio: 'DIAAS (qualidade)', ervilha: '0.82–0.89', whey: '1.09' },
                    { criterio: 'Leucina (BCAA)', ervilha: '7–8%', whey: '10–11%' },
                    { criterio: 'Digestibilidade', ervilha: 'Alta (95%+)', whey: 'Muito alta (98%+)' },
                    { criterio: 'Adequado para veganos', ervilha: '✅ Sim', whey: '❌ Não' },
                    { criterio: 'Zero lactose', ervilha: '✅ Sim', whey: '✅ Isolado sim' },
                    { criterio: 'Sem glúten', ervilha: '✅ Sim', whey: '✅ Sim' },
                    { criterio: 'Retrogosto', ervilha: 'Neutro (isolado)', whey: 'Neutro' },
                    { criterio: 'Sustentabilidade', ervilha: '↑ Superior', whey: '↓ Inferior' },
                  ].map(({ criterio, ervilha, whey }, i) => (
                    <tr key={criterio} className={`border-b border-[#E8D5C4] ${i % 2 === 0 ? 'bg-[#FFF8F0]' : 'bg-white'}`}>
                      <td className="p-3 font-medium text-[#1A0A00]">{criterio}</td>
                      <td className="p-3 text-center text-[#3B7A3D] font-semibold">{ervilha}</td>
                      <td className="p-3 text-center text-[#5C3D2E]">{whey}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#7A5C46] mt-3">DIAAS = Digestible Indispensable Amino Acid Score (FAO/WHO). Valores &gt;0.75 = boa qualidade; &gt;1.0 = excelente.</p>
          </div>
        </section>

        {/* Isolado vs concentrado */}
        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Isolado vs. Concentrado: qual a diferença real</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border-2 border-[#3B7A3D] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">✅</span>
                  <h3 className="font-black text-[#1A0A00]">Isolado de Ervilha</h3>
                </div>
                <ul className="text-sm text-[#5C3D2E] space-y-2">
                  <li>• 85–90% proteína na composição</li>
                  <li>• Ultrafiltração remove gorduras e carboidratos</li>
                  <li>• Sem compostos de retrogosto amargo</li>
                  <li>• Sabor neutro — funciona em qualquer receita</li>
                  <li>• Menor impacto glicêmico</li>
                  <li>• Mais caro de produzir</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-[#E8D5C4] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">⚠️</span>
                  <h3 className="font-black text-[#1A0A00]">Concentrado de Ervilha</h3>
                </div>
                <ul className="text-sm text-[#5C3D2E] space-y-2">
                  <li>• 70–80% proteína na composição</li>
                  <li>• Processamento menos intenso</li>
                  <li>• Mantém mais carboidratos e gorduras</li>
                  <li>• Pode ter retrogosto dependendo da fórmula</li>
                  <li>• Requer mais ingredientes mascaradores</li>
                  <li>• Mais barato de produzir</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-[#D4EDDA] rounded-xl p-4 border border-[#9BC8A3]">
              <p className="text-sm text-[#155724]"><strong>O Crispy Wise usa isolado de ervilha</strong> — por isso entrega 18g de proteína por 30g de produto com apenas 2 ingredientes e sem retrogosto.</p>
            </div>
          </div>
        </section>

        {/* Produto em destaque */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Crispy Wise: isolado de ervilha em formato snack</h2>
            <div className="bg-[#FFF8F0] rounded-2xl border border-[#E8D5C4] p-6 flex flex-col sm:flex-row gap-6 items-center">
              <img
                src="https://wisehealth.com.br/wp-content/uploads/2025/03/mockup-crispy-vegan-700x700.jpg"
                alt="Crispy Wise Vegan — Proteína Isolada de Ervilha"
                className="h-36 w-auto object-contain"
                width={700}
                height={700}
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="font-black text-[#1A0A00] text-xl mb-2">Crispy Wise Vegan</h3>
                <p className="text-[#5C3D2E] text-sm leading-relaxed mb-4">
                  A única aplicação de isolado de ervilha em formato crocante snack no mercado brasileiro. 18g de proteína por porção de 30g. Apenas 2 ingredientes: proteína isolada de ervilha + farinha de arroz.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['18g proteína / 30g', 'Vegano', 'Sem Glúten', 'Zero Lactose', 'Clean Label'].map(t => (
                    <span key={t} className="text-xs font-semibold px-2 py-1 rounded-full bg-[#D4EDDA] text-[#155724]">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                  <a href="/crispy-wise-vegan" className="font-bold text-sm px-4 py-2 rounded-full bg-[#3B7A3D] text-white hover:brightness-110 transition-all">
                    Ver ficha completa →
                  </a>
                  <a href="https://wisehealth.com.br/kit-degustacao-crispy-wise/" target="_blank" rel="noopener noreferrer"
                    className="font-bold text-sm px-4 py-2 rounded-full border-2 border-[#3B7A3D] text-[#3B7A3D] hover:bg-[#3B7A3D] hover:text-white transition-all">
                    Kit degustação R$49
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Perguntas frequentes sobre proteína de ervilha</h2>
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
        <section className="py-10 px-4 bg-white border-t border-[#E8D5C4]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-base font-black text-[#1A0A00] mb-4 uppercase tracking-wide">Veja também</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href="/snack-proteico-vegano" className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Vegano</p>
                <p className="text-xs text-[#7A5C46] mt-1">Guia completo para veganos que querem mais proteína</p>
              </a>
              <a href="/snack-proteico-sem-gluten" className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Sem Glúten</p>
                <p className="text-xs text-[#7A5C46] mt-1">Certificações e como identificar glúten oculto</p>
              </a>
              <a href="/comparativo-snacks-proteicos-brasil" className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Comparativo de Snacks</p>
                <p className="text-xs text-[#7A5C46] mt-1">Qual produto tem mais proteína por porção no Brasil?</p>
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
