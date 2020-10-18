<template>
  <div class="bg">
    <div class="container pt30">
      <div class="row">
        <div class="col-md-10 col-sm-6 col-xs-6 textleft">
          <span class="genrename">Search results</span>
        </div>
        <div class="col-md-2 col-sm-6 col-xs-6">
          <div @click="redirect"><span class="backtohome">Back to home</span></div>
        </div>
      </div>
      <div v-if="$store.state.searchResults.length === 0" class="oops">
        OOPS details not found for <span class="backtohome">{{$route.query.name}}</span>. Please click on <span class="backtohome" @click="redirect">Home</span>
      </div>
      <div class="row">
        <div v-for="(search, index) in $store.state.searchResults" :key="index" class="col-md-2 col-sm-3 col-xs-3 mt20">
          <img :src="search.show.image.medium" v-if="search.show.image" class="showimageheight">
          <div class="showname">{{search.show.name}}</div>
          <div><i class="star"></i><span class="fs12">{{search.show.rating.average}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
<style>
  .showimageheight {
    height: 200px !important;
    width: 100%;
    cursor: pointer;
  }
  .showname {
    font-size: 15px;
    margin-top: 10px;
  }
  .star {
  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: .9em;
  margin-right: .9em;
  margin-bottom: 1.2em;
  border-right:  .3em solid transparent;
  border-bottom: .7em  solid #FC0;
  border-left:   .3em solid transparent;
  /* Controlls the size of the stars. */
  font-size: 6px;
}
 .star:before, .star:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: .6em;
    left: -1em;
    border-right:  1em solid transparent;
    border-bottom: .7em  solid #FC0;
    border-left:   1em solid transparent;
    transform: rotate(-35deg);
  }
  .star:after {
    transform: rotate(35deg);
  }
  .bg {
    background: #0000ff1a;
  }
  .mt20 {
    margin-top: 20px;
  }
  .backtohome {
    color: #007bff;
    border-bottom: 1px solid #007bff;
    cursor: pointer;
  }
  .genrename {
    border-bottom: 3px solid #1834f7;
    font-weight: bold;
    padding-bottom: 4px;
  }
  .textleft {
    text-align: left;
  }
  .pt30 {
    padding-top: 30px;
  }
  .oops {
    font-size: 30px;
    height: 30%;
    margin-top: 19%;
    margin-bottom: 20%;
  }
</style>
