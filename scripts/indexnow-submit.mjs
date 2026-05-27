// Submit all URLs to IndexNow (Bing + DuckDuckGo + Yandex)
// Run: node scripts/indexnow-submit.mjs

const KEY = '717040e594524d54901d482dc0735b97'
const HOST = 'snackproteico.com.br'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`

const URLS = [
  '/',
  '/avaliacoes',
  '/comparativo-snacks-proteicos-brasil',
  '/snack-proteico-vegano',
  '/snack-proteico-sem-gluten',
  '/snack-proteico-sem-lactose',
  '/snack-proteico-emagrecer',
  '/snack-proteico-pos-treino',
  '/snack-proteico-salgado',
  '/proteina-de-ervilha',
  '/proteina-vegetal-fontes',
  '/o-que-e-snack-proteico',
  '/quantas-gramas-proteina-por-dia',
  '/crispy-wise-funciona',
  '/receitas-com-snack-proteico',
  '/crispy-wise-vegan',
  '/crispy-wise-whey',
  '/choco-crispy-wise',
  '/crispy-wise-caramel',
  '/crispy-wise-salty',
  '/crispy-wise-panettone',
].map(path => `https://${HOST}${path}`)

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URLS,
})

console.log(`Submitting ${URLS.length} URLs to IndexNow...`)

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body,
})

console.log(`Status: ${res.status}`)

if (res.status === 200) {
  console.log('✅ All URLs submitted successfully.')
} else if (res.status === 202) {
  console.log('✅ Accepted — URLs queued for processing.')
} else {
  const text = await res.text()
  console.log('Response:', text)
}
