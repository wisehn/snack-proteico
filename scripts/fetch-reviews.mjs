/**
 * Fetches reviews from Konfidency API for all Crispy Wise products.
 * Run: node scripts/fetch-reviews.mjs
 * Called automatically by GitHub Actions every Monday.
 */

import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const CUSTOMER = 'wisehealth'
const BASE = `https://reviews-api.konfidency.com.br/${CUSTOMER}`

const PRODUCT_SKUS = [
  { sku: '068', product: 'Crispy Wise Whey', flavor: 'Neutro' },
  { sku: '073', product: 'Crispy Wise Vegan', flavor: 'Neutro' },
  { sku: '078', product: 'Choco Crispy Wise', flavor: 'Chocolate' },
  { sku: '082', product: 'Crispy Wise Caramel', flavor: 'Caramelo' },
  { sku: '086', product: 'Crispy Wise Salty', flavor: 'Páprica Defumada' },
  { sku: '089', product: 'Crispy Wise Panettone', flavor: 'Panettone Chocolate' },
]

const MIN_STARS = 4
const MIN_TEXT_LENGTH = 15
const MAX_REVIEWS_PER_PRODUCT = 30
const MAX_FEATURED = 9

async function fetchReviews(sku, pages = 3) {
  const allReviews = []
  for (let page = 1; page <= pages; page++) {
    try {
      const url = `${BASE}/${sku}/summary/helpfulScore,desc?page=${page}&pageSize=20`
      const res = await fetch(url)
      if (!res.ok) break
      const data = await res.json()
      const block = data?.reviews?.[0]
      if (!block?.reviews?.length) break
      allReviews.push(...block.reviews)
      if (page === 1) {
        // Return aggregate from first page
        return {
          reviews: allReviews,
          aggregate: {
            rating: block.aggregateRating ?? 0,
            count: block.reviewCount ?? 0,
            recommended: Math.round(block.recommendedPercentage ?? 0),
          },
        }
      }
    } catch {
      break
    }
  }
  return { reviews: allReviews, aggregate: { rating: 0, count: 0, recommended: 0 } }
}

async function main() {
  console.log('Fetching reviews from Konfidency...')

  const aggregates = []
  const allGoodReviews = []

  for (const { sku, product, flavor } of PRODUCT_SKUS) {
    console.log(`  SKU ${sku} — ${product}...`)
    const { reviews, aggregate } = await fetchReviews(sku)

    if (aggregate.count > 0) {
      aggregates.push({ sku, product, flavor, ...aggregate })
    }

    const good = reviews
      .filter(r =>
        r.rating >= MIN_STARS &&
        (r.text?.trim().length ?? 0) >= MIN_TEXT_LENGTH
      )
      .slice(0, MAX_REVIEWS_PER_PRODUCT)
      .map(r => ({
        id: r._id,
        sku,
        product,
        flavor,
        name: r.name ?? 'Cliente verificado',
        rating: r.rating,
        text: r.text.trim(),
        date: r.created?.slice(0, 10) ?? '',
        verified: r.verified ?? false,
        hasPicture: r.hasPicture ?? false,
        pictureUrl: r.pictures?.[0]?.thumb ?? null,
        source: 'wisehealth',
      }))

    allGoodReviews.push(...good)
    console.log(`    → ${aggregate.count} reviews | ${aggregate.rating}★ | ${good.length} with text ≥${MIN_STARS}★`)
  }

  // Sort: 5★ first, then by text length (longer = more informative), then date desc
  allGoodReviews.sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating
    if (b.text.length !== a.text.length) return b.text.length - a.text.length
    return b.date.localeCompare(a.date)
  })

  // Deduplicate by id
  const seen = new Set()
  const deduped = allGoodReviews.filter(r => {
    if (seen.has(r.id)) return false
    seen.add(r.id)
    return true
  })

  // Pick featured: diverse flavors, best reviews
  const featured = []
  const usedFlavors = new Set()
  for (const r of deduped) {
    if (featured.length >= MAX_FEATURED) break
    if (!usedFlavors.has(r.flavor) || featured.length < 4) {
      featured.push(r)
      usedFlavors.add(r.flavor)
    }
  }

  // Overall aggregate
  const totalReviews = aggregates.reduce((s, a) => s + a.count, 0)
  const weightedRating = aggregates.length
    ? aggregates.reduce((s, a) => s + a.rating * a.count, 0) / totalReviews
    : 0

  const output = {
    lastFetched: new Date().toISOString(),
    aggregate: {
      rating: Math.round(weightedRating * 10) / 10,
      count: totalReviews,
      recommended: Math.round(
        aggregates.reduce((s, a) => s + a.recommended * a.count, 0) / (totalReviews || 1)
      ),
    },
    byProduct: aggregates,
    featured,
    all: deduped,
  }

  const path = join(__dirname, '..', 'data', 'reviews.json')
  writeFileSync(path, JSON.stringify(output, null, 2))
  console.log(`\n✓ Saved ${deduped.length} reviews (${featured.length} featured) to data/reviews.json`)
  console.log(`  Overall: ${output.aggregate.rating}★ across ${totalReviews} reviews`)
}

main().catch(console.error)
