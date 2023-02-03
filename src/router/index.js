import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import HomeView from '../views/HomeView.vue'
import FirebaseView from '../views/FirebaseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    { path: '/', name: 'welcome', component: AccueilView },
    { path: '/home', name: 'home', component: HomeView },


    
    { path: '/admin', name: 'admin', component: FirebaseView },
    
  ]
})

export default router
