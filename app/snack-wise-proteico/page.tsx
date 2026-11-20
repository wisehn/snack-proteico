import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'
import ProductFAQ from '@/app/[product]/ProductFAQ'
import {
  SNACK_FAQS, SNACK_FLAVORS, SNACK_BOX_MIXED, SNACK_URL, SNACK_PAGE, SNACK_IMG_MAIN,
  SNACK_PRICE, SNACK_BOX_PRICE, SNACK_DATE_PUBLISHED, SNACK_DATE_MODIFIED, type SnackFlavor,
} from '@/lib/snacks'

const TITLE = 'Snack Wise: Salgadinho Proteico Assado com 12g de Proteína (40g)'
const DESC =
  'Snack Wise é um salgadinho proteico assado com 12 g de proteína por pacote de 40 g, sem glúten e 0 g de açúcar adicionado. Sabores Cebola & Salsa e Três Queijos: tabela nutricional, ingredientes e FAQ.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SNACK_PAGE },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SNACK_PAGE,
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: SNACK_IMG_MAIN, width: 700, height: 700, alt: 'Snack Wise salgadinho proteico — Cebola & Salsa e Três Queijos' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [SNACK_IMG_MAIN] },
}

const U = 'https://wisehealth.com.br/wp-content/uploads/2026/11'
const GALLERY = [
  { src: `${U}/snack-wise-hero-lanche-da-tarde-escritorio.webp`, alt: 'Mulher comendo Snack Wise Cebola & Salsa no lanche da tarde no escritório, com colegas ao fundo', cap: 'Lanche da tarde no trabalho' },
  { src: `${U}/snack-wise-quadrada-cebola-e-salsa-na-mao-praia-limpa-700x700.webp`, alt: 'Mão segurando pacote de Snack Wise Cebola & Salsa 40g na praia', cap: 'Pacote individual: fácil de levar' },
  { src: `${U}/snack-wise-quadrada-tres-queijos-piscina-na-mao-430x430.webp`, alt: 'Pacote de Snack Wise Três Queijos 40g, 12g de proteína, segurado à beira da piscina', cap: 'Três Queijos, 12g de proteína por pacote' },
  { src: `${U}/snack-wise-tres-queijos-bancada-cozinha.webp`, alt: 'Pacote de Snack Wise Três Queijos sobre bancada de cozinha', cap: 'Sabor Três Queijos (palitos)' },
  { src: `${U}/snack-wise-peca-argola-1.webp`, alt: 'Close de uma argola de Snack Wise Cebola & Salsa com pontos de salsa', cap: 'Argola do Cebola & Salsa' },
  { src: `${U}/snack-wise-peca-palito-1.webp`, alt: 'Close de um palito de Snack Wise Três Queijos assado', cap: 'Palito do Três Queijos' },
]

const num = (s: string | number) => String(s).replace(',', '.')

function flavorSchema(f: SnackFlavor) {
  const n = f.nutrition
  return {
    '@type': 'Product',
    '@id': `${SNACK_PAGE}#${f.id}`,
    name: `Snack Wise ${f.name} 40g`,
    description: `Salgadinho proteico assado sabor ${f.name} (${f.shape}), 12 g de proteína por pacote de 40 g. ${f.allergens}`,
    image: f.img,
    sku: f.sku,
    gtin13: f.ean,
    mpn: f.sku,
    color: f.name,
    brand: { '@type': 'Brand', name: 'WiseHealth' },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Ingredientes', value: f.ingredients },
      { '@type': 'PropertyValue', name: 'Alérgicos', value: f.allergens },
    ],
    nutrition: {
      '@type': 'NutritionInformation',
      servingSize: '40 g',
      calories: `${n.kcal} kcal`,
      proteinContent: `${n.prot} g`,
      carbohydrateContent: `${n.carb} g`,
      sugarContent: `${num(n.sugar)} g`,
      fatContent: `${num(n.fat)} g`,
      saturatedFatContent: `${num(n.sat)} g`,
      transFatContent: `${num(n.trans)} g`,
      fiberContent: `${num(n.fiber)} g`,
      sodiumContent: `${n.sodium} mg`,
    },
    offers: {
      '@type': 'Offer',
      url: SNACK_URL,
      price: SNACK_PRICE.toFixed(2),
      priceCurrency: 'BRL',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: 'WiseHealth Nutrition', url: 'https://wisehealth.com.br' },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'BR',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 7,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn',
      },
    },
  }
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SNACK_PAGE}#webpage`,
      url: SNACK_PAGE,
      name: TITLE,
      description: DESC,
      inLanguage: 'pt-BR',
      datePublished: SNACK_DATE_PUBLISHED,
      dateModified: SNACK_DATE_MODIFIED,
      primaryImageOfPage: { '@type': 'ImageObject', url: SNACK_IMG_MAIN },
      breadcrumb: { '@id': `${SNACK_PAGE}#breadcrumb` },
      mainEntity: { '@id': `${SNACK_PAGE}#group` },
    },
    {
      '@type': 'ProductGroup',
      '@id': `${SNACK_PAGE}#group`,
      name: 'Snack Wise Proteico 40g',
      description: DESC,
      url: SNACK_PAGE,
      image: [SNACK_IMG_MAIN, ...GALLERY.map(g => g.src)],
      brand: { '@type': 'Brand', name: 'WiseHealth' },
      manufacturer: { '@type': 'Organization', name: 'United Mills Alimentos Ltda.' },
      productGroupID: '096',
      variesBy: ['https://schema.org/color'],
      hasVariant: SNACK_FLAVORS.map(flavorSchema),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SNACK_PAGE}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
        { '@type': 'ListItem', position: 2, name: 'Snack Wise Proteico', item: SNACK_PAGE },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: SNACK_FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
}

