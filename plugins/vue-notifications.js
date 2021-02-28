import Vue from 'vue'
import VueNotifications from 'vue-notifications'

Vue.prototype.$message = VueNotifications
Vue.use(VueNotifications)
