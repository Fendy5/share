<template>
  <div class="w-full text-center">
    <!--    输入框部分-->
    <div v-if="step===0">
      <div class="grid grid-cols-12 gap-4">
        <!--    卡片-->
        <div class="col-start-4 rounded-md col-span-6 tablet:col-start-2 tablet:col-span-10 desktop:col-start-5 desktop:col-span-4 bg-white px-12 max-w-682">
          <!--      卡片头部-->
          <div class="flex justify-around">
            <div class="text-center py-6 w-full cursor-pointer" :class="[type===1?'border-solid border-active primaryColor border-b-2':'border-dashed border-b']" @click="changeTab(1)">
              <div class="text-2xl pb-2">文字</div>
              <div class="text-xs tablet:text-2xs">请输入文字</div>
            </div>
            <div class="text-center py-6 w-full cursor-pointer border-secondary" :class="[type===2?'border-solid border-active primaryColor border-b-2':'border-dashed border-b']" @click="changeTab(2)">
              <div class="text-2xl pb-2">文件</div>
              <div class="text-xs tablet:text-2xs">上传视频、音频、文件</div>
            </div>
          </div>
          <!--      卡片内容-->
          <div class="h-48">
            <textarea v-if="type===1" v-model="content" class="w-full border-none outline-none resize-none p-2 focus:ring-white max-h-48" rows="7" placeholder="输入文字" />
            <div v-else class="h-48 w-full flex justify-center items-center">
              <div class="text-2xl cursor-pointer" @click="uploadFile">
                <svg t="1613479916700" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2139" width="64" height="64"><path d="M554.16 139.63v626.55c0 25.57-17.05 42.63-42.63 42.63-25.57 0-42.62-17.05-42.62-42.63V152.42L306.95 314.39c-17.05 17.05-42.62 17.05-59.67 0-17.05-17.05-17.05-42.63 0-59.67L456.13 45.86c34.09-34.1 85.24-34.1 119.34 0l208.84 208.85c17.05 17.05 17.05 42.62 0 59.67-17.05 17.05-42.62 17.05-59.67 0L554.16 139.63z m383.59 541.31c0-25.57 17.05-42.63 42.63-42.63 25.57 0 42.62 17.05 42.62 42.63v213.11c0 72.46-55.4 127.87-127.86 127.87h-767.2C55.48 1021.92 0.07 966.51 0.07 894.05V680.94c0-25.57 17.05-42.63 42.63-42.63 25.57 0 42.62 17.05 42.62 42.63v213.11c0 25.57 17.05 42.62 42.63 42.62h767.2c25.57 0 42.62-17.05 42.62-42.62V680.94z m0 0" p-id="2140" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  按钮-->
      <svg width="76" height="76" class="mx-auto mt-5 cursor-pointer" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" @click="submit">
        <rect width="76" height="76" fill="url(#pattern4)" />
        <defs>
          <pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image4" transform="scale(0.0131579)" />
          </pattern>
          <image id="image4" width="76" height="76" xlink:href="data:image/png;base64,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" />
        </defs>
      </svg>
    </div>
    <!--    验证码部分-->
    <div v-else-if="step===1">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-start-4 rounded-md col-span-6 tablet:col-start-2 tablet:col-span-10 desktop:col-start-5 desktop:col-span-4 tablet:px-1 px-12 max-w-682">
          <div class="text-white text-4xl">
            验证码
          </div>
          <!--      验证码主要内容-->
          <div class="flex justify-between mt-12">
            <div v-for="(verify,index) in verifies" :key="index" class="w-16 rounded h-16 bg-purple-300 flex justify-center items-center text-2xl">{{ verify }}</div>
          </div>
          <div class="mt-12 secondaryColor text-sm">- 打开平台输入验证码，即可获取分享的内容 -</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadFile, uploadFileData, uploadText } from '@/api'

export default {
  name: 'Share',
  data () {
    return {
      uploaded: true,
      type: 1, // 1为文本类型，2为文件类型
      content: '',
      verifies: [],
      filePath: '',
      step: 0
    }
  },
  methods: {
    uploadFile () {
      const input = document.createElement('input')
      input.type = 'file'
      input.click()
      const _this = this
      input.onchange = function () {
        const file = input.files[0]
        const form = new FormData()
        form.append('file', file)
        uploadFile(form).then(value => {
          _this.filePath = value.data.path
        })
      }
    },
    changeTab (index) {
      this.type = index
    },
    submit () {
      if (this.type === 1) {
        uploadText({ content: this.content }).then(value => {
          if (value.data.code) {
            this.verifies = (value.data.verify + '').split('')
            this.step = 1
          }
        })
      } else {
        uploadFileData({ filePath: this.filePath }).then(value => {
          if (value.data.code) {
            this.verifies = (value.data.verify + '').split('')
            this.step = 1
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
