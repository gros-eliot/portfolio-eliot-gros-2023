<template>
  <div class="bg-white">
    <h1 class="portfolio-h1">
      {{ work.name }}
    </h1>
  </div>
</template>

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
  name: "WorkView",
  data() {
    return {
      imageData: null, // Image prévisualisée

      work: {
        name: "", // NOM WORK
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
        ], // CATEGORIES WORK

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
        ], // OUTILS WORK
        photo: "", // IMAGE WORK

        // descriptions du work
        firstdescription: "",
        seconddescription: "",
        thirddescription: "",
      },

      refWork: null, // Référence du work affiché

      listeCategories: [], // Liste des catégories synchronisée - collection categories de Firebase
      listeOutils: [], // Liste des outils synchronisée - collection outils de Firebase
    };
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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },
  },
};
</script>
