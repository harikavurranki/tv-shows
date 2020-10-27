<template>
  <div class="container pt-30">
    <TopViewComponent :name="showName"></TopViewComponent>
    <div class="row">
      <div v-for="(show, index) in showDetails[showName].value" :key="index" class="col-lg-2 col-md-3 col-sm-3 col-6 mt-20" @click="getShowId(show)">
        <ImageComponent :cardData="{image: show.image, rating: show.rating, showName: show.name}"></ImageComponent>
      </div>
    </div>
  </div>
</template>
<script>
import TopViewComponent from '../components/TopViewComponent'
import ImageComponent from '../components/ImageComponent.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'AllShows',
  components: { ImageComponent, TopViewComponent },
  data () {
    return {
    }
  },
  computed: { ...mapState(['showName', 'showDetails']) },
  methods: {
    ...mapActions([
      'getShowId'
    ])
  },
  created () {
  }
}
</script>
<style>
</style>
