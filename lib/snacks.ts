// Snack Wise (salgadinho proteico assado, 40g). Dados verbatim da página oficial
// https://wisehealth.com.br/snack-wise-proteico/ (conferidos em 2026-11-20).
// Separado de PRODUCTS de propósito: porção 40g, embalagem individual, NÃO vegano,
// NÃO zero lactose, NÃO clean label. Não misturar com as estatísticas do Crispy Wise.
import { STORE } from './products'

export const SNACK_URL = `${STORE}/snack-wise-proteico/`
export const SNACK_PAGE = 'https://snackproteico.com.br/snack-wise-proteico'
export const SNACK_DATE_PUBLISHED = '2026-11-10'
export const SNACK_DATE_MODIFIED = '2026-11-20'
const IMG = `${STORE}/wp-content/uploads/2026/11`

export const SNACK_IMG_MAIN = `${IMG}/snack-wise-dois-sabores-principal-destaque-700x700.webp`

export type Nutrition = {
  kcal100: number; kcal: number; kcalVd: number
  carb100: number; carb: number; carbVd: number
  sugar100: string; sugar: string
  prot100: number; prot: number; protVd: number
  fat100: number; fat: string; fatVd: number
  sat100: string; sat: string; satVd: number
  trans100: string; trans: string
  fiber100: string; fiber: string; fiberVd: number
  sodium100: number; sodium: number; sodiumVd: number
}

export type SnackFlavor = {
  id: string
  name: string
  shape: string
  seasoning: string
  sku: string
  ean: string
  boxSku: string
  boxEan: string
  boxUrl: string
  img: string
  boxImg: string
  ingredients: string
  allergens: string
  nutrition: Nutrition
}

export const SNACK_FLAVORS: SnackFlavor[] = [
  {
    id: 'cebola-salsa',
    name: 'Cebola & Salsa',
    shape: 'argolas',
    seasoning: 'tempero de cebola, alho e salsa',
    sku: '096-2',
    ean: '7898715361669',
    boxSku: '098',
    boxEan: '7898715361683',
    boxUrl: `${STORE}/snack-wise-cebola-salsa-cx12/`,
    img: `${IMG}/snack-wise-cebola-e-salsa-pacote-40g-fundo-transparente.webp`,
    boxImg: `${IMG}/snack-wise-caixa-12-unidades-cebola-e-salsa-40g-v2.webp`,
    ingredients:
      'Farinha de milho, proteína isolada de ervilha (Pisum sativum L.), óleo de soja, condimento preparado de cebola e salsa (amido, cebola desidratada, alho desidratado, salsa desidratada, sal, antiumectante dióxido de silício e aromatizante), extrato de levedura, aromatizante e sal.',
    allergens: 'Não contém glúten. Alérgicos: contém derivados de soja.',
    nutrition: {
      kcal100: 448, kcal: 179, kcalVd: 9,
      carb100: 43, carb: 17, carbVd: 6,
      sugar100: '1', sugar: '0,4',
      prot100: 31, prot: 12, protVd: 24,
      fat100: 16, fat: '6,6', fatVd: 10,
      sat100: '2,7', sat: '1,1', satVd: 5,
      trans100: '0', trans: '0',
      fiber100: '3,5', fiber: '1,4', fiberVd: 6,
      sodium100: 544, sodium: 218, sodiumVd: 11,
    },
  },
  {
    id: 'tres-queijos',
    name: 'Três Queijos',
    shape: 'palitos',
    seasoning: 'tempero de provolone, parmesão e queijo minas',
    sku: '096-1',
    ean: '7898715361652',
    boxSku: '097',
    boxEan: '7898715361676',
    boxUrl: `${STORE}/snack-wise-tres-queijos-cx12/`,
    img: `${IMG}/snack-wise-tres-queijos-pacote-40g-fundo-transparente.webp`,
    boxImg: `${IMG}/snack-wise-caixa-12-unidades-tres-queijos-40g-v2.webp`,
    ingredients:
      'Farinha de milho, proteína isolada de ervilha (Pisum sativum L.), óleo de soja, condimento preparado de provolone (amido, realçador de sabor glutamato monossódico, extrato de levedura, antiumectante dióxido de silício, sal, corante caramelo IV, corante cúrcuma, sequestrante gluconato de sódio, realçador de sabor inosinato dissódico, cebola em pó, regulador de acidez fosfato dissódico), condimento preparado de parmesão (amido, realçador de sabor glutamato monossódico, antiumectante dióxido de silício, acidulante ácido cítrico, óleo de girassol, cebola em pó, regulador de acidez fosfato dissódico e aromatizante), condimento preparado de queijo minas (sal, amido, soro de leite, açúcar, queijo em pó, proteína vegetal, especiarias (cebola e alho), realçador de sabor glutamato monossódico, aromatizantes e antiumectante dióxido de silício) e sal.',
    allergens: 'Não contém glúten. Contém lactose. Alérgicos: contém derivados de leite e soja.',
    nutrition: {
      kcal100: 476, kcal: 191, kcalVd: 10,
      carb100: 41, carb: 16, carbVd: 5,
      sugar100: '1,0', sugar: '0,4',
      prot100: 30, prot: 12, protVd: 24,
      fat100: 20, fat: '8,2', fatVd: 13,
      sat100: '3,3', sat: '1,3', satVd: 7,
      trans100: '0,1', trans: '0',
      fiber100: '3,4', fiber: '1,4', fiberVd: 6,
      sodium100: 598, sodium: 239, sodiumVd: 12,
    },
  },
]

