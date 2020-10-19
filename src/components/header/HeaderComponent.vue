<template>
  <div class="headerbg pt5 pb5">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-4 col-sm-6 col-12 headertitle fontbold">
          Shows Hub
        </div>
        <div class="col-lg-3 col-md-8 col-sm-6 col-12 textright search">
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
    }
  },
  created () {
  }
}
</script>
<style>
  .headertitle {
    text-align: left;
    font-style: italic;
    padding-top: 3px;
  }
  ::placeholder {
    font-size: 12px;
    padding: 0px 0px 0px 6px !important;
  }
</style>
