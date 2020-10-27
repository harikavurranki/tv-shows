<template>
  <div class="container sections">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-6 text-left mb-20"><span class="genre-name">{{eachShowDetails.label}}</span></div>
      <div class="col-md-6 col-sm-6 col-6 text-right mb-20" v-if="eachShowDetails.value.length>6" @click="allShows"><span class="back-to-home">Explore More</span></div>
    </div>
    <div :id="genreName" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(eachGenre, index) in count" :key="index" :class="eachGenre>1?'carousel-item mb-30': 'carousel-item mb-30 active'">
          <div class="row">
            <div class="col-lg-2 col-md-4 col-sm-4 col-6 mb-20" v-for="show in eachShowDetails.value.slice(index*6, index*6+6)" :key="show.id">
              <ImageComponent :cardData="{image: show.image, rating: show.rating, showName: show.name, id: show.id}"></ImageComponent>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev show-carousel left-carousel" :href="`#${genreName}`" role="button" data-slide="prev" v-if="eachShowDetails.value.length>6">
        <span class="carousel-control-prev-icon carousel-icon" aria-hidden="
        true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next show-carousel right-carousel" :href="`#${genreName}`" role="button" data-slide="next" v-if="eachShowDetails.value.length>6">
        <span class="carousel-control-next-icon carousel-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
import ImageComponent from './ImageComponent.vue'
import { mapActions } from 'vuex'
export default {
  props: ['eachShowDetails', 'genreName'],
  components: { ImageComponent },
  name: 'ShowsComponent',
  data () {
    return {
      count: null
    }
  },
  methods: {
    ...mapActions([
      'setShowName'
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
.show-carousel {
  background: #1959a1;
  height: 30px;
  top: 80px !important;
  width: 32px !important;
  border-radius: 15px;
  opacity: 1 !important;
}
.left-carousel {
  left: -37px !important;
}
.right-carousel {
  right: -37px !important;
}
.carousel-icon {
  width: 37% !important;
}
</style>
