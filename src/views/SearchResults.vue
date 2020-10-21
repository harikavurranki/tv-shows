<template>
  <div class="container pt30">
    <div class="row">
      <div class="col-lg-10 col-md-9 col-sm-9 col-6 textleft">
        <span class="genrename">Search results</span>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-3 col-6 textright">
        <div @click="redirect"><span class="backtohome">Back to home</span></div>
      </div>
    </div>
    <div v-if="searchResults.length === 0" class="oops notfound">
      <span>OOPS details not found for  <span class="backtohome"> {{$route.query.name}}</span>. Please click on <span class="backtohome" @click="redirect">Home</span></span>
    </div>
    <div class="row">
      <div v-for="(search, index) in searchResults" :key="index" class="col-lg-2 col-md-3 col-sm-3 col-6 mt20" @click="getShowId(search.show)">
        <div :class="!search.show.image?'heigth200':''"><img :src="search.show.image?search.show.image.medium:''" class="showimageheight" alt="Image is not available"></div>
        <div class="row mt10">
          <div class="showname col-lg-7 col-md-7 col-sm-8 col-7 textleft" :title="search.show.name">{{search.show.name}}</div>
          <div class="fs12 col-lg-5 col-md-5 col-sm-4 col-5 textright">
            <i class="star"></i>
            <span v-if="search.show.rating.average">{{search.show.rating.average}}</span>
            <span v-else>N/A</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'SearchResultsComponent',
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
