<template>
  <!--Cube du fond-->
  <Renderer
    ref="rendererC"
    antialias
    :orbit-ctrl="{ enableDamping: true, enableZoom: false, enablePan: false }"
    resize="window"
    class="h-screen inset-0 -z-10"
  >
    <Camera :position="{ z: 80 }" />
    <Scene>
      <Box
        ref="meshC"
        :size="3"
        :rotation="{ x: Math.PI / 4, y: Math.PI / 4, z: Math.PI / 4 }"
        :scale="{ x: 12, y: 12, z: 12 }"
        :position="{ x: 0, y: 0, z: 0 }"
        :cast-shadow="true"
        :receive-shadow="true"
      >
        <BasicMaterial>
          <Texture src="/textures/telio-arts-icon.jpg" />
        </BasicMaterial>
      </Box>
    </Scene>

    <!--Effet améliorant le rendu-->
    <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="0.2" />
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
    class="inset-0 w-full h-screen bg-transparent absolute text-white pointer-events-none z-10"
  >
    <!--ACCUEIL HEADER-->
    <section
      class="flex flex-col gap-2 justify-center items-center md:flex-row md:justify-between w-full top-0 p-4 px-6 font-light uppercase"
    >
      <RouterLink to="/" class="pointer-events-auto">Cursus</RouterLink>
      <RouterLink to="/home" class="pointer-events-auto">Projects</RouterLink>
      <RouterLink to="/" class="pointer-events-auto">About</RouterLink>
    </section>

    <!-- ACCUEIL MIDDLE-->
    <section
      class="flex justify-center items-center text-center flex-col gap-2"
    >
      <h1
        class="portfolio-h1 text-5xl md:text-7xl uppercase pointer-events-auto"
      >
        Digital content &ThinSpace;creator
      </h1>
      <h2
        class="portfolio-h3 normal-case text-yellow-portfolio tracking-tighter pointer-events-auto"
      >
        Eliot Gros · French
      </h2>
    </section>

    <!-- ACCUEIL FOOTER-->
    <section>
      <button class="portfolio-button-white pointer-events-auto">
        Discover my universe
      </button>
      <button class="portfolio-button-black">Back</button>

      <!--Mentions légales-->
      <div class="flex flex-row gap-1">
        <p class="pointer-events-auto">© Eliot Gros 2023 |</p>
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

<script setup>
import { ref, onMounted } from "vue";
import {
  Box,
  Camera,
  LambertMaterial,
  BasicMaterial,
  PointLight,
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
