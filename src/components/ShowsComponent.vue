<template>
  <div>
    <b-container>
      <b-row>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div v-for="(n, index) in parseInt((eachShowDetails.value.length/5).toFixed())" :key="n" :class="n>1?'carousel-item': 'carousel-item active'">
              <div class="row">
                <b-col md="2" sm="6" xs="12" v-for="(show, indexvalue) in eachShowDetails.value.slice(index*6, index*6+6)" :key="indexvalue" @click="getShowId(show)">
                  <img :src="show.image.medium">
                </b-col>
              </div>
            </div>
          </div>
           <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  props: ['eachShowDetails', 'showsLength'],
  name: 'ShowsComponent',
  data () {
    return {
    }
  },
  methods: {
    getShowId (show) {
      this.$store.state.showData = show
      this.$router.push('/showdetails')
    }
  },
  created () {
    // console.log(this.eachShowDetails, this.showsLength)
    // debugger
  }
}
</script>
