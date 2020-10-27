<template>
  <div class="container pt-30">
    <TopViewComponent :name="'Search results'"></TopViewComponent>
    <div v-if="searchResults.length === 0" class="oops not-found">
      <span>OOPS details not found for  <span class="search-word-highlight"> {{$route.query.name}}</span></span>
    </div>
    <div class="row">
      <div v-for="(search, index) in searchResults" :key="index" class="col-lg-2 col-md-3 col-sm-3 col-6 mt-20">
        <ImageComponent :cardData="{image: search.show.image, rating: search.show.rating, showName: search.show.name, id:search.show.id}"></ImageComponent>
      </div>
    </div>
  </div>
</template>
<script>
import TopViewComponent from '../components/TopViewComponent.vue'
import ImageComponent from '../components/ImageComponent.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SearchResultsComponent',
  components: { ImageComponent, TopViewComponent },
  data () {
    return {
    }
  },
  computed: { ...mapState(['searchResults']) },
  methods: {
    ...mapActions([
      'getSearchResults'
    ])
  },
  created () {
    if (this.searchResults.length === 0) {
      this.getSearchResults({ query: this.$route.query.name })
    }
  }
}
</script>
<style>
</style>
