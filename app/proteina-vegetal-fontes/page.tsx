import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'

export const metadata: Metadata = {
  title: 'Proteína Vegetal: Fontes, Qualidade e Como Comparar | snackproteico.com.br',
  description: 'Guia completo sobre fontes de proteína vegetal: ervilha, soja, arroz, cânhamo e grão-de-bico. DIAAS, aminoácidos essenciais, biodisponibilidade e qual é melhor para cada objetivo.',
  alternates: { canonical: 'https://snackproteico.com.br/proteina-vegetal-fontes' },
  openGraph: {
    title: 'Proteína Vegetal: Fontes, Qualidade e Como Comparar',
    description: 'Ervilha, soja, arroz, cânhamo: qual fonte de proteína vegetal é melhor? Comparativo técnico com DIAAS, aminoácidos e biodisponibilidade.',
    url: 'https://snackproteico.com.br/proteina-vegetal-fontes',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Qual a melhor fonte de proteína vegetal?',
    a: 'Depende do objetivo. Para concentração proteica e sabor neutro em alimentos: isolado de ervilha (85–90% proteína, DIAAS 0.82–0.89, sem retrogosto quando processado como isolado). Para versatilidade em suplementos: soja isolada (DIAAS 0.9–1.0, perfil de aminoácidos mais completo). Para complementação: arroz (alta em metionina, complementa a ervilha que é baixa nesse aminoácido). Combinações de fontes são superiores a fontes únicas para perfil aminoacídico.',
  },
  {
    q: 'Proteína vegetal tem todos os aminoácidos essenciais?',
    a: 'A maioria sim, mas em proporções diferentes das proteínas animais. Soja e ervilha contêm os 9 aminoácidos essenciais em quantidades adequadas. Arroz é relativamente baixo em lisina. Cânhamo é relativamente baixo em lisina e leucina. A forma mais eficiente de garantir perfil completo é combinar fontes: ervilha + arroz cobre quase todos os gaps de aminoácidos entre as duas fontes.',
  },
  {
    q: 'O que é DIAAS e por que importa para proteína vegetal?',
    a: 'DIAAS (Digestible Indispensable Amino Acid Score) é o método mais atual da FAO/WHO para medir qualidade proteica. Considera a digestibilidade real de cada aminoácido no intestino delgado, não apenas a composição. Scores: >1.0 = excelente (whey: 1.09), 0.75–1.0 = boa qualidade (ervilha: 0.82–0.89), <0.75 = qualidade inferior. A maioria das proteínas vegetais isoladas fica acima de 0.75.',
  },
  {
    q: 'Proteína vegetal causa inchaço?',
    a: 'Depende da fonte e do processamento. Concentrados de leguminosas (grão-de-bico, lentilha, feijão) contêm oligossacarídeos fermentáveis (FODMAPs) que causam gases em muitas pessoas. Isolados passam por processamento que remove esses compostos. O isolado de ervilha de alta pureza (como o usado no Crispy Wise) tem menos compostos fermentáveis que concentrados e é geralmente bem tolerado.',
  },
  {
    q: 'Proteína de soja é segura?',
    a: 'Sim, para a maioria das pessoas. Os isoflavonas da soja — frequentemente apontados como problemáticos — têm efeito estrogênico muito fraco e estudos de longo prazo não mostram impacto adverso em homens adultos em consumo moderado (até 3 porções/dia de alimentos à base de soja). A proteína de soja isolada tem isoflavonas em concentrações significativamente menores que alimentos de soja integrais como tofu e leite de soja.',
  },
  {
    q: 'Qual fonte vegetal é melhor para ganho de massa muscular?',
    a: 'Para síntese proteica muscular, o aminoácido mais importante é a leucina. Ranking de conteúdo de leucina em proteínas vegetais: soja (8–9%) > ervilha (7–8%) > arroz (6–7%) > cânhamo (5–6%). Ervilha isolada se destaca pela combinação de leucina razoável + DIAAS alto + sabor neutro + ausência de lactose e glúten. Estudos clínicos mostram que isolado de ervilha produz resultados comparáveis ao whey para hipertrofia quando a dose é ajustada.',
  },
]

const FONTES = [
  { nome: 'Isolado de Ervilha', proteina: '85–90%', diaas: '0.82–0.89', leucina: '7–8%', sabor: 'Neutro (isolado)', alergeno: 'Nenhum', destaque: true },
  { nome: 'Isolado de Soja', proteina: '85–90%', diaas: '0.9–1.0', leucina: '8–9%', sabor: 'Levemente amargo', alergeno: 'Soja', destaque: false },
  { nome: 'Isolado de Arroz', proteina: '80–85%', diaas: '0.6–0.7', leucina: '6–7%', sabor: 'Levemente doce', alergeno: 'Nenhum', destaque: false },
  { nome: 'Cânhamo (pó)', proteina: '50–60%', diaas: '0.5–0.6', leucina: '5–6%', sabor: 'Terroso', alergeno: 'Nenhum', destaque: false },
  { nome: 'Proteína de Batata', proteina: '75–80%', diaas: '0.7–0.8', leucina: '7–8%', sabor: 'Neutro', alergeno: 'Nenhum', destaque: false },
  { nome: 'Ervilha + Arroz (blend)', proteina: '80–85%', diaas: '0.9+', leucina: '7–8%', sabor: 'Neutro', alergeno: 'Nenhum', destaque: true },
]

