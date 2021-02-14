<template>
  <div class="w-full text-center">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-start-4 rounded-md col-span-6 tablet:col-start-2 tablet:col-span-10 desktop:col-start-5 desktop:col-span-4 tablet:px-1 px-12 max-w-682">
        <div v-if="step===0">
          <div class="text-white text-4xl">输入验证码</div>
          <!--      验证码主要内容-->
          <div class="flex justify-between mt-12">
            <label v-for="(verify,index) in verifies" :key="index">
              <input :ref="'vy'+index" v-model="verifies[index]" maxlength="1" class="w-16 rounded h-16 bg-purple-300 text-2xl p-6 outline-none" @keyup.delete="deleteVerify" @input="changeVerify" @click="submit">
            </label>
          </div>
        </div>
        <div v-else class="bg-white rounded py-8 text-left px-6 max-h-80 overflow-scroll">
          {{ content }}
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
      step: 0,
      content: '',
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
        getContents({ verify: this.verifies.join('') }).then(value => {
          this.content = value.data.content
          this.step = 1
        })
      }
    },
    deleteVerify () {
      const idx = this.verifies.indexOf(null)
      if (idx === -1) {
        this.verifies.splice(3, 1, null)
        this.changeVerify()
      } else if (idx !== 0) {
        this.verifies.splice(idx - 1, 1, null)
        this.changeVerify()
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
