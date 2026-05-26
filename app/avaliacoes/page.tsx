import type { Metadata } from 'next'
import ReviewsPage from './ReviewsPage'

export const metadata: Metadata = {
  title: 'Avaliações Crispy Wise — 4.8★ em +280 reviews verificados',
  description:
    'Leia o que os clientes dizem sobre o Crispy Wise. +280 avaliações verificadas, nota 4.8★, 97% recomendam. Depoimentos reais sobre sabor, textura e proteína.',
  alternates: {
    canonical: 'https://snackproteico.com.br/avaliacoes',
  },
  openGraph: {
    title: 'Avaliações Crispy Wise — 4.8★ em +280 reviews verificados',
    description:
      '+280 avaliações verificadas. Clientes reais sobre sabor, textura e proteína do Crispy Wise.',
    url: 'https://snackproteico.com.br/avaliacoes',
  },
}

export default function Page() {
  return <ReviewsPage />
}
