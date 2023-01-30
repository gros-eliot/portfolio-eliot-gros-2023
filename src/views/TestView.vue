<template>
  <Renderer
    ref="rendererC"
    antialias
    :orbit-ctrl="{ enableDamping: true }"
    resize="window"
  >
    <Camera :position="{ z: clickedCameraZ }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Sphere
        ref="meshC"
        :size="1"
        :rotation="{ y: Math.PI / 2, z: Math.PI / 2 }"
        :scale="{ x: 10, y: 10, z: 10 }"
        :position="{ x: 0, y: 0, z: 0 }"
        :cast-shadow="true"
        :receive-shadow="true"
        @click="boxClick"
        @mouseenter="showPlanet1Infos"
        @mouseleave="hidePlanet1Infos"
      >
        <BasicMaterial>
          <Texture src="/textures/2k_mars.jpg" />
        </BasicMaterial>
      </Sphere>
    </Scene>
  </Renderer>

  <div
    class="bg-white text-red-500 p-10 absolute inset-0 w-fit h-fit"
    id="acab"
  >
    TEST
  </div>
</template>

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
} from "troisjs";

const rendererC = ref();
const meshC = ref();

onMounted(() => {
  const renderer = rendererC.value;
  const mesh = meshC.value.mesh;
  renderer.onBeforeRender(() => {
    mesh.rotation.x += 0.001;
  });
});

function boxClick(click) {
  const mesh = meshC.value.mesh;
  console.log(click);
  mesh.scale.x = 30;
  mesh.scale.y = 30;
  mesh.scale.z = 30;
}
</script>

<script>
export default {
  data() {
    return {
      boxState: false,
      clickedCameraZ: 100,
    };
  },
  methods: {
    boxOver({ over }) {
      this.boxState = over ? true : false;
    },
    boxClick(click) {
      const mesh = meshC.value.mesh;
      console.log(click);

      if ((mesh.scale.x = 30)) {
        mesh.scale.x = 10;
        mesh.scale.y = 10;
        mesh.scale.z = 10;
      }

      if ((mesh.scale.x = 10)) {
        mesh.scale.x = 30;
        mesh.scale.y = 30;
        mesh.scale.z = 30;
      }

      this.clickedCameraZ = click ? 100 : 500;
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

<style scoped>
/* Style pour la scène 3D */
body {
  margin: 0;
}
canvas {
  display: block;
}
</style>
