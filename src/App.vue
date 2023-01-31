<script>
import { RouterLink, RouterView } from "vue-router";

// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <!--Header test-->
  <header class="z-30 absolute text-white w-full border-b border-white top-0">
    <RouterLink to="/home">GO TO HOME</RouterLink>
    <RouterLink to="/">GO TO WELCOME</RouterLink>
  </header>
  <RouterView />
</template>
