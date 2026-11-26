import { fetchReviews } from '../fetch-reviews.mjs'

// Tells VitePress which review pages to create: one page per slug
export default {
  async paths() {
    const reviews = await fetchReviews()
    return reviews.map(review => ({
      params: { slug: review.slug, title: review.title }
    }))
  }
}
