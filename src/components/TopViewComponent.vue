<template>
  <div class="row">
    <div class="col-lg-10 col-md-9 col-sm-9 col-6 textleft">
      <span class="genrename">{{name}}</span>
    </div>
    <div class="col-lg-2 col-md-3 col-sm-3 col-6 textright">
      <div @click="redirect"><span class="backtohome">Back to home</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopViewComponent',
  props: ['name'],
  methods: {
    redirect () {
      this.$router.push('/')
    }
  }
}
</script>
