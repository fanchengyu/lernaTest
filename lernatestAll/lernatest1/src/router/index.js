import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})
const cachedModules = new Set()
router.beforeEach(async (to, from, next) => {

  if (!isAddRoutes) {  
    // addRoutesFun()
    for (const key in modules) {
      const module = modules[key]
      if (!cachedModules.has(module)) {
        cachedModules.add(module)
        const { default: application } = await window.System.import('./' + modules[key] + '/main.js')
        router.addRoutes(application.routes)
      }
    }
    next({ path: to.path, query: to.query })
    return
  }
  // start progress bar

  // set page title

  // determine whether the user has logged in

})

export default router
