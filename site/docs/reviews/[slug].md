---
aside: false
---

<script setup>
import { useData, withBase } from 'vitepress'
import { data as reviews } from '../reviews.data.js'

const { params } = useData()
const review = reviews.find(item => item.slug === params.value.slug)

function stars(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}
</script>

# {{ review.title }}

<p class="stars" :aria-label="review.rating + ' out of 5 stars'">{{ stars(review.rating) }} ({{ review.rating }}/5)</p>

<p>{{ review.body }}</p>

<a :href="withBase('/reviews/')">← Back to all reviews</a>
