<template>
  <div class="container pt50">
    <div @click="redirect" class="textright backshowdetails"><span class="backtohome">Back to home</span></div>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 col-12 col-lg-3">
        <img :src="$store.state.showData.image.medium">
      </div>
      <div class="col-lg-9 col-md-8 col-sm-6 col-12 col-lg-9 textleft">
        <div class="shownamedata">{{$store.state.showData.name}}</div>
        <div v-html="$store.state.showData.summary" class="fs13"></div>
        <div class="fs14">
          <span class="showlabel">Genres:</span>
          <span v-for="(genre, index) in $store.state.showData.genres" :key="index">
            {{genre}}
            <span v-if="index !== $store.state.showData.genres.length-1">|</span>
          </span>
        </div>
        <div class="fs14">
          <span class="showlabel">Language:</span>
          {{$store.state.showData.language}}
        </div>
        <div class="fs14">
          <span class="showlabel">Rating:</span>
          {{$store.state.showData.rating.average}}
        </div>
      </div>
        <!-- <div class="col-md-3 col-sm-6 col-xs-6 col-lg-4">
          <div v-for="(cast, index) in showCast" :key="index">
            <img :src="cast.person.image.medium">
            <div>{{cast.person.name}}</div>
            <div>{{cast.character.name}}</div>
          </div>
        </div> -->
    </div>
    <div class="row mt50">
      <div class="col-md-9 col-sm-6 col-5 episode">
        Episodes
      </div>
      <div class="col-md-3 col-sm-6 col-7">
        <select class="form-control" @change="filterSeasonId(seasonId)" v-model="seasonId">
          <option v-for="(season, index) in showSeasonDetails" :key="index" :selected="season.number === 1" :value="'Season '+season.number">Season {{season.number}}</option>
        </select>
      </div>
    </div>
    <div class="row eachepisode" v-for="(episode, index) in seasonEpisodeDetails" :key="index">
      <div class="col-md-3 col-sm-3 col-12">
        <img v-if="episode.image" :src="episode.image.medium">
        <span v-else>Image is not available</span>
      </div>
      <div class="col-md-9 col-sm-9 col-12">
        <div class="episodename">{{episode.name}}</div>
        <div v-html="episode.summary" class="episodesummary fs13"></div>
      </div>
    </div>
  </div>
</template>
<script>
import ShowService from '../services/shows.js'
export default {
  name: 'ShowDetailsComponent',
  data () {
    return {
      showSeasonDetails: [],
      seasonEpisodeDetails: [],
      seasonId: null,
      showCast: []
    }
  },
  methods: {
    redirect () {
      this.$router.push('/')
    },
    async getSeasonDetails (showId) {
      const seasonData = await ShowService.getShowSeasons(showId)
      this.showSeasonDetails = seasonData.data
      this.filterSeasonId('Season ' + this.showSeasonDetails[0].number)
    },
    filterSeasonId (seasonNumber) {
      this.seasonId = seasonNumber
      const seasonData = seasonNumber.split('Season ')
      const season = this.showSeasonDetails.filter(season => season.number === parseInt(seasonData[1]))
      this.getEpisodesData(season[0].id)
    },
    async getEpisodesData (seasonNumber) {
      const episodeData = await ShowService.getEpisodesDataBySeasonId(seasonNumber)
      this.seasonEpisodeDetails = episodeData.data
    },
    async getShowCast (showId) {
      const showCast = await ShowService.getShowCastDetails(showId)
      this.showCast = showCast.data
    }
  },
  created () {
    this.getSeasonDetails(this.$store.state.showData.id)
    this.getShowCast(this.$store.state.showData.id)
  }
}
</script>
<style>
</style>