export const SNACK_BOX_MIXED = {
  url: `${STORE}/snack-wise-sortido/`,
  sku: '099',
  ean: '7898715361690',
  img: `${IMG}/snack-wise-caixa-12-unidades-sortido-6-cebola-e-salsa-6-tres-queijos-40g-v2.webp`,
}

// Preços de lançamento — conferir na loja (podem mudar).
export const SNACK_PRICE = 15
export const SNACK_BOX_PRICE = 108

export const SNACK_FAQS: { q: string; a: string }[] = [
  {
    q: 'O que é o Snack Wise?',
    a: 'O Snack Wise é um salgadinho proteico assado da WiseHealth Nutrition, feito com farinha de milho e proteína isolada de ervilha. Cada pacote tem 40 g e 12 g de proteína (24% do valor diário), em dois sabores: Cebola & Salsa (argolas) e Três Queijos (palitos).',
  },
  {
    q: 'Quanta proteína tem o Snack Wise?',
    a: 'Cada pacote de 40 g tem 12 g de proteína nos dois sabores. Por 100 g são 31 g no Cebola & Salsa e 30 g no Três Queijos, ou seja, cerca de 30% do peso do produto é proteína, toda de origem vegetal (ervilha).',
  },
  {
    q: 'Quantas calorias tem o Snack Wise?',
    a: 'O pacote de 40 g do Cebola & Salsa tem 179 kcal (9% do valor diário) e o do Três Queijos tem 191 kcal (10%). A tabela nutricional considera a embalagem inteira como uma porção.',
  },
  {
    q: 'O Snack Wise é assado ou frito?',
    a: 'É assado, não é frito. Como a receita leva óleo de soja, o produto contém gordura: 6,6 g por pacote no Cebola & Salsa e 8,2 g no Três Queijos.',
  },
  {
    q: 'O Snack Wise tem açúcar?',
    a: 'Quase nada. Os dois sabores têm 0,4 g de açúcares totais por pacote e 0 g de açúcares adicionados.',
  },
  {
    q: 'O Snack Wise tem glúten?',
    a: 'Não. Os dois sabores trazem a indicação "não contém glúten" na embalagem.',
  },
  {
    q: 'O Snack Wise tem lactose?',
    a: 'Depende do sabor. O Três Queijos contém lactose e derivados de leite (soro de leite e queijo em pó) e não é indicado para alérgicos ou intolerantes. O Cebola & Salsa não leva leite na receita, mas o fabricante não o vende como "zero lactose". Quem tem alergia ou intolerância severa deve consultar o atendimento da WiseHealth antes de comprar.',
  },
  {
    q: 'O Snack Wise é vegano?',
    a: 'Não é vendido como vegano. A proteína dos dois sabores é vegetal (ervilha), mas o Três Queijos contém derivados de leite. Para um snack proteico vegano, a linha Crispy Wise tem versões à base de ervilha sem ingredientes de origem animal.',
  },
  {
    q: 'O Snack Wise tem soja?',
    a: 'Sim. Os dois sabores levam óleo de soja e contêm derivados de soja. Quem tem alergia à soja não deve consumir.',
  },
  {
    q: 'Quanto sódio tem o Snack Wise?',
    a: 'O Cebola & Salsa tem 218 mg de sódio por pacote (11% do valor diário) e o Três Queijos tem 239 mg (12%).',
  },
  {
    q: 'Qual a diferença entre o Cebola & Salsa e o Três Queijos?',
    a: 'O Cebola & Salsa é o salgado clássico, com tempero de cebola, alho e salsa, em argolas, e não leva derivados de leite. O Três Queijos tem tempero de provolone, parmesão e queijo minas, em palitos, e contém lactose. Os dois têm 12 g de proteína por pacote; o Três Queijos tem um pouco mais de calorias e gordura.',
  },
  {
    q: 'Qual a diferença entre o Snack Wise e o Crispy Wise?',
    a: 'O Snack Wise é um salgadinho assado em pacote individual de 40 g (12 g de proteína, base de milho e ervilha). O Crispy Wise são bolinhas crocantes de proteína em embalagens de 400 g ou sachês de 30 g, com 12 a 18 g de proteína por porção de 30 g, à base de proteína isolada de ervilha ou whey. O Crispy Wise tem sabores doces e um salgado (páprica defumada); o Snack Wise é focado em sabor de salgadinho.',
  },
  {
    q: 'Quantos pacotes vêm na caixa do Snack Wise?',
    a: 'As caixas têm 12 pacotes de 40 g (480 g no total), nas opções Cebola & Salsa, Três Queijos ou sortida com 6 de cada sabor. No lançamento, a caixa saía por R$ 108,00 (R$ 9,00 por pacote) e o pacote avulso por R$ 15,00.',
  },
  {
    q: 'O Snack Wise substitui uma refeição ou o whey protein?',
    a: 'Não. O Snack Wise é um lanche, não uma refeição completa nem um suplemento. Ele complementa a alimentação e não substitui whey protein nem o prato do dia a dia.',
  },
  {
    q: 'Criança ou gestante pode comer o Snack Wise?',
    a: 'Não há restrição de idade na embalagem, mas cada pacote tem de 11% a 12% do valor diário de sódio. Para crianças, gestantes ou quem segue dieta restrita, o ideal é consultar nutricionista ou médico.',
  },
  {
    q: 'Como conservar o Snack Wise?',
    a: 'Em local arejado, seco, longe da luz e em temperatura ambiente. Depois de aberto, consumir na hora.',
  },
  {
    q: 'Quem fabrica o Snack Wise?',
    a: 'Produzido pela United Mills Alimentos Ltda. (Valinhos, SP) e distribuído pela WHN Suplementos Alimentares Ltda. (Camboriú, SC), empresa da WiseHealth Nutrition.',
  },
]
