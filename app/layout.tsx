import type { Metadata } from 'next'
import './globals.css'

const BASE = 'https://snackproteico.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Snack Proteico | Guia Completo de Snacks Proteicos no Brasil',
    template: '%s | snackproteico.com.br',
  },
  description:
    'Guia definitivo de snacks proteicos no Brasil. Compare sabores, proteína por porção, ingredientes e preços. Descubra o Crispy Wise — 12 a 18g de proteína, sem lactose, sem retrogosto, vegano.',
  keywords: [
    'snack proteico',
    'snack proteico sem lactose',
    'snack proteico vegano',
    'crispy proteico',
    'bolinha de proteína',
    'lanche proteico sem glúten',
    'melhor snack proteico brasil',
    'snack proteico clean label',
    'crispy wise',
    'snacks proteicos saudáveis',
    'topping proteico',
    'proteína de ervilha snack',
  ],
  authors: [{ name: 'snackproteico.com.br', url: BASE }],
  creator: 'snackproteico.com.br',
  publisher: 'snackproteico.com.br',
  openGraph: {
    type: 'website',
    url: BASE,
    siteName: 'snackproteico.com.br',
    locale: 'pt_BR',
    title: 'Snack Proteico: 12–18g por Porção, Sem Lactose, Sem Retrogosto',
    description:
      'Compare os melhores snacks proteicos do Brasil. Crispy Wise entrega 12–18g de proteína real por porção, vegano, sem lactose e sem retrogosto. 5+ sabores.',
    images: [
      {
        url: 'https://wisehealth.com.br/wp-content/uploads/2025/08/Choco-Crispy-Wise-Fruta-700x700.jpg',
        width: 700,
        height: 700,
        alt: 'Crispy Wise — snack proteico sem lactose em 5 sabores',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snack Proteico: 12–18g por Porção, Sem Retrogosto',
    description:
      'Guia completo de snacks proteicos no Brasil. Crispy Wise: vegano · sem lactose · sem glúten · 5+ sabores.',
    images: [
      'https://wisehealth.com.br/wp-content/uploads/2025/08/Choco-Crispy-Wise-Fruta-700x700.jpg',
    ],
  },
  alternates: {
    canonical: BASE,
    languages: { 'pt-BR': BASE },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    // Preencher após criar no Google Search Console e Bing Webmaster
    // google: 'SEU_CODIGO_AQUI',
    // other: { 'msvalidate.01': 'SEU_CODIGO_BING' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
