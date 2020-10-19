<template>
  <div class="pt30">
    <div v-for="(eachShow, index) in Object.keys(showDetails)" :key="index">
      <ShowsComponent :eachShowDetails='showDetails[eachShow]' :showsLength="showDetails[eachShow].value.length"></ShowsComponent>
    </div>
  </div>
</template>
<script>
import ShowsComponent from '../components/ShowsComponent.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Shows',
  components: { ShowsComponent },
  data () {
    return {
    }
  },
  computed: { ...mapState(['showDetails']) },
  methods: {
    ...mapActions([
      'setShowDetails',
      'getShowsList'
    ])
  },
  created () {
    this.getShowsList()
  }
}
</script>
<style>
</style>
