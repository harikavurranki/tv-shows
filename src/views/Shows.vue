<template>
  <div class="home">
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
      this.sample = showdata.data
      var datavalue = {}
      for (let i = 0; i < showdata.data.length; i++) {
        for (let j = 0; j < showdata.data[i].genres.length; j++) {
          if (datavalue[showdata.data[i].genres[j]]) {
            var valuetwo = showdata.data[i].genres[j]
            datavalue[valuetwo] = { label: valuetwo, value: [...datavalue[valuetwo].value, showdata.data[i]] }
          } else {
            var valueone = showdata.data[i].genres[j]
            datavalue[valueone] = { label: valueone, value: [showdata.data[i]] }
          }
        }
      }
      this.showDetails = datavalue
    }
  },
  created () {
    this.getShowsList()
  }
}
</script>
