<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-3 col-xs-3 textleft mt20 mb20"><span class="genrename">{{eachShowDetails.label}}</span></div>
      <div class="col-md-6 col-sm-3 col-xs-3 textright mt20 mb20" v-if="eachShowDetails.value.length>5" @click="allShows"><span class="explore">Explore More</span></div>
    </div>
    <div :id="eachShowDetails.label" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(eachGenre, index) in 5" :key="index" :class="eachGenre>1?'carousel-item mb30': 'carousel-item mb30 active'">
          <div class="row">
            <div class="col-md-2 col-sm-6 col-xs-12" v-for="show in eachShowDetails.value.slice(index*6, index*6+6)" :key="show.id" @click="getShowId(show)">
              <img :src="show.image.medium" class="showimageheight">
              <div class="showname">{{show.name}}</div>
              <div><i class="star"></i><span class="fs12">{{show.rating.average}}</span></div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev showcarousel leftcarousel" :href="'#' + eachShowDetails.label" role="button" data-slide="prev" v-if="eachShowDetails.value.length>5">
        <span class="carousel-control-prev-icon carouselicon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next showcarousel rightcarousel" :href="'#' + eachShowDetails.label" role="button" data-slide="next" v-if="eachShowDetails.value.length>5">
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
    }
  },
  methods: {
    getShowId (show) {
      this.$store.commit('SET_SHOWDATA', show)
      this.$router.push('/showdetails')
    },
    allShows () {
      this.$store.commit('SET_SHOWNAME', this.eachShowDetails.label)
      this.$router.push('/allshows')
    }
  },
  created () {
    this.eachShowDetails.value.sort((firstShow, secondShow) => (secondShow.rating.average - firstShow.rating.average))
  }
}
</script>
<style>
  .showimageheight {
    height: 200px !important;
    width: 100%;
    cursor: pointer;
  }
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
  .textright {
    text-align: right;
  }
  .textleft {
    text-align: left;
  }
  .mt20 {
    margin-top: 20px;
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .genrename {
    border-bottom: 3px solid #1834f7;
    font-weight: bold;
    padding-bottom: 4px;
  }
  .mb30 {
    margin-bottom: 30px;
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
  .fs12 {
    font-size: 12px;
  }
  .explore {
    color: #007bff;
    border-bottom: 1px solid #007bff;
    cursor: pointer;
  }
</style>
