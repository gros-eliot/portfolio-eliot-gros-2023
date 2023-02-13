<template>
  <article>
    <!--DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || -->
    <!--DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || -->
    <!--DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || DEBUT RENDU 3D || -->
    <Renderer
      ref="rendererC"
      antialias
      :orbit-ctrl="{ enableDamping: true }"
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
      <Camera :position="{ z: 500 }" :look-at="{ x: -40, y: -50, z: 0 }" />
      <Scene>
        <PointLight :position="{ y: 50 }" :intensity="0.5" />

        <!--PLANETE 1 : personnal projects-->
        <Sphere
          ref="meshA"
          :scale="{ x: 6, y: 6, z: 6 }"
          :rotation="{ y: Math.PI / 2, z: Math.PI / 2 }"
          :position="{ x: 10, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
          @click="planetOnClickVisible = true"
          @pointer-over="planet1Hover"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_neptune.jpg" />
          </BasicMaterial>
        </Sphere>
        <!--PLANETE 2 : university projects-->
        <Sphere
          ref="meshB"
          :scale="{ x: 6, y: 6, z: 6 }"
          :rotation="{ x: Math.PI / 4, y: Math.PI / 4, z: Math.PI / 4 }"
          :position="{ x: -10, y: 0, z: 0 }"
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

        <!--TORUS KNOT : branding-->
        <TorusKnot
          ref="meshC"
          :scale="{ x: 0.08, y: 0.08, z: 0.08 }"
          :position="{ x: 10.5, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :radius="6.5"
          :tube="1"
          :tubular-segments="48"
          :radial-segments="4"
          :p="16"
          :q="9"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_neptune.jpg" />
          </BasicMaterial>
        </TorusKnot>

        <!--SPHERE Websites-->
        <Sphere
          ref="meshD"
          :scale="{ x: 1.4, y: 1.4, z: 1.4 }"
          :rotation="{ x: Math.PI / 4, y: Math.PI / 4, z: Math.PI / 4 }"
          :position="{ x: 10.5, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_neptune.jpg" />
          </BasicMaterial>
        </Sphere>

        <!--Traditionnal art-->
        <NoisyImage
          ref="meshE"
          src="/textures/portfolio-art-traditionnel.jpg"
          :width="4"
          :time-coef="0.001"
          :noise-coef="0.3"
          :z-coef="1"
          :disp-coef="1"
          :rotation="{ y: Math.PI / 2 }"
          :position="{ x: 10.5, y: 0, z: 0 }"
          @pointer-over="planet1Hover"
        />

        <!--Torus: digital art-->
        <Torus
          ref="meshF"
          :scale="{ x: 0.1, y: 0.1, z: 0.1 }"
          :rotation="{ x: Math.PI / 2, y: 0, z: 0 }"
          :position="{ x: -10.5, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :radius="8"
          :tube="5"
          :radial-segments="20"
          :tubular-segments="124"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_neptune.jpg" />
          </BasicMaterial>
        </Torus>

        <!--Octahedron: video games-->
        <Octahedron
          ref="meshG"
          :scale="{ x: 0.1, y: 0.1, z: 0.1 }"
          :rotation="{ x: 0, y: Math.PI / 2, z: 0 }"
          :position="{ x: -10.5, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :radius="10"
          :detail="0"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_neptune.jpg" />
          </BasicMaterial>
        </Octahedron>

        <!--SPHERE Volunteering-->
        <Sphere
          ref="meshH"
          :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
          :rotation="{ x: Math.PI / 4, y: Math.PI / 4, z: Math.PI / 4 }"
          :position="{ x: -10.5, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :width-segments="64"
          :height-segments="64"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_neptune.jpg" />
          </BasicMaterial>
        </Sphere>

        <!--Anneaux de la scène : A-->
        <Ring
          ref="meshRingA"
          :scale="{ x: 8, y: 8, z: 8 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: -Math.PI / 2, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :inner-radius="10"
          :outer-radius="10.5"
          :theta-segments="50"
          :phi-segments="8"
          :theta-start="0"
          :theta-length="6.283185307179586"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_mercury.jpg" />
          </BasicMaterial>
        </Ring>
        <Ring
          :scale="{ x: 8, y: 8, z: 8 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: Math.PI / 2, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :inner-radius="10"
          :outer-radius="10.5"
          :theta-segments="50"
          :phi-segments="8"
          :theta-start="0"
          :theta-length="6.283185307179586"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_mercury.jpg" />
          </BasicMaterial>
        </Ring>
        <!--Anneaux de la scène : B-->
        <Ring
          ref="meshRingB"
          :scale="{ x: 20, y: 20, z: 20 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: -Math.PI / 2, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :inner-radius="10.3"
          :outer-radius="10.5"
          :theta-segments="50"
          :phi-segments="8"
          :theta-start="0"
          :theta-length="6.283185307179586"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_mercury.jpg" />
          </BasicMaterial>
        </Ring>
        <Ring
          :scale="{ x: 20, y: 20, z: 20 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: Math.PI / 2, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :inner-radius="10.3"
          :outer-radius="10.5"
          :theta-segments="50"
          :phi-segments="8"
          :theta-start="0"
          :theta-length="6.283185307179586"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_mercury.jpg" />
          </BasicMaterial>
        </Ring>
        <!--Anneaux de la scène : C-->
        <Ring
          ref="meshRingC"
          :scale="{ x: 32, y: 32, z: 32 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: -Math.PI / 2, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :inner-radius="10.35"
          :outer-radius="10.5"
          :theta-segments="50"
          :phi-segments="8"
          :theta-start="0"
          :theta-length="6.283185307179586"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_mercury.jpg" />
          </BasicMaterial>
        </Ring>
        <Ring
          :scale="{ x: 32, y: 32, z: 32 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: Math.PI / 2, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :inner-radius="10.35"
          :outer-radius="10.5"
          :theta-segments="50"
          :phi-segments="8"
          :theta-start="0"
          :theta-length="6.283185307179586"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_mercury.jpg" />
          </BasicMaterial>
        </Ring>
        <!--Anneaux de la scène : D-->
        <Ring
          ref="meshRingD"
          :scale="{ x: 42, y: 42, z: 42 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: -Math.PI / 2, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :inner-radius="10.4"
          :outer-radius="10.5"
          :theta-segments="50"
          :phi-segments="8"
          :theta-start="0"
          :theta-length="6.283185307179586"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_mercury.jpg" />
          </BasicMaterial>
        </Ring>
        <Ring
          :scale="{ x: 42, y: 42, z: 42 }"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: Math.PI / 2, y: 0, z: 0 }"
          :cast-shadow="true"
          :receive-shadow="true"
          :inner-radius="10.4"
          :outer-radius="10.5"
          :theta-segments="50"
          :phi-segments="8"
          :theta-start="0"
          :theta-length="6.283185307179586"
        >
          <BasicMaterial>
            <Texture src="/textures/2k_mercury.jpg" />
          </BasicMaterial>
        </Ring>
      </Scene>
      <!--Effet améliorant le rendu-->
      <EffectComposer>
        <RenderPass />
        <UnrealBloomPass :strength="0.4" :radius="0.5" :threshold="0" />
      </EffectComposer>
    </Renderer>
    <!--FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || -->
    <!--FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || -->
    <!--FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || FIN DU RENDU 3D || -->

    <!--ONCLICK COMPOSANT-->
    <PlanetOnClick
      :categoryId="'GLZu0Wq0LKuvLe1tkOgy'"
      :texturePlanet="'/textures/2k_venus_atmosphere.jpg'"
      v-if="planetOnClickVisible === true"
      @backEvent="updateparent"
    />
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

