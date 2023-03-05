<template>
  <article>
    <!--DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || -->
    <!--DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || -->
    <!--DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || -->
    <Renderer
      ref="rendererC"
      antialias
      :orbit-ctrl="{
        enableDamping: true,
        enablePan: false,
        enableZoom: false,
        enableRotate: true,
      }"
      alpha="true"
      resize="window"
      class="w-full h-screen"
      :class="{
        hidden: planetOnClickVisible === true,
        'opacity-0': planetOnClickVisible === true,
        absolute: planetOnClickVisible === true,
        'inset-0': planetOnClickVisible === true,
        'w-0': planetOnClickVisible === true,
        'h-0': planetOnClickVisible === true,
      }"
    >
      <!--      v-if="planetOnClickVisible === false"
-->
      <Camera
        :position="{ z: 1000, y: 800, x: 400 }"
        ref="camera"
        :far="10000"
      />
      <Scene>
        <PointLight :position="{ y: 50 }" :intensity="0.5" />

        <!--SPHERE HDRI SPACE-->
        <Sphere
          ref="meshSpace"
          :scale="{ x: 5000, y: 5000, z: 5000 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
        >
          <BasicMaterial :props="{ side: THREE.DoubleSide }">
            <Texture src="/images/textures/space.jpg" />
          </BasicMaterial>
        </Sphere>
        <!--PLANETE 1 : personnal projects-->
        <Sphere
          ref="meshA"
          :scale="{ x: 6, y: 6, z: 6 }"
          :rotation="{}"
          :position="{ x: 0, y: 8, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
          @click="
            (planetOnClickVisible = true),
              (selectedCategoryId = 'ajsuoXsZCWfZZL8Zes6f'),
              (selectedTexture = '/images/textures/planet-texture-2.jpg')
          "
          @pointer-over="planet1Hover"
        >
          <BasicMaterial>
            <Texture src="/images/textures/planet-texture-2.jpg" />
          </BasicMaterial>
        </Sphere>
        <!--PLANETE 2 : university projects-->
        <Sphere
          ref="meshB"
          :scale="{ x: 6, y: 6, z: 6 }"
          :rotation="{ x: Math.PI / 4, y: Math.PI / 4, z: Math.PI / 4 }"
          :position="{ x: 0, y: -8, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
          @click="
            (planetOnClickVisible = true),
              (selectedCategoryId = 'HrSPZKspOCzjj0jfTJEA'),
              (selectedTexture = '/images/textures/planet-texture-6.jpg')
          "
          @pointer-over="planet2Hover"
        >
          <BasicMaterial>
            <Texture src="/images/textures/planet-texture-6.jpg" />
          </BasicMaterial>
        </Sphere>

        <!--TORUS KNOT : branding-->
        <Sphere
          ref="meshC"
          :scale="{ x: 0.8, y: 0.8, z: 0.8 }"
          :position="{ x: 10, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
          @click="
            (planetOnClickVisible = true),
              (selectedCategoryId = 'fGEqHjoGMMfGm4PRL8Mz'),
              (selectedTexture = '/images/textures/planet-texture-7.jpg')
          "
          @pointer-over="planet3Hover"
        >
          <BasicMaterial>
            <Texture src="/images/textures/planet-texture-7.jpg" />
          </BasicMaterial>
        </Sphere>

        <!--SPHERE Websites-->
        <!---->
        <Sphere
          ref="meshD"
          :scale="{ x: 1.7, y: 1.7, z: 1.7 }"
          :rotation="{ x: Math.PI / 4, y: Math.PI / 4, z: Math.PI / 4 }"
          :position="{ x: 10, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
          @click="
            (planetOnClickVisible = true),
              (selectedCategoryId = 'nCRg6TZehbe0fLYdnyZx'),
              (selectedTexture = '/images/textures/planet-texture-4.jpg')
          "
          @pointer-over="planet4Hover"
        >
          <BasicMaterial>
            <Texture src="/images/textures/planet-texture-4.jpg" />
          </BasicMaterial>
        </Sphere>

        <!--Traditionnal art-->
        <!---->
        <Sphere
          ref="meshE"
          :scale="{ x: 1, y: 1, z: 1 }"
          :position="{ x: 0, y: 10, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
          @click="
            (planetOnClickVisible = true),
              (selectedCategoryId = 'kqCqnAKVhlM5yJ3ADu3R'),
              (selectedTexture = '/images/textures/planet-texture-5.jpg')
          "
          @pointer-over="planet5Hover"
        >
          <BasicMaterial>
            <Texture src="/images/textures/planet-texture-5.jpg" />
          </BasicMaterial>
        </Sphere>

        <!--Digital art-->
        <!---->
        <Sphere
          ref="meshF"
          :scale="{ x: 1.8, y: 1.8, z: 1.8 }"
          :position="{ x: -10, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
          @click="
            (planetOnClickVisible = true),
              (selectedCategoryId = 'QXUlvvDRMOPiQu0GGUgY'),
              (selectedTexture = '/images/textures/planet-texture-3.jpg')
          "
          @pointer-over="planet6Hover"
        >
          <BasicMaterial>
            <Texture src="/images/textures/planet-texture-3.jpg" />
          </BasicMaterial>
        </Sphere>

        <!--Video games-->
        <!---->
        <Sphere
          ref="meshG"
          :scale="{ x: 0.8, y: 0.8, z: 0.8 }"
          :position="{ x: 0, y: -10, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
          @click="
            (planetOnClickVisible = true),
              (selectedCategoryId = 'GohIP8SxIwdg69w0NfWk'),
              (selectedTexture = '/images/textures/planet-texture-1.jpg')
          "
          @pointer-over="planet7Hover"
        >
          <BasicMaterial>
            <Texture src="/images/textures/planet-texture-1.jpg" />
          </BasicMaterial>
        </Sphere>

        <!--SPHERE Volunteering-->
        <Sphere
          ref="meshH"
          :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
          :rotation="{ x: Math.PI / 4, y: Math.PI / 4, z: Math.PI / 4 }"
          :position="{ x: -10, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
          @click="
            (planetOnClickVisible = true),
              (selectedCategoryId = 'GLZu0Wq0LKuvLe1tkOgy'),
              (selectedTexture = '/images/textures/planet-texture-8.jpg')
          "
          @pointer-over="planet8Hover"
        >
          <BasicMaterial>
            <Texture src="/images/textures/planet-texture-8.jpg" />
          </BasicMaterial>
        </Sphere>

        <!--Anneaux de la scène : A-->
        <Torus
          ref="meshRingA"
          :scale="{ x: 15, y: 15, z: 15 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: -Math.PI / 2, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :tube="0.15"
          :radius="10"
          :radial-segments="16"
          :tubular-segments="100"
          :arc="6.283185307179586"
        >
          <BasicMaterial
            :color="'#91ebff'"
            :props="{ opacity: 0.3, transparent: true }"
          >
          </BasicMaterial>
        </Torus>

        <!--Anneaux de la scène : B-->
        <Torus
          ref="meshRingB"
          :scale="{ x: 32, y: 32, z: 32 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: -Math.PI / 1.94, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :tube="0.08"
          :radius="10"
          :radial-segments="16"
          :tubular-segments="100"
          :arc="6.283185307179586"
        >
          <BasicMaterial
            :color="'#91ebff'"
            :props="{ opacity: 0.3, transparent: true }"
          >
          </BasicMaterial>
        </Torus>

        <!--Anneaux de la scène : C-->
        <Torus
          ref="meshRingC"
          :scale="{ x: 46, y: 46, z: 46 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: -Math.PI / 2.03, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :tube="0.06"
          :radius="10"
          :radial-segments="16"
          :tubular-segments="100"
          :arc="6.283185307179586"
        >
          <BasicMaterial
            :color="'#91ebff'"
            :props="{ opacity: 0.3, transparent: true }"
          >
          </BasicMaterial>
        </Torus>

        <!--Anneaux de la scène : D-->
        <Torus
          ref="meshRingD"
          :scale="{ x: 60, y: 60, z: 60 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: -Math.PI / 1.97, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :tube="0.04"
          :radius="10"
          :radial-segments="16"
          :tubular-segments="100"
          :arc="6.283185307179586"
        >
          <BasicMaterial
            :color="'#91ebff'"
            :props="{ opacity: 0.3, transparent: true }"
          >
          </BasicMaterial>
        </Torus>

        <!--Anneaux de la scène : E-->
        <!--
        <Torus
          ref="meshRingE"
          :scale="{ x: 78, y: 78, z: 78 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: -Math.PI / 2, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :tube="0.04"
          :radius="10"
          :radial-segments="16"
          :tubular-segments="100"
          :arc="6.283185307179586"
        >
          <BasicMaterial
            :color="'#91ebff'"
            :props="{ opacity: 0.3, transparent: true }"
          >
          </BasicMaterial>
        </Torus>
        -->
      </Scene>
      <!--Effet améliorant le rendu-->
      <EffectComposer>
        <RenderPass />
        <UnrealBloomPass :strength="0.5" :radius="0.5" :threshold="0" />
      </EffectComposer>
    </Renderer>
    <!--FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || -->
    <!--FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || -->
    <!--FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || -->

    <!--ONCLICK COMPOSANT-->
    <!--ONCLICK COMPOSANT-->
    <!--ONCLICK COMPOSANT-->
    <PlanetOnClick
      :categoryId="selectedCategoryId"
      :texturePlanet="selectedTexture"
      v-if="planetOnClickVisible === true"
      @backEvent="updateparent"
    />

    <!-- HOVERS COMPOSANT -->
    <!-- HOVERS COMPOSANT -->
    <!-- HOVERS COMPOSANT -->
    <section>
      <!--1 : Personnal projects-->
      <PlanetHover
        :categoryId="'ajsuoXsZCWfZZL8Zes6f'"
        v-if="planetOnClickVisible === false && PlanetOneHover === true"
      />
      <!--2 : University projects-->
      <PlanetHover
        :categoryId="'HrSPZKspOCzjj0jfTJEA'"
        v-if="planetOnClickVisible === false && PlanetTwoHover === true"
      />
      <!--3 : Branding-->
      <PlanetHover
        :categoryId="'fGEqHjoGMMfGm4PRL8Mz'"
        v-if="planetOnClickVisible === false && PlanetThreeHover === true"
      />
      <!--4 : Websites-->
      <PlanetHover
        :categoryId="'nCRg6TZehbe0fLYdnyZx'"
        v-if="planetOnClickVisible === false && PlanetFourHover === true"
      />
      <!--5 : TradArt-->
      <PlanetHover
        :categoryId="'kqCqnAKVhlM5yJ3ADu3R'"
        v-if="planetOnClickVisible === false && PlanetFiveHover === true"
      />
      <!--6 : DigArt-->
      <PlanetHover
        :categoryId="'QXUlvvDRMOPiQu0GGUgY'"
        v-if="planetOnClickVisible === false && PlanetSixHover === true"
      />
      <!--7 : VideoGames-->
      <PlanetHover
        :categoryId="'GohIP8SxIwdg69w0NfWk'"
        v-if="planetOnClickVisible === false && PlanetSevenHover === true"
      />
      <!--8 : Volunteering-->
      <PlanetHover
        :categoryId="'GLZu0Wq0LKuvLe1tkOgy'"
        v-if="planetOnClickVisible === false && PlanetEightHover === true"
      />
    </section>

    <!--UI spaceship interface-->
    <!--UI spaceship interface-->
    <!--UI spaceship interface-->
    <section
      class="h-screen w-full absolute select-none bg-[linear-gradient(180deg,rgba(0,0,0,0)60.71%,rgba(0,0,0,0)62.81%,rgba(33,37,54,60)100%)] z-10 inset-0 pointer-events-none"
    >
      <!--Top-->
      <div class="w-full top-0 flex justify-between absolute p-4 pt-10">
        <TopLeft class="w-24 h-24 md:w-48 md:h-48" />
        <p class="md:hidden block text-white w-72 text-[8px] font-thin">
          <strong>In case of you need help</strong>, please use the menu button
          in the top of your screen.
        </p>
        <TopRight class="w-24 h-24 md:w-48 md:h-48" />
      </div>
      <!--Middle-->
      <!--
      <div class="w-full h-screen absolute flex justify-center items-center">
        <Middle class="w-20 h-20" />
      </div>-->
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
            <p class="text-white w-72 text-[8px] font-thin h-fit">
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

  <!-- ECRAN CHARGEMENT-->
  <!-- ECRAN CHARGEMENT-->
  <!-- ECRAN CHARGEMENT-->
  <section
    id="loading-screen"
    class="flex flex-col gap-10 justify-center items-center w-full h-screen absolute inset-0 z-30"
    v-if="onMounted"
  >
    <div class="animate-bounce">
      <p class="font-normal portfolio-h3">Loading...</p>
    </div>
    <div class="flex flex-row gap-10 justify-center items-center my-20">
      <div
        id="loader-little-circles"
        class="bg-black w-10 h-10 rounded-full"
      ></div>
      <div
        id="loader-middle-circle"
        class="border-black w-40 h-40 rounded-full"
      ></div>
      <div
        id="loader-little-circles"
        class="bg-black w-10 h-10 rounded-full"
      ></div>
    </div>
  </section>
