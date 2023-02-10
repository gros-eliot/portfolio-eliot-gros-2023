<template>
  <article class="grid grid-cols-[80%,20%] bg-white">
    <section class="flex flex-col gap-96">
      <div id="create_categorie">
        <CreateCategorieComponent />
      </div>
      <div id="create_outil">
        <CreateToolsComponent />
      </div>

      <div id="create_work">
        <CreateWorkComponent />
      </div>
    </section>
    <section
      class="bg-zinc-500 text-white fixed right-0 w-1/6 h-screen flex p-2 flex-col gap-20 items-center justify-center text-center"
    >
      <div
        class="flex justify-center p-4 absolute w-full pointer-events-none top-0"
      >
        <RouterLink to="/home" class="fixed pointer-events-auto">
          <p class="text-black font-black bg-white rounded-lg p-2">Back</p>
        </RouterLink>
      </div>

      <a href="#create_categorie">Créer catégorie</a>
      <a href="#create_outil">Créer outil</a>
      <a href="#create_work">Créer un work</a>
    </section>
  </article>
</template>

<script setup>
import CreateCategorieComponent from "@/components/admin/CreateCategorie.vue";
import CreateToolsComponent from "../components/admin/CreateTools.vue";
import CreateWorkComponent from "../components/admin/CreateWork.vue";
</script>
