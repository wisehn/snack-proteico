// JSON-LD renderizado no servidor (aparece no HTML bruto).
// Crítico p/ AEO: crawlers de IA (ChatGPT, Perplexity, Claude) não executam JS,
// então o schema PRECISA estar no HTML inicial — não pode ser injetado via useEffect.
//
// Hardening XSS: o único vetor em JSON-LD é uma string contendo "</script>" que
// fecharia a tag. Escapamos "<" para < (continua JSON válido), eliminando o
// breakout mesmo que algum dado futuro venha de fonte menos confiável.
export default function SchemaInjector({ schema }: { schema: object }) {
  const json = JSON.stringify(schema).replace(/</g, '\\u003c')
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
