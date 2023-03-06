<template>
  <div class="bg-white">
    <h1 class="portfolio-h1 m-4">
      {{ categorie.name }}
    </h1>

    <!--PARENT pour la colonne des works-->
    <article>
      <!--SECTION pour afficher les works-->
      <section v-for="work in listeWorks" :key="work.name">
        <!--DIV propre à chaque work : apparition selon sa catégorie
        work.categories[0] -> catégories du work
        -->
        <article
          v-if="
            (work.categories[0].name === categorie.name) |
              (work.categories[1].name === categorie.name) |
              (work.categories[2].name === categorie.name) |
              (work.categories[3].name === categorie.name) |
              (work.categories[4].name === categorie.name) |
              (work.categories[5].name === categorie.name) |
              (work.categories[6].name === categorie.name)
          "
          class="grid grid-cols-1 md:grid-rows-1 md:grid-cols-[75%,25%] h-full md:h-3/6"
        >
          <!--partie 1 du grid : image + titre du projet-->

          <RouterLink
            :to="{
              name: 'WorkView',
              params: { id: work.id },
            }"
            class="w-full flex flex-col justify-end p-5 md:p-8 bg-center bg-cover"
            :style="{
              backgroundImage: `linear-gradient(rgba(0,0,0,${work.backgroundLinearGradient})0%,rgba(0,0,0,${work.backgroundLinearGradient})100%),url('${work.photo}')`,
            }"
            @mouseenter="work.backgroundLinearGradient = '0.4'"
            @mouseleave="work.backgroundLinearGradient = '0.7'"
          >
            <div class="flex justify-between items-center">
              <h3 class="portfolio-h1 text-3xl md:text-4xl lg:text-5xl invert">
                {{ work.name }}
              </h3>
              <buttonArrow class="w-10 md:w-16 h-10 md:h-16" />
            </div>
          </RouterLink>

          <!--partie 2 du grid : OUTILS + CATEGORIES-->
          <section
            class="bg-black text-yellow-portfolio uppercase tracking-wide p-5 grid-rows-2 h-full gap-5 md:grid hidden"
          >
            <!--Outils du work-->
            <div>
              <h2 class="font-bold text-xl my-1">Tools</h2>
              <div class="flex flex-row flex-wrap gap-1">
                <section v-for="toolWork in work.outils" :key="toolWork.id">
                  <section v-if="toolWork.name">
                    <section v-for="outil in listeOutils" :key="outil.name">
                      <!--Contenant des outils :-->
                      <section
                        v-if="
                          outil.name ===
                          toolWork.name /*outil Liste = outilProjet ?*/
                        "
                      >
                        <!--Contenu d'une case jaune d'un outil :-->
                        <div
                          class="portfolio-listsworks-buttons"
                          @mouseenter="outil.brightness = '70%'"
                          @mouseleave="outil.brightness = '100%'"
                        >
                          <!--image de l'outil-->
                          <img
                            :src="outil.image"
                            :alt="toolWork.name"
                            class="portfolio-toolicon-size"
                            :style="{
                              filter: `brightness(${outil.brightness})`,
                            }"
                          />
                          <!--Nom de l'outil-->
                          <p>
                            {{ toolWork.name }}
                          </p>
                        </div>
                      </section>
                      <section></section>
                    </section>
                  </section>
                  <section></section>
                </section>
              </div>
            </div>

            <!---->

            <!--Catégories du work-->
            <div>
              <h2 class="font-bold text-xl my-1">Categories</h2>
              <div class="flex flex-row flex-wrap gap-1">
                <section
                  v-for="categoryWork in work.categories"
                  :key="categoryWork.name"
                >
                  <section v-if="categoryWork.name">
                    <section
                      v-for="categoryFromAll in listeCategories"
                      :key="categoryFromAll.id"
                    >
                      <section
                        v-if="
                          categoryFromAll.name ===
                          categoryWork.name /*outil Liste = outilProjet ?*/
                        "
                      >
                        <RouterLink
                          :to="{
                            name: 'ListeCategorieView',
                            params: { id: categoryFromAll.id },
                          }"
                          class="portfolio-listsworks-buttons py-3"
                          @click="reloadPageFunction()"
                        >
                          <p>{{ categoryWork.name }}</p>
                        </RouterLink>
                      </section>
                    </section>
                  </section>
                </section>
              </div>
            </div>
          </section>
        </article>
      </section>
    </article>
  </div>
</template>

<script setup>
import buttonArrow from "@/components/icons/buttonArrow.vue";

function reloadPageFunction() {
  setTimeout(() => {
    document.location.reload();
  }, 1);
}
</script>

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
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import { emitter } from "@/main.js";

export default {
  name: "ListeCategorieView",
  data() {
    return {
      imageData: null, // Image prévisualisée
      imageData2: null,

      outil: {
        brightness: "",
      },

      work: {
        backgroundLinearGradient: "",
      },

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

      listeWorks: [], // import des works firebase
      listeOutils: [], // import des outils firebase
      listeCategories: [], // import de la liste des catégories

      refCategorie: null, // Référence de la catégorie affichée
    };
  },

  mounted() {
    // Montage de la vue
    console.log("id catégorie", this.$route.params.id);

    this.getCategories(this.$route.params.id);
    this.getAllCategories();
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

    async getAllCategories() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document catégorie
      const dbCategories = collection(firestore, "categories");
      // Liste des catégories triés sur leur date
      const q = query(dbCategories, orderBy("importance", "asc"));
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
          outil.brightness = "100%";
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
      const q = query(dbWorks, orderBy("importance", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeWorks = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Récupération des images de chaque work
        // parcours de la liste
        this.listeWorks.forEach(function (work) {
          work.backgroundLinearGradient = "0.6";
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
