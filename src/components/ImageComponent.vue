<template>
  <div>
    <div :class="!cardData.image?'height-200':''">
      <img :src="cardData.image?cardData.image.medium:''" class="show-image-height" alt="Image is not available">
    </div>
    <div class="row mt-10">
      <div class="show-name col-lg-7 col-md-7 col-sm-8 col-7 text-left" :title="cardData.showName">{{cardData.showName}}</div>
      <div class="fs-12 col-lg-5 col-md-5 col-sm-4 col-5 text-right">
        <i class="star"></i>
        <span v-if="cardData.rating.average">{{cardData.rating.average}}</span>
        <span v-else>N/A</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImageComponent',
  props: ['cardData'],
  data () {
    return {

    }
  }
}
</script>
