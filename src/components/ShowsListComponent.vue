<template>
  <div class="container pt30">
    <div class="row">
      <div class="col-md-10 col-sm-6 col-xs-6 textleft">
        <span class="genrename">{{$store.state.showName}}</span>
      </div>
      <div class="col-md-2 col-sm-6 col-xs-6">
        <div @click="redirect"><span class="backtohome">Back to home</span></div>
      </div>
    </div>
    <div class="row">
      <div v-for="(show, index) in $store.state.showDetails[$store.state.showName].value" :key="index" class="col-md-2 col-sm-3 col-xs-3 mt20">
        <img :src="show.image.medium" v-if="show.image" class="showimageheight">
        <div class="showname">{{show.name}}</div>
        <div><i class="star"></i><span class="fs12">{{show.rating.average}}</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShowListComponent',
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
  }
}
</script>
<style>
</style>
