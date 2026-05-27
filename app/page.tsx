import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '@/keystatic.config'
import HomeClient, { type HeroData, type FaqItem } from './HomeClient'
import path from 'path'

const reader = createReader(path.join(process.cwd()), keystaticConfig)

const HERO_FALLBACK: HeroData = {
  announcement: '🚀 Kit Degustação 5 sabores por R$49 — pedir agora →',
  announcement_url: 'https://wisehealth.com.br/kit-degustacao-crispy-wise/',
  headline: 'Snack Proteico de Verdade: 12–18g por Porção, Sem Lactose, Sem Retrogosto',
  subtitle: 'O Crispy Wise é a linha de snacks proteicos com mais proteína por porção do Brasil. Bolinhas crocantes em 5+ sabores — veganos, sem glúten e com clean label.',
  cta_primary: 'Ver todos os sabores ↓',
  cta_kit: 'Kit degustação R$49',
}

const FAQS_FALLBACK: FaqItem[] = [
  { q: 'O que é um snack proteico?', a: 'Snack proteico é um lanche com alto teor de proteína (mínimo 10g por porção) criado para complementar a ingestão diária sem precisar preparar uma refeição completa. O Crispy Wise é um snack proteico em formato de bolinhas crocantes, com 12 a 18g de proteína por porção de 30g, adequado para consumo direto ou como topping.' },
  { q: 'Quantas gramas de proteína por dia preciso consumir?', a: 'A recomendação para adultos ativos é de 1,6 a 2,2g de proteína por kg de peso corporal. Para uma pessoa de 70kg, isso representa entre 112g e 154g diários. Uma porção de Crispy Wise (30g) contribui com 12 a 18g desse total — equivalente a cerca de 2 ovos — sem precisar cozinhar nada.' },
  { q: 'Qual snack proteico tem mais proteína por porção no Brasil?', a: 'O Crispy Wise Whey e o Crispy Wise Vegan entregam 18g de proteína por porção de 30g — uma das maiores densidades proteicas entre snacks disponíveis no mercado brasileiro. As versões saborizadas (Chocolate, Caramel, Salty, Panettone) entregam 12g por porção, ainda acima da maioria dos concorrentes.' },
  { q: 'Crispy Wise é vegano?', a: 'Quatro dos cinco sabores são veganos: Crispy Wise Vegan, Choco Crispy, Crispy Wise Caramel e Crispy Wise Salty são feitos com proteína isolada de ervilha e não contêm ingredientes de origem animal. Apenas o Crispy Wise Whey usa proteína do soro do leite e não é adequado para veganos.' },
  { q: 'Crispy Wise tem lactose?', a: 'Todas as versões Crispy Wise, exceto o Crispy Wise Whey, são zero lactose. As versões à base de proteína de ervilha (Vegan, Chocolate, Caramel, Salty) não contêm ingredientes lácteos e são seguras para intolerantes à lactose.' },
  { q: 'Crispy Wise tem glúten?', a: 'Não. Todas as versões Crispy Wise são sem glúten. A formulação utiliza farinha de arroz em vez de trigo. Os produtos são fabricados em ambiente que pode conter glúten (por isso o aviso de contaminação cruzada na embalagem), mas o produto em si é livre de glúten.' },
  { q: 'Qual a diferença entre Crispy Wise Whey e Crispy Wise Vegan?', a: 'O Crispy Wise Whey usa proteína concentrada do soro do leite (whey protein) e contém lactose. O Crispy Wise Vegan usa proteína isolada de ervilha combinada com farinha de arroz, é zero lactose e adequado para veganos. Ambos têm sabor neutro, mesma textura crocante e 18g de proteína por porção de 30g.' },
  { q: 'Como usar Crispy Wise no dia a dia?', a: 'O Crispy Wise pode ser consumido direto como snack ou como topping em: açaí, iogurte grego, frutas, overnight oats, smoothies, pudim de chia, granola caseira e saladas. A versão Salty (páprica defumada) funciona como crouton proteico em sopas, saladas e ovos mexidos.' },
  { q: 'Snack proteico ajuda a emagrecer?', a: 'A proteína aumenta a saciedade e preserva massa muscular durante o déficit calórico. Substituir lanches ultraprocessados por um snack com 12–18g de proteína e poucos ingredientes — como o Crispy Wise — reduz a fome entre refeições, diminui a ingestão calórica total e contribui para a perda de gordura sem sacrificar músculo.' },
  { q: 'Crispy Wise tem retrogosto?', a: 'Não. O retrogosto amargo é um dos problemas mais comuns em produtos com proteína de ervilha processada de forma convencional. O Crispy Wise resolve isso com proteína isolada de ervilha de alta pureza combinada com stevia natural e aromas naturais — sem acessulfame-K, sucralose ou adoçantes artificiais na fórmula.' },
  { q: 'Qual o preço do Crispy Wise?', a: 'O Crispy Wise custa entre R$109 (versão Vegan 400g) e R$138 (versões saborizadas 400g). O Crispy Wise Whey custa R$129. O sachê individual de 30g custa R$10–12. O Kit Degustação com 5 sabores sai por R$49. Disponível exclusivamente em wisehealth.com.br.' },
  { q: 'Onde comprar Crispy Wise?', a: 'O Crispy Wise está disponível no site oficial wisehealth.com.br, com entrega para todo o Brasil. A marca também tem presença no Amazon.com.br. Para acessar todos os sabores, formatos (sachê 30g, embalagem 400g, kits) e melhores preços, o site oficial é a opção mais completa.' },
]

async function getHero(): Promise<HeroData> {
  try {
    const data = await reader.singletons.hero.read()
    if (!data) return HERO_FALLBACK
    return {
      announcement: data.announcement ?? HERO_FALLBACK.announcement,
      announcement_url: data.announcement_url ?? null,
      headline: data.headline ?? HERO_FALLBACK.headline,
      subtitle: data.subtitle ?? HERO_FALLBACK.subtitle,
      cta_primary: data.cta_primary ?? HERO_FALLBACK.cta_primary,
      cta_kit: data.cta_kit ?? HERO_FALLBACK.cta_kit,
    }
  } catch {
    return HERO_FALLBACK
  }
}

async function getFaqs(): Promise<FaqItem[]> {
  try {
    const slugs = await reader.collections.faqs.list()
    const items = await Promise.all(
      slugs.map(async (slug) => {
        const entry = await reader.collections.faqs.read(slug)
        return entry
          ? { q: entry.question as string, a: entry.answer ?? '', order: entry.order ?? 99 }
          : null
      })
    )
    const valid = items.filter((x): x is { q: string; a: string; order: number } => x !== null)
    valid.sort((a, b) => a.order - b.order)
    return valid.map(({ q, a }) => ({ q, a }))
  } catch {
    return FAQS_FALLBACK
  }
}

export default async function Page() {
  const [hero, faqs] = await Promise.all([getHero(), getFaqs()])
  return <HomeClient hero={hero} faqs={faqs} />
}