</template>

<style scoped>
/* TEST CHARGEMENT */

#loading-screen {
  background-color: #fcff73;
  opacity: 1;
  transition: 1s opacity;
}

#loading-screen.fade-out {
  opacity: 0;
}

#loader-middle-circle {
  border-width: 7px 14px 14px 7px;
  display: block;
  position: relative;

  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

#loader-little-circles {
  box-shadow: 2px 2px 0px #000000;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/** */

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
</style>

<script setup>
import { ref, onMounted } from "vue";
import {
  Camera,
  PointLight,
  Renderer,
  Scene,
  propsValues,

  //materials
  Texture,
  LambertMaterial,
  BasicMaterial,

  //effects
  RenderPass,
  UnrealBloomPass,
  EffectComposer,
  ZoomBlurPass,

  //models
  GltfModel,

  // geometries (traditional art in bottom)
  Plane,
  Sphere, // Personal project & websites
  TorusKnot, // branding
  Dodecahedron, // University projects
  Torus, // digital creations
  Octahedron, // video games
  Ring,
  Group,
} from "troisjs";

import NoisyImage from "troisjs/src/components/noisy/NoisyImage.js"; // traditionnal art

import * as THREE from "three";

// imports éléments spaceshipUI
import TopLeft from "../components/spaceship-ui-components/TopLeft.vue";
import TopRight from "../components/spaceship-ui-components/TopRight.vue";
import Middle from "../components/spaceship-ui-components/Middle.vue";
import BottomMeasure from "../components/spaceship-ui-components/BottomMeasure.vue";

