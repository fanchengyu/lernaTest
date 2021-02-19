
import Wowo from '../views/Wowo.vue'
const routes = [
  {
    path: '/123',
    name: '123',
    component: Wowo
  },
  {
    path: '/456',
    name: 'Nainiu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Nainiu.vue')
  }
]

export default routes
