
import router from './router'

import { modules } from './modules'

let isAddRoutes = false
const cachedModules = new Set()
router.beforeEach((to, from, next) => {
  if (!isAddRoutes) {
    // addRoutesFun()
    for (const key in modules) {
      const module = modules[key]
      if (!cachedModules.has(module)) {
        cachedModules.add(module)
        setTimeout(async() => {
          const { default: application } = await import('../../' + modules[key] + '/src/main.js')
          console.log(application)
          if (application && application.routes) {
            console.log(application.routes)
            router.addRoutes(application.routes)
          }
        })
      }
    }
    isAddRoutes = true
    next({ path: to.path, query: to.query })
    return
  }
  // start progress bar

  // set page title

  // determine whether the user has logged in
})

router.afterEach(() => {
  // finish progress bar
  // NProgress.done()
})
