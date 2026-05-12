import axios from 'axios'

const API_BASE = 'https://cataas.com'

export async function fetchCats(count = 12) {
  // Fetch metadata for cats and build image URLs
  try {
    const res = await axios.get(`${API_BASE}/api/cats?limit=${count}`)
    const cats = res.data || []
    return cats.map((c) => ({
      id: c.id,
      tags: c.tags || [],
      url: `${API_BASE}/cat/${c.id}`,
    }))
  } catch (err) {
    console.error('fetchCats error', err)
    // Fallback: generate generic image urls
    return Array.from({ length: count }).map((_, i) => ({
      id: `fallback-${i}`,
      tags: [],
      url: `${API_BASE}/cat?random=${i}`,
    }))
  }
}

export default {
  fetchCats,
}
