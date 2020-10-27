import Vue from 'vue'
import VueRouter from 'vue-router'
import Shows from '../views/Shows.vue'
import ShowDetails from '../views/ShowDetails.vue'
import SearchResultsComponent from '../views/SearchResults.vue'
import AllShows from '../views/AllShows.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shows',
    component: Shows
  },
  {
    path: '/showdetails/:id',
    name: 'ShowDetails',
    component: ShowDetails
  },
  {
    path: '/search',
    name: 'SearchResultsComponent',
    component: SearchResultsComponent
  },
  {
    path: '/allshows',
    name: 'AllShows',
    component: AllShows
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
