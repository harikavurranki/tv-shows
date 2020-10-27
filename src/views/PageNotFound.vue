<template>
  <div class="container">
    <TopViewComponent :name="''" class="pt-50"></TopViewComponent>
    <h1 class="not-found">Page Not Found</h1>
  </div>
</template>
<script>
import TopViewComponent from '../components/TopViewComponent.vue'
export default {
  name: 'PageNotFound',
  components: { TopViewComponent }
}
</script>
