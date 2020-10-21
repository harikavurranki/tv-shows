<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-6 textleft mb20"><span class="genrename">{{eachShowDetails.label}}</span></div>
      <div class="col-md-6 col-sm-6 col-6 textright mb20" v-if="eachShowDetails.value.length>6" @click="allShows"><span class="backtohome">Explore More</span></div>
    </div>
    <div :id="genreName" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(eachGenre, index) in count" :key="index" :class="eachGenre>1?'carousel-item mb30': 'carousel-item mb30 active'">
          <div class="row">
            <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb20" v-for="show in eachShowDetails.value.slice(index*6, index*6+6)" :key="show.id" @click="getShowId(show)">
              <div :class="!show.image?'heigth200':''">
                <img :src="show.image?show.image.medium:''" class="showimageheight" alt="Image is not available">
              </div>
              <div class="row mt10">
                <div class="showname col-lg-7 col-md-7 col-sm-8 col-7 textleft" :title="show.name">{{show.name}}</div>
                <div class="fs12 col-lg-5 col-md-5 col-sm-4 col-5 textright">
                  <i class="star"></i>
                  <span v-if="show.rating.average">{{show.rating.average}}</span>
                  <span v-else>N/A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev showcarousel leftcarousel" :href="`#${genreName}`" role="button" data-slide="prev" v-if="eachShowDetails.value.length>6">
        <span class="carousel-control-prev-icon carouselicon" aria-hidden="
        true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next showcarousel rightcarousel" :href="`#${genreName}`" role="button" data-slide="next" v-if="eachShowDetails.value.length>6">
        <span class="carousel-control-next-icon carouselicon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['eachShowDetails', 'genreName'],
  name: 'ShowsComponent',
  data () {
    return {
      count: null
    }
  },
  methods: {
    ...mapActions([
      'setShowName', 'getShowId'
    ]),
    allShows () {
      this.setShowName(this.genreName)
      this.$router.push('/allshows')
    }
  },
  created () {
    if (parseInt((this.eachShowDetails.value.length / 6).toFixed()) > 5) {
      this.count = 5
    } else {
      this.count = parseInt((this.eachShowDetails.value.length / 6).toFixed()) === 0 ? 1 : parseInt((this.eachShowDetails.value.length / 6).toFixed())
    }
  }
}
</script>
<style>
.showcarousel {
  background: gray;
  height: 30px;
  top: 80px !important;
  width: 32px !important;
  border-radius: 5px;
}
.leftcarousel {
  left: -37px !important;
}
.rightcarousel {
  right: -37px !important;
}
.carouselicon {
  width: 37% !important;
}
</style>
