<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6">
        <img :src="$store.state.showData.image.medium">
      </div>
      <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6">
        <div>{{$store.state.showData.name}}</div>
        <div>{{$store.state.showData.language}}</div>
        <div>{{$store.state.showData.genres}}</div>
        <div> <span class="glyphicon glyphicon-star"></span>{{$store.state.showData.rating.average}}</div>
        <div>{{$store.state.showData.summary}}</div>
        <div>{{$store.state.showData.id}}</div>
      </div>
    </div>
    <div class="row">
      <div>
        <b-tabs content-class="mt-3">
          <b-tab v-for="(season, index) in showSeasonDetails" :key="index" :title="'Season' + season.number" :active="season.number === 1" @click="getEpisodesData(season)">
            <div v-for="(episode, index) in seasonEpisodeDetails" :key="index">
              <img :src="episode.image.medium">
              <div>{{episode.name}}</div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
    {{$store.state.showData}}
  </div>
</template>
<script>
import ShowService from '../services/shows.js'
export default {
  name: 'ShowDetailsComponent',
  data () {
    return {
      showSeasonDetails: [],
      seasonEpisodeDetails: []
    }
  },
  methods: {
    async getSeasonDetails () {
      const seasonData = await ShowService.getShowSeasons()
      console.log(seasonData)
      this.showSeasonDetails = seasonData.data
      this.getEpisodesData(this.showSeasonDetails[0])
      console.log(this.showSeasonDetails)
      debugger
    },
    async getEpisodesData (data) {
      const episodeData = await ShowService.getEpisodesDataBySeasonId(data.id)
      this.seasonEpisodeDetails = episodeData.data
      console.log(episodeData)
      debugger
    }
  },
  created () {
    this.getSeasonDetails()
    // console.log(this.eachShowDetails, this.showsLength)
    // debugger
  }
}
</script>
