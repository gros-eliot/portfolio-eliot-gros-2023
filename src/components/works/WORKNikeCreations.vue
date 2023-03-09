<template>
  <section class="w-full text-white">
    <!--SECTION AIR JORDAN ONE-->
    <article>
      <section
        class="flex flex-row w-full justify-center items-center gap-0 p-10 pt-32"
      >
        <div class="flex flex-col w-full">
          <div class="w-full h-1 bg-white mb-1"></div>
          <div class="w-full h-1 bg-white mb-1"></div>
          <div class="w-full h-1 bg-white"></div>
        </div>
        <h3 class="portfolio-works-h3 w-full p-0 px-2">
          AIR&nbsp;JORDAN&nbsp;ONE
        </h3>
        <div class="flex flex-col w-full">
          <div class="w-full h-1 bg-white mb-1"></div>
          <div class="w-full h-1 bg-white mb-1"></div>
          <div class="w-full h-1 bg-white"></div>
        </div>
      </section>

      <p class="portfolio-works-paragraph text-center">
        I learned how to model this pair of sneakers from
        <strong class="bg-white bg-opacity-10">
          <a
            href="https://www.youtube.com/watch?v=wNaKikKERDs&ab_channel=OzzeyArts"
            >the Ozzey Arts tutorial on YouTube</a
          > </strong
        >.
      </p>

      <!--AIR JORDAN 1 RED-->
      <section class="flex justify-center items-center w-full py-10">
        <div class="w-8/12 h-[50vh]">
          <Renderer
            ref="rendererE"
            antialias
            :orbit-ctrl="{
              enableDamping: true,
              enableZoom: true,
              enablePan: false,
            }"
            resize="true"
          >
            <Camera :position="{ y: 0, z: 60 }" />
            <Scene :background="'#000000'">
              <PointLight
                color="#ffffff"
                :position="{ x: 0, y: -200, z: -200 }"
                :intensity="0.8"
              />
              <PointLight
                color="#ffffff"
                :position="{ x: -200, y: 0, z: 0 }"
                :intensity="0.8"
              />
              <PointLight
                color="#ffffff"
                :position="{ x: 200, y: 0, z: 0 }"
                :intensity="0.8"
              />
              <PointLight
                color="#ffffff"
                :position="{ x: 0, y: 200, z: 50 }"
                :intensity="0.8"
              />
              <PointLight
                color="#ffffff"
                :position="{ y: 0, z: 200 }"
                :intensity="0.8"
              />
              <!--MODELE NIKE + LUMIERE NIKE-->
              <!--Nike rouge-->
              <Mesh ref="meshNike2">
                <GltfModel
                  src="/../src/assets/3D-modeles/jordan-one.glb"
                  @load="onReady"
                  @progress="onProgress"
                  @error="onError"
                  :position="{ x: -10, y: -10, z: 0 }"
                  :rotation="{ x: 0.3 }"
                  :scale="{ x: 10, y: 10, z: 10 }"
                  :cast-shadow="true"
                  :receive-shadow="true"
                />
              </Mesh>
            </Scene>
            <!--Effet améliorant le rendu-->
            <EffectComposer>
              <RenderPass />
              <UnrealBloomPass :strength="0.3" />
            </EffectComposer>
          </Renderer>
        </div>
      </section>
      <!--AIR JORDAN 1 RED - fin-->

      <section class="w-full bg-[#676CFE] text-white p-5 md:p-10 py-20">
        <p class="portfolio-works-paragraph text-center font-bold">
          Blue version
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 justify-items-center"
        >
          <AWorkImageToClick
            :classesHref="'w-fit h-fit'"
            :srcImage="'/images/works/DigitalArt/nike/air-jordan/blue-1.png'"
            :altImage="'nike illustration 1'"
            :classesImage="'h-full'"
          />
          <AWorkImageToClick
            :classesHref="'w-fit h-fit'"
            :srcImage="'/images/works/DigitalArt/nike/air-jordan/blue-2.png'"
            :altImage="'nike illustration 2'"
            :classesImage="'h-full'"
          />
          <AWorkImageToClick
            :classesHref="'w-fit h-fit'"
            :srcImage="'/images/works/DigitalArt/nike/air-jordan/blue-commercial.jpg'"
            :altImage="'nike commercial'"
            :classesImage="'h-full'"
          />
        </div>
      </section>

      <section class="w-full bg-[#E9A884] text-white p-5 md:p-10 py-20">
        <p class="portfolio-works-paragraph text-center font-bold">
          Red version
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 justify-items-center"
        >
          <AWorkImageToClick
            :classesHref="'w-fit h-fit'"
            :srcImage="'/images/works/DigitalArt/nike/air-jordan/red-1.png'"
            :altImage="'nike illustration 1'"
            :classesImage="'h-full'"
          />
          <AWorkImageToClick
            :classesHref="'w-fit h-fit'"
            :srcImage="'/images/works/DigitalArt/nike/air-jordan/red-2.png'"
            :altImage="'nike illustration 2'"
            :classesImage="'h-full'"
          />
          <AWorkImageToClick
            :classesHref="'w-fit h-fit'"
            :srcImage="'/images/works/DigitalArt/nike/air-jordan/red-commercial.jpg'"
            :altImage="'nike commercial'"
            :classesImage="'h-full'"
          />
        </div>
      </section>
    </article>

    <!--SECTION AIR FORCE-->
    <article>
      <section
        class="flex flex-row w-full justify-center items-center gap-0 p-10 pt-32"
      >
        <div class="flex flex-col w-full">
          <div class="w-full h-1 bg-white mb-1"></div>
          <div class="w-full h-1 bg-white mb-1"></div>
          <div class="w-full h-1 bg-white"></div>
        </div>
        <h3 class="portfolio-works-h3 w-full p-0 px-2">
          AIR&nbsp;FORCE&nbsp;ONE
        </h3>
        <div class="flex flex-col w-full">
          <div class="w-full h-1 bg-white mb-1"></div>
          <div class="w-full h-1 bg-white mb-1"></div>
          <div class="w-full h-1 bg-white"></div>
        </div>
      </section>
      <p class="portfolio-works-paragraph text-center">
        For the AF1, I modeled them without the help of a tutorial, from what I
        could learn.
      </p>

      <!--AIR FORCE 1 BLUE-->
      <section class="flex justify-center items-center w-full py-10">
        <div class="w-8/12 h-[50vh]">
          <Renderer
            ref="rendererD"
            antialias
            :orbit-ctrl="{
              enableDamping: true,
              enableZoom: false,
              enablePan: false,
            }"
            resize="true"
          >
            <Camera :position="{ x: 50, z: 100 }" />
            <Scene :background="'#000000'">
              <PointLight
                color="#aaaaff"
                :position="{ x: 0, y: -200, z: -200 }"
                :intensity="0.8"
              />
              <PointLight
                color="#aaaaff"
                :position="{ x: -200, y: 0, z: 0 }"
                :intensity="0.8"
              />
              <PointLight
                color="#aaaaff"
                :position="{ x: 200, y: 0, z: 0 }"
                :intensity="0.8"
              />
              <PointLight
                color="#aaaaff"
                :position="{ x: 0, y: 200, z: 50 }"
                :intensity="0.8"
              />
              <PointLight
                color="#aaaaff"
                :position="{ y: 0, z: 200 }"
                :intensity="0.8"
              />
              <!--MODELE NIKE + LUMIERE NIKE-->
              <!--Nike bleue-->
              <Mesh ref="meshNike">
                <GltfModel
                  src="/../src/assets/3D-modeles/air-force.glb"
                  @load="onReady"
                  @progress="onProgress"
                  @error="onError"
                  :position="{ x: 0, y: 5, z: 0 }"
                  :rotation="{
                    x: Math.PI / 4,
                    y: -Math.PI / 1.5,
                    z: Math.PI / 4,
                  }"
                  :scale="{ x: 10, y: 10, z: 10 }"
                  :cast-shadow="true"
                  :receive-shadow="true"
                />
              </Mesh>
            </Scene>
            <!--Effet améliorant le rendu-->
            <EffectComposer>
              <RenderPass />
              <UnrealBloomPass :strength="0.3" />
            </EffectComposer>
          </Renderer>
        </div>
      </section>
      <!--AIR FORCE 1 BLUE - fin-->

      <section class="w-full bg-zinc-800 text-white p-5 md:p-10 py-20">
        <p class="portfolio-works-paragraph text-center font-bold">
          Fictional ads
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 justify-items-center"
        >
          <AWorkImageToClick
            :classesHref="'w-fit h-fit'"
            :srcImage="'/images/works/DigitalArt/nike/air-force/1.png'"
            :altImage="'nike illustration 1'"
            :classesImage="'h-full'"
          />
          <AWorkImageToClick
            :classesHref="'w-fit h-fit'"
            :srcImage="'/images/works/DigitalArt/nike/air-force/2.png'"
            :altImage="'nike illustration 2'"
            :classesImage="'h-full'"
          />
        </div>
      </section>
    </article>
  </section>
  <section class="bg-white">
    <!--title -->
    <section
      class="flex flex-row w-full justify-center items-center gap-0 p-10"
    >
      <div class="flex flex-col w-full">
        <div class="w-full h-1 bg-black mb-1"></div>
        <div class="w-full h-1 bg-black mb-1"></div>
        <div class="w-full h-1 bg-black"></div>
      </div>
      <h3 class="portfolio-works-h3 w-full p-0 px-2">SKETCHS</h3>
      <div class="flex flex-col w-full">
        <div class="w-full h-1 bg-black mb-1"></div>
        <div class="w-full h-1 bg-black mb-1"></div>
        <div class="w-full h-1 bg-black"></div>
      </div>
    </section>

    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-5 p-10 md:p-20 justify-items-center"
    >
      <AWorkImageToClick
        :classesHref="'w-fit h-fit'"
        :srcImage="'/images/works/TraditionalArt/nike-outfit-1.jpg'"
        :altImage="'nike illustration 1'"
        :classesImage="'h-full'"
      />
      <AWorkImageToClick
        :classesHref="'w-fit h-fit'"
        :srcImage="'/images/works/TraditionalArt/nike-outfit-2.jpg'"
        :altImage="'nike illustration 2'"
        :classesImage="'h-full'"
      />
      <AWorkImageToClick
        :classesHref="'w-fit h-fit'"
        :srcImage="'/images/works/TraditionalArt/nike-post-1.jpg'"
        :altImage="'nike commercial'"
        :classesImage="'h-full'"
      />
    </div>
  </section>
</template>

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
  Raycaster,

  //models
  GltfModel,
  Box,
  Mesh,

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

import AWorkImageToClick from "./AWorkImageToClick.vue";

// constantes ref
const rendererD = ref(); //renderer
const rendererE = ref(); //renderer
const meshNike = ref(); //mesh cube
const meshNike2 = ref(); //mesh cube
let rotationValue = 0.003;

// rotation des planètes constante
onMounted(() => {
  const renderer = rendererD.value;
  const renderer2 = rendererE.value;
  const mesh1 = meshNike.value.mesh;
  const mesh2 = meshNike2.value.mesh;
  renderer.onBeforeRender(() => {
    mesh1.rotation.y += rotationValue;
  });
  renderer2.onBeforeRender(() => {
    mesh2.rotation.y += rotationValue;
  });
});
</script>
