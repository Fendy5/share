<template>
  <div>
    <fd-header />
    <div class="bg-starry-sky bg-cover h-screen-64 bg-top relative flex justify-center items-center">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import header from '@/layouts/header'

export default {
  components: {
    'fd-header': header
  },
  data () {
    return {}
  }
}
</script>

<style>
html {
  background: #f5f5f5f0;
}
</style>
