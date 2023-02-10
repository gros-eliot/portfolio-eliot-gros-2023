<template>
  <article @eventname="updateparent">
    <!--DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || -->
    <!--DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || -->
    <!--DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || -->
    <Renderer
      ref="rendererC"
      antialias
      :orbit-ctrl="{ enableDamping: true }"
      resize="window"
      class="h-screen"
      v-if="planetOnClickVisible === false"
    >
      <Camera :position="{ z: 100 }" />
      <Scene>
        <PointLight :position="{ y: 50 }" :intensity="0.5" />
        <!--Test modele-->
        <!--
        <GltfModel
          src="/models/air_force_v2-gltb.glb"
          @load="onReady"
          @progress="onProgress"
          @error="onError"
          :position="{ x: -200, y: 0, z: 0 }"
          :scale="{ x: 30, y: 30, z: 30 }"
        />-->
        <!--PLANETE 1-->
        <Sphere
          ref="meshC"
          :size="1"
          :rotation="{ y: Math.PI / 2, z: Math.PI / 2 }"
          :scale="{ x: 10, y: 10, z: 10 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
          @click="planetOnClickVisible = !planetOnClickVisible"
          @pointer-over="planet1Hover"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_mars.jpg" />
          </BasicMaterial>
        </Sphere>
        <!--PLANETE 2-->
        <Sphere
          ref="meshD"
          :size="2"
          :rotation="{ x: Math.PI / 4, y: Math.PI / 4, z: Math.PI / 4 }"
          :scale="{ x: 12, y: 12, z: 12 }"
          :position="{ x: 100, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
        >
          <!--  @click="planet2Click(), planet2ClickSetup()"
          @pointer-over="planet2Hover"-->
          <BasicMaterial>
            <Texture src="/textures/2k_neptune.jpg" />
          </BasicMaterial>
        </Sphere>
      </Scene>
      <!--Effet améliorant le rendu-->
      <EffectComposer>
        <RenderPass />
        <UnrealBloomPass :strength="1" />
      </EffectComposer>
    </Renderer>
    <!--FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || -->
    <!--FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || -->
    <!--FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || -->
    <!--ONCLICK COMPOSANT-->
    <!--ONCLICK COMPOSANT-->
    <!--ONCLICK COMPOSANT-->
    <!--Planete volunteering-->
    <PlanetOnClick
      :categoryId="'HrSPZKspOCzjj0jfTJEA'"
      :texturePlanet="'/textures/2k_venus_atmosphere.jpg'"
      v-if="planetOnClickVisible === true"
    />
    <div
      class="w-full h-fit flex justify-center items-center absolute bottom-0 p-8 z-50"
    >
      <button
        @click="(planetOnClickVisible = false), (PlanetOneHover = false)"
        v-if="planetOnClickVisible === true"
        class="portfolio-button-black w-fit text-sm"
      >
        Back
      </button>
    </div>
    <!--IMPORTANT :
    <PlanetOnClick :categoryId="selectedCategoryId" v-if="planetOnClickVisible === true" />
    <planet1 @click="selectedCategoryId = '...'  // planetOnClickVisible = true" />
    <planet2 @click="selectedCategoryId = '...2' // planetOnClickVisible = true" />
    export default
    data return selectedCategoryId = planet1Id (par défaut)
    planetOnClickVisible = false (par défaut)
    
    FIN de IMPORTANT.
    -->
    <!--FIN ONCLICK COMPOSANT-->
    <!--FIN ONCLICK COMPOSANT-->
    <!--FIN ONCLICK COMPOSANT-->
    <!-- HOVERS ELEMENTS -->
    <!-- HOVERS ELEMENTS -->
    <!-- HOVERS ELEMENTS -->
    <!--CE QU'AFFICHE LE HOVER sur la planète 1-->
    <div
      class="bg-yellow-portfolio text-black hidden z-0 p-10 absolute select-none inset-0 w-fit h-fit transition_display"
      id="informationPlanet"
      :class="{
        'md:block': PlanetOneHover === true && $route.name === 'HomeView',
      }"
      v-if="planetOnClickVisible === false"
    >
      <p class="select-none">TEST</p>
    </div>
    <!--FIN HOVERS ELEMENTS -->
    <!--FIN HOVERS ELEMENTS -->
    <!--FIN HOVERS ELEMENTS -->
    <!--UI spaceship interface-->
    <!--UI spaceship interface-->
    <!--UI spaceship interface-->
    <section
      class="h-screen w-full absolute select-none bg-[linear-gradient(180deg,rgba(0,0,0,0)60.71%,rgba(0,0,0,0)62.81%,rgba(33,37,54,60)100%)] z-10 inset-0 pointer-events-none"
    >
      <!--Top-->
      <div class="w-full top-0 flex justify-between absolute p-4 pt-10">
        <TopLeft class="w-24 h-24 md:w-48 md:h-48" />
        <p
          class="md:hidden block text-white w-72 text-[8px] font-thin select-auto"
        >
          <strong>In case of you need help</strong>, please use the menu button
          in the top of your screen.
        </p>
        <TopRight class="w-24 h-24 md:w-48 md:h-48" />
      </div>
      <!--Middle-->
      <div class="w-full h-screen absolute flex justify-center items-center">
        <Middle class="w-20 h-20" />
      </div>
      <!--BOTTOM-->
      <section class="absolute bottom-0 text-white flex flex-col w-full p-4">
        <div class="flex justify-between items-end w-full p-4">
          <!--Battery-->
          <div
            class="w-fit flex flex-col gap-1 text-white text-[12px] font-thin h-fit"
          >
            <p>Battery:&nbsp;<strong>on</strong></p>
            <div id="containerBattery">
              <!--Le % de batterie de l'appareil s'affichera ici grâce à la fonction JS-->
            </div>
            <div
              class="border-white border rounded-md p-1 w-fit h-12 flex justify-end items-end"
            >
              <div
                class="bg-yellow-portfolio w-4 rounded-sm"
                id="batteryIndicator"
              ></div>
            </div>
          </div>
          <!--Bottom right-->
          <div
            class="w-fit md:flex items-end p-4 pl-8 pt-8 spaceship_ui_bottom_right h-fit hidden"
          >
            <p class="text-white w-72 text-[8px] font-thin h-fit select-auto">
              <strong>In case of you need help</strong>, please use the menu
              button in the top of your screen.
            </p>
          </div>
        </div>
        <!--Bottom of bottom : measures-->
        <BottomMeasure class="w-fit overflow-hidden h-1 md:h-2 lg:h-4 m-auto" />
      </section>
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

