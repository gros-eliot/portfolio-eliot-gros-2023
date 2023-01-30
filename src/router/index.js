import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    { path: '/', name: 'welcome', component: AccueilView },
    { path: '/home', name: 'home', component: HomeView },
    
  ]
})

export default router
