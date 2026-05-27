import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/keystatic', '/api/keystatic'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Google-Extended'],
        allow: '/',
        disallow: ['/keystatic', '/api/keystatic'],
      },
    ],
    sitemap: 'https://snackproteico.com.br/sitemap.xml',
    host: 'https://snackproteico.com.br',
  }
}
