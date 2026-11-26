// Gets every published review from the Strapi REST API.
// It runs when the site is built, not in the visitor's browser.
export async function fetchReviews() {
  const origin = process.env.STRAPI_URL || 'http://localhost:1337'
  const reviews = []
  const url = new URL('/api/reviews', origin)
  url.searchParams.set('sort', 'title:asc')
  let page = 1
  let pageCount = 1

  do {
    url.searchParams.set('pagination[page]', String(page))
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Strapi returned ${response.status} for ${url}`)
    }

    const { data, meta } = await response.json()
    reviews.push(...data.map(({ title, slug, rating, body }) => ({ title, slug, rating, body })))
    pageCount = meta.pagination.pageCount
    page += 1
  } while (page <= pageCount)

  return reviews
}
