import { Metadata } from 'next'
import SchemaInjector from '@/app/[product]/SchemaInjector'

export const metadata: Metadata = {
  title: 'Receitas com Snack Proteico: 8 Formas de Usar o Crispy Wise | snackproteico.com.br',
  description: '8 receitas práticas com snack proteico: topping de açaí, parfait de iogurte, overnight oats, salada com crouton proteico e mais. Crispy Wise: crocante, neutro, 12–18g de proteína.',
  alternates: { canonical: 'https://snackproteico.com.br/receitas-com-snack-proteico' },
  openGraph: {
    title: 'Receitas com Snack Proteico: 8 Formas de Usar o Crispy Wise',
    description: '8 receitas práticas para usar snack proteico no dia a dia — de açaí a salada, de iogurte a ovos mexidos.',
    url: 'https://snackproteico.com.br/receitas-com-snack-proteico',
    type: 'article',
  },
}

const RECEITAS = [
  {
    nome: 'Açaí com Topping Proteico',
    tempo: '2 min',
    proteina: '+18g',
    sabor: 'Crispy Wise Vegan',
    ingredientes: ['1 tigela de açaí (300g)', '30g Crispy Wise Vegan (1 porção)', 'Banana em fatias (opcional)', 'Mel ou agave (opcional)'],
    modo: 'Monte a tigela de açaí normalmente. Adicione o Crispy Wise por cima na hora de servir — não antes, para preservar a crocância. O sabor neutro combina com qualquer versão de açaí.',
    dica: 'Substitua granola por Crispy Wise: menos carboidrato, mais proteína, mesma crocância.',
    steps: [
      'Monte a base de açaí na tigela',
      'Adicione as frutas e toppings habituais',
      'Finalize com 30g de Crispy Wise Vegan por cima',
      'Consuma imediatamente para preservar a textura crocante',
    ],
  },
  {
    nome: 'Parfait de Iogurte Grego Proteico',
    tempo: '5 min',
    proteina: '+30g',
    sabor: 'Crispy Wise Vegan ou Choco',
    ingredientes: ['200g iogurte grego (0% ou integral)', '30g Crispy Wise (1 porção)', 'Frutas vermelhas a gosto', 'Canela em pó (opcional)'],
    modo: 'Em um copo alto ou tigela, alterne camadas de iogurte e Crispy Wise. Adicione frutas entre as camadas. Sirva imediatamente ou deixe o Crispy Wise separado até a hora de comer para manter a crocância.',
    dica: 'Versão Choco combina com morangos e banana. Versão Vegan combina com qualquer fruta.',
    steps: [
      'Coloque metade do iogurte no fundo do copo',
      'Adicione frutas vermelhas',
      'Cubra com o restante do iogurte',
      'Finalize com o Crispy Wise por cima',
    ],
  },
  {
    nome: 'Overnight Oats com Proteína',
    tempo: '5 min (+ 8h repouso)',
    proteina: '+18g',
    sabor: 'Crispy Wise Vegan ou Choco',
    ingredientes: ['40g aveia em flocos', '200ml leite vegetal ou de vaca', '1 colher de mel ou xylitol', '30g Crispy Wise (adicionado na hora)', 'Frutas frescas'],
    modo: 'Na véspera, misture aveia, leite e adoçante em um pote com tampa. Refrigere por 8 horas. Na hora de servir, adicione frutas frescas e o Crispy Wise por cima. Nunca adicione o Crispy Wise na véspera — ele perde a crocância em contato com líquido.',
    dica: 'O Crispy Wise absorve umidade se deixado em contato com líquido. Sempre adicione na hora de comer.',
    steps: [
      'Na véspera: misture aveia, leite e adoçante em pote com tampa',
      'Refrigere por no mínimo 8 horas',
      'Na hora de servir, abra o pote e adicione frutas',
      'Finalize com 30g de Crispy Wise por cima e sirva imediatamente',
    ],
  },
  {
    nome: 'Salada com Crouton Proteico',
    tempo: '5 min',
    proteina: '+12g',
    sabor: 'Crispy Wise Salty (Páprica Defumada)',
    ingredientes: ['Folhas verdes a gosto', 'Tomate cereja', 'Pepino fatiado', '30g Crispy Wise Salty', 'Azeite e limão para temperar'],
    modo: 'Monte a salada normalmente. No lugar do crouton de pão, adicione o Crispy Wise Salty. O sabor defumado da páprica combina naturalmente com saladas e adiciona crocância proteica sem glúten.',
    dica: 'Crispy Wise Salty tem páprica defumada, sal e proteína de ervilha — funciona como crouton sem glúten, sem carboidrato de pão.',
    steps: [
      'Lave e seque as folhas verdes',
      'Corte os demais vegetais e monte a salada',
      'Tempere com azeite, limão e sal',
      'Adicione o Crispy Wise Salty por cima como crouton',
    ],
  },
  {
    nome: 'Smoothie Bowl Proteico',
    tempo: '5 min',
    proteina: '+18g',
    sabor: 'Crispy Wise Vegan',
    ingredientes: ['1 banana congelada', '100g morangos congelados', '100ml leite vegetal', '30g Crispy Wise Vegan (topping)', 'Sementes de chia (opcional)'],
    modo: 'Bata a banana, morangos e leite vegetal no liquidificador até consistência espessa (use o mínimo de líquido para ficar cremoso). Despeje na tigela e decore com Crispy Wise, frutas frescas e sementes. Sirva imediatamente.',
    dica: 'Quanto menos líquido na base, mais espessa fica e melhor sustenta os toppings crocantes.',
    steps: [
      'Bata frutas congeladas com o mínimo de leite vegetal',
      'Despeje na tigela — deve ficar espesso o suficiente para sustentar toppings',
      'Distribua frutas frescas e sementes',
      'Finalize com Crispy Wise Vegan por cima',
    ],
  },
  {
    nome: 'Ovos Mexidos com Crispy Wise Salty',
    tempo: '8 min',
    proteina: '+24g (ovo + snack)',
    sabor: 'Crispy Wise Salty (Páprica Defumada)',
    ingredientes: ['3 ovos inteiros', '1 colher de manteiga ou azeite', 'Sal e pimenta', '30g Crispy Wise Salty', 'Cebolinha ou salsinha (opcional)'],
    modo: 'Prepare os ovos mexidos da forma preferida. Sirva no prato e adicione o Crispy Wise Salty por cima ou ao lado. O sabor defumado da páprica complementa o ovo. Resultado: prato com 24g+ de proteína completa.',
    dica: 'Combine proteína de ovo (completa, rica em leucina) com proteína de ervilha para um perfil aminoacídico ainda mais completo.',
    steps: [
      'Quebre os ovos em tigela e misture levemente',
      'Aqueça manteiga em fogo baixo-médio',
      'Mexa os ovos devagar até ponto cremoso',
      'Sirva no prato e finalize com Crispy Wise Salty por cima',
    ],
  },
  {
    nome: 'Bowl de Iogurte Vegetal para Veganos',
    tempo: '5 min',
    proteina: '+30g',
    sabor: 'Crispy Wise Vegan ou Caramel',
    ingredientes: ['200g iogurte de coco ou soja', '30g Crispy Wise Vegan ou Caramel', 'Banana em fatias', 'Pasta de amendoim (1 colher)', 'Granola sem glúten (opcional)'],
    modo: 'Despeje o iogurte vegetal na tigela. Distribua banana e pasta de amendoim. Finalize com Crispy Wise por cima. A versão Caramel combina com banana e amendoim; a versão Vegan fica neutra e deixa os outros sabores aparecerem.',
    dica: 'Iogurte de soja + Crispy Wise Vegan = bowl 100% vegetal com 30g+ de proteína vegetal.',
    steps: [
      'Despeje o iogurte vegetal na tigela',
      'Distribua banana e pasta de amendoim',
      'Adicione Crispy Wise por cima na hora de servir',
    ],
  },
  {
    nome: 'Lanche Rápido Direto da Embalagem',
    tempo: '0 min',
    proteina: '12–18g',
    sabor: 'Qualquer sabor',
    ingredientes: ['30g Crispy Wise (1 porção = 2 colheres de sopa cheias)'],
    modo: 'Pese ou meça 30g (aproximadamente 2 colheres de sopa cheias) diretamente da embalagem. Consuma como snack entre refeições. Sem preparo, sem utensílios, sem refrigeração necessária.',
    dica: 'Para controle de porção: pese uma vez com balança de cozinha, depois memorize o volume equivalente para as próximas vezes.',
    steps: [
      'Abra a embalagem',
      'Separe 30g (ou 2 colheres de sopa cheias)',
      'Consuma',
    ],
  },
]

