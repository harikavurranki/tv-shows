<template>
  <div class="headerbg pt5 pb5">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-sm-3 col-xs-3 headertitle">
          Shows Hub
        </div>
        <div class="col-md-3 col-sm-3 col-xs-3 textright">
          <input v-model="query" placeholder="Search shows"  @keyup.enter="getDatabySearch">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
      query: ''
    }
  },
  methods: {
    getDatabySearch () {
      this.$store.dispatch('getSearchResults', { query: this.query })
      this.$router.push({ path: '/search', query: { name: this.query } })
    }
  },
  created () {
  }
}
</script>
<style>
  .headerbg {
    background: #e6ae06;
  }
  .pt5 {
    padding-top: 5px;
  }
  .pb5 {
    padding-bottom: 5px
  }
  .headertitle {
    text-align: left;
    font-style: italic;
    padding-top: 3px;
  }
  .textright {
    text-align: right;
  }
  ::placeholder {
    font-size: 12px;
    padding: 0px 0px 0px 6px !important;
  }
</style>