// imports Planet on click
import PlanetOnClick from "../components/home-planets/planetOnClick.vue";
// imports Planet hover
import PlanetHover from "../components/home-planets/planetHover.vue";

// ColladaLoader : test chargement
import { ColladaLoader } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/ColladaLoader.js";

// constantes ref
const rendererC = ref(); //renderer
const meshA = ref(); //mesh planete 1 | perso project(sphere)
const meshB = ref(); //mesh planete 2 | univ project(sphere)
const meshC = ref(); //mesh planete 3 | branding(torus knot)
const meshD = ref(); //mesh planete 4 | websites
const meshE = ref(); //mesh planete 5 | trad art
const meshF = ref(); //mesh planete 6 | dig art
const meshG = ref(); //mesh planete 7 | video games
const meshH = ref(); //mesh planete 8 | volunteering

const meshSpace = ref();

const meshRingA = ref(); // groupe A
const meshRingB = ref(); // groupe B
const meshRingC = ref(); // groupe C
const meshRingD = ref(); // groupe D

const camera = ref();

onMounted(() => {
  //  CHARGEMENT ECRAN (loading screen)
  //  CHARGEMENT ECRAN (loading screen)
  //  CHARGEMENT ECRAN (loading screen)
  init();

  function init() {
    const loadingManager = new THREE.LoadingManager(() => {
      const loadingScreen = document.getElementById("loading-screen");
      loadingScreen.classList.add("fade-out");

      // optional: remove loader from DOM via event listener
      loadingScreen.addEventListener("transitionend", onTransitionEnd);
    });

    // collada

    const loader = new ColladaLoader(loadingManager);
    loader.load(
      "https://threejs.org/examples/models/collada/stormtrooper/stormtrooper.dae",
      (collada) => {
        const avatar = collada.scene;
      }
    );
  }

  function onTransitionEnd(event) {
    event.target.remove();
  }

  // FIN CHARGEMENT ECRAN

  const renderer = rendererC.value;

  const meshSpace1 = meshSpace.value.mesh;
  const mesh1 = meshA.value.mesh;
  const mesh2 = meshB.value.mesh;
  const mesh3 = meshC.value.mesh;
  const mesh4 = meshD.value.mesh;
  const mesh5 = meshE.value.mesh;
  const mesh6 = meshF.value.mesh;
  const mesh7 = meshG.value.mesh;
  const mesh8 = meshH.value.mesh;
  const meshRing1 = meshRingA.value.mesh;
  const meshRing2 = meshRingB.value.mesh;
  const meshRing3 = meshRingC.value.mesh;
  const meshRing4 = meshRingD.value.mesh;
  const camera1 = camera.value.camera;

  meshRing1.add(mesh1);
  meshRing1.add(mesh2);

  meshRing2.add(mesh4);
  meshRing2.add(mesh6);

  meshRing3.add(mesh5);
  meshRing3.add(mesh7);

  meshRing4.add(mesh3);
  meshRing4.add(mesh8);

  renderer.onBeforeRender(() => {
    meshSpace1.rotation.x += 0.00003;
    meshSpace1.rotation.y += 0.00003;
    meshSpace1.rotation.z += 0.00003;
    //1 : perso project(sphere)
    mesh1.rotation.x += 0.003;
    //2 : univ project(sphere)
    mesh2.rotation.x += -0.001;
    //3 : branding(torus knot)
    mesh3.rotation.x += 0.002;
    mesh3.rotation.y += 0.002;
    //4 : websites
    mesh4.rotation.x += 0.001;
    //5 : trad art
    mesh5.rotation.z += 0.001;
    //6 : digital art
    mesh6.rotation.z += 0.002;

    //7 : video games
    mesh7.rotation.x += 0.004;
    //mesh7.rotation.y += 0.004;
    //mesh7.rotation.z += 0.004;
    //8 : volunteering
    mesh8.rotation.x += 0.001;

    // GROUP RINGS
    meshRing1.rotation.z += 0.002;
    meshRing2.rotation.z += -0.0008;
    meshRing3.rotation.z += 0.0011;
    meshRing4.rotation.z += -0.0014;
  });
});

