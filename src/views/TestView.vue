<template>
  <!--SCENE 3D-->
  <Renderer
    ref="rendererC"
    antialias
    :orbit-ctrl="{ enableDamping: true }"
    resize="window"
    class="h-screen"
  >
    <Camera :position="{ z: clickedCameraZ }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />

      <!--PLANETE 1-->
      <Sphere
        ref="meshC"
        :size="1"
        :rotation="{ y: Math.PI / 2, z: Math.PI / 2 }"
        :scale="{ x: 10, y: 10, z: 10 }"
        :position="{ x: 0, y: 0, z: 0 }"
        :cast-shadow="true"
        :receive-shadow="true"
        @click="planet1Click(), planet1ClickSetup()"
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
        @click="planet2Click(), planet2ClickSetup()"
        @pointer-over="planet2Hover"
      >
        <BasicMaterial>
          <Texture src="/textures/2k_neptune.jpg" />
        </BasicMaterial>
      </Sphere>
    </Scene>
  </Renderer>

  <!-- HOVERS ELEMENTS -->
  <!--CE QU'AFFICHE LE HOVER sur la planète 1-->
  <div
    class="bg-white text-red-500 p-10 absolute inset-0 w-fit h-fit"
    id="acab"
    :class="{
      hidden: Planet1State === false,
      block: Planet1State === true,
    }"
  >
    TEST
  </div>

  <!--UI spaceship interface-->
  <div
    class="h-screen w-full absolute bg-[linear-gradient(180deg,rgba(43,57,84,0)47.71%,rgba(43,57,84,0)62.81%,#2B3954_100%)] z-10 inset-0 pointer-events-none"
  >
    <!--Top-->
    <div class="w-full top-0 flex justify-between absolute p-4 pt-10">
      <TopLeft class="w-48 h-48" />
      <p class="opacity-100 md:opacity-0 text-white w-72 text-[8px] font-thin">
        <strong>In case of you need help</strong>, please use the menu button in
        the top of your screen.
      </p>
      <TopRight class="w-48 h-48" />
    </div>

    <!--Middle-->
    <div class="w-full h-screen absolute flex justify-center items-center">
      <Middle class="w-20 h-20" />
    </div>

    <!--BOTTOM-->
    <div class="absolute bottom-0 text-white">
      <!--Battery-->
      <p class="text-white">{{ levelBattery }}</p>

      <!--Bottom right-->
    </div>
  </div>
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
  Plane,
} from "troisjs";

// imports éléments spaceshipUI
import TopLeft from "../components/spaceship-ui-components/TopLeft.vue";
import TopRight from "../components/spaceship-ui-components/TopRight.vue";
import Middle from "../components/spaceship-ui-components/Middle.vue";

const rendererC = ref();
const meshC = ref();
const meshD = ref();

// Niveau de la batterie
let levelBattery = ref(0);
navigator.getBattery().then(function (battery) {
  levelBattery = battery.level;

  console.log("Battery level : " + levelBattery * 100 + " %");
});

onMounted(() => {
  const renderer = rendererC.value;
  const mesh1 = meshC.value.mesh;
  const mesh2 = meshD.value.mesh;
  renderer.onBeforeRender(() => {
    mesh1.rotation.x += 0.001;
    mesh2.rotation.x += -0.001;
  });
});

let planetClick = false;
let clickedCameraZ = 100;
// FONCTIONS POUR LE CLICK AGRANDISSANT LA PLANETE

function planet1ClickSetup(e) {
  const mesh = meshC.value.mesh;
  planetClick = !planetClick;
  clickedCameraZ = clickedCameraZ * 5;
  if (planetClick === true) {
    mesh.scale.x = 30;
    mesh.scale.y = 30;
    mesh.scale.z = 30;
  } else {
    mesh.scale.x = 10;
    mesh.scale.y = 10;
    mesh.scale.z = 10;
  }
}
</script>

<script>
// FONCTIONS POUR LE HOVER (click true: permet de retirer le hover quand planète cliquée)
export default {
  data() {
    return {
      Planet1State: false,
      Planet1Clicked: false,
      clickedCameraZ: 100,
    };
  },
  methods: {
    planet1Click(e) {
      this.Planet1Clicked = !this.Planet1Clicked;
      console.log("résultat du click : " + this.Planet1Clicked);
    },
    planet1Hover({ over }) {
      if (this.Planet1Clicked === false) {
        this.Planet1State = over ? true : false;
      }
      if (this.Planet1Clicked === true) {
        this.Planet1State = false;
      }
    },
  },
};

// FONCTION POUR SUIVI DE LELEMENT "cursor" !
document.addEventListener(
  "mousemove",
  function (ev) {
    document.getElementById("acab").style.transform =
      "translateY(" + ev.clientY + "px)";
    document.getElementById("acab").style.transform +=
      "translateX(" + (ev.clientX + 10) + "px)";
  },
  false
);
</script>
