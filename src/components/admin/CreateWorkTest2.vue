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
    <div class="flex flex-col gap-1">
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.categories[0].name"
        placeholder="Recopier le nom d'une catégorie"
      />
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.categories[1].name"
        placeholder="Recopier le nom d'une catégorie"
      />
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.categories[2].name"
        placeholder="Recopier le nom d'une catégorie"
      />
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.categories[3].name"
        placeholder="Recopier le nom d'une catégorie"
      />
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.categories[4].name"
        placeholder="Recopier le nom d'une catégorie"
      />
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.categories[5].name"
        placeholder="Recopier le nom d'une catégorie"
      />
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.categories[6].name"
        placeholder="Recopier le nom d'une catégorie"
      />
    </div>

    <section class="w-10/12 grid grid-cols-3 gap-2">
      <!--Affichage de la catégorie-->
      <section
        class="flex flex-col gap-0 border-gray-700 bg-gray-500 text-gray-300 border rounded-xl"
        v-for="categorie in listeCategories"
        :key="categorie.id"
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
    <label class="portfolio-h2 text-purple-portfolio">Outils du work</label>
    <div class="flex flex-col gap-1">
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.outils[0].name"
        placeholder="Recopier le nom d'un outil"
      />
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.outils[1].name"
        placeholder="Recopier le nom d'un outil"
      />
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.outils[2].name"
        placeholder="Recopier le nom d'un outil"
      />
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.outils[3].name"
        placeholder="Recopier le nom d'un outil"
      />
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.outils[4].name"
        placeholder="Recopier le nom d'un outil"
      />
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.outils[5].name"
        placeholder="Recopier le nom d'un outil"
      />
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="work.outils[6].name"
        placeholder="Recopier le nom d'un outil"
      />
    </div>
    <!--EXEMPLES D'OUTILS-->
    <section class="w-10/12 grid grid-cols-3 gap-2">
      <!--Affichage de l'outil-->
      <section
        class="flex flex-row items-center justify-center gap-0 border-gray-700 bg-gray-500 text-gray-300 border rounded-xl w-fit"
        v-for="outil in listeOutils"
        :key="outil.id"
      >
        <img
          :src="outil.image"
          :alt="outil.image + ', first image of this category'"
          class="rounded-xl w-10 h-10 p-1 object-cover object-center"
        />

        <div class="p-3 flex flex-col gap-1">
          <label class="portfolio-text" for="categoryName">
            {{ outil.name }}
          </label>
        </div>
      </section>
    </section>

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
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document catégorie
      const dbOutils = collection(firestore, "outils");
      // Liste des concerts triés sur leur date
      const q = query(dbOutils, orderBy("name", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeOutils = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Récupération des images de chaque catégorie
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
