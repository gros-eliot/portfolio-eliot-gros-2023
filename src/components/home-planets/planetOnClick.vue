<template>
  <!--WORK || WORK || WORK-->
  <!-- haut du template-->
  <div class="p-3">
    <h1 class="portfolio-h1">
      Ajouter un <span class="text-purple-portfolio">work</span>
    </h1>
  </div>
  <!--fin hero template-->

  <section class="w-10/12 grid grid-cols-3 gap-2">
    <!--Affichage de la catégorie-->
    <section
      class="flex flex-col gap-0 border-gray-700 bg-gray-500 text-gray-300 border rounded-xl"
      v-for="categorie in listeCategories"
      :key="categorie.id"
    >
      <div class="p-3 flex flex-col gap-1">
        <label class="portfolio-h3" for="categoryName">
          <RouterLink
            :to="{ name: 'TestFirebaseView', params: { id: categorie.id } }"
            >{{ categorie.name }}</RouterLink
          >
        </label>
        <div class="grid grid-cols-2">
          <p class="text-xs">{{ categorie.alternativeName }}</p>
          <p class="text-xs">{{ categorie.volume }}</p>
          <p class="text-xs">{{ categorie.temperature }}</p>
          <p class="text-xs">{{ categorie.surfacePressure }}</p>
          <p class="text-xs">{{ categorie.surfaceArea }}</p>
          <p class="text-xs">{{ categorie.radius }}</p>
          <p class="text-xs">{{ categorie.mass }}</p>
          <p class="text-xs">{{ categorie.inclination }}</p>
          <p class="text-xs">{{ categorie.apparentMagnitude }}</p>
        </div>
      </div>
    </section>
    <!--<div class="flex flex-row gap-1 items-center">
        <input type="checkbox" v-model="work.categories" class="w-5 h-5" />
        <label class="text-xl">{{ categorie.name }}</label>
      </div>-->
  </section>

  <!--message de validation-->
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
  name: "CreateWorkComponent",
  data() {
    return {
      listeCategories: [], // Liste des catégories synchronisée - collection categories de Firebase
    };
  },
  mounted() {
    // Montage de la vue
    this.getCategories();
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
  },
};
</script>
