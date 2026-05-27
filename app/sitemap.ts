import { MetadataRoute } from 'next'
import freshness from '@/data/freshness.json'
import { PRODUCTS } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://snackproteico.com.br'
  const lastMod = new Date(freshness.lastUpdated)

  return [
    { url: base, lastModified: lastMod, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/avaliacoes`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.8 },
    ...PRODUCTS.map(p => ({
      url: `${base}/${p.slug}`,
      lastModified: lastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
