<template>
  <!--Cube du fond-->
  <Renderer
    ref="rendererC"
    antialias
    :orbit-ctrl="{ enableDamping: true, enableZoom: false, enablePan: false }"
    resize="window"
    class="h-screen inset-0 -z-10"
  >
    <Camera :position="{ z: cameraFocusResponsive }" />
    <Scene>
      <PointLight color="#4444ff" :position="{ x: 0, y: -100, z: -100 }" />
      <PointLight color="#4444ff" :position="{ x: 0, y: 100, z: 50 }" />
      <PointLight color="#4444ff" :position="{ y: 0, z: 4000 }" />

      <Box
        ref="meshC"
        :size="3"
        :rotation="{ x: Math.PI / 4, y: Math.PI / 4, z: Math.PI / 4 }"
        :scale="{ x: 12, y: 12, z: 12 }"
        :position="{ x: 0, y: 0, z: 0 }"
        :cast-shadow="true"
        :receive-shadow="true"
      >
        <LambertMaterial>
          <Texture src="/images/textures/telio-arts-icon.jpg" />
        </LambertMaterial>
        <!--
        <BasicMaterial>
          <Texture src="/images/textures/telio-arts-icon.jpg" />
        </BasicMaterial>-->
      </Box>
    </Scene>

    <!--Effet améliorant le rendu-->
    <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="1.2" />
    </EffectComposer>
  </Renderer>
  <!--Fin rendu du cube-->

  <!--Bg black-->
  <div
    class="inset-0 w-full h-screen bg-black opacity-[0.65] absolute pointer-events-none z-0"
  ></div>

  <!-- ACCUEIL CONTENT-->
  <!-- ACCUEIL CONTENT-->
  <!-- ACCUEIL CONTENT-->
  <article
    class="inset-0 w-full h-screen bg-transparent absolute text-white pointer-events-none z-10 flex flex-col justify-between"
  >
    <!--ACCUEIL HEADER-->
    <section
      class="flex flex-col gap-3 justify-center items-center md:flex-row md:justify-between w-full top-0 p-4 px-1 md:px-6 font-light uppercase"
    >
      <RouterLink to="/" class="pointer-events-auto text-sm"
        >Back landing page</RouterLink
      >
      <RouterLink to="/home" class="pointer-events-auto text-sm"
        >Back to spaceship</RouterLink
      >
    </section>

    <!-- ACCUEIL MIDDLE-->
    <section
      class="flex justify-center items-center text-center flex-col gap-0 px-1 py-5 md:p-5"
    >
      <h1
        class="portfolio-h1 text-5xl md:text-7xl uppercase pointer-events-auto"
      >
        Connexion
      </h1>

      <form
        class="py-5 px-5 md:px-10 w-11/12 md:w-2/3 m-auto"
        @submit.prevent="onCnx()"
      >
        <div class="flex flex-col gap-12">
          <div class="flex flex-col">
            <label class="font-black">Adresse mail</label>
            <input
              type="text"
              class="portfolio-input pointer-events-auto"
              placeholder="Mail"
              name="mail"
              v-model="user.email"
              required
            />
          </div>
          <div class="flex flex-col">
            <label class="font-black">Mot de passe</label>
            <input
              type="password"
              class="portfolio-input pointer-events-auto"
              placeholder="Password"
              name="Password"
              v-model="user.password"
              required
            />
          </div>

          <div class="w-full flex flex-col gap-5 md:flex-row md:justify-evenly">
            <button
              class="portfolio-button-white pointer-events-auto"
              type="submit"
            >
              Se connecter
            </button>
          </div>
        </div>
      </form>
    </section>

    <!-- ACCUEIL FOOTER-->
    <section class="flex flex-col justify-center items-center p-4">
      <!--Mentions légales-->
      <div class="flex flex-col md:flex-row gap-1 text-zinc-600">
        <p class="pointer-events-auto">© Eliot Gros, Franche-Comté, 2023 |</p>
        <RouterLink to="/" class="pointer-events-auto underline"
          >Legacy</RouterLink
        >
      </div>
    </section>
  </article>
</template>

<style scoped>
/* Style pour la scène 3D */
body {
  margin: 0;
}
canvas {
  display: block;
  width: 100%;
}
</style>

<script>
import {
  getAuth, // Fonction générale d'authentification
  signInWithEmailAndPassword, // Se connecter avec un email + mot de passe
  createUserWithEmailAndPassword, // créer un user
  signOut, // Se deconnecter
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },

      message: null,
    };
  },
  mounted() {
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "Vous êtes connecté sous : " + this.user.email;
    } else {
      this.message = "Connectez-vous.";
    }
  },
  methods: {
    onCnx() {
      //se connecter avec un mots de pass
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          alert("Vous êtes connecté sous : " + this.user.email);
          this.$router.push("/");
        })
        .catch((error) => {
          //erreur co
          alert("Erreur : " + error);
        });
    },
  },
};

// script pour rendre la distance caméra-cube responsive
let cameraFocusResponsive = 0;
if (window.screen.width <= 500) {
  cameraFocusResponsive = 140;
}
if (window.screen.width > 500) {
  cameraFocusResponsive = 80;
}
</script>

<script setup>
import { ref, onMounted } from "vue";
import {
  Box,
  Camera,
  LambertMaterial,
  BasicMaterial,
  PointLight,
  SpotLight,
  Renderer,
  Scene,
  Texture,
  propsValues,
  Plane,
  UnrealBloomPass,
  EffectComposer,
  RenderPass,
} from "troisjs";

// constantes ref
const rendererC = ref(); //renderer
const meshC = ref(); //mesh cube

// rotation des planètes constante
onMounted(() => {
  const renderer = rendererC.value;
  const mesh1 = meshC.value.mesh;
  renderer.onBeforeRender(() => {
    mesh1.rotation.x += 0.001;
  });
});
</script>
