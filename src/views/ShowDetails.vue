<template>
  <div class="container pt-50">
    <div @click="redirect" class="text-right back-show-details"><span class="back-to-home">Back to home</span></div>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <img :src="showData.image.medium">
      </div>
      <div class="col-lg-9 col-md-8 col-sm-6 col-12 text-left">
        <div class="show-name-data">{{showData.name}}</div>
        <div v-html="showData.summary" class="description"></div>
        <div class="fs-14">
          <span class="show-label">Genres:</span>
          <span v-for="(genre, index) in showData.genres" :key="index">
            {{genre}}
            <span v-if="index !== showData.genres.length-1">|</span>
          </span>
        </div>
        <div class="fs-14 mt-10">
          <span class="show-label">Language:</span>
          {{showData.language}}
        </div>
        <div class="fs-14 mt-10">
          <span class="show-label">Rating:</span>
          {{showData.rating.average}}
        </div>
      </div>
    </div>
    <div class="row mt-50">
      <div class="col-md-9 col-sm-6 col-5 episode">
        Episodes
      </div>
      <div class="col-md-3 col-sm-6 col-7">
        <select class="form-control" @change="filterSeasonId(seasonId)" v-model="seasonId">
          <option v-for="(season, index) in showSeasonDetails" :key="index" :selected="season.number === 1" :value="`Season${season.number}`">Season {{season.number}}</option>
        </select>
      </div>
    </div>
    <div class="row each-episode" v-for="(episode, index) in seasonEpisodeDetails" :key="index">
      <div class="col-lg-4 col-md-6 col-sm-4 col-12 text-left episode-image-center">
        <img :src="episode.image?episode.image.medium:''" class="episode-image" alt="Image is not available">
      </div>
      <div class="col-lg-8 col-md-6 col-sm-8 col-12">
        <div class="episode-name">{{episode.name}}</div>
        <div v-html="episode.summary" class="text-left description"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ShowDetailsComponent',
  data () {
    return {
      seasonId: 'Season1'
    }
  },
  computed: { ...mapState(['showData', 'seasonEpisodeDetails', 'showSeasonDetails']) },
  methods: {
    ...mapActions([
      'getEpisodesData',
      'getSeasonDetails'
    ]),
    redirect () {
      this.$router.push('/')
    },
    async getSeasons (showId) {
      await this.getSeasonDetails(showId)
      this.filterSeasonId('Season1')
    },
    filterSeasonId (seasonNumber) {
      const seasonData = seasonNumber.split('Season')
      const season = this.showSeasonDetails.filter(season => season.number === parseInt(seasonData[1]))
      this.getEpisodesData(season[0].id)
    }
  },
  created () {
    this.getSeasons(this.showData.id)
  }
}
</script>
<style>
</style>
