<script>
import { RouterLink, RouterView } from "vue-router";

// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="z-30 absolute text-white w-full border-b border-white">
    <RouterLink to="/home">GO TO HOME</RouterLink>
    <RouterLink to="/">GO TO WELCOME</RouterLink>
  </div>
  <RouterView />
</template>
