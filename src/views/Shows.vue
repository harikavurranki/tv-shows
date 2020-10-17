<template>
  <div class="showslist">
    <div v-for="(eachShow, index) in Object.keys(showDetails)" :key="index">
      <ShowsComponent :eachShowDetails='showDetails[eachShow]' :showsLength="showDetails[eachShow].value.length"></ShowsComponent>
    </div>
  </div>
</template>
<script>
import ShowService from '../services/shows.js'
import ShowsComponent from '../components/ShowsComponent.vue'
export default {
  name: 'Shows',
  components: { ShowsComponent },
  data () {
    return {
      showDetails: {}
    }
  },
  methods: {
    async getShowsList () {
      const showdata = await ShowService.getShowDetails()
      var showsByGenre = {}
      for (let i = 0; i < showdata.data.length; i++) {
        for (let j = 0; j < showdata.data[i].genres.length; j++) {
          if (showsByGenre[showdata.data[i].genres[j]]) {
            showsByGenre[showdata.data[i].genres[j]] = { label: showdata.data[i].genres[j], value: [...showsByGenre[showdata.data[i].genres[j]].value, showdata.data[i]] }
          } else {
            showsByGenre[showdata.data[i].genres[j]] = { label: showdata.data[i].genres[j], value: [showdata.data[i]] }
          }
        }
      }
      this.showDetails = showsByGenre
    }
  },
  created () {
    this.getShowsList()
  }
}
</script>
<style>
  .showslist {
    background: #0000ff1a;
  }
</style>
