<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-start-4 rounded-md col-span-6 tablet:col-start-2 tablet:col-span-10 desktop:col-start-5 desktop:col-span-4 tablet:px-1 px-12 max-w-682">
      <div class="primaryColor bg-white rounded py-8 px-6 max-h-80">
        {{ introduction }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      introduction: '跨域传输(CDT)，英文全称为Cross Domain Transform。主要满足在不想登录通讯软件的前提下，进行跨设备传输文字或者小型文件的需求。'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
