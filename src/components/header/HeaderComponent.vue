<template>
  <div class="header-bg pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-4 col-sm-6 col-12 header-title font-bold">
          Shows Hub
        </div>
        <div class="col-lg-3 col-md-8 col-sm-6 col-12 text-right search mt-10">
          <input v-model="query" placeholder="Search shows"  @keyup.enter="getDataBySearch">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'HeaderComponent',
  data () {
    return {
      query: ''
    }
  },
  methods: {
    ...mapActions([
      'getSearchResults'
    ]),
    getDataBySearch () {
      this.getSearchResults({ query: this.query })
      this.$router.push({ path: '/search', query: { name: this.query } })
      this.query = ''
    }
  },
  created () {
  }
}
</script>
<style>
  .header-title {
    text-align: left;
    padding-top: 3px;
    font-size: 30px;
  }
  ::placeholder {
    font-size: 12px;
    padding: 0px 0px 0px 6px !important;
  }
</style>
