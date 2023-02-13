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
            ref="planet"
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

          <UnrealBloomPass :strength="0.3" :radius="1.2" :threshold="0" />
          <SMAAPass />
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

        <!--Nom catégorie + description-->
        <section class="flex justify-center items-center w-full">
          <div
            class="flex flex-col justify-center gap-1 text-center w-full p-0 py-2 md:w-10/12 md:p-2"
          >
            <h2
              class="tracking-tighter font-rubik-mono-one text-[2.25rem] lg:text-[4rem] leading-[2rem] md:leading-[3.25rem] text-yellow-portfolio"
            >
              {{ categorie.name }}
            </h2>
            <p class="">
              {{ categorie.description }}
            </p>
          </div>
        </section>

        <!--Section pour la grid DETAILS/IMAGES (version ordinateur uniquement)-->
        <section
          class="hidden lg:grid grid-cols-4 w-full justify-items-center items-start"
        >
          <!--Details catégorie-->
          <div class="flex flex-col gap-5">
            <!--partie principale-->
            <div class="flex flex-col gap-1">
              <p class="font-bold text-yellow-portfolio text-xl">
                Works in : {{ categorie.works }}
              </p>
              <p class="font-bold text-white">
                Alternative name : {{ categorie.alternativeName }}
              </p>
            </div>

            <!--partie secondaire-->
            <div class="flex flex-col gap-10 font-thin text-sm">
              <div class="flex flex-col gap-0">
                <p>Radius : {{ categorie.radius }}</p>
                <p>Inclination : {{ categorie.inclination }}</p>
              </div>

              <div class="flex flex-col gap-0">
                <p>Volume : {{ categorie.volume }}</p>
                <p>Mass : {{ categorie.mass }}</p>
                <p>Surface area : {{ categorie.surfaceArea }}</p>
              </div>

              <div class="flex flex-col gap-0">
                <p>Surface pressure :{{ categorie.surfacePressure }}</p>
                <p>Temperature :{{ categorie.temperature }}</p>
                <p>Apparent magnitude : {{ categorie.apparentMagnitude }}</p>
              </div>
            </div>
          </div>

          <div>
            <AnnotationPlanetText class="w-6/12 h-fit" />
          </div>

          <div class="flex flex-col justify-between items-end h-full">
            <AnnotationPlanetImgOne class="w-6/12 h-fit" />
            <AnnotationPlanetImgTwo
              class="w-6/12 h-fit"
              v-if="
                categorie.name === 'University projects' ||
                categorie.name === 'Personal projects' ||
                categorie.name === 'Websites' ||
                categorie.name === 'Digital art' ||
                categorie.name === 'Branding and marketing'
              "
            />
          </div>
          <!--Images catégorie-->
          <div class="flex flex-col justify-between h-full">
            <div class="imageContainer pointer-events-auto">
              <img
                :src="categorie.imageone"
                class="foregroundImg w-60"
                :alt="categorie.name + ' first example image'"
              />
              <img
                :src="categorie.imageone"
                class="backgroundImg w-60"
                :alt="categorie.name + ' first example image'"
              />
            </div>

            <!--w-8/12 rounded-lg pointer-events-auto-->

            <div
              class="imageContainer pointer-events-auto"
              v-if="
                categorie.name === 'University projects' ||
                categorie.name === 'Personal projects' ||
                categorie.name === 'Websites' ||
                categorie.name === 'Digital art' ||
                categorie.name === 'Branding and marketing'
              "
            >
              <img
                :src="categorie.imagetwo"
                class="foregroundImg w-60"
                :alt="categorie.name + ' first example image'"
              />
              <img
                :src="categorie.imagetwo"
                class="backgroundImg w-60"
                :alt="categorie.name + ' second example image'"
              />
            </div>

            <!--
            <img
              :src="categorie.imagetwo"
              :alt="categorie.name + ' second example image'"
              class="w-8/12 rounded-lg pointer-events-auto"
              v-if="
                categorie.name === 'University projects' ||
                categorie.name === 'Personal projects' ||
                categorie.name === 'Websites' ||
                categorie.name === 'Digital art' ||
                categorie.name === 'Branding and marketing'
              "
            />-->

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

  <!--SVG filter for images-->
  <!--SVG filter for images-->
  <!--SVG filter for images-->

  <svg xmlns="http://www.w3.org/2000/svg">
    <filter id="svgSharpen">
      <feConvolveMatrix
        order="3 3"
        preserveAlpha="true"
        divisor="1"
        bias="0"
        kernelMatrix="-1,-1,-1 -1,9,-1 -1,-1,-1"
      />
    </filter>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg">
    <filter id="svgGradientMap">
      <fecolormatrix type="saturate" values="0" />
      <feComponentTransfer color-interpolation-filters="sRGB">
        <feFuncR
          type="table"
          tableValues="0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.99,0.97,0.96,0.94,0.92,0.9,0.88,0.87,0.85,0.83,0.81,0.79,0.78,0.76,0.74,0.72,0.7,0.69,0.67,0.65,0.63,0.61,0.6,0.58,0.56,0.54,0.52,0.51,0.49,0.47,0.45,0.43,0.41,0.4,0.38,0.36,0.34,0.32,0.31,0.29,0.27,0.25,0.23,0.22,0.2,0.18,0.16,0.14,0.13,0.11,0.09,0.07,0.05,0.04,0.02,0"
        />
        <feFuncG
          type="table"
          tableValues="1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0.98,0.96,0.95,0.93,0.91,0.89,0.87,0.85,0.84,0.82,0.8,0.78,0.76,0.75,0.73,0.71,0.69,0.67,0.65,0.64,0.62,0.6,0.58,0.56,0.55,0.53,0.51,0.49,0.47,0.45,0.44,0.42,0.4,0.38,0.36,0.35,0.33,0.31,0.29,0.27,0.25,0.24,0.22,0.2,0.18,0.16,0.15,0.13,0.11,0.09,0.07,0.05,0.04,0.02,0"
        />
        <feFuncB
          type="table"
          tableValues="0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.45,0.44,0.43,0.43,0.42,0.41,0.4,0.39,0.39,0.38,0.37,0.36,0.35,0.34,0.34,0.33,0.32,0.31,0.3,0.3,0.29,0.28,0.27,0.26,0.25,0.25,0.24,0.23,0.22,0.21,0.2,0.2,0.19,0.18,0.17,0.16,0.16,0.15,0.14,0.13,0.12,0.11,0.11,0.1,0.09,0.08,0.07,0.07,0.06,0.05,0.04,0.03,0.02,0.02,0.01,0"
        />
      </feComponentTransfer>
    </filter>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg">
    <filter id="svgThreshold">
      <feComponentTransfer>
        <feFuncR type="discrete" tableValues=" 0 0 0 1" />
        <feFuncG type="discrete" tableValues=" 0 0 0 1" />
        <feFuncB type="discrete" tableValues=" 0 0 0 1" />
      </feComponentTransfer>
    </filter>
  </svg>
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
  BokehPass,
  FilmPass,
  FXAAPass,
  HalftonePass,
  SMAAPass,
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

//import élément annotation planetes
import AnnotationPlanetText from "./AnnotationPlanetText.vue";
import AnnotationPlanetImgOne from "./AnnotationPlanetImgOne.vue";
import AnnotationPlanetImgTwo from "./AnnotationPlanetImgTwo.vue";

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
  components: {
    AnnotationPlanetText,
    AnnotationPlanetImgOne,
    AnnotationPlanetImgTwo,
  },
};

// script pour rendre la distance caméra-cube responsive
let cameraFocusResponsive = 0;
if (window.screen.width <= 760) {
  cameraFocusResponsive = 140;
}
if (window.screen.width > 760) {
  cameraFocusResponsive = 100;
}
</script>

<style scoped>
img {
  filter: url(#svgSharpen);
}

.imageContainer {
  position: relative;
  width: max-content;
}

.foregroundImg {
  position: relative;
  z-index: 2;
  border-radius: 10px;
}
.backgroundImg {
  position: absolute;
  top: 0px;
  left: 0px;
  transform: scale(0.9);
  z-index: 1;
  filter: blur(25px);
  border-radius: 10px;
}
</style>
