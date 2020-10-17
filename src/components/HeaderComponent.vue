<template>
  <div>
    <!-- @keyup -->
    <!-- @keyup.enter.native -->
   <b-form-input v-model="query" placeholder="Search shows"  @keyup.enter.native="getDatabySearch"></b-form-input>
  </div>
</template>
<script>
// import ShowService from '../services/shows.js'
export default {
  name: 'HeaderComponent',
  data () {
    return {
      query: ''
    }
  },
  methods: {
    getDatabySearch () {
      this.$router.push({ path: '/search', query: { name: this.query } })
    }
  },
  created () {
  }
}
</script>