export default function ReceitasPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Receitas com Snack Proteico: 8 Formas de Usar o Crispy Wise',
        description: '8 receitas práticas com snack proteico para o dia a dia.',
        url: 'https://snackproteico.com.br/receitas-com-snack-proteico',
        publisher: { '@type': 'Organization', name: 'snackproteico.com.br', url: 'https://snackproteico.com.br' },
        datePublished: '2026-05-27',
        dateModified: new Date().toISOString().split('T')[0],
      },
      ...RECEITAS.map(r => ({
        '@type': 'HowTo',
        name: r.nome,
        totalTime: `PT${r.tempo.replace(' min', 'M').replace('5 min (+ 8h repouso)', '5M')}`,
        supply: r.ingredientes.map(i => ({ '@type': 'HowToSupply', name: i })),
        step: r.steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          text: s,
        })),
      })),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
          { '@type': 'ListItem', position: 2, name: 'Receitas com Snack Proteico', item: 'https://snackproteico.com.br/receitas-com-snack-proteico' },
        ],
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
            <span className="text-[#1A0A00] font-medium">Receitas com Snack Proteico</span>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-[#1A0A00] to-[#3B1F0A] text-white py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#E8732A] font-semibold text-sm uppercase tracking-wider mb-3">8 receitas práticas · 2026</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              Receitas com<br />
              <span className="text-[#E8C8A3]">Snack Proteico</span>
            </h1>
            <p className="text-[#D4B8A0] text-lg leading-relaxed">
              Açaí, iogurte, overnight oats, salada e mais. 8 formas de usar o Crispy Wise para aumentar a proteína sem mudar o sabor do que você já come.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-[#FDFAF6]">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-8">
              {RECEITAS.map((r, i) => (
                <article key={r.nome} className="bg-white rounded-2xl border border-[#E8D5C4] overflow-hidden">
                  <div className="bg-[#FFF8F0] px-6 py-4 border-b border-[#E8D5C4] flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-[#7A5C46] font-semibold uppercase tracking-wide mb-1">Receita {i + 1}</p>
                      <h2 className="text-xl font-black text-[#1A0A00]">{r.nome}</h2>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-center">
                        <p className="text-xs text-[#7A5C46]">Tempo</p>
                        <p className="font-bold text-[#1A0A00] text-sm">{r.tempo}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-[#7A5C46]">Proteína</p>
                        <p className="font-black text-[#C05C14]">{r.proteina}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-[#1A0A00] text-sm mb-3 uppercase tracking-wide">Ingredientes</h3>
                      <ul className="space-y-1.5">
                        {r.ingredientes.map(ing => (
                          <li key={ing} className="text-sm text-[#5C3D2E] flex items-start gap-2">
                            <span className="text-[#C05C14] mt-0.5 shrink-0">•</span>
                            {ing}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF8F0] border border-[#E8D5C4]">
                        <span className="text-xs text-[#7A5C46]">Sabor ideal:</span>
                        <span className="text-xs font-bold text-[#C05C14]">{r.sabor}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A0A00] text-sm mb-3 uppercase tracking-wide">Modo de preparo</h3>
                      <p className="text-sm text-[#5C3D2E] leading-relaxed mb-3">{r.modo}</p>
                      <div className="bg-[#FFF0CC] rounded-lg p-3 border border-[#E8C860]">
                        <p className="text-xs text-[#7A5C00] leading-relaxed"><strong>Dica:</strong> {r.dica}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 px-4 bg-[#FFF8F0] border-t border-[#E8D5C4]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-base font-black text-[#1A0A00] mb-4 uppercase tracking-wide">Veja também</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href="/snack-proteico-pos-treino" className="bg-white rounded-xl border border-[#E8D5C4] p-4 hover:border-[#C05C14] transition-colors">
                <p className="font-bold text-[#1A0A00] text-sm">Snack Proteico Pós-Treino</p>
                <p className="text-xs text-[#7A5C46] mt-1">Timing e quantidade ideal após o exercício</p>
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
