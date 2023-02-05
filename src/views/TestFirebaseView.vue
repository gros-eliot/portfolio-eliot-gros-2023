<template>
  <h1 class="portfolio-h1">Afficher les projets de la catégorie :</h1>
  <section v-for="categorie in listeCategories" :key="categorie.id">
    <p>{{ categorie.name }}</p>
  </section>

  <hr class="my-10" />
  <article>
    <section v-for="work in listeWorks" :key="work.id">
      <div
        v-if="
          (work.categories[0].name === 'test') |
            (work.categories[1].name === 'test') |
            (work.categories[2].name === 'test') |
            (work.categories[3].name === 'test') |
            (work.categories[4].name === 'test') |
            (work.categories[5].name === 'test') |
            (work.categories[6].name === 'test')
        "
      >
        <p>{{ work.name }}</p>
        <img :src="work.photo" />
        <p>{{ work.firstdescription }}</p>
        <p>{{ work.seconddescription }}</p>
        <p>{{ work.thirddescription }}</p>
      </div>
    </section>
  </article>
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
      imageData: null, // Image prévisualisée

      listeCategories: [], // Liste des catégories synchronisée - collection categories de Firebase
      listeOutils: [], // Liste des outils synchronisée - collection outils de Firebase
      listeWorks: [], // Liste des outils synchronisée - collection outils de Firebase
    };
  },
  mounted() {
    // Montage de la vue
    this.getCategories();
    this.getOutils();
    this.getWorks();
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

    async getWorks() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document works
      const dbWorks = collection(firestore, "works");
      // Liste des outils triés sur leur date
      const q = query(dbWorks, orderBy("name", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeWorks = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Récupération des images de chaque work
        // parcours de la liste
        this.listeWorks.forEach(function (work) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "works/" + work.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              work.photo = url;
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