let levelBattery = ref(0); // Niveau de la batterie
// Niveau de la batterie
navigator.getBattery().then(function (battery) {
  levelBattery = battery.level;
  console.log("Battery level : " + levelBattery * 100 + " %");

  let batteryIndicator = document.querySelector("#batteryIndicator");
  batteryIndicator.style.height = levelBattery * 100 + "%";

  // AJOUT du % de la batterie dans le template
  document
    .getElementById("containerBattery")
    .insertAdjacentHTML("beforeend", "<p>" + levelBattery * 100 + "% </p>");
});
</script>

<script>
// FONCTIONS POUR LE HOVER (click true: permet de retirer le hover quand planète cliquée)
export default {
  name: "HomeView",
  data() {
    return {
      PlanetOneHover: false,
      PlanetTwoHover: false,
      PlanetThreeHover: false,
      PlanetFourHover: false,
      PlanetFiveHover: false,
      PlanetSixHover: false,
      PlanetSevenHover: false,
      PlanetEightHover: false,
      planetOnClickVisible: false, // var du click sur la planète (pour afficher les détails : le composant planetOnClick)
      selectedCategoryId: "", // id de la planète selectionnée
      selectedTexture: "", // src de la texture de la planète sélectionnée
    };
  },
  methods: {
    planet1Hover({ over }) {
      this.PlanetOneHover = over ? true : false;
    },
    planet2Hover({ over }) {
      this.PlanetTwoHover = over ? true : false;
    },
    planet3Hover({ over }) {
      this.PlanetThreeHover = over ? true : false;
    },
    planet4Hover({ over }) {
      this.PlanetFourHover = over ? true : false;
    },
    planet5Hover({ over }) {
      this.PlanetFiveHover = over ? true : false;
    },
    planet6Hover({ over }) {
      this.PlanetSixHover = over ? true : false;
    },
    planet7Hover({ over }) {
      this.PlanetSevenHover = over ? true : false;
    },
    planet8Hover({ over }) {
      this.PlanetEightHover = over ? true : false;
    },
    updateparent(value) {
      this.planetOnClickVisible = value;
      this.PlanetOneHover = value;
      this.PlanetTwoHover = value;
      this.PlanetThreeHover = value;
      this.PlanetFourHover = value;
      this.PlanetFiveHover = value;
      this.PlanetSixHover = value;
      this.PlanetSevenHover = value;
      this.PlanetEightHover = value;
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
        "translateY(" + (ev.clientY - 180) + "px)";
      informationPlanet.style.transform +=
        "translateX(" + (ev.clientX - 210) + "px)";
    }
  },
  false
);
</script>
