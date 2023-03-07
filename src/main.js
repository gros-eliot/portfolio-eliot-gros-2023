import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

import '@/index.css'

// Import de mitt
import mitt from 'mitt';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvwGWeJZMbKGhSsO5LSJB94XCYqxumf4E",
  authDomain: "portfolio-eliot-gros-2023.firebaseapp.com",
  projectId: "portfolio-eliot-gros-2023",
  storageBucket: "portfolio-eliot-gros-2023.appspot.com",
  messagingSenderId: "539587464707",
  appId: "1:539587464707:web:c33f11575bd00838ec8836",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);



const app = createApp(App)
// Création d'un emetteur mitt exportable
export const emitter = mitt();
// créer l'émetteur comme propriété globale
// de l'application
app.config.globalProperties.emitter = emitter;

app.use(router)
app.mount('#app')
app.component('scroll-parallax', ScrollParallax);

