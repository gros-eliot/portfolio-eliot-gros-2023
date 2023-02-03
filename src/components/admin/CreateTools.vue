<template>
  <!--OUTILS || OUTILS || OUTILS-->
  <!-- haut du template-->
  <div class="p-3">
    <h1 class="portfolio-h1">
      Ajouter un <span class="text-purple-portfolio">outil</span>
    </h1>
  </div>
  <!--fin hero template-->
  <!--Div contenant le formulaire-->
  <form
    class="flex flex-col gap-2 p-4 mb-20"
    enctype="multipart/form-data"
    @submit.prevent="createOutil"
  >
    <input
      type="text"
      class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
      v-model="outil.name"
      placeholder="Nom outil"
      required
    />

    <section>
      <div class="flex flex-col">
        <span class="font-medium text-purple-portfolio"
          >Icône de l'outil (svg)</span
        >
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
        <span class="italic">Aperçu de l'icon</span>
        <img
          class="w-40 object-center object-cover md:w-48 lg:w-52"
          :src="imageData"
        />
      </div>
    </section>

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
  name: "CreateToolsComponent",
  data() {
    return {
      imageData: null, // Image prévisualisée

      outil: {
        name: "", // NOM OUTIL
        image: "", // IMAGE
      },
    };
  },

  methods: {
    previewImage: function (event) {
      // Mise à jour de la photo
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo
      this.outil.image = this.file.name;
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
          // lecture du fichier pour mettre à jour la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async createOutil() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "outils/" + this.outil.image);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then(
        (snapshot) => {
          console.log("Uploaded a base64 string");
          // Création de l'artiste sur le Firestore
          const db = getFirestore();
          const docRef = addDoc(collection(db, "outils"), this.outil);
        }
      );
      console.log("Outil créée : " + this.outil);
    },
  },
};
</script>
