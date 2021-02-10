<template>
  <div class="w-full text-center">
    <div class="grid grid-cols-12 gap-4">
      <!--    卡片-->
      <div class="col-start-4 rounded-md col-span-6 tablet:col-start-2 tablet:col-span-10 desktop:col-start-5 desktop:col-span-4 bg-white px-12 max-w-682">
        <!--      卡片头部-->
        <div class="flex justify-around">
          <div class="text-center py-6 primaryColor border-b-2 border-solid border-active w-full cursor-pointer">
            <div class="text-2xl pb-2">文字</div>
            <div class="text-xs">请输入文字</div>
          </div>
          <div class="text-center py-6 w-full cursor-pointer border-b border-dashed border-secondary">
            <div class="text-2xl pb-2">文件</div>
            <div class="text-xs">上传视频、音频、文件</div>
          </div>
        </div>
        <!--      卡片内容-->
        <div class="flex py-16 justify-around">
          <router-link to="/share" class="text-center">
            <svg width="50" height="50" viewBox="0 0 91 90" class="mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect x="0.287079" width="90" height="90" fill="url(#pattern1)" />
              <defs>
                <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image1" transform="scale(0.0111111)" />
                </pattern>
                <image id="image1" width="90" height="90" xlink:href="data:image/png;base64,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" />
              </defs>
            </svg>
            <div class="shareColor pt-2">我要分享</div>
          </router-link>
          <div class="text-center">
            <svg width="50" height="50" viewBox="0 0 84 84" class="mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="84" height="84" fill="url(#pattern2)" />
              <defs>
                <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image2" transform="scale(0.0119048)" />
                </pattern>
                <image id="image2" width="84" height="84" xlink:href="data:image/png;base64,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" />
              </defs>
            </svg>
            <div class="getColor pt-2">我要获取</div>
          </div>
        </div>
      </div>
    </div>
    <!--  按钮-->
    <svg width="76" height="76" class="mx-auto mt-5 cursor-pointer" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="76" height="76" fill="url(#pattern4)" />
      <defs>
        <pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image4" transform="scale(0.0131579)" />
        </pattern>
        <image id="image4" width="76" height="76" xlink:href="data:image/png;base64,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" />
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
