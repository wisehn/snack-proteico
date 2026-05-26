import { MetadataRoute } from 'next'
import freshness from '@/data/freshness.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://snackproteico.com.br'
  const lastMod = new Date(freshness.lastUpdated)

  return [
    {
      url: base,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/avaliacoes`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
