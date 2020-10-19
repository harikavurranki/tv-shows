<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-6 textleft mb20"><span class="genrename">{{eachShowDetails.label}}</span></div>
      <div class="col-md-6 col-sm-6 col-6 textright mb20" v-if="eachShowDetails.value.length>6" @click="allShows"><span class="backtohome">Explore More</span></div>
    </div>
    <div :id="eachShowDetails.label" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(eachGenre, index) in count" :key="index" :class="eachGenre>1?'carousel-item mb30': 'carousel-item mb30 active'">
          <div class="row">
            <div class="col-lg-2 col-md
            eachShowDetails.value.lengththis.-2 col-sm-4 col-6 mb20" v-for="show in eachShowDetails.value.slice(index*6, index*6+6)" :key="show.id" @click="getShowId(show)">
              <img :src="show.image.medium" class="showimageheight">
              <div class="showname">{{show.name}}</div>
              <div><i class="star"></i><span class="fs12">{{show.rating.average}}</span></div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev showcarousel leftcarousel" :href="'#' + eachShowDetails.label" role="button" data-slide="prev" v-if="eachShowDetails.value.length>6">
        <span class="carousel-control-prev-icon carouselicon" aria-hidden="
        eachShowDetails.value.lengththis.true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next showcarousel rightcarousel" :href="'#' + eachShowDetails.label" role="button" data-slide="next" v-if="eachShowDetails.value.length>6">
        <span class="carousel-control-next-icon carouselicon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['eachShowDetails', 'showsLength'],
  name: 'ShowsComponent',
  data () {
    return {
      count: null
    }
  },
  methods: {
    getShowId (show) {
      this.$store.dispatch('setShowData', show)
      this.$router.push('/showdetails')
    },
    allShows () {
      this.$store.dispatch('setShowName', this.eachShowDetails.label)
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
