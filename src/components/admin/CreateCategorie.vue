<template>
  <!--CATEGORIE || CATEGORIE || CATEGORIE-->
  <!-- haut du template-->
  <div class="p-3">
    <h1 class="portfolio-h1">
      Créer une <span class="text-purple-portfolio">catégorie</span>
    </h1>
  </div>
  <!--fin hero template-->
  <!--Div contenant le formulaire-->
  <form
    class="flex flex-col gap-2 p-2 mb-20"
    enctype="multipart/form-data"
    @submit.prevent="createCategorie"
  >
    <input
      type="text"
      class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
      v-model="categorie.name"
      placeholder="Nom catégorie"
      required
    />
    <input
      type="number"
      class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
      v-model="categorie.works"
      placeholder="Nombre de travaux dans la catégorie"
      required
    />

    <!--DETAILS (PLANETE)-->
    <section
      class="p-4 bg-purple-portfolio rounded-lg flex flex-col gap-2 text-black"
    >
      <h3 class="portfolio-h3 text-white">Détails de la catégorie</h3>
      <input
        type="text"
        class="w-full max-w-2xl p-2 rounded-lg"
        placeholder="Alternative name"
        v-model="categorie.alternativeName"
        required
      />
      <input
        type="text"
        class="w-full max-w-2xl p-2 rounded-lg"
        placeholder="Inclination"
        v-model="categorie.inclination"
        required
      />
      <input
        type="text"
        class="w-full max-w-2xl p-2 rounded-lg"
        placeholder="Radius"
        v-model="categorie.radius"
        required
      />
      <input
        type="text"
        class="w-full max-w-2xl p-2 rounded-lg"
        placeholder="Surface area"
        v-model="categorie.surfaceArea"
        required
      />
      <input
        type="text"
        class="w-full max-w-2xl p-2 rounded-lg"
        placeholder="Volume"
        v-model="categorie.volume"
        required
      />
      <input
        type="text"
        class="w-full max-w-2xl p-2 rounded-lg"
        placeholder="Mass"
        v-model="categorie.mass"
        required
      />
      <input
        type="text"
        class="w-full max-w-2xl p-2 rounded-lg"
        placeholder="Temperature"
        v-model="categorie.temperature"
        required
      />
      <input
        type="text"
        class="w-full max-w-2xl p-2 rounded-lg"
        placeholder="Surface pressure"
        v-model="categorie.surfacePressure"
        required
      />
      <input
        type="text"
        class="w-full max-w-2xl p-2 rounded-lg"
        placeholder="Apparent magnitude"
        v-model="categorie.apparentMagnitude"
        required
      />
    </section>

    <hr class="border border-purple-portfolio my-10" />
    <!--Ajout de photos-->
    <article class="grid grid-cols-2 justify-items-start">
      <!--Photo1-->
      <section>
        <div class="flex flex-col">
          <span class="font-medium text-purple-portfolio"
            >Photo de la catégorie</span
          >
          <input
            type="file"
            class="flex flex-wrap"
            ref="file"
            id="file"
            @change="previewImage"
          />
        </div>
        <div>
          <span class="italic">Aperçu de la photo choisie</span>
          <img
            class="w-40 bg-center object-cover md:w-48 lg:w-52"
            :src="imageData"
          />
        </div>
      </section>
      <!--Photo2-->
      <section>
        <div class="flex flex-col">
          <span class="font-medium text-purple-portfolio"
            >Photo de la catégorie n°2</span
          >
          <input
            type="file"
            class="flex flex-wrap"
            ref="file2"
            id="file2"
            @change="previewImage2"
          />
        </div>
        <div>
          <span class="italic">Aperçu de la photo choisie</span>
          <img
            class="w-40 bg-center object-cover md:w-48 lg:w-52"
            :src="imageData2"
          />
        </div>
      </section>
    </article>

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
  name: "QuestCreateView",
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
    };
  },

  methods: {
    previewImage: function (event) {
      // Mise à jour de la photo
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo
      this.categorie.imageone = this.file.name;
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
    previewImage2: function (event) {
      // Mise à jour de la photo
      this.file2 = this.$refs.file2.files[0];
      // Récupérer le nom du fichier pour la photo
      this.categorie.imagetwo = this.file2.name;
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
          this.imageData2 = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async createCategorie() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "categories/" + this.categorie.imageone);
      const refStorage2 = ref(storage, "categories/" + this.categorie.imagetwo);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then(
        (snapshot) => {
          console.log("Uploaded a base64 string");
          const photo2Ref = uploadString(
            refStorage2,
            this.imageData2,
            "data_url"
          );
          // Création de l'artiste sur le Firestore
          const db = getFirestore();
          const docRef = addDoc(collection(db, "categories"), this.categorie);
        }
      );
      console.log("Catégorie créée : " + this.categorie);
    },
  },
};
</script>
