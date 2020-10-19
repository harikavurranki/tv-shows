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
    <div v-if="searchResults.length === 0" class="oops">
      OOPS details not found for <span class="backtohome">{{$route.query.name}}</span>. Please click on <span class="backtohome" @click="redirect">Home</span>
    </div>
    <div class="row">
      <div v-for="(search, index) in searchResults" :key="index" class="col-md-2 col-sm-3 col-6 mt20">
        <div :class="!search.show.image?'heigth200':''"><img :src="search.show.image?search.show.image.medium:''" class="showimageheight" alt="Image is not available"></div>
        <div class="showname" :title="search.show.name.length>19?search.show.name:''">{{search.show.name}}</div>
        <div class="fs12">
          <i class="star"></i>
          <span v-if="search.show.rating.average">{{search.show.rating.average}}</span>
          <span v-else>N/A</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ShowResultsComponent',
  data () {
    return {
    }
  },
  computed: { ...mapState(['searchResults']) },
  methods: {
    ...mapActions([
      'getSearchResults'
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
