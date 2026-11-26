---
title: All Reviews
aside: false
---

<script setup>
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { data as reviews } from '../reviews.data.js'

const query = ref('')

const matches = computed(() => {
  const search = query.value.trim().toLowerCase()
  return reviews.filter(review =>
    review.title.toLowerCase().includes(search) ||
    review.body.toLowerCase().includes(search)
  )
})

function stars(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}
</script>

# All Reviews

<input v-model="query" class="search-box" type="search" placeholder="Search by title or keyword, e.g. horror" aria-label="Search reviews by title or keyword">

<p>Showing {{ matches.length }} of {{ reviews.length }} reviews</p>

<p v-if="matches.length === 0">No reviews match your search.</p>

<ul v-else class="review-list">
  <li v-for="review in matches" :key="review.slug">
    <a class="review-card" :href="withBase('/reviews/' + review.slug + '.html')">
      <h3>{{ review.title }}</h3>
      <span class="stars" :aria-label="review.rating + ' out of 5 stars'">{{ stars(review.rating) }}</span>
    </a>
  </li>
</ul>
