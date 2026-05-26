'use client'

import React, { useState, useEffect } from 'react'
import reviewsData from '@/data/reviews.json'

const STORE = 'https://wisehealth.com.br'

const FLAVOR_COLORS: Record<string, { bg: string; text: string }> = {
  'Neutro':              { bg: '#F5E6DA', text: '#7A5C46' },
  'Chocolate':           { bg: '#F5E0C8', text: '#3B1F0A' },
  'Caramelo':            { bg: '#FFF0CC', text: '#A0660A' },
  'Páprica Defumada':    { bg: '#FFE8E0', text: '#8B1A00' },
  'Panettone Chocolate': { bg: '#FFE8D0', text: '#5C2D0A' },
}

const SOURCE_LABELS: Record<string, string> = {
  wisehealth: '✓ Compra verificada · wisehealth.com.br',
  mercadolivre: '✓ Compra verificada · Mercado Livre',
  shopee: '✓ Compra verificada · Shopee',
  amazon: '✓ Compra verificada · Amazon',
}

function Stars({ rating, small = false }: { rating: number; small?: boolean }) {
  return (
    <span className={small ? 'text-sm' : 'text-base'} aria-label={`${rating} estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-amber-400' : 'text-gray-300'}>★</span>
      ))}
    </span>
  )
}

type Review = typeof reviewsData.all[0]

function ReviewCard({ review }: { review: Review }) {
  const colors = FLAVOR_COLORS[review.flavor] ?? { bg: '#F5F5F5', text: '#555' }
  const date = review.date
    ? new Date(review.date).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })
    : ''

  return (
    <article
      className="bg-white rounded-2xl border border-[#E8D5C4] p-5 flex flex-col gap-3"
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <Stars rating={review.rating} />
          <meta itemProp="reviewRating" content={review.rating.toString()} />
        </div>
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0"
          style={{ backgroundColor: colors.bg, color: colors.text }}
        >
          {review.flavor}
        </span>
      </div>

      <blockquote
        className="text-sm text-[#3B1F0A] leading-relaxed flex-1"
        itemProp="reviewBody"
      >
        "{review.text}"
      </blockquote>

      {review.pictureUrl && (
        <img
          src={review.pictureUrl}
          alt="Foto do review"
          className="rounded-lg w-full h-32 object-cover"
          loading="lazy"
        />
      )}

      <div className="border-t border-[#E8D5C4] pt-3 flex items-center justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-dark" itemProp="author">{review.name}</p>
          <p className="text-xs text-[#7A5C46]">{SOURCE_LABELS[review.source] ?? review.source}</p>
        </div>
        {date && <time className="text-xs text-[#A07060]" dateTime={review.date}>{date}</time>}
      </div>
    </article>
  )
}

const FLAVORS = ['Todos', 'Neutro', 'Chocolate', 'Caramelo', 'Páprica Defumada']

export default function ReviewsPage() {
  const [filter, setFilter] = useState('Todos')
  const [visible, setVisible] = useState(12)

  const filtered = filter === 'Todos'
    ? reviewsData.all
    : reviewsData.all.filter(r => r.flavor === filter)

  const shown = filtered.slice(0, visible)

  const { aggregate, byProduct } = reviewsData
  const lastFetched = new Date(reviewsData.lastFetched).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric',
  })

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#FDFAF6]/95 backdrop-blur border-b border-[#E8D5C4]">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="font-black text-lg text-dark tracking-tight">
            snack<span className="text-[#C05C14]">proteico</span>.com.br
          </a>
          <a
            href={`${STORE}/crispy/`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-bold rounded-full bg-[#E83C14] text-white hover:brightness-110 transition"
          >
            Comprar Crispy Wise
          </a>
        </div>
      </header>

      <main className="bg-[#FDFAF6] min-h-screen pb-20">
        {/* Hero aggregate */}
        <section className="bg-gradient-to-br from-[#1A0A00] to-[#3B1F0A] text-white py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#E8732A] font-semibold text-sm uppercase tracking-wider mb-3">
              Avaliações verificadas · Konfidency
            </p>
            <h1 className="text-3xl md:text-4xl font-black mb-4">
              O que os clientes dizem sobre o Crispy Wise
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
              <div className="text-center">
                <div className="text-5xl font-black text-[#E8732A]">{aggregate.rating}</div>
                <Stars rating={5} />
                <p className="text-sm text-[#D4B8A0] mt-1">nota geral</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/20" />
              <div className="text-center">
                <div className="text-5xl font-black text-white">{aggregate.count}</div>
                <p className="text-sm text-[#D4B8A0] mt-1">avaliações verificadas</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/20" />
              <div className="text-center">
                <div className="text-5xl font-black text-[#6EE7A0]">{aggregate.recommended}%</div>
                <p className="text-sm text-[#D4B8A0] mt-1">recomendam</p>
              </div>
            </div>
          </div>
        </section>

        {/* By product summary */}
        <section className="py-8 px-4 bg-[#FFF8F0] border-b border-[#E8D5C4]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-semibold text-[#7A5C46] uppercase tracking-wider mb-4">
              Por produto
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {byProduct.map(p => (
                <div
                  key={p.sku}
                  className="bg-white rounded-xl border border-[#E8D5C4] px-4 py-3 flex items-center justify-between gap-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-dark leading-tight">{p.flavor}</p>
                    <p className="text-xs text-[#7A5C46]">{p.count} avaliações</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-black text-[#C05C14]">{p.rating}★</p>
                    <p className="text-xs text-[#A07060]">{p.recommended}% rec.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="py-10 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {FLAVORS.map(f => (
                <button
                  key={f}
                  onClick={() => { setFilter(f); setVisible(12) }}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                    filter === f
                      ? 'bg-[#1A0A00] text-white border-[#1A0A00]'
                      : 'bg-white text-[#7A5C46] border-[#E8D5C4] hover:border-[#C05C14]'
                  }`}
                >
                  {f}
                  {f !== 'Todos' && (
                    <span className="ml-1 opacity-60">
                      ({reviewsData.all.filter(r => r.flavor === f).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {shown.map(r => <ReviewCard key={r.id} review={r} />)}
            </div>

            {visible < filtered.length && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setVisible(v => v + 12)}
                  className="px-8 py-3 rounded-full border-2 border-[#C05C14] text-[#C05C14] font-bold hover:bg-[#C05C14] hover:text-white transition-colors"
                >
                  Ver mais {Math.min(12, filtered.length - visible)} avaliações
                </button>
              </div>
            )}

            {filtered.length === 0 && (
              <p className="text-center text-[#7A5C46] py-12">
                Nenhuma avaliação para este filtro ainda.
              </p>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-4">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#C05C14] to-[#E8732A] rounded-2xl p-8 text-white text-center">
            <h2 className="text-xl font-black mb-2">Pronto para experimentar?</h2>
            <p className="text-white/90 text-sm mb-5">
              {aggregate.count} clientes já compraram. Kit degustação 5 sabores por R$49.
            </p>
            <a
              href={`${STORE}/crispy/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#C05C14] font-extrabold rounded-full hover:brightness-95 transition"
            >
              Comprar Crispy Wise →
            </a>
          </div>
        </section>

        {/* Footer note */}
        <p className="text-center text-xs text-[#A07060] mt-6 px-4">
          Avaliações coletadas via{' '}
          <a href="https://konfidency.com.br" target="_blank" rel="noopener noreferrer" className="underline">
            Konfidency
          </a>
          {' '}· apenas compras verificadas · atualizado em {lastFetched}
        </p>
      </main>
    </>
  )
}
