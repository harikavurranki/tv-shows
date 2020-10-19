<template>
  <div class="container pt30">
    <div class="row">
      <div class="col-lg-10 col-md-9 col-sm-9 col-6 textleft">
        <span class="genrename">{{showName}}</span>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-3 col-6 textright">
        <div @click="redirect"><span class="backtohome">Back to home</span></div>
      </div>
    </div>
    <div class="row">
      <div v-for="(show, index) in showDetails[showName].value" :key="index" class="col-md-2 col-sm-3 col-6 mt20">
        <div :class="!show.image?'heigth200':''">
          <img :src="show.image?show.image.medium:''" class="showimageheight" alt="Image is not available">
        </div>
        <div class="showname" :title="show.name.length>19?show.name:''">{{show.name}}</div>
        <div class="fs12">
          <i class="star"></i>
          <span v-if="show.rating.average">{{show.rating.average}}</span>
          <span v-else>N/A</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ShowListComponent',
  data () {
    return {
    }
  },
  computed: { ...mapState(['showName', 'showDetails']) },
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