const ROWS: { label: string; key: 'kcal' | 'carb' | 'sugar' | 'prot' | 'fat' | 'sat' | 'fiber' | 'sodium'; unit: string }[] = [
  { label: 'Valor energético', key: 'kcal', unit: 'kcal' },
  { label: 'Carboidratos', key: 'carb', unit: 'g' },
  { label: 'Açúcares totais (adicionados: 0 g)', key: 'sugar', unit: 'g' },
  { label: 'Proteínas', key: 'prot', unit: 'g' },
  { label: 'Gorduras totais', key: 'fat', unit: 'g' },
  { label: 'Gorduras saturadas', key: 'sat', unit: 'g' },
  { label: 'Fibras alimentares', key: 'fiber', unit: 'g' },
  { label: 'Sódio', key: 'sodium', unit: 'mg' },
]

export default function SnackWisePage() {
  return (
    <>
      <SchemaInjector schema={schema} />

      <header className="sticky top-0 z-40 bg-[#FDFAF6]/95 backdrop-blur border-b border-[#E8D5C4]">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg text-[#1A0A00] tracking-tight">
            snack<span className="text-[#C05C14]">proteico</span>.com.br
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#7A5C46]">
            <a href="/#produtos" className="hover:text-[#1A0A00]">Crispy Wise</a>
            <a href="/snack-proteico-salgado" className="hover:text-[#1A0A00]">Salgados</a>
            <a href="/comparativo-snacks-proteicos-brasil" className="hover:text-[#1A0A00]">Comparativo</a>
          </nav>
          <a href={SNACK_URL} target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex px-5 py-2 text-sm font-bold rounded-full bg-[#E83C14] text-white hover:brightness-110">
            Comprar Snack Wise
          </a>
        </div>
      </header>

      <main>
        <nav className="bg-[#FFF8F0] border-b border-[#E8D5C4] px-4 py-2 text-xs text-[#7A5C46]" aria-label="Breadcrumb">
          <div className="max-w-6xl mx-auto flex items-center gap-1.5">
            <a href="/" className="hover:text-[#1A0A00]">snackproteico.com.br</a><span>/</span>
            <span className="text-[#1A0A00] font-medium">Snack Wise Proteico</span>
          </div>
        </nav>

        {/* Hero + resposta direta (citável) */}
        <section className="bg-[#FDFAF6] py-12 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img src={SNACK_IMG_MAIN} alt="Snack Wise salgadinho proteico assado: pacotes de Cebola & Salsa e Três Queijos"
              width={700} height={700} className="w-full max-w-sm mx-auto rounded-3xl border border-[#E8D5C4]" />
            <div className="flex flex-col gap-5">
              <span className="self-start text-xs font-bold px-3 py-1 rounded-full text-white bg-[#C05C14]">Lançamento 2026</span>
              <h1 className="text-3xl md:text-4xl font-black text-[#1A0A00] leading-tight">
                Snack Wise: salgadinho proteico assado com 12g de proteína
              </h1>
              <p className="text-[#5C3D2E] text-lg leading-relaxed">
                <strong>Snack Wise é um salgadinho proteico assado (não frito) da WiseHealth Nutrition.</strong> Cada
                pacote de 40 g entrega 12 g de proteína de ervilha (24% do valor diário), 0 g de açúcar adicionado e
                não contém glúten. Há dois sabores: Cebola &amp; Salsa (argolas) e Três Queijos (palitos).
              </p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[['12g', 'proteína / pacote'], ['40g', 'pacote individual'], ['0g', 'açúcar adicionado']].map(([v, l]) => (
                  <div key={l} className="bg-white rounded-xl border border-[#E8D5C4] p-3">
                    <span className="block text-2xl font-black text-[#C05C14]">{v}</span>
                    <span className="text-xs text-[#7A5C46]">{l}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#7A5C46]">
                Preço de lançamento: R${SNACK_PRICE},00 o pacote ou R${SNACK_BOX_PRICE},00 a caixa com 12 (R$ 9,00 por pacote).
                Confirme o valor atual na loja oficial.
              </p>
              <a href={SNACK_URL} target="_blank" rel="noopener noreferrer"
                className="text-center font-bold py-3.5 px-6 rounded-full bg-[#E83C14] text-white hover:brightness-110">
                Ver Snack Wise na loja oficial
              </a>
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section className="py-12 px-4 bg-[#FDFAF6]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Snack Wise no dia a dia</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {GALLERY.map(g => (
                <figure key={g.src} className="rounded-2xl overflow-hidden border border-[#E8D5C4] bg-white">
                  <img src={g.src} alt={g.alt} width={430} height={430} loading="lazy" className="w-full aspect-square object-cover" />
                  <figcaption className="p-3 text-xs text-[#7A5C46]">{g.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Sabores */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Sabores do Snack Wise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {SNACK_FLAVORS.map(f => (
                <article key={f.id} id={f.id} className="rounded-2xl border border-[#E8D5C4] p-6 bg-[#FFF8F0]">
                  <img src={f.img} alt={`Snack Wise ${f.name} pacote 40g`} width={300} height={300} loading="lazy"
                    className="h-48 w-auto mx-auto object-contain mb-4" />
                  <h3 className="text-xl font-black text-[#1A0A00]">Snack Wise {f.name}</h3>
                  <p className="text-[#5C3D2E] mt-2">
                    Salgadinho em {f.shape} com {f.seasoning}. 12 g de proteína e {f.nutrition.kcal} kcal por pacote de 40 g.
                  </p>
                  <p className="text-sm text-[#7A5C46] mt-2">{f.allergens}</p>
                  <p className="text-xs text-[#7A5C46] mt-2">EAN {f.ean} · SKU {f.sku}</p>
                  <a href={f.boxUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-bold text-[#C05C14] hover:underline">
                    Caixa com 12 pacotes →
                  </a>
                </article>
              ))}
            </div>
            <p className="text-sm text-[#7A5C46] mt-4">
              Prefere os dois? A{' '}
              <a href={SNACK_BOX_MIXED.url} target="_blank" rel="noopener noreferrer" className="underline">caixa sortida</a>{' '}
              traz 6 pacotes de cada sabor (EAN {SNACK_BOX_MIXED.ean}).
            </p>
          </div>
        </section>

        {/* Tabela nutricional */}
        <section className="py-12 px-4 bg-[#FDFAF6]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-2">Tabela nutricional do Snack Wise</h2>
            <p className="text-[#7A5C46] mb-5">Porção: 40 g (1 pacote). Porções por embalagem: 1. Valores do rótulo oficial.</p>
            <div className="overflow-x-auto rounded-2xl border border-[#E8D5C4] bg-white">
              <table className="w-full text-sm">
                <caption className="sr-only">Informação nutricional do Snack Wise por 100 g e por pacote de 40 g</caption>
                <thead className="bg-[#FFF0E0] text-[#1A0A00]">
                  <tr>
                    <th scope="col" className="text-left p-3">Nutriente</th>
                    <th scope="col" className="p-3">Cebola &amp; Salsa<br /><span className="font-normal text-xs">40 g (100 g)</span></th>
                    <th scope="col" className="p-3">Três Queijos<br /><span className="font-normal text-xs">40 g (100 g)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map(r => (
                    <tr key={r.key} className="border-t border-[#E8D5C4]">
                      <th scope="row" className="text-left p-3 font-medium text-[#1A0A00]">{r.label}</th>
                      {SNACK_FLAVORS.map(f => {
                        const n = f.nutrition as unknown as Record<string, string | number>
                        return (
                          <td key={f.id} className="p-3 text-center text-[#5C3D2E]">
                            <strong>{n[r.key]} {r.unit}</strong> ({n[`${r.key}100`]} {r.unit})
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#7A5C46] mt-3">
              %VD por pacote — Cebola &amp; Salsa: proteína 24%, sódio 11%, gorduras totais 10%. Três Queijos: proteína 24%, sódio 12%, gorduras totais 13%.
            </p>
          </div>
        </section>

        {/* Ingredientes */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-5">Ingredientes e alérgenos</h2>
            {SNACK_FLAVORS.map(f => (
              <div key={f.id} className="mb-5 rounded-2xl border border-[#E8D5C4] p-5 bg-[#FFF8F0]">
                <h3 className="font-bold text-[#1A0A00] mb-1">{f.name}</h3>
                <p className="text-sm text-[#5C3D2E] leading-relaxed">{f.ingredients}</p>
                <p className="text-sm font-semibold text-[#7A3A00] mt-2">{f.allergens}</p>
              </div>
            ))}
            <p className="text-xs text-[#7A5C46]">Consulte sempre a embalagem para a lista oficial de ingredientes e alérgenos.</p>
          </div>
        </section>

        {/* Para quem é / não é */}
        <section className="py-12 px-4 bg-[#FFF8F0]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-5">Snack Wise é para quem?</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-[#5C3D2E]">
              <div className="bg-white rounded-2xl border border-[#E8D5C4] p-5">
                <h3 className="font-bold text-[#1A0A00] mb-2">Faz sentido se você quer</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>um salgadinho com mais proteína que os convencionais</li>
                  <li>porção individual pronta para levar (trabalho, viagem, treino)</li>
                  <li>snack sem glúten e sem açúcar adicionado</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-[#E8D5C4] p-5">
                <h3 className="font-bold text-[#1A0A00] mb-2">Não é indicado se você</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>tem alergia a soja (os dois sabores contêm)</li>
                  <li>tem alergia ou intolerância à lactose (Três Queijos contém)</li>
                  <li>segue dieta vegana ou busca produto "clean label" de poucos ingredientes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Snack Wise vs Crispy Wise */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-5">Snack Wise ou Crispy Wise?</h2>
            <div className="overflow-x-auto rounded-2xl border border-[#E8D5C4]">
              <table className="w-full text-sm">
                <thead className="bg-[#FFF0E0]">
                  <tr><th className="text-left p-3"> </th><th className="p-3">Snack Wise</th><th className="p-3">Crispy Wise</th></tr>
                </thead>
                <tbody className="text-[#5C3D2E]">
                  {[
                    ['Formato', 'Salgadinho assado (argolas e palitos)', 'Bolinhas crocantes de proteína'],
                    ['Embalagem', 'Pacote individual de 40 g', 'Pacote de 400 g ou sachê de 30 g'],
                    ['Proteína', '12 g por 40 g (~30 g/100 g)', '12–18 g por 30 g (~40–60 g/100 g)'],
                    ['Base', 'Farinha de milho + proteína de ervilha', 'Proteína de ervilha ou whey'],
                    ['Sabores', 'Cebola & Salsa, Três Queijos', 'Doces, neutro e um salgado'],
                    ['Vegano / zero lactose', 'Não (Três Queijos contém leite)', 'Sim, exceto o Crispy Wise Whey'],
                    ['Contém soja', 'Sim (óleo de soja)', 'Ver rótulo de cada sabor'],
                  ].map(([a, b, c]) => (
                    <tr key={a} className="border-t border-[#E8D5C4]">
                      <th scope="row" className="text-left p-3 font-medium text-[#1A0A00]">{a}</th>
                      <td className="p-3">{b}</td><td className="p-3">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#7A5C46] mt-3">
              Regra prática: para matar a vontade de salgadinho, Snack Wise. Para topping, receitas e maior densidade de proteína,{' '}
              <a href="/" className="underline">Crispy Wise</a>. Veja também o{' '}
              <a href="/comparativo-snacks-proteicos-brasil" className="underline">comparativo de snacks proteicos no Brasil</a> e o guia de{' '}
              <a href="/snack-proteico-salgado" className="underline">snack proteico salgado</a>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-[#FDFAF6]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-[#1A0A00] mb-6">Perguntas frequentes sobre o Snack Wise</h2>
            <ProductFAQ faqs={SNACK_FAQS} />
            <p className="text-xs text-[#7A5C46] mt-6">
              Fonte dos dados: rótulo e página oficial do produto em wisehealth.com.br. Última verificação: 20/11/2026.
              Avaliações: o produto ainda não tem avaliações de clientes publicadas.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A0A00] text-[#D4B8A0] py-8 px-4 text-center text-sm">
        <p className="font-black text-white text-base mb-1">snack<span className="text-[#E8732A]">proteico</span>.com.br</p>
        <p>Guia independente sobre snacks proteicos no Brasil.</p>
        <p className="mt-2"><a href="https://wisehealth.com.br" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">wisehealth.com.br</a></p>
      </footer>
    </>
  )
}
