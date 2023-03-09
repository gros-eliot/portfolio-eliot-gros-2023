<template>
  <article class="flex flex-col gap-10">
    <section class="px-5 md:px-10 flex flex-col gap-5">
      <h3 class="portfolio-works-h3">Donut - Blender Guru Tutorial</h3>
      <p class="portfolio-works-paragraph">
        <!--Explications sur le donut + lien vers Blender Guru-->
        This donut has been created in order to learn how to use the 3D software
        Blender, and to discover all its features.

        <strong class="bg-black bg-opacity-10">
          <a href="https://www.youtube.com/watch?v=nIoXOplUvAw" target="_blank"
            >The Blender-Guru tutorial on YouTube</a
          >
        </strong>
        is highly recommended for this.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 w-full h-fit">
        <!--Image animation -gif-->
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/3d-creations/donut.png'"
          :altImage="'Donut 1'"
          :classesImage="'w-full h-[70vh] object-cover object-center'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/3d-creations/donut-animation.gif'"
          :altImage="'Donut 2'"
          :classesImage="'w-full h-[70vh] object-cover object-center'"
        />
      </div>
    </section>
    <section class="px-5 md:px-10 flex flex-col gap-5">
      <h3 class="portfolio-works-h3">Rifle - Shadow (game)</h3>
      <p class="portfolio-works-paragraph text-center">
        <!--Explications sur la rifle + lien vers le work/id de shadow-->
        This Star Wars style machine gun was made for our video game "Shadow".
        It is the most powerful weapon you can find in the game. I made it
        thanks to 2D plans found on the
        <strong class="bg-black bg-opacity-10">
          <a href="https://www.the-blueprints.com/blueprints/" target="_blank"
            >The Blueprint website</a
          > </strong
        >.
      </p>
      <div class="flex justify-center items-center">
        <ComponentWorkButton
          :textButton="'See the Shadow project'"
          :RouterLinkTo="'/home'"
          @click="reloadPageFunction()"
        />
        <!--
            ^^^^^^^^^^
            A MODIFIER
            A MODIFIER
            A MODIFIER
            A MODIFIER
            A MODIFIER
        -->
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 h-[70vh]">
        <!--Renderer-->
        <div class="w-full h-[70vh]">
          <Renderer
            ref="rendererRifle"
            antialias
            :orbit-ctrl="{
              enableDamping: true,
              enableZoom: true,
              enablePan: false,
            }"
            resize="true"
          >
            <Camera :position="{ y: 0, z: 200 }" />
            <Scene :background="'#ffffff'">
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
                color="#ff0000"
                :position="{ x: 200, y: 0, z: 0 }"
                :intensity="0.8"
              />
              <PointLight
                color="#ff0000"
                :position="{ x: 0, y: 200, z: 50 }"
                :intensity="1.2"
              />
              <PointLight
                color="#ff0000"
                :position="{ y: 0, z: 200 }"
                :intensity="0.8"
              />
              <!--MODELE NIKE + LUMIERE NIKE-->
              <!--Nike rouge-->
              <Mesh ref="meshRifle">
                <FbxModel
                  src="/../src/assets/3D-modeles/rifleShadow.fbx"
                  @load="onReady"
                  @progress="onProgress"
                  @error="onError"
                  :position="{ x: 0, y: 0, z: 0 }"
                  :rotation="{ x: -0.3, y: Math.PI / 2 }"
                  :scale="{ x: 0.3, y: 0.3, z: 0.3 }"
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

        <!--screens (grid-rows-3) sur le model 3D + plans ?-->
        <div class="grid grid-rows-2 w-full h-[70vh]">
          <div class="w-full h-full">
            <AWorkImageToClick
              :srcImage="'/images/works/DigitalArt/3d-creations/rifle-in-game.jpg'"
              :altImage="'Rifle in game (character : Michelle from Mixamo)'"
              :classesImage="'w-full h-full object-cover object-center'"
            />
          </div>
          <div class="w-full h-full">
            <AWorkImageToClick
              :srcImage="'/images/works/DigitalArt/3d-creations/rifle-plan.png'"
              :altImage="'Rifle plan'"
              :classesImage="'w-full h-full object-cover object-top'"
            />
          </div>
        </div>
      </div>
      <div>
        <!--Screen dans le jeu ou dans Unreal Engine-->
      </div>
    </section>
    <section class="px-5 md:px-10 flex flex-col gap-5">
      <h3 class="portfolio-works-h3">Neumorphism Luffy</h3>
      <p class="portfolio-works-paragraph">
        <!--Explications sur le fait que je voulais voir comment créer des personnages 3D - donc premier perso 3D fait
        
        + RIg (animations)-->

        When I started learning 3D, I immediately tried to create characters,
        and try to animate them. So I learned how to add a skeleton to it, and
        how to rig it. These tests were done with the main character of One
        Piece (Luffy).
      </p>

      <div class="grid grid-cols-2 w-full h-fit md:gap-5 md:p-5">
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/3d-creations/luffy-plan1.jpg'"
          :altImage="'Luffy 1'"
          :classesImage="'w-full h-full object-cover object-center'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/3d-creations/luffy-plan2.png'"
          :altImage="'Luffy 2'"
          :classesImage="'w-full h-full object-cover object-top'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/3d-creations/luffy-plan3.png'"
          :altImage="'Luffy 3'"
          :classesImage="'w-full h-full object-cover object-center'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/3d-creations/luffy-plan4.jpg'"
          :altImage="'Luffy 4'"
          :classesImage="'w-full h-full object-cover object-top'"
        />
      </div>
    </section>
    <section class="px-5 md:px-10 flex flex-col gap-5">
      <h3 class="portfolio-works-h3">Nike sneakers</h3>
      <div class="flex justify-center items-center">
        <ComponentWorkButton
          :textButton="'See the Nike creations project'"
          :RouterLinkTo="{
            name: 'WorkView',
            params: { id: 'UbAcJ7bmMTiGMb4CLedp' },
          }"
          @click="reloadPageFunction()"
        />
      </div>
      <div class="grid grid-rows-3 h-screen">
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/nike/air-jordan/red-commercial.jpg'"
          :altImage="'Nike ad'"
          :classesImage="'w-full h-full object-cover object-center'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/nike/air-jordan/blue-commercial.jpg'"
          :altImage="'Nike ad'"
          :classesImage="'w-full h-full object-cover object-center'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/nike/air-force/1.png'"
          :altImage="'Nike ad'"
          :classesImage="'w-full h-full object-cover object-center'"
        />
        <!--screens (grid-rows-3 h-screen) sur les créations-->
      </div>
    </section>
    <section class="px-5 md:px-10 flex flex-col gap-5">
      <h3 class="portfolio-works-h3">Ordinateur MMI - 25 ans MMI</h3>
      <!--lien vers le projet 25 ans mmi-->
      <div class="flex justify-center items-center">
        <ComponentWorkButton
          :textButton="'See the 25 years of MMI project'"
          :RouterLinkTo="'/home'"
          @click="reloadPageFunction()"
        />
        <!--
          ^^^^^^^
          MODIFIER
          MODIFIER
          MODIFIER
          MODIFIER
          MODIFIER
        -->
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 h-[70vh]">
        <div>
          <Renderer
            ref="rendererComputer"
            antialias
            :orbit-ctrl="{
              enableDamping: true,
              enableZoom: true,
              enablePan: false,
            }"
            resize="true"
          >
            <Camera :position="{ y: 0, z: 300 }" />
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
                :intensity="1.2"
              />
              <PointLight
                color="#00ff00"
                :position="{ y: 0, z: 200 }"
                :intensity="0.8"
              />
              <!--MODELE NIKE + LUMIERE NIKE-->
              <!--Nike rouge-->
              <Mesh ref="meshComputer">
                <GltfModel
                  src="/../src/assets/3D-modeles/ordinateur-projet-s3.glb"
                  @load="onReady"
                  @progress="onProgress"
                  @error="onError"
                  :position="{ x: 0, y: 0, z: 0 }"
                  :scale="{ x: 50, y: 50, z: 50 }"
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
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/3d-creations/mmi-computer.png'"
          :altImage="'MMI Computer'"
          :classesImage="'w-full h-full object-cover object-center'"
        />
      </div>

      <!--
          ^^^^^^
          A MODIFIER
          A MODIFIER
          A MODIFIER
          A MODIFIER
          A MODIFIER
          A MODIFIER
        -->

      <div class="grid grid-cols-2 md:grid-cols-2">
        <!--renderer-->
        <GltfModel
          src="/../src/assets/3D-modeles/ordinateur-projet-s3.glb"
          @load="onReady"
          @progress="onProgress"
          @error="onError"
          :position="{ x: 0, y: 0, z: 0 }"
          :rotation="{ x: -0.3, y: Math.PI / 2 }"
          :scale="{ x: 0.3, y: 0.3, z: 0.3 }"
          :cast-shadow="true"
          :receive-shadow="true"
        />

        <!--screen sur la création-->
      </div>
    </section>
  </article>
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
  FbxModel,
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
import ComponentWorkButton from "./ComponentWorkButton.vue";

// constantes ref
const rendererRifle = ref(); //renderer
const meshRifle = ref(); //mesh cube
const rendererComputer = ref(); //renderer
const meshComputer = ref(); //mesh cube
let rotationValue = 0.003;

// rotation des planètes constante
onMounted(() => {
  const renderer = rendererRifle.value;
  const mesh1 = meshRifle.value.mesh;
  const rendererB = rendererComputer.value;
  const mesh2 = meshComputer.value.mesh;
  renderer.onBeforeRender(() => {
    mesh1.rotation.y += rotationValue;
  });
  rendererB.onBeforeRender(() => {
    mesh2.rotation.y += 0.002;
  });
});

function reloadPageFunction() {
  setTimeout(() => {
    document.location.reload();
  }, 1);
}
</script>
