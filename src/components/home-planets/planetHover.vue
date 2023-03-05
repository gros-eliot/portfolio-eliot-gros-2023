<template>
  <article v-for="categorie in listeCategories" :key="categorie.id">
    <article v-if="categoryId === categorie.id">
      <article
        class="select-none flex-col gap-1 z-30 absolute inset-0 w-fit h-fit transition_display hidden lg:flex"
        id="informationPlanet"
      >
        <section class="bg-yellow-portfolio text-black rounded-xl p-3">
          <div class="w-40 flex flex-col gap-1">
            <p class="w-fit font-rubik-mono-one">
              {{ categorie.name }}
            </p>
            <p class="w-fit text-xs">{{ categorie.description }}</p>
            <p class="w-fit text-xs">Works in: {{ categorie.works }}</p>
            <p class="w-fit text-xs font-bold">
              Click on the planet for more...
            </p>
          </div>
        </section>
        <section class="text-yellow-portfolio text-[0.5rem]">
          <p>
            Inclination:
            <span class="font-thin">{{ categorie.inclination }}</span>
          </p>
          <p>
            Mass:
            <span class="font-thin">{{ categorie.mass }}</span>
          </p>
          <p>
            Surface pressure:
            <span class="font-thin">{{ categorie.surfacePressure }}</span>
          </p>
          <p>
            Temperature:
            <span class="font-thin">{{ categorie.temperature }}</span>
          </p>
        </section>
      </article>
    </article>
  </article>
</template>

<style scoped>
.transition_display {
  transition-property: display;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "planetOnClick",
  data() {
    return {
      listeCategories: [], // Liste des catégories synchronisée - collection categories de Firebase
    };
  },
  props: {
    categoryId: {
      type: String,
      required: true,
    },
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
