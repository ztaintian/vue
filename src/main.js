// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'animate.css'
import $ from 'jquery'

Vue.use(router)
// Vue.use($)
// window.$ = $
Object.defineProperty(Vue.prototype,'$',{value:$})
Vue.config.productionTip = false
// 注册一个名为 v-focus 的全局自定义指令
Vue.directive('focus', {
  // 当绑定的元素插入到 DOM 时调用此函数……
  inserted: function (el) {
    // 元素调用 focus 获取焦点
    el.focus()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
