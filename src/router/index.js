import Vue from 'vue'
import VueRouter from 'vue-router'
import Shows from '../views/Shows.vue'
import ShowDetails from '../components/ShowDetailsComponent.vue'
import SearchResults from '../components/SearchResults.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shows',
    component: Shows
  },
  {
    path: '/showdetails',
    name: ShowDetails,
    component: ShowDetails
  },
  {
    path: '/search',
    name: SearchResults,
    component: SearchResults
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

export default router
