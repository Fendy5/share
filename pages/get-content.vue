<template>
  <div class="w-full text-center">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-start-4 rounded-md col-span-6 tablet:col-start-2 tablet:col-span-10 desktop:col-start-5 desktop:col-span-4 tablet:px-1 px-12 max-w-682">
        <div class="text-white text-4xl">输入验证码</div>
        <!--      验证码主要内容-->
        <div class="flex justify-between mt-12">
          <label v-for="(verify,index) in verifies" :key="index">
            <input :ref="'vy'+index" v-model="verifies[index]" maxlength="1" class="w-16 rounded h-16 bg-purple-300 text-2xl p-6 outline-none" @input="changeVerify" @click="submit">
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getContents } from '@/api'

export default {
  data () {
    return {
      verifies: [null, null, null, null]
    }
  },
  methods: {
    submit () {
      this.verifies.some((value, index) => {
        if (!value) {
          this.$refs['vy' + index][0].focus()
          return true
        }
      })
      if (this.verifies.every(value => value)) {
        getContents({ verify: 1234 }).then(value => {
          console.log(value)
        })
      }
    },
    changeVerify () {
      this.submit()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
