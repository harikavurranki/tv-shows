<template>
  <div class="container">
    <div @click="redirect">home</div>
    <div v-if="$store.state.searchResults.length === 0">
      No results
    </div>
    <div v-else v-for="(searchShow, index) in $store.state.searchResults" :key="index">
      <img :src="searchShow.show.image.medium">
      {{searchShow.show.name}}
    </div>
  </div>
</template>
<script>
// import ShowService from '../services/shows.js'
export default {
  name: 'ShowResultsComponent',
  data () {
    return {
    }
  },
  methods: {
    redirect () {
      this.$router.push('/')
    }
  },
  created () {
    if (this.$store.state.searchResults.length === 0) {
      this.$store.dispatch('getSearchResults', { query: this.$route.query.name })
    }
  }
}
</script>
