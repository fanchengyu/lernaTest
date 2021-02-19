// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)   ss
// }).$mount('#app')
import routes from './router'
console.log({ routes })
// const sharePool = (Vue.__share_pool__ = Vue.__share_pool__ || {})
// const routesPool = (sharePool.routes = sharePool.routes || {})
// // 挂载子项目的 route-list
// routesPool[process.env.VUE_APP_NAME] = routes
// require('./business-components/tabCom/index.js')
export default {
  name: 'javascript',
  routes,
  beforeEach(from, to, next) {
    console.log('javascript:', from.path, to.path)
    next()
  },
  init() {}
}
