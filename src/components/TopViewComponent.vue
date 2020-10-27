<template>
  <div class="row">
    <div class="col-lg-10 col-md-9 col-sm-9 col-6 text-left">
      <span class="genre-name">{{name}}</span>
    </div>
    <div class="col-lg-2 col-md-3 col-sm-3 col-6 text-right">
      <div @click="redirect"><span class="back-to-home">Back to home</span></div>
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
