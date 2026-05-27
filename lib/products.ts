export const STORE = 'https://wisehealth.com.br'

export type Product = {
  id: string
  slug: string
  name: string
  subtitle: string
  protein: number
  price: number
  weight: string
  tags: string[]
  highlight: string
  color: string
  badge: string
  img: string
  url: string
  cartId: number
  description: string
  longDescription: string
  ingredients: string
  note?: string
  reviewSku?: string
  reviewFlavor?: string
  metaDescription: string
  faqs: { q: string; a: string }[]
}

export const PRODUCTS: Product[] = [
  {
    id: 'vegan',
    slug: 'crispy-wise-vegan',
    name: 'Crispy Wise Vegan',
    subtitle: 'Sabor Neutro — Proteína de Ervilha',
    protein: 18,
    price: 109,
    weight: '400g',
    tags: ['Vegano', 'Zero Lactose', 'Sem Glúten', 'Clean Label'],
    highlight: 'Maior proteína da linha',
    color: '#3B7A3D',
    badge: '#D4EDDA',
    img: 'https://wisehealth.com.br/wp-content/uploads/2025/03/mockup-crispy-vegan-700x700.jpg',
    url: `${STORE}/crispy-wise-vegan/`,
    cartId: 615059,
    description: 'Bolinhas de proteína de ervilha isolada e farinha de arroz. Sabor neutro que combina com qualquer receita — de açaí a iogurte grego.',
    longDescription: 'O Crispy Wise Vegan é a versão 100% plant-based da linha, com 18g de proteína de ervilha isolada por porção de 30g. Desenvolvido para quem quer alta ingestão proteica sem abrir mão de ingredientes de origem vegetal. A fórmula usa apenas proteína isolada de ervilha e farinha de arroz — sem lactose, sem glúten, sem adicionados artificiais. O sabor neutro permite combinar com qualquer receita: topping de açaí, iogurte vegetal, overnight oats, vitaminas ou direto da embalagem como snack.',
    ingredients: 'Proteína isolada de ervilha, farinha de arroz',
    reviewSku: '073',
    reviewFlavor: 'Neutro',
    metaDescription: 'Crispy Wise Vegan: snack proteico 100% vegano com 18g de proteína de ervilha por porção de 30g. Zero lactose, sem glúten, clean label. Compre em wisehealth.com.br.',
    faqs: [
      {
        q: 'O Crispy Wise Vegan é realmente vegano?',
        a: 'Sim. O Crispy Wise Vegan usa proteína isolada de ervilha e farinha de arroz — nenhum ingrediente de origem animal. É certificado como produto vegano e adequado para dietas plant-based.',
      },
      {
        q: 'Qual a fonte de proteína do Crispy Wise Vegan?',
        a: 'Proteína isolada de ervilha (pea protein isolate). É a proteína vegetal com melhor perfil de aminoácidos, alta biodisponibilidade e ausência de antinutrientes quando isolada.',
      },
      {
        q: 'Crispy Wise Vegan tem retrogosto de ervilha?',
        a: 'Não. O retrogosto é um problema de proteína de ervilha concentrada (não isolada) ou mal processada. O Crispy Wise Vegan usa isolado de alta pureza que elimina os compostos responsáveis pelo sabor residual amargo.',
      },
      {
        q: 'Qual a diferença entre Crispy Wise Vegan e Crispy Wise Whey?',
        a: 'Os dois têm 18g de proteína por porção de 30g e sabor neutro. A diferença é a fonte: o Vegan usa proteína de ervilha isolada (zero lactose, adequado para veganos) e o Whey usa proteína concentrada do soro do leite (contém lactose, não vegano).',
      },
      {
        q: 'Como usar o Crispy Wise Vegan?',
        a: 'O sabor neutro do Crispy Wise Vegan combina com qualquer base: açaí, iogurte (vegetal ou grego), overnight oats, frutas, vitaminas, granola ou como snack direto. Uma porção de 30g adiciona 18g de proteína ao prato sem alterar o sabor.',
      },
      {
        q: 'Onde comprar Crispy Wise Vegan?',
        a: 'O Crispy Wise Vegan está disponível exclusivamente em wisehealth.com.br na embalagem de 400g (R$109) e no sachê de 30g. O Kit Degustação 5 sabores (R$49) inclui uma amostra.',
      },
    ],
  },
  {
    id: 'whey',
    slug: 'crispy-wise-whey',
    name: 'Crispy Wise Whey',
    subtitle: 'Sabor Neutro — Whey Protein',
    protein: 18,
    price: 129,
    weight: '400g',
    tags: ['Whey Protein', 'Alto Teor Proteico', 'Sem Glúten'],
    highlight: '18g por porção',
    color: '#7A5C46',
    badge: '#F5E6DA',
    img: 'https://wisehealth.com.br/wp-content/uploads/2025/10/mockup-crispy-whey-18g-700x700.jpg',
    url: `${STORE}/crispy-wise/`,
    cartId: 555110,
    description: 'A versão original com whey protein concentrado. Mesmo formato crocante de bolinha, sabor neutro ideal como topping ou snack direto.',
    longDescription: 'O Crispy Wise Whey é a versão original da linha, com proteína concentrada do soro do leite (whey protein) e 18g de proteína por porção de 30g. A maior densidade proteica entre snacks do mercado brasileiro. Fórmula enxuta com apenas dois ingredientes: concentrado proteico de soro de leite e farinha de arroz. Sem glúten, sem adicionados artificiais. Sabor neutro que funciona como topping em qualquer receita ou snack rápido entre refeições.',
    ingredients: 'Concentrado proteico de soro de leite, farinha de arroz',
    note: 'Contém lactose · Não vegano',
    reviewSku: '068',
    reviewFlavor: 'Neutro',
    metaDescription: 'Crispy Wise Whey: snack proteico com 18g de whey protein por porção de 30g. Sem glúten, 2 ingredientes, sabor neutro. A maior proteína por porção em snacks no Brasil.',
    faqs: [
      {
        q: 'Crispy Wise Whey tem lactose?',
        a: 'Sim. O Crispy Wise Whey usa concentrado proteico de soro do leite (whey protein), que naturalmente contém lactose. Quem tem intolerância à lactose deve optar pelo Crispy Wise Vegan (proteína de ervilha, zero lactose).',
      },
      {
        q: 'Quantos ingredientes tem o Crispy Wise Whey?',
        a: 'Dois: concentrado proteico de soro de leite e farinha de arroz. É uma das fórmulas mais enxutas entre snacks proteicos do mercado — sem maltodextrina, sem corantes, sem adoçantes artificiais.',
      },
      {
        q: 'Crispy Wise Whey é bom para pós-treino?',
        a: 'Sim. Com 18g de whey protein por porção de 30g, o Crispy Wise Whey é uma fonte rápida de proteína de alto valor biológico para recuperação muscular. Pode ser consumido diretamente ou como topping para potencializar o conteúdo proteico de outras refeições.',
      },
      {
        q: 'Qual a diferença entre Crispy Wise Whey e Crispy Wise Vegan?',
        a: 'Os dois têm 18g de proteína por porção de 30g e sabor neutro. O Whey usa proteína do soro do leite (contém lactose) e o Vegan usa proteína de ervilha isolada (zero lactose, adequado para veganos). O Whey custa R$129 e o Vegan R$109.',
      },
      {
        q: 'Como usar o Crispy Wise Whey no dia a dia?',
        a: 'O sabor neutro permite uso em açaí, iogurte grego, overnight oats, granola, frutas ou diretamente como snack. Por ter 18g de proteína por porção, é eficiente para atingir a meta proteica diária sem precisar de uma refeição completa.',
      },
    ],
  },
  {
    id: 'choco',
    slug: 'choco-crispy-wise',
    name: 'Choco Crispy Wise',
    subtitle: 'Sabor Chocolate',
    protein: 12,
    price: 138,
    weight: '400g',
    tags: ['Vegano', 'Zero Lactose', 'Sem Glúten', 'Chocolate Real'],
    highlight: 'Mais vendido',
    color: '#3B1F0A',
    badge: '#F5E0C8',
    img: 'https://wisehealth.com.br/wp-content/uploads/2025/08/Choco-Crispy-Wise-Fruta-700x700.jpg',
    url: `${STORE}/choco-crispy-wise/`,
    cartId: 672683,
    description: 'Bolinhas de chocolate com cacau em pó natural, proteína de ervilha, stevia e aroma natural de baunilha. Sem retrogosto amargo.',
    longDescription: 'O Choco Crispy Wise é o sabor mais vendido da linha — proteína de ervilha isolada com cacau em pó natural, fibra de tapioca e stevia. 12g de proteína por porção de 30g, 100% vegano, zero lactose, sem glúten. O sabor de chocolate vem do cacau puro, sem açúcar adicionado e sem acessulfame-K. Resultado: chocolate real, crocante, sem o retrogosto amargo típico de produtos com adoçantes artificiais.',
    ingredients: 'Proteína isolada de ervilha, fibra de tapioca, cacau em pó natural, farinha de arroz, óleo de coco, stevia',
    reviewSku: '078',
    reviewFlavor: 'Chocolate',
    metaDescription: 'Choco Crispy Wise: snack proteico de chocolate com 12g de proteína, vegano, zero lactose e sem glúten. Cacau real, sem açúcar. O mais vendido da linha Crispy Wise.',
    faqs: [
      {
        q: 'O Choco Crispy Wise tem açúcar?',
        a: 'Não tem açúcar adicionado. O adoçante usado é stevia (de origem vegetal), sem acessulfame-K, sucralose ou outros adoçantes artificiais. O sabor de chocolate vem do cacau em pó natural.',
      },
      {
        q: 'Choco Crispy Wise é vegano?',
        a: 'Sim. Todos os ingredientes são de origem vegetal: proteína de ervilha isolada, fibra de tapioca, cacau em pó natural, farinha de arroz, óleo de coco e stevia. Zero lactose e certificado para dietas veganas.',
      },
      {
        q: 'Qual cacau é usado no Choco Crispy Wise?',
        a: 'Cacau em pó natural — sem manteiga de cacau adicionada, sem açúcar. É o cacau puro, que traz o sabor e os polifenóis do cacau real sem as calorias adicionais da manteiga ou do chocolate ao leite.',
      },
      {
        q: 'Choco Crispy Wise tem retrogosto?',
        a: 'Não. O sabor residual amargo comum em produtos de ervilha é eliminado pelo isolado de alta pureza. O cacau natural e a stevia completam o sabor sem deixar amargor.',
      },
      {
        q: 'Como usar o Choco Crispy Wise?',
        a: 'Ótimo como topping de açaí (substitui granola com chocolate), em iogurte natural, overnight oats com cacau ou direto como snack doce. Combina bem com banana, morango e qualquer base que aceite chocolate.',
      },
      {
        q: 'Quantas calorias tem o Choco Crispy Wise?',
        a: 'Aproximadamente 120–130 kcal por porção de 30g, com 12g de proteína, ~10g de carboidratos e ~4g de gordura (de óleo de coco). Consulte a tabela nutricional na embalagem para valores exatos.',
      },
    ],
  },
  {
    id: 'caramel',
    slug: 'crispy-wise-caramel',
    name: 'Crispy Wise Caramel',
    subtitle: 'Sabor Caramelo',
    protein: 12,
    price: 138,
    weight: '400g',
    tags: ['Vegano', 'Zero Lactose', 'Sem Glúten'],
    highlight: 'Favorito das manhãs',
    color: '#A0660A',
    badge: '#FFF0CC',
    img: 'https://wisehealth.com.br/wp-content/uploads/2025/07/mockup-crispy-caramel-700x700.jpg',
    url: `${STORE}/crispy-wise-caramelo/`,
    cartId: 705429,
    description: 'Sabor caramelo com textura crocante. Perfeito no café da manhã com iogurte, granola ou puro como snack doce sem culpa.',
    longDescription: 'O Crispy Wise Caramel traz o sabor de caramelo em formato de bolinha crocante proteica. Com 12g de proteína de ervilha isolada por porção de 30g, é 100% vegano, zero lactose e sem glúten. A nota de caramelo é obtida com stevia natural e aromas naturais — sem açúcar, sem adoçantes artificiais. Funciona como topping de café da manhã ou como snack doce da tarde sem remédios após o consumo.',
    ingredients: 'Proteína isolada de ervilha, fibra de tapioca, farinha de arroz, óleo de coco, stevia, aroma natural de caramelo',
    reviewSku: '082',
    reviewFlavor: 'Caramelo',
    metaDescription: 'Crispy Wise Caramel: snack proteico sabor caramelo com 12g de proteína, 100% vegano e zero lactose. Sem açúcar, sem adoçantes artificiais. Favorito do café da manhã.',
    faqs: [
      {
        q: 'Crispy Wise Caramel tem açúcar?',
        a: 'Não. O sabor de caramelo é obtido com stevia natural e aroma natural de caramelo, sem açúcar adicionado e sem adoçantes artificiais como acessulfame-K ou sucralose.',
      },
      {
        q: 'Crispy Wise Caramel é vegano?',
        a: 'Sim. Todos os ingredientes são vegetais. A proteína base é ervilha isolada, e nenhum ingrediente de origem animal é utilizado na fórmula.',
      },
      {
        q: 'Como usar o Crispy Wise Caramel no café da manhã?',
        a: 'Ideal como topping de iogurte natural ou vegetal, granola, overnight oats ou açaí de banana. O sabor caramelo combina bem com canela, maçã e cacau. Uma porção de 30g adiciona 12g de proteína à refeição.',
      },
      {
        q: 'Qual a diferença entre Crispy Wise Caramel e Choco Crispy Wise?',
        a: 'Os dois têm 12g de proteína por porção de 30g, são veganos, sem glúten e zero lactose. A diferença é o sabor: Caramel tem nota doce de caramelo, ideal para combinações com banana e café; Choco tem sabor de chocolate com cacau natural.',
      },
      {
        q: 'Onde comprar Crispy Wise Caramel?',
        a: 'Disponível em wisehealth.com.br na embalagem de 400g (R$138) e como parte do Kit Degustação 5 sabores (R$49).',
      },
    ],
  },
  {
    id: 'salty',
    slug: 'crispy-wise-salty',
    name: 'Crispy Wise Salty',
    subtitle: 'Sabor Páprica Defumada',
    protein: 12,
    price: 138,
    weight: '400g',
    tags: ['Vegano', 'Zero Lactose', 'Sem Glúten', 'Salgado'],
    highlight: 'Único salgado',
    color: '#8B1A00',
    badge: '#FFE8E0',
    img: 'https://wisehealth.com.br/wp-content/uploads/2025/10/mockup-crispy-paprica-700x700.jpg',
    url: `${STORE}/crispy-wise-paprica-defumada/`,
    cartId: 708679,
    description: 'O único snack proteico salgado da linha. Páprica defumada com toque de sal — crouton proteico para saladas, sopas e ovos mexidos.',
    longDescription: 'O Crispy Wise Salty é o único sabor salgado da linha Crispy Wise — uma bolinha crocante de proteína de ervilha com páprica defumada e sal. 12g de proteína por porção de 30g, 100% vegano, zero lactose, sem glúten. Funciona como crouton proteico sem glúten em saladas e sopas, ou como snack salgado para substituir batata chip e salgadinhos ultraprocessados. Uma solução para quem quer proteína mas prefere o perfil salgado ao doce.',
    ingredients: 'Proteína isolada de ervilha, fibra de tapioca, farinha de arroz, óleo de coco, páprica defumada, sal',
    metaDescription: 'Crispy Wise Salty: snack proteico salgado com 12g de proteína, páprica defumada, vegano e sem glúten. O único snack proteico salgado do Brasil. Crouton proteico premium.',
    faqs: [
      {
        q: 'O que é o Crispy Wise Salty?',
        a: 'É o único sabor salgado da linha Crispy Wise. Uma bolinha crocante de proteína de ervilha isolada com páprica defumada e sal. 12g de proteína por porção de 30g, vegano, zero lactose e sem glúten.',
      },
      {
        q: 'Como usar o Crispy Wise Salty como crouton?',
        a: 'Adicione por cima de saladas, sopas, caldos ou ovos mexidos no momento de servir. O formato de bolinha crocante substitui crouton de pão tradicional com mais proteína e sem glúten. Combine com saladas de folhas, grão-de-bico ou abacate.',
      },
      {
        q: 'Crispy Wise Salty pode substituir salgadinhos?',
        a: 'Sim. Com 12g de proteína por porção e ingredientes limpos (páprica defumada, sal, óleo de coco), é uma alternativa proteica aos salgadinhos de milho ultraprocessados que têm 2–4g de proteína e ingredientes artificiais.',
      },
      {
        q: 'Crispy Wise Salty é vegano?',
        a: 'Sim. Todos os ingredientes são vegetais. Páprica defumada, farinha de arroz, proteína de ervilha e óleo de coco — nenhum ingrediente de origem animal.',
      },
      {
        q: 'Crispy Wise Salty tem glúten?',
        a: 'Não. A base é proteína de ervilha e farinha de arroz — sem trigo ou derivados. Produto adequado para celíacos e para quem evita glúten.',
      },
    ],
  },
  {
    id: 'panettone',
    slug: 'crispy-wise-panettone',
    name: 'Crispy Wise Panettone',
    subtitle: 'Sabor Panettone de Chocolate · Edição Limitada',
    protein: 12,
    price: 138,
    weight: '400g',
    tags: ['Vegano', 'Zero Lactose', 'Sem Glúten', 'Edição Limitada'],
    highlight: 'Edição limitada',
    color: '#5C2D0A',
    badge: '#FFE8D0',
    img: 'https://wisehealth.com.br/wp-content/uploads/2025/11/mockup-crispy-panettone-700x700.jpg',
    url: `${STORE}/crispy-wise-panettone-chocolate/`,
    cartId: 726999,
    description: 'A versão natalina com sabor de panetone de chocolate. Proteína de ervilha, cacau e aroma natural — a versão proteica do clássico.',
    longDescription: 'O Crispy Wise Panettone é uma edição limitada com sabor de panetone de chocolate. Proteína de ervilha isolada com cacau em pó natural, stevia e aroma natural — sem açúcar, sem lactose, sem glúten. 12g de proteína por porção de 30g. A versão proteica do clássico natalino, com a mesma crocância das outras versões e o sabor característico de panetone de chocolate. Disponível em estoque limitado.',
    ingredients: 'Proteína isolada de ervilha, fibra de tapioca, cacau em pó natural, farinha de arroz, óleo de coco, stevia, aroma artificial',
    metaDescription: 'Crispy Wise Panettone: edição limitada de snack proteico sabor panetone de chocolate. 12g de proteína, vegano, zero lactose e sem glúten. Enquanto durar o estoque.',
    faqs: [
      {
        q: 'Crispy Wise Panettone é edição limitada?',
        a: 'Sim. O Crispy Wise Panettone é produzido em quantidade limitada. Quando o estoque acabar não há previsão de nova produção. Verifique a disponibilidade em wisehealth.com.br.',
      },
      {
        q: 'Crispy Wise Panettone é vegano?',
        a: 'Sim. Usa proteína de ervilha isolada como base, com cacau em pó natural, stevia e aroma natural. Nenhum ingrediente de origem animal.',
      },
      {
        q: 'Qual a diferença entre Panettone e Choco Crispy Wise?',
        a: 'Os dois têm cacau na fórmula, mas o Panettone tem um aroma adicional que remete ao panetone tradicional. Ambos têm 12g de proteína por porção, são veganos e sem lactose. O Panettone é edição limitada; o Choco é da linha permanente.',
      },
      {
        q: 'Como usar o Crispy Wise Panettone?',
        a: 'Ótimo como snack direto ou topping de iogurte, açaí e overnight oats. O sabor remete ao panetone de chocolate tradicional — ideal para o período natalino sem abrir mão da proteína.',
      },
    ],
  },
]

export const COMPARISON = [
  { feature: 'Proteína por porção (30g)', crispy: '12–18g', others: '4–6g (mercado médio)', win: true },
  { feature: 'Base proteica', crispy: 'Ervilha isolada / Whey', others: 'Milho, arroz, trigo', win: true },
  { feature: 'Vegano (opção disponível)', crispy: '✅ 4 sabores', others: '⚠️ raro', win: true },
  { feature: 'Zero lactose', crispy: '✅ 4 sabores', others: '⚠️ varia', win: true },
  { feature: 'Sem glúten', crispy: '✅ todos os sabores', others: '⚠️ varia', win: true },
  { feature: 'Clean label (sem aditivos artificiais)', crispy: '✅ fórmula limpa', others: '❌ frequente uso de aditivos', win: true },
  { feature: 'Sachê individual disponível', crispy: '✅ R$10–12 / 30g', others: '❌ geralmente não', win: true },
  { feature: 'Sabores doces E salgado', crispy: '✅ 5 sabores + Ed. Limitada', others: '⚠️ majoritariamente doce', win: true },
]
