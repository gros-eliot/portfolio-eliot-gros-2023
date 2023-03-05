// Fonction d'authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

// Fonctions Firestore
import { 
  getFirestore, 
  collection, 
  onSnapshot, 
  query,
  where
} from '@/assets/js/firebase-firestore.js'


import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import HomeView from '../views/HomeView.vue'

import ConnexionView from '../views/ConnexionView.vue'
import FirebaseView from '../views/FirebaseView.vue'


import ChoseCategoryView from '../views/ChoseCategoryView.vue'
import ListeCategorieView from '../views/ListeCategorieView.vue'



import WorkView from '../views/WorkView.vue'

const routes =  [ 
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/home', name: 'HomeView', component: HomeView },

    { path: '/connexion', name: 'ConnexionView', component: ConnexionView },
    { path: '/admin', name: 'FirebaseView', component: FirebaseView, beforeEnter:guardAdmin },

    { path: '/categorie/:id', name: 'ListeCategorieView', component: ListeCategorieView },
    { path: '/categories', name: 'ChoseCategoryView', component: ChoseCategoryView },

    { path: '/work/:id', name: 'WorkView', component: WorkView },

]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || {top:0}
  }
})

// On créé un guard : Observateur (fonction) permettant de savoir si un utilisateur a le droit d'utiliser une route
// paramètres : to : d'où il vient, from où il veut aller, next où il doit aller après contrôle
function guardAdmin(to, from, next) {
  // recherche utilisateur connecté
  getAuth().onAuthStateChanged(function(user) {
    if(user) {
      console.log(user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données collection user
      const dbUser = collection(firestore, "user");
      // Recherche du user par son uid
      const q = query(dbUser, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
          let userInfo = snapshot.docs.map(doc => ( {id:doc.id, ...doc.data()}));
     
          /*Création variable accessPage : si false => accès refusé. Si true => acces autorisé */
          let accesPages;
          accesPages=userInfo[0].admin;

          if(accesPages === true){
            next(to.params.name);
            return;
          }else{
            // Non administrateur : retour accueil
            alert("Page access error: you must be an administrator to access this page.");
            next({name: "AccueilView"});
            return;
          }
      })
    }
  });
}

export default router
