import Vue from 'vue'
import VueRouter from 'vue-router'
import Shows from '../views/Shows.vue'
import ShowDetails from '../views/ShowDetails.vue'
import SearchResults from '../views/SearchResults.vue'
import ShowsList from '../components/ShowsListComponent'
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
    path: '/allshows',
    name: ShowsList,
    component: ShowsList
  }
]

const router = new VueRouter({
  routes
})

export default router
