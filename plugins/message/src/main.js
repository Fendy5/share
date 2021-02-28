import Vue from 'vue'
import Main from './main.vue'

const MessageConstructor = Vue.extend(Main)
let instance

const Message = function () {
  instance = new MessageConstructor().$mount() // 渲染组件
  document.body.appendChild(instance.$el) // 挂载到 body 下
}
const type = ['success', 'warning', 'info', 'error']
  type.forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

export default Message
