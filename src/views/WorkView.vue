<template>
  <!--div vide pour bouton vers le haut-->
  <div class="absolute top-0" id="top"></div>
  <!--div vide pour bouton vers le haut-->

  <article
    :class="{
      'bg-black':
        work.name === `Nike creations` ||
        work.name === `Lit rooms` ||
        work.name === `Jazz'n'pop`,
      'bg-zinc-900': work.name === `Arquest`,
      'bg-[linear-gradient(rgba(255,116,241,1)0%,rgba(90,167,238,1)100%)]':
        work.name === `Equalshare`,
    }"
  >
    <!--HERO for works : firebase content-->
    <section v-for="categorie in listeCategories" :key="categorie.id">
      <div v-if="work.categories[0].name === categorie.name">
        <scroll-parallax :speed="0.5" :down="true">
          <div
            class="w-full h-[100vh] md:h-[75vh] bg-cover bg-center grid grid-rows-3 gap-1 text-white"
            :style="{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.8)0%,rgba(0,0,0,0.8)100%),url('${workPhotoUrl}')`,
            }"
          >
            <!--BREADCRUMB for works-->
            <Breadcrumb
              class="my-4 h-fit m-auto md:m-4"
              :Item1="{
                text: 'Home',
                RouterLinkTo: '/home',
              }"
              :Item2="{
                text: work.categories[0].name,
                RouterLinkTo: {
                  name: 'CategoryView',
                  params: { id: categorie.id },
                },
              }"
              :Item3="{
                text: work.name,
              }"
            />
            <div class="w-full flex flex-col justify-center items-center">
              <h1
                class="portfolio-h1 text-4xl md:text-[2.25rem] lg:text-[4rem] text-center"
              >
                {{ work.name }}
              </h1>
              <p class="portfolio-h3 font-light p-4 text-center md:text-left">
                {{ work.description }}
              </p>
            </div>
            <div>
              <!--DIV vide pour bon fonctionnement de la grid-->
            </div>
          </div>
        </scroll-parallax>
      </div>
    </section>
    <!--CONTENT for works : components-->
    <section>
      <WorkPommsWorld v-if="work.name === `Pomm's world`" />
      <WORKNikeCreations v-if="work.name === `Nike creations`" />
      <WORKLitRooms v-if="work.name === `Lit rooms`" />
      <WORKArquest v-if="work.name === `Arquest`" />
      <WORK3DCreations v-if="work.name === `3D creations`" />
      <WORKDrawingsSketchs v-if="work.name === `Drawings & sketchs`" />
      <WORKEqualshare v-if="work.name === `Equalshare`" />
      <WORKJazznPop v-if="work.name === `Jazz'n'pop`" />
    </section>
    <!--FOOTER -->
    <section
      class="border-t-2 border-zinc-400 w-full h-[50vh] mt-10"
      :class="{
        'bg-black': work.name === `Equalshare`,
        'bg-black': work.name === `Jazz'n'pop`,
      }"
      v-if="work"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 p-10">
        <div>
          <h4 class="text-zinc-600 font-rubik-mono-one">Categories</h4>
          <ul class="text-zinc-500">
            <li v-if="work.categories[0].name" class="w-fit">
              {{ work.categories[0].name }}
            </li>
            <li v-if="work.categories[1].name" class="w-fit">
              {{ work.categories[1].name }}
            </li>
            <li v-if="work.categories[2].name" class="w-fit">
              {{ work.categories[2].name }}
            </li>
            <li v-if="work.categories[3].name" class="w-fit">
              {{ work.categories[3].name }}
            </li>
            <li v-if="work.categories[4].name" class="w-fit">
              {{ work.categories[4].name }}
            </li>
            <li v-if="work.categories[5].name" class="w-fit">
              {{ work.categories[5].name }}
            </li>
            <li v-if="work.categories[6].name" class="w-fit">
              {{ work.categories[6].name }}
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-zinc-600 font-rubik-mono-one">Tools</h4>
          <ul class="text-zinc-500">
            <li v-if="work.outils[0].name" class="w-fit">
              {{ work.outils[0].name }}
            </li>
            <li v-if="work.outils[1].name" class="w-fit">
              {{ work.outils[1].name }}
            </li>
            <li v-if="work.outils[2].name" class="w-fit">
              {{ work.outils[2].name }}
            </li>
            <li v-if="work.outils[3].name" class="w-fit">
              {{ work.outils[3].name }}
            </li>
            <li v-if="work.outils[4].name" class="w-fit">
              {{ work.outils[4].name }}
            </li>
            <li v-if="work.outils[5].name" class="w-fit">
              {{ work.outils[5].name }}
            </li>
            <li v-if="work.outils[6].name" class="w-fit">
              {{ work.outils[6].name }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </article>

  <!--BOUTON RETOUR EN HAUT DE PAGE-->
  <div
    class="fixed bottom-0 right-0 w-fit h-fit pointer-events-none"
    @pointerenter="topButtonHover = '#FCFF73'"
    @pointerleave="topButtonHover = '#FFFFFF'"
  >
    <a
      href="#top"
      class="gototop-button opacity-0 hidden pointer-events-auto p-4"
    >
      <button class="bg-white border-2 border-black rounded-full p-4">
        <TopArrow class="w-4 h-4 md:w-6 md:h-6" :arrowFill="topButtonHover" />
        <span class="sr-only"
          >Flèche pour remonter vers le haut de la page</span
        >
      </button>
    </a>
  </div>
</template>

<style scoped>
.vue-parallax-js {
  height: 500px;
  position: relative;
  overflow: hidden;
}

.vue-parallax-js img {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
}
</style>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue";
import TopArrow from "@/components/works/TopArrow.vue";

import WorkPommsWorld from "@/components/works/WORKPommsWorld.vue";
import WORKNikeCreations from "@/components/works/WORKNikeCreations.vue";
import WORKLitRooms from "@/components/works/WORKLitRooms.vue";
import WORKArquest from "@/components/works/WORKArquest.vue";
import WORK3DCreations from "@/components/works/WORK3DCreations.vue";
import WORKDrawingsSketchs from "@/components/works/WORKDrawingsSketchs.vue";
import WORKEqualshare from "../components/works/WORKEqualshare.vue";
import WORKJazznPop from "../components/works/WORKJazznPop.vue";

function backToTopButtonOpacity() {
  let valueScroll = window.pageYOffset;
  let goToTopButton = document.querySelector(".gototop-button");

  if (valueScroll < 500) {
    goToTopButton.style.display = "none";
    goToTopButton.style.opacity = 0;
  }
  if (valueScroll >= 500) {
    goToTopButton.style.display = "block";
    goToTopButton.style.opacity = 0;
  }
  if (valueScroll >= 600) {
    goToTopButton.style.opacity = "10%";
  }
  if (valueScroll >= 700) {
    goToTopButton.style.opacity = "20%";
  }
  if (valueScroll >= 800) {
    goToTopButton.style.opacity = "30%";
  }
  if (valueScroll >= 900) {
    goToTopButton.style.opacity = "50%";
  }
  if (valueScroll >= 1000) {
    goToTopButton.style.opacity = "100%";
  }
}

window.addEventListener("scroll", backToTopButtonOpacity);
</script>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDoc,
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";

import { emitter } from "@/main.js";

export default {
  name: "WorkView",
  data() {
    return {
      topButtonHover: "#FFFFFF", // état du bouton retour en haut

      workPhotoUrl: null,
      work: {
        name: "",
        categories: [
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
        ],
        outils: [
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
          {
            name: "",
          },
        ],
        photo: "",
        // descriptions du work
        description: "",
      },
      refWork: null,
      listeCategories: [],
      listeOutils: [], // Liste des outils synchronisée - collection outils de Firebase
    };
  },
  components: {
    ScrollParallax,
  },

  mounted() {
    // Montage de la vue
    console.log("id work", this.$route.params.id);
    this.getCategories();
    this.getOutils();
    this.getWorks(this.$route.params.id);
  },
  methods: {
    async getCategories() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document catégorie
      const dbCategories = collection(firestore, "categories");
      // Liste des catégories triés sur leur date
      const q = query(dbCategories, orderBy("name", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeCategories = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Récupération des images de chaque catégorie
        // parcours de la liste
        this.listeCategories.forEach(function (categorie) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "categories/" + categorie.imageone);
          const spaceRef2 = ref(storage, "categories/" + categorie.imagetwo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              categorie.imageone = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
          getDownloadURL(spaceRef2)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              categorie.imagetwo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
    async getOutils() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document outils
      const dbOutils = collection(firestore, "outils");
      // Liste des outils triés sur leur date
      const q = query(dbOutils, orderBy("name", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeOutils = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Récupération des images de chaque outil
        // parcours de la liste
        this.listeOutils.forEach(function (outil) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "outils/" + outil.image);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              outil.image = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },
    async getWorks(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document works
      const docRef = doc(firestore, "works", id);
      // Référence du work concerné
      this.refWork = await getDoc(docRef);
      //test si le work demandé existe
      if (this.refWork.exists()) {
        // si oui, on récupère les données du work
        this.work = this.refWork.data();
      } else {
        //sinon, message d'erreur
        this.console.log("Work inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du concert
      const spaceRef = ref(storage, "works/" + this.work.photo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.workPhotoUrl = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },
  },
};
</script>
