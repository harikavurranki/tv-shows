<template>
  <div class="container pt30">
    <TopViewComponent :name="'Search results'"></TopViewComponent>
    <div v-if="searchResults.length === 0" class="oops notfound">
      <span>OOPS details not found for  <span class="backtohome"> {{$route.query.name}}</span>. Please click on <span class="backtohome" @click="redirect">Home</span></span>
    </div>
    <div class="row">
      <div v-for="(search, index) in searchResults" :key="index" class="col-lg-2 col-md-3 col-sm-3 col-6 mt20" @click="getShowId(search.show)">
        <ImageComponent :cardData="{image: search.show.image, rating: search.show.rating, showName: search.show.name}"></ImageComponent>
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
      'getSearchResults', 'getShowId'
    ]),
    redirect () {
      this.$router.push('/')
    }
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
