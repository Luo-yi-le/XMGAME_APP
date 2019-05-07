import Vue from 'vue'
import App from './App'
import store from './store/index.js'//导入状态管理

Vue.config.productionTip = false

Vue.prototype.$store = store//全局引用

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
