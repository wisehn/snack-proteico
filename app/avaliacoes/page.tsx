import type { Metadata } from 'next'
import ReviewsPage from './ReviewsPage'
import SchemaInjector from '@/app/[product]/SchemaInjector'

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

const reviewsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      name: 'Crispy Wise — Linha Completa',
      brand: { '@type': 'Brand', name: 'WiseHealth Nutrition' },
      url: 'https://snackproteico.com.br',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 4.8,
        reviewCount: 281,
        bestRating: 5,
        worstRating: 1,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://snackproteico.com.br' },
        { '@type': 'ListItem', position: 2, name: 'Avaliações', item: 'https://snackproteico.com.br/avaliacoes' },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <SchemaInjector schema={reviewsSchema} />
      <ReviewsPage />
    </>
  )
}