const meshRingA = ref();
const meshRingB = ref();
const meshRingC = ref();
const meshRingD = ref();

// rotation des planètes constante
onMounted(() => {
  const renderer = rendererC.value;
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

  meshRing1.add(mesh1);
  meshRing1.add(mesh2);

  meshRing2.add(mesh4);
  meshRing2.add(mesh6);

  meshRing3.add(mesh5);
  meshRing3.add(mesh7);

  meshRing4.add(mesh3);
  meshRing4.add(mesh8);

  renderer.onBeforeRender(() => {
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
    mesh7.rotation.x += 0.009;
    mesh7.rotation.y += 0.009;
    mesh7.rotation.z += 0.009;
    //8 : volunteering
    mesh8.rotation.x += 0.001;

    // GROUP RINGS
    meshRing1.rotation.z += 0.0005;
    meshRing2.rotation.z += -0.001;
    meshRing3.rotation.z += 0.0013;
    meshRing4.rotation.z += -0.0018;
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
      planetOnClickVisible: false, // var du click sur la planète (pour afficher les détails : le composant planetOnClick)
    };
  },
  methods: {
    planet1Hover({ over }) {
      this.PlanetOneHover = over ? true : false;
      console.log("résultat du hover : " + this.PlanetOneHover);
    },
    updateparent(value) {
      this.planetOnClickVisible = value;
      this.PlanetOneHover = value;
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

// noisyImage responsive width function
/* 
let noisyImageWidth = 0;
if (window.screen.width <= 500) {
  noisyImageWidth = window.screen.width / 400;
}
if (window.screen.width > 500) {
  noisyImageWidth = window.screen.width / 800;
}
if (window.screen.width > 1000) {
  noisyImageWidth = window.screen.width / 500;
}
*/
</script>
