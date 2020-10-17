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
      <div class="col-md-9 col-sm-6 col-xs-6 episode">
        Episodes
      </div>
      <div class="col-md-3 col-sm-6 col-xs-6">
       <!--  v-model="$store.state.dogBreedName" @change="searchDogBreed()"
        selectbreed -->
        <select class="form-control" @change="filterSeasonId(seasonId)" v-model="seasonId">
          <option v-for="(season, index) in showSeasonDetails" :key="index" :selected="season.number === 1" :value="'Season '+season.number">Season {{season.number}}</option>
        </select>
       <!--  <b-tabs content-class="mt-3">
          <b-tab v-for="(season, index) in showSeasonDetails" :key="index" :title="'Season' + season.number" :active="season.number === 1" @click="getEpisodesData(season)">
            <div v-for="(episode, index) in seasonEpisodeDetails" :key="index">
              <img :src="episode.image.medium">
              <div>{{episode.name}}</div>
            </div>
          </b-tab>
        </b-tabs> -->
      </div>
    </div>
    <div class="row eachepisode" v-for="(episode, index) in seasonEpisodeDetails" :key="index">
      <div class="col-md-3 col-sm-3 col-xs-3">
        <img :src="episode.image.medium">
      </div>
      <div class="col-md-9 col-sm-9 col-xs-9">
        <div class="episodename">{{episode.name}}</div>
        <div v-html="episode.summary"></div>
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
      seasonId: null
    }
  },
  methods: {
    async getSeasonDetails () {
      const seasonData = await ShowService.getShowSeasons()
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
    }
  },
  created () {
    this.getSeasonDetails()
  }
}
</script>
<style>
  .episode {
    text-align: left;
    font-weight: bold;
    font-size: 30px;
  }
  .eachepisode {
    border-bottom: 1px solid #80808047;
    margin-top: 30px;
  }
  .eachepisode img {
    margin-bottom: 30px;
  }
  .episodename {
    text-align: left;
    font-size: 20px;
    font-weight: bold;
  }
</style>
