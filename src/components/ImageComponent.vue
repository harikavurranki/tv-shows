<template>
  <div>
    <div :class="!cardData.image?'heigth200':''">
      <img :src="cardData.image?cardData.image.medium:''" class="showimageheight" alt="Image is not available">
    </div>
    <div class="row mt10">
      <div class="showname col-lg-7 col-md-7 col-sm-8 col-7 textleft" :title="cardData.showName">{{cardData.showName}}</div>
      <div class="fs12 col-lg-5 col-md-5 col-sm-4 col-5 textright">
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
