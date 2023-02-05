<template>
  <h1 class="portfolio-h1">
    {{ categorie.name }}
  </h1>

  <hr class="my-2" />
  <article>
    <section v-for="work in listeWorks" :key="work.name">
      <div
        v-if="
          (work.categories[0].name === categorie.name) |
            (work.categories[1].name === categorie.name) |
            (work.categories[2].name === categorie.name) |
            (work.categories[3].name === categorie.name) |
            (work.categories[4].name === categorie.name) |
            (work.categories[5].name === categorie.name) |
            (work.categories[6].name === categorie.name)
        "
      >
        <p>{{ work.name }}</p>
        <img :src="work.photo" />
        <p v-for="categoryTool in work.outils" :key="categoryTool.id">
          {{ categoryTool.name }}
        </p>
        <p v-for="categoryWork in work.categories" :key="categoryWork.id">
          {{ categoryWork.name }}
        </p>
        <hr class="my-5" />
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
  name: "TestFirebaseView",
  data() {
    return {
      imageData: null, // Image prévisualisée
      imageData2: null,

      categorie: {
        name: "", // NOM CATEGORIE
        works: "", // NOMBRE PROJETS DANS CATEGORIE
        imageone: "", // IMAGE 1
        imagetwo: null, // IMAGE 2

        // DETAILS PLANETE
        alternativeName: "",
        inclination: "",
        radius: "",
        surfaceArea: "",
        volume: "",
        mass: "",
        temperature: "",
        surfacePressure: "",
        apparentMagnitude: "",
      },

      refCategorie: null, // Référence de la catégorie à modifier
    };
  },

  data() {
    return {
      imageData: "",
      categorie: {
        // Concert à créer
        nom: "", // son nom
        cat: "",
        cat2: "",
        date1: "", // sa date
        date2: "", // sa date (fin)
        time: "", // sa date (fin)
        description: "",
        photo: "", // sa photo (nom du fichier)
      },
      refCategorie: null, // Référence du concert à modifier

      listeWorks: [], // import des works firebase
    };
  },

  mounted() {
    // Montage de la vue
    console.log("id catégorie", this.$route.params.id);

    this.getCategories(this.$route.params.id);
    this.getOutils();
    this.getWorks();
  },
  methods: {
    async getCategories(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document concert
      // Récupération sur Firestore du concert via son id
      const docRef = doc(firestore, "categories", id);
      // Référence du concert concerné
      this.refCategorie = await getDoc(docRef);
      // Test si le concert demandé existe
      if (this.refCategorie.exists()) {
        // Si oui on récupère ses données
        this.categorie = this.refCategorie.data();
      } else {
        // Sinon simple message d'erreur
        this.console.log("Catégorie inexistant");
      }

      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du concert
      const spaceRef = ref(storage, "categories/" + this.categorie.imageone);
      const spaceRef2 = ref(storage, "categories/" + this.categorie.imagetwo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });

      getDownloadURL(spaceRef2)
        .then((url) => {
          // On remplace le nom du fichier
          // Par l'url complète de la photo
          this.imageData2 = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
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
