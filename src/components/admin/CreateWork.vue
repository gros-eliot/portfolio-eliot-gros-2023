<template>
  <!--CATEGORIE || CATEGORIE || CATEGORIE-->
  <!-- haut du template-->
  <div class="p-3">
    <h1>Créer une <span class="text-purple-portfolio">catégorie</span></h1>
  </div>
  <!--fin hero template-->
  <!--Div contenant le formulaire + le bouton de validation-->
  <div class="flex flex-col px-5 py-10 text-black">
    <!--Div contenant le formulaire-->
    <form
      class="flex flex-col gap-2"
      enctype="multipart/form-data"
      @submit.prevent="createCategorie"
    >
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="catName"
        placeholder="Nom catégorie"
        required
      />
      <input
        type="text"
        class="w-full max-w-2xl border rounded-lg border-purple-portfolio p-2 text-base text-black"
        v-model="catCountOfWorks"
        placeholder="Nombre de travaux dans la catégorie"
        required
      />

      <div class="flex flex-col">
        <span class="font-medium">Photo de la catégorie </span>
        <input
          type="file"
          class="jazznpop-input flex flex-wrap"
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

      <div class="flex flex-col mt-10">
        <span class="font-medium">Photo de la catégorie n°2</span>
        <input
          type="file"
          class="jazznpop-input flex flex-wrap"
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

      <button class="portfolio-button-white" type="submit" title="Création">
        Créer
      </button>
    </form>
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
  name: "QuestCreateView",
  data() {
    return {
      imageData: null, // Image prévisualisée

      categorie: {
        nom: "", // Pour la création d'un nouvelle quête (nom de la quête)
        cat: "", // Pour la création d'un nouvelle quête (cat de la catégorie de la quête)
        difficulty: "", // DIFFICULTE DE LA QUÊTE
        desc: "", // Pour la description de la quête
        date: "", // date de la quête
      },

      listeQueteSynchro: [], // Liste des quêtes synchronisée - collection quêtes de Firebase
      listeCategorie: [], // Liste des CATEGORIES DE QUÊTES synchronisée - collection cat de Firebase
      listeDifficulte: [], // Liste des DIFFICULTES synchronisée - collection cat de Firebase

      //
      //
      //
      user: {
        // User connecté
        email: null,
        password: null,
      },
      userInfo: null, // Informations complémentaires user connecté (sorte de listeCatégorie, listePays)
      name: "", // Titre de l'application ou nom du user
      avatar: null, // Avatar / image du user connecté
      isAdmin: false, // Si l'utilisateur est ou non administrateur
    };
  },
  mounted() {
    // Montage de la vue
    this.getQueteSynchro();
    this.getCategorie();
    this.getDifficulte();
  },
  methods: {
    previewImage: function (event) {
      // Mise à jour de la photo de l'artiste
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo de l'artiste
      this.artiste.photo = this.file.name;
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

    async getQueteSynchro() {
      const firestore = getFirestore();
      const dbQuete = collection(firestore, "categories");
      const query = await onSnapshot(dbQuete, (snapshot) => {
        this.listeQueteSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async getCategorie() {
      const firestore = getFirestore();
      const dbCat = collection(firestore, "outils");
      const query = await onSnapshot(dbCat, (snapshot) => {
        this.listeCategorie = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async getDifficulte() {
      const firestore = getFirestore();
      const dbDiff = collection(firestore, "projets");
      const query = await onSnapshot(dbDiff, (snapshot) => {
        this.listeDifficulte = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    async createArtiste() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "artiste/" + this.artiste.photo);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then(
        (snapshot) => {
          console.log("Uploaded a base64 string");
          // Création de l'artiste sur le Firestore
          const db = getFirestore();
          const docRef = addDoc(collection(db, "artiste"), this.artiste);
        }
      );
      // redirection sur la liste des  artistes
      this.$router.push("/artistes");
    },
  },
};
</script>
