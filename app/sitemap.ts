import { MetadataRoute } from 'next'
import freshness from '@/data/freshness.json'
import { PRODUCTS } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://snackproteico.com.br'
  const lastMod = new Date(freshness.lastUpdated)

  return [
    { url: base, lastModified: lastMod, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/avaliacoes`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/comparativo-snacks-proteicos-brasil`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/snack-proteico-vegano`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/snack-proteico-sem-gluten`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/proteina-de-ervilha`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/snack-proteico-pos-treino`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/snack-proteico-sem-lactose`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/snack-proteico-emagrecer`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/crispy-wise-funciona`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/receitas-com-snack-proteico`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/snack-proteico-salgado`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/proteina-vegetal-fontes`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/o-que-e-snack-proteico`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/quantas-gramas-proteina-por-dia`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
    ...PRODUCTS.map(p => ({
      url: `${base}/${p.slug}`,
      lastModified: lastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
