import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import HomeView from '../views/HomeView.vue'
import FirebaseView from '../views/FirebaseView.vue'
import TestFirebaseView from '../views/TestFirebaseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/home', name: 'HomeView', component: HomeView },


    
    { path: '/admin', name: 'FirebaseView', component: FirebaseView },
    { path: '/admintest/:id', name: 'TestFirebaseView', component: TestFirebaseView },

    
  ]
})

export default router
