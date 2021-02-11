<template>
  <div>
    <fd-header />
    <div class="bg-starry-sky bg-cover h-screen-64 bg-top relative flex justify-center items-center">
      <Nuxt />
    </div>
    <fd-footer />
  </div>
</template>

<script>
import header from '@/layouts/header'
import footer from '@/layouts/footer'

export default {
  name: 'Layout',
  components: {
    'fd-footer': footer,
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
