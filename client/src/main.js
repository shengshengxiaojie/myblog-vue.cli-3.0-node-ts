import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Axios } from './http'
import { apiJson } from '../config/api.js'
import libBase from '../libs/base'
import qqWechatEmotionParser from 'qq-wechat-emotion-parser'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = Axios
Vue.prototype.apiJson = apiJson
Vue.prototype.libBase = libBase
Vue.prototype.qqWechatEmotionParser = qqWechatEmotionParser
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
