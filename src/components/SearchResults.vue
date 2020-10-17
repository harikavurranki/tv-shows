<template>
  <div class="container">
    <div v-if="searchResults.length === 0">
      No results
    </div>
    <div v-else v-for="(searchShow, index) in searchResults" :key="index">
      <img :src="searchShow.show.image.medium">
      {{searchShow.show.name}}
    </div>
  </div>
</template>
<script>
import ShowService from '../services/shows.js'
export default {
  name: 'ShowResultsComponent',
  data () {
    return {
      searchResults: []
    }
  },
  methods: {
    async getSearchResults () {
      const searchData = await ShowService.getSearchResultsByQuery(this.$route.query.name)
      console.log(searchData)
      this.searchResults = searchData.data
      debugger
      console.log(this.searchResults)
      debugger
    }
  },
  created () {
    this.getSearchResults()
  }
}
</script>