.spaceship_ui_bottom_right {
  border-width: 2px 0px 0px 2px;
  border-style: dashed;
  border-color: #ffffff;
  border-radius: 60px 0px 0px 0px;
}

.transition_display {
  transition-property: display;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import {
  Sphere,
  Camera,
  LambertMaterial,
  BasicMaterial,
  PointLight,
  Renderer,
  Scene,
  Texture,
  propsValues,
  GltfModel,
  Plane,
  UnrealBloomPass,
  EffectComposer,
  RenderPass,
} from "troisjs";

// imports éléments spaceshipUI
import TopLeft from "../components/spaceship-ui-components/TopLeft.vue";
import TopRight from "../components/spaceship-ui-components/TopRight.vue";
import Middle from "../components/spaceship-ui-components/Middle.vue";
import BottomMeasure from "../components/spaceship-ui-components/BottomMeasure.vue";

// imports Planet on click
import PlanetOnClick from "../components/home-planets/planetOnClick.vue";

// constantes ref
const rendererC = ref(); //renderer
const meshC = ref(); //mesh planete 1
const meshD = ref(); //mesh planete 2

let levelBattery = ref(0); // Niveau de la batterie
// Niveau de la batterie
navigator.getBattery().then(function (battery) {
  levelBattery = battery.level;
  console.log("Battery level : " + levelBattery * 100 + " %");

  let batteryIndicator = document.querySelector("#batteryIndicator");
  batteryIndicator.style.height = "1%";
  batteryIndicator.style.height = levelBattery * 100 + "%";

  // AJOUT du % de la batterie dans le template
  document
    .getElementById("containerBattery")
    .insertAdjacentHTML("beforeend", "<p>" + levelBattery * 100 + "% </p>");
});

// rotation des planètes constante
onMounted(() => {
  const renderer = rendererC.value;
  const mesh1 = meshC.value.mesh;
  const mesh2 = meshD.value.mesh;
  renderer.onBeforeRender(() => {
    mesh1.rotation.x += 0.001;
    mesh2.rotation.x += -0.001;
  });
});
</script>

<script>
import { RouterLink, RouterView } from "vue-router";

// FONCTIONS POUR LE HOVER (click true: permet de retirer le hover quand planète cliquée)
export default {
  name: "HomeView",
  data() {
    return {
      PlanetOneHover: false,

      planetOnClickVisible: false, // var du click sur la planète (pour afficher les détails : le composant planetOnClick)
    };
  },
  methods: {
    planet1Hover({ over }) {
      this.PlanetOneHover = over ? true : false;
      console.log("résultat du hover : " + this.PlanetOneHover);
    },

    updateparent(pOnClickVis) {
      this.planetOnClickVisible = pOnClickVis;
    },
  },
};

// FONCTION POUR SUIVI DE LELEMENT "cursor" !

document.addEventListener(
  "mousemove",
  function (ev) {
    let informationPlanet = document.getElementById("informationPlanet");
    if (informationPlanet != null) {
      informationPlanet.style.transform =
        "translateY(" + (ev.clientY - 100) + "px)";
      informationPlanet.style.transform +=
        "translateX(" + (ev.clientX + 10) + "px)";
    }
  },
  false
);
</script>
