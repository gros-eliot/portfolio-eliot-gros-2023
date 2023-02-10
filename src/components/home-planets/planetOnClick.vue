<template>
  <article v-for="categorie in listeCategories" :key="categorie.id">
    <article v-if="categoryId === categorie.id">
      <!--DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || -->
      <!--DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || -->
      <!--DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || -->

      <Renderer
        antialias
        :orbit-ctrl="{
          enableDamping: true,
          enableZoom: false,
          enablePan: false,
        }"
        resize="window"
        class="absolute inset-0 max-w-full max-h-screen z-30"
      >
        <Camera :position="{ z: cameraFocusResponsive }" />
        <Scene>
          <!--PLANETE AFFICHEE-->
          <Sphere
            :size="1"
            :scale="{ x: 20, y: 20, z: 20 }"
            :position="{ x: 0, y: 0, z: 0 }"
            :cast-shadow="true"
            :receive-shadow="true"
            :width-segments="128"
            :height-segments="128"
          >
            <BasicMaterial>
              <Texture :src="texturePlanet" />
            </BasicMaterial>
          </Sphere>
        </Scene>

        <!--Effet améliorant le rendu-->
        <EffectComposer>
          <RenderPass />
          <UnrealBloomPass :strength="0.3" />
        </EffectComposer>
      </Renderer>

      <!--FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || -->
      <!--FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || -->
      <!--FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || -->

      <!--Elements de la catégorie-->
      <article
        class="flex flex-col justify-between z-40 p-4 md:p-8 text-white absolute inset-0 w-full h-full pointer-events-none select-text bg-[linear-gradient(180deg,rgba(0,0,0,0)60.71%,rgba(0,0,0,0)62.81%,rgba(33,37,54,60)100%)]"
      >
        <!-- flex flex-col justify-between -->
        <!---->
        <!---->

        <!--Nom catégorie-->
        <div class="flex flex-col justify-center gap-1">
          <h2
            class="portfolio-h1 text-yellow-portfolio text-center drop-shadow-xl"
          >
            {{ categorie.name }}
          </h2>
          <p class="text-center">{{ categorie.description }}</p>
        </div>

        <!--Section pour la grid DETAILS/IMAGES (version ordinateur uniquement)-->
        <section
          class="grid grid-cols-4 w-full justify-items-center items-start"
        >
          <!--Details catégorie-->
          <div>
            <p class="font-bold text-yellow-portfolio">
              Elements in : {{ categorie.works }}
            </p>
            <div class="grid grid-cols-2">
              <p class="font-bold">{{ categorie.alternativeName }}</p>
              <p class="">{{ categorie.volume }}</p>
              <p class="">{{ categorie.temperature }}</p>
              <p class="">{{ categorie.surfacePressure }}</p>
              <p class="">{{ categorie.surfaceArea }}</p>
              <p class="">{{ categorie.radius }}</p>
              <p class="">{{ categorie.mass }}</p>
              <p class="">{{ categorie.inclination }}</p>
              <p class="">{{ categorie.apparentMagnitude }}</p>
            </div>
          </div>

          <div></div>
          <div></div>
          <!--Images catégorie-->
          <div>
            <img :src="categorie.imageone" class="w-10/12" alt="" />
            <!--class="w-40 md:w-52 lg:w-60 xl:w-80"-->

            <img
              :src="categorie.imagetwo"
              alt=""
              class="w-10/12"
              v-if="
                categorie.name === 'University projects' ||
                categorie.name === 'Personal projects' ||
                categorie.name === 'Websites' ||
                categorie.name === 'Digital art' ||
                categorie.name === 'Branding and marketing'
              "
            />
            <!--class="w-40 md:w-52 lg:w-60 xl:w-80"-->
          </div>
        </section>
        <div
          class="flex flex-col md:flex-row gap-5 justify-center items-center"
        >
          <RouterLink
            :to="{ name: 'TestFirebaseView', params: { id: categorie.id } }"
            class="w-fit h-fit pointer-events-auto"
          >
            <button class="portfolio-button-white w-fit">Land on</button>
          </RouterLink>

          <button
            class="portfolio-button-black w-fit pointer-events-auto"
            v-on:click="clickedButtonBack"
          >
            Back
          </button>
        </div>
      </article>
    </article>
  </article>
</template>

<script setup>
import {
  Sphere,
  Camera,
  LambertMaterial,
  BasicMaterial,
  PointLight,
  Renderer,
  Scene,
  Texture,
  propsValues,
  Plane,
  UnrealBloomPass,
  EffectComposer,
  RenderPass,
} from "troisjs";
</script>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "@/assets/js/firebase-firestore.js";
// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "@/assets/js/firebase-storage.js";

import { emitter } from "@/main.js";

export default {
  name: "planetOnClick",
  data() {
    return {
      listeCategories: [], // Liste des catégories synchronisée - collection categories de Firebase
    };
  },
  props: {
    categoryId: {
      type: String,
      required: true,
    },
    texturePlanet: {
      type: String,
      required: true,
    },
  },
  mounted() {
    // Montage de la vue
    this.getCategories();
  },
  emits: ["backEvent"],
  methods: {
    clickedButtonBack() {
      this.$emit("backEvent", false);
    },

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
  },
};

// script pour rendre la distance caméra-cube responsive
let cameraFocusResponsive = 0;
if (window.screen.width <= 500) {
  cameraFocusResponsive = 140;
}
if (window.screen.width > 500) {
  cameraFocusResponsive = 80;
}
</script>
