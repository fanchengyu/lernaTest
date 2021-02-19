
import Beizi from '../views/Beizi.vue'

const routers = [
  {
    path: '/789',
    name: 'Beizi',
    component: Beizi
  },
  {
    path: '/012',
    name: 'Lili',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Lili.vue')
  }
]

export default routers
