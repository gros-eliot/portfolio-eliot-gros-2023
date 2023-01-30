<script>
import { RouterLink, RouterView } from "vue-router";

// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="z-30 absolute text-white w-full border-b border-white">
    <RouterLink to="/test">GO TO TEST</RouterLink>
    <RouterLink to="/">GO TO HOME</RouterLink>
  </div>
  <RouterView />
</template>
