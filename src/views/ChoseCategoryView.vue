<template>
  <h1 class="portfolio-h1 p-8 py-4">Categories</h1>
  <div
    class="grid grid-cols-1 md:grid-cols-2 w-full justify-center items-center gap-4 p-8"
  >
    <!--POUR LE BG DE LA DIV :style=""-->
    <div v-for="categorie in listeCategories" :key="categorie.id">
      <RouterLink
        :to="{
          name: 'ListeCategorieView',
          params: { id: categorie.id },
        }"
        class="w-full h-[200px]"
      >
        <div
          class="w-full h-[200px] p-4 bg-cover bg-bottom flex items-end"
          :style="{
            backgroundImage: `linear-gradient(rgba(0,0,0,${categorie.backgroundLinearGradient})0%,rgba(0,0,0,${categorie.backgroundLinearGradient})100%),url('${categorie.imageone}')`,
          }"
          @mouseenter="categorie.backgroundLinearGradient = '0.4'"
          @mouseleave="categorie.backgroundLinearGradient = '0.7'"
        >
          <h2 class="text-white portfolio-h2">{{ categorie.name }}</h2>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

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
  name: "ChoseCategoryView",
  data() {
    return {
      categorie: {
        backgroundLinearGradient: "0.6",
      },
      listeCategories: [], // Liste des catégories synchronisée - collection categories de Firebase
    };
  },

  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document catégorie
      const dbCategories = collection(firestore, "categories");
      // Liste des catégories triés sur leur date
      const q = query(dbCategories, orderBy("importance", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeCategories = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Récupération des images de chaque catégorie
        // parcours de la liste
        this.listeCategories.forEach(function (categorie) {
          categorie.backgroundLinearGradient = "0.7";
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
</script>
