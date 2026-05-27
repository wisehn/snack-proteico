import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'
import { PRODUCTS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Snack Proteico Salgado: Por que é Tão Raro e Como Escolher | snackproteico.com.br',
  description: 'Snack proteico salgado é raro no Brasil. Entenda por que, o que procurar e como o Crispy Wise Salty resolve: 12g de proteína de ervilha com páprica defumada. Perfeito como crouton.',
  alternates: { canonical: 'https://snackproteico.com.br/snack-proteico-salgado' },
  openGraph: {
    title: 'Snack Proteico Salgado: Por que é Tão Raro e Como Escolher',
    description: 'A maioria dos snacks proteicos é doce. Descubra por que o salgado é raro, o que procurar e como o Crispy Wise Salty entrega 12g de proteína com sabor defumado.',
    url: 'https://snackproteico.com.br/snack-proteico-salgado',
    type: 'article',
  },
}

const saltyProduct = PRODUCTS.find(p => p.slug === 'crispy-wise-salty')!

const FAQS = [
  {
    q: 'Por que existe tão pouco snack proteico salgado no mercado?',
    a: 'A maioria das fontes proteicas vegetais tem sabor neutro ou levemente amargo que precisa ser mascarado. O caminho mais comum é usar adoçantes (stevia, eritritol) e cacau — o que resulta em sabores doces. Criar um snack salgado com alto teor proteico exige uma fonte proteica de sabor realmente neutro (como o isolado de ervilha de alta pureza), compatível com sal e especiarias sem resultar em retrogosto. É tecnicamente mais difícil e por isso menos comum.',
  },
  {
    q: 'Snack proteico salgado pode substituir crouton?',
    a: 'Sim — e é a aplicação mais prática do Crispy Wise Salty. O crouton tradicional de pão tem ~120 kcal por 30g com apenas 3g de proteína e 23g de carboidrato. O Crispy Wise Salty tem ~120 kcal por 30g com 12g de proteína e sem glúten. Para saladas, sopas e caldos, substitui o crouton com a mesma crocância, mais proteína e menos carboidrato.',
  },
  {
    q: 'Qual a diferença do Crispy Wise Salty para chips proteicos comuns?',
    a: 'Chips proteicos salgados do mercado geralmente usam proteína de milho ou batata — com 4–6g de proteína por 30g — e têm 10–15 ingredientes incluindo realçadores de sabor, corantes e conservantes. O Crispy Wise Salty tem 3 ingredientes: proteína isolada de ervilha, páprica defumada e sal. Resultado: 12g de proteína por 30g com clean label.',
  },
  {
    q: 'Crispy Wise Salty é bom para dieta low carb?',
    a: 'Sim. A base é proteína de ervilha e farinha de arroz, com baixo teor de carboidrato por porção. O sabor de páprica defumada e sal não usa adoçantes. Para quem segue low carb ou queto-adaptado, é uma das poucas opções de snack crocante, salgado e com alto teor proteico disponíveis no Brasil.',
  },
  {
    q: 'Como usar snack proteico salgado no dia a dia?',
    a: 'O Crispy Wise Salty funciona como: (1) crouton em saladas e sopas, (2) topping em ovos mexidos, (3) acompanhamento de patês e homus, (4) snack direto entre refeições. O sabor de páprica defumada é versátil — combina com pratos salgados sem dominar o sabor.',
  },
  {
    q: 'Snack proteico salgado sem glúten: existe?',
    a: 'O Crispy Wise Salty é um dos poucos snacks proteicos salgados sem glúten disponíveis no Brasil. A base de proteína de ervilha e farinha de arroz não contém trigo, centeio ou cevada. Todos os 6 sabores da linha Crispy Wise são certificados sem glúten.',
  },
]