export default function ProteinaVegetalPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Proteína Vegetal: Fontes, Qualidade e Como Comparar',
        description: 'Comparativo técnico de fontes de proteína vegetal: ervilha, soja, arroz, cânhamo e combinações.',
        url: 'https://snackproteico.com.br/proteina-vegetal-fontes',
        publisher: { '@type': 'Organization', name: 'snackproteico.com.br', url: 'https://snackproteico.com.br' },
        datePublished: '2026-05-27',
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Proteína Vegetal: Fontes', item: 'https://snackproteico.com.br/proteina-vegetal-fontes' },
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
            <span className="text-[#1A0A00] font-medium">Proteína Vegetal: Fontes</span>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-[#1A3A1A] to-[#2D5A2D] text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#7FBF7F] font-semibold text-sm uppercase tracking-wider mb-3">Guia técnico · 2026</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              Proteína Vegetal:<br />
              <span className="text-[#A8E6A3]">Fontes, qualidade e como comparar</span>
            </h1>
            <p className="text-[#C8E6C8] text-lg leading-relaxed">
              Ervilha, soja, arroz, cânhamo — cada fonte tem perfil diferente. Guia completo com DIAAS, aminoácidos essenciais e qual escolher para cada objetivo.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-[#FDFAF6]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-2 text-center">Comparativo técnico de fontes vegetais</h2>
            <p className="text-[#7A5C46] text-center mb-8 text-sm">DIAAS = Digestible Indispensable Amino Acid Score (FAO/WHO). &gt;0.75 = boa qualidade.</p>
            <div className="overflow-x-auto rounded-2xl border border-[#E8D5C4] shadow-sm">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-[#1A3A1A] text-white">
                    <th className="text-left px-4 py-3 rounded-tl-2xl">Fonte</th>
                    <th className="px-4 py-3 text-center">Proteína</th>
                    <th className="px-4 py-3 text-center text-[#A8E6A3]">DIAAS</th>
                    <th className="px-4 py-3 text-center">Leucina</th>
                    <th className="px-4 py-3 text-center">Sabor</th>
                    <th className="px-4 py-3 text-center rounded-tr-2xl">Alérgeno</th>
                  </tr>
                </thead>
                <tbody>
                  {FONTES.map((f, i) => (
                    <tr key={f.nome} className={`border-t border-[#E8D5C4] ${f.destaque ? 'bg-[#D4EDDA]' : i % 2 === 0 ? 'bg-white' : 'bg-[#FFF8F0]'}`}>
                      <td className={`px-4 py-3 font-semibold ${f.destaque ? 'text-[#155724]' : 'text-[#1A0A00]'}`}>{f.nome}</td>
                      <td className="px-4 py-3 text-center font-bold text-[#C05C14]">{f.proteina}</td>
                      <td className={`px-4 py-3 text-center font-black ${parseFloat(f.diaas) >= 0.8 ? 'text-[#155724]' : 'text-[#7A5C46]'}`}>{f.diaas}</td>
                      <td className="px-4 py-3 text-center text-[#5C3D2E]">{f.leucina}</td>
                      <td className="px-4 py-3 text-center text-xs text-[#5C3D2E]">{f.sabor}</td>
                      <td className="px-4 py-3 text-center text-xs">{f.alergeno || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Por que ervilha + arroz é a combinação ideal</h2>
            <div className="flex flex-col gap-4 text-[#5C3D2E] leading-relaxed">
              <p>Proteínas vegetais individuais têm aminoácidos limitantes diferentes. A ervilha é alta em lisina mas relativamente baixa em metionina. O arroz é alto em metionina mas relativamente baixo em lisina. Quando combinados, os dois se complementam e o blend atinge DIAAS acima de 0.9 — comparável ao whey.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#D4EDDA] rounded-xl p-4 border border-[#9BC8A3]">
                  <h3 className="font-bold text-[#155724] mb-2">Proteína de Ervilha</h3>
                  <ul className="text-xs text-[#155724] space-y-1">
                    <li>✓ Alta em lisina</li><li>✓ Alta em arginina</li>
                    <li>✓ DIAAS 0.82–0.89</li><li>⚠ Baixa em metionina</li>
                  </ul>
                </div>
                <div className="bg-[#D4EDDA] rounded-xl p-4 border border-[#9BC8A3]">
                  <h3 className="font-bold text-[#155724] mb-2">Proteína de Arroz</h3>
                  <ul className="text-xs text-[#155724] space-y-1">
                    <li>✓ Alta em metionina</li><li>✓ Alta em cisteína</li>
                    <li>✓ Hipoalergênica</li><li>⚠ Baixa em lisina</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#1A3A1A] rounded-xl p-4 text-white">
                <p className="font-bold mb-1">O Crispy Wise usa exatamente essa combinação</p>
                <p className="text-sm text-[#C8E6C8]">Proteína isolada de ervilha + farinha de arroz — os dois ingredientes se complementam para cobrir o perfil completo de aminoácidos essenciais.</p>
              </div>
            </div>
          </div>
        </section>

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

        <section className="py-10 px-4 bg-white border-t border-[#E8D5C4]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-base font-black text-[#1A0A00] mb-4 uppercase tracking-wide">Veja também</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href="/proteina-de-ervilha" className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Proteína de Ervilha</p>
                <p className="text-xs text-[#7A5C46] mt-1">Isolado vs. concentrado, DIAAS, comparação com whey</p>
              </a>
              <a href="/snack-proteico-vegano" className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Vegano</p>
                <p className="text-xs text-[#7A5C46] mt-1">Guia completo para veganos que querem proteína</p>
              </a>
              <a href="/snack-proteico-pos-treino" className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Pós-Treino</p>
                <p className="text-xs text-[#7A5C46] mt-1">Proteína vegetal funciona pós-treino?</p>
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
