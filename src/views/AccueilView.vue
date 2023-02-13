<template>
  <!--Cube du fond-->
  <Renderer
    ref="rendererC"
    antialias
    :orbit-ctrl="{ enableDamping: true, enableZoom: false, enablePan: false }"
    resize="window"
    class="h-screen inset-0 -z-10"
    :alpha="true"
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
          <Texture src="/textures/telio-arts-icon.jpg" />
        </LambertMaterial>
        <!--
        <BasicMaterial>
          <Texture src="/textures/telio-arts-icon.jpg" />
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
  <!--Bg space-->
  <div
    class="inset-0 w-full h-screen bg-[url(/textures/space.jpg)] absolute pointer-events-none -z-50"
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
      <RouterLink to="/" class="pointer-events-auto text-sm">Cursus</RouterLink>
      <RouterLink to="/home" class="pointer-events-auto font-bold text-sm"
        >Works</RouterLink
      >
      <RouterLink to="/" class="pointer-events-auto text-sm">About</RouterLink>
    </section>

    <!-- ACCUEIL MIDDLE-->
    <section
      class="flex justify-center items-center text-center flex-col gap-0 px-1 py-5 md:p-5"
    >
      <h1
        class="portfolio-h1 text-5xl md:text-7xl uppercase pointer-events-auto"
      >
        Digital content
      </h1>
      <h1
        class="portfolio-h1 text-5xl md:text-7xl uppercase pointer-events-auto"
      >
        creator
      </h1>
      <h2
        class="portfolio-h3 normal-case text-yellow-portfolio tracking-tighter pointer-events-auto"
      >
        Eliot Gros · French developer
      </h2>
    </section>

    <!-- ACCUEIL FOOTER-->
    <section class="flex flex-col justify-center items-center gap-14 p-4">
      <div class="flex flex-col md:flex-row items-center gap-5">
        <RouterLink to="/home">
          <button class="portfolio-button-white pointer-events-auto">
            Discover my universe
          </button>
        </RouterLink>
        <RouterLink to="/home">
          <button class="portfolio-button-black pointer-events-auto">
            Random
          </button>
        </RouterLink>
      </div>

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
