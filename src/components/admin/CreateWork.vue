<template>
  <!--WORK || WORK || WORK-->
  <!-- haut du template-->
  <div class="p-3">
    <h1 class="portfolio-h1">
      Ajouter un <span class="text-purple-portfolio">work</span>
    </h1>
  </div>
  <!--fin hero template-->

  <form
    class="flex flex-col gap-2 p-4 mb-20"
    enctype="multipart/form-data"
    @submit.prevent="createWork"
  >
    <input
      type="text"
      class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
      v-model="work.id"
      placeholder="Créer un id pour le work"
      required
    />
    <input
      type="text"
      class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
      v-model="work.name"
      placeholder="Nom du work"
      required
    />
    <!--CATEGORIES-->
    <!--CATEGORIES-->
    <!--CATEGORIES-->
    <label class="portfolio-h2 text-purple-portfolio">Catégories du work</label>
    <section
      class="w-10/12 grid grid-cols-3 gap-2"
      v-for="categorie in listeCategories"
      :key="categorie.id"
    >
      <!--Affichage de la catégorie-->
      <section
        class="flex flex-col gap-0 border-purple-portfolio border rounded-xl"
      >
        <div class="w-full grid grid-cols-2">
          <img
            :src="categorie.imageone"
            :alt="categorie.name + ', first image of this category'"
            class="rounded-tl-xl"
          />
          <img
            :src="categorie.imagetwo"
            :alt="categorie.name + ', second image of this category'"
            class="rounded-tr-xl"
          />
        </div>
        <div class="p-3 flex flex-col gap-1">
          <label class="portfolio-h3" for="categoryName">
            <input
              type="checkbox"
              id="categoryName"
              name="categoryName"
              :value="categorie"
            />
            {{ categorie.name }}
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

    <!--OUTILS-->
    <!--OUTILS-->
    <!--OUTILS-->
    <label class="portfolio-h2 text-purple-portfolio"
      >Outils utilisés pour le work</label
    >
    <div
      class="flex flex-col gap-1 justify-start w-full"
      v-for="outil in listeOutils"
      :key="outil.id"
    >
      <div class="flex flex-row gap-1 items-center">
        <input type="checkbox" v-model="work.outils" class="w-5 h-5" />
        <label class="text-xl">{{ outil.name }}</label>
      </div>
    </div>

    <!--DESCRIPTION-->
    <label class="portfolio-h2 text-purple-portfolio">Descriptions</label>
    <textarea
      v-model="work.firstdescription"
      cols="30"
      rows="10"
      class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
      required
    ></textarea>
    <textarea
      v-model="work.seconddescription"
      cols="30"
      rows="10"
      class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
      required
    ></textarea>
    <textarea
      v-model="work.thirddescription"
      cols="30"
      rows="10"
      class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
      required
    ></textarea>
    <!--Photo-->
    <div class="flex flex-col">
      <span class="portfolio-h2 text-purple-portfolio">Photo du work</span>
      <input
        type="file"
        class="flex flex-wrap"
        ref="file"
        id="file"
        @change="previewImage"
        required
      />
    </div>
    <div>
      <span class="italic">Aperçu de la photo choisie</span>

      <img class="w-fit object-center object-cover" :src="imageData" />
    </div>

    <button class="portfolio-button-white" type="submit">Créer</button>
  </form>
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

      work: {
        name: "", // NOM WORK
        categories: [], // CATEGORIES WORK
        outils: [], // OUTILS WORK
        photo: "", // IMAGE WORK

        // descriptions du work
        firstdescription: "",
        seconddescription: "",
        thirddescription: "",
      },

      listeCategories: [], // Liste des quêtes synchronisée - collection quêtes de Firebase
      listeOutils: [], // Liste des CATEGORIES DE QUÊTES synchronisée - collection cat de Firebase
    };
  },
  mounted() {
    // Montage de la vue
    this.getCategories();
    this.getOutils();
  },
  methods: {
    previewImage: function (event) {
      // Mise à jour de la photo de l'artiste
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo de l'artiste
      this.work.photo = this.file.name;
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async getCategories() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document catégorie
      const dbCategories = collection(firestore, "categories");
      // Liste des concerts triés sur leur date
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
      const firestore = getFirestore();
      const dbDiff = collection(firestore, "outils");
      const query = await onSnapshot(dbDiff, (snapshot) => {
        this.listeOutils = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async createWork() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "works/" + this.work.photo);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then(
        (snapshot) => {
          console.log("Uploaded a base64 string");
          // Création de l'artiste sur le Firestore
          const db = getFirestore();
          const docRef = addDoc(collection(db, "works"), this.work);
        }
      );
      console.log("Work crée : " + this.work);
    },
  },
};
</script>
