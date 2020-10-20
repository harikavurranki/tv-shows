import Vue from 'vue'
import VueRouter from 'vue-router'
import Shows from '../views/Shows.vue'
import ShowDetails from '../views/ShowDetails.vue'
import SearchResultsComponent from '../views/SearchResults.vue'
import ShowListComponent from '../components/ShowsListComponent'
import PageNotFound from '../views/PageNotFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shows',
    component: Shows
  },
  {
    path: '/showdetails',
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
    name: 'ShowListComponent',
    component: ShowListComponent
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
