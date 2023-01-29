<template>
  <Renderer
    ref="rendererC"
    antialias
    :orbit-ctrl="{ enableDamping: true }"
    resize="window"
  >
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Sphere
        ref="meshC"
        :size="1"
        :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }"
        :scale="{ x: 10, y: 10, z: 10 }"
        :position="{ x: 0, y: 0, z: 0 }"
        :cast-shadow="true"
        :receive-shadow="true"
      >
        <Texture path="/textures/" />
      </Sphere>
    </Scene>
  </Renderer>
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
} from "troisjs";

const rendererC = ref();
const meshC = ref();
onMounted(() => {
  const renderer = rendererC.value;
  const mesh = meshC.value.mesh;
  renderer.onBeforeRender(() => {
    mesh.rotation.x += 0.01;
  });
});
</script>

<style>
body {
  margin: 0;
}
canvas {
  display: block;
}
</style>
