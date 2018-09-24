import Home from "./components/Home.vue"
import Supplies from "./components/Supplies.vue"
import Resources from "./components/Resources.vue"
import Services from "./components/Services.vue"
import Pools from "./components/Pools.vue"
export const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/supplies',
    component: Supplies
  },
  {
    path: '/pools',
    component: Pools
  },
  {
    path: '/resources',
    component: Resources
  },
  {
    path: '/services',
    component: Services
  }
]