export default function SnackSalgadoPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Snack Proteico Salgado: Por que é Tão Raro e Como Escolher',
        description: 'Por que snack proteico salgado é raro, como identificar um bom produto e como usar.',
        url: 'https://snackproteico.com.br/snack-proteico-salgado',
        publisher: { '@type': 'Organization', name: 'snackproteico.com.br', url: 'https://snackproteico.com.br' },
        datePublished: '2026-05-27',
        dateModified: new Date().toISOString().split('T')[0],
      },
      {
        '@type': 'Product',
        name: saltyProduct.name,
        description: saltyProduct.longDescription,
        image: saltyProduct.img,
        brand: { '@type': 'Brand', name: 'WiseHealth Nutrition' },
        url: `https://snackproteico.com.br/${saltyProduct.slug}`,
        offers: { '@type': 'Offer', priceCurrency: 'BRL', price: saltyProduct.price.toString(), availability: 'https://schema.org/InStock', url: saltyProduct.url },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Snack Proteico Salgado', item: 'https://snackproteico.com.br/snack-proteico-salgado' },
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
            <span className="text-[#1A0A00] font-medium">Snack Proteico Salgado</span>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-[#3A1A00] to-[#7A3A00] text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#E8A870] font-semibold text-sm uppercase tracking-wider mb-3">Guia completo · 2026</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              Snack Proteico Salgado:<br />
              <span className="text-[#FFD4A8]">O nicho mais difícil do mercado</span>
            </h1>
            <p className="text-[#F0C898] text-lg leading-relaxed">
              Quase todos os snacks proteicos são doces. Entenda por que, o que procurar em um bom produto salgado e como usar como crouton proteico.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-[#FDFAF6]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Por que snack proteico salgado é tão raro</h2>
            <div className="flex flex-col gap-5 text-[#5C3D2E] leading-relaxed">
              <p>O mercado de snacks proteicos é dominado por versões doces porque a maioria das proteínas vegetais em pó — concentrado de ervilha, proteína de arroz, proteína de soja — tem sabor amargo ou metálico que precisa ser mascarado com adoçantes (stevia, eritritol) e cacau. Essa é a fórmula mais fácil de formular com boa palatabilidade.</p>
              <p>Para criar um snack salgado com alto teor proteico, é necessário uma fonte proteica de sabor genuinamente neutro que suporte sal e especiarias sem criar retrogosto. Isso exige isolado de ervilha de alta pureza — não concentrado. É mais caro e mais difícil de formular, o que explica a raridade de snacks proteicos salgados com qualidade no mercado brasileiro.</p>
              <div className="bg-[#FFF0E0] rounded-xl p-5 border border-[#E8C090]">
                <h3 className="font-bold text-[#7A3A00] mb-2">Crispy Wise Salty: 3 ingredientes</h3>
                <p className="text-[#7A3A00] text-sm">Proteína isolada de ervilha · Páprica defumada · Sal. Sem adoçante, sem maltodextrina, sem realçador de sabor, sem corante. 12g de proteína por 30g com sabor de páprica defumada limpo.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Snack salgado vs. crouton: comparativo</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1A0A00] text-white">
                    <th className="text-left p-3 rounded-tl-lg">Produto</th>
                    <th className="text-center p-3">Proteína / 30g</th>
                    <th className="text-center p-3">Carboidrato / 30g</th>
                    <th className="text-center p-3">Glúten</th>
                    <th className="text-center p-3 rounded-tr-lg">Ingredientes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { prod: 'Crispy Wise Salty', prot: '12g', carb: '~8g', gluten: '❌ Não', ing: '3' },
                    { prod: 'Crouton de pão', prot: '3g', carb: '23g', gluten: '⚠️ Sim', ing: '8–12' },
                    { prod: 'Chips proteico salgado (média)', prot: '4–6g', carb: '15–20g', gluten: '⚠️ Varia', ing: '10–18' },
                    { prod: 'Amendoim torrado', prot: '7g', carb: '5g', gluten: '❌ Não', ing: '2–3' },
                  ].map(({ prod, prot, carb, gluten, ing }, i) => (
                    <tr key={prod} className={`border-b border-[#E8D5C4] ${i === 0 ? 'bg-[#FFF0E0]' : i % 2 === 0 ? 'bg-[#FFF8F0]' : 'bg-white'}`}>
                      <td className={`p-3 font-medium ${i === 0 ? 'text-[#7A3A00]' : 'text-[#1A0A00]'}`}>{prod}</td>
                      <td className={`p-3 text-center font-bold ${i === 0 ? 'text-[#7A3A00]' : 'text-[#7A5C46]'}`}>{prot}</td>
                      <td className="p-3 text-center text-[#5C3D2E]">{carb}</td>
                      <td className="p-3 text-center">{gluten}</td>
                      <td className={`p-3 text-center font-semibold ${parseInt(ing) <= 3 ? 'text-green-600' : 'text-[#7A5C46]'}`}>{ing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">5 formas de usar o Crispy Wise Salty</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { uso: '🥗 Saladas', desc: 'Substitua crouton de pão. Adicione por cima antes de servir para manter a crocância.' },
                { uso: '🍳 Ovos mexidos', desc: 'Misture ou coloque por cima dos ovos. O sabor defumado complementa o ovo perfeitamente.' },
                { uso: '🍲 Sopas e caldos', desc: 'Adicione como topping na hora de servir, no lugar de pão torrado ou torradinhas.' },
                { uso: '🫙 Com patê ou homus', desc: 'Use como "biscoito" para acompanhar patês, guacamole, homus ou cream cheese.' },
                { uso: '⚡ Snack direto', desc: 'Entre refeições ou antes do treino. 12g de proteína sem preparo, sem refrigeração.' },
              ].map(({ uso, desc }) => (
                <div key={uso} className="bg-white rounded-xl border border-[#E8D5C4] p-4">
                  <p className="font-bold text-[#1A0A00] mb-1">{uso}</p>
                  <p className="text-xs text-[#5C3D2E] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-6 items-center">
            <img src={saltyProduct.img} alt={saltyProduct.name} className="h-48 w-auto object-contain" width={700} height={700} loading="lazy" />
            <div className="flex-1">
              <h2 className="text-2xl font-black text-[#1A0A00] mb-2">{saltyProduct.name}</h2>
              <p className="text-[#5C3D2E] leading-relaxed mb-4">{saltyProduct.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {saltyProduct.tags.map(t => (
                  <span key={t} className="text-xs font-semibold px-2 py-1 rounded-full bg-[#FFF0E0] text-[#7A3A00]">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                <a href={`/${saltyProduct.slug}`} className="font-bold px-5 py-2.5 rounded-full bg-[#E83C14] text-white hover:brightness-110 transition-all text-sm">Ver ficha completa →</a>
                <a href={saltyProduct.url} target="_blank" rel="noopener noreferrer" className="font-bold px-5 py-2.5 rounded-full border-2 border-[#1A0A00] text-[#1A0A00] hover:bg-[#1A0A00] hover:text-white transition-all text-sm">Comprar R${saltyProduct.price}</a>
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
              <a href="/receitas-com-snack-proteico" className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Receitas com Snack Proteico</p>
                <p className="text-xs text-[#7A5C46] mt-1">8 formas práticas de usar no dia a dia</p>
              </a>
              <a href="/snack-proteico-sem-gluten" className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Sem Glúten</p>
                <p className="text-xs text-[#7A5C46] mt-1">Certificações e glúten oculto</p>
              </a>
              <a href="/comparativo-snacks-proteicos-brasil" className="bg-[#FFF8F0] rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Comparativo de Snacks</p>
                <p className="text-xs text-[#7A5C46] mt-1">Qual produto tem mais proteína?</p>
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
