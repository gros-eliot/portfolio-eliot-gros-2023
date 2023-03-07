<template>
  <section class="text-white">
    <h3 class="portfolio-works-h3">Red-lit rooms & blue-lit rooms</h3>
    <p class="portfolio-works-paragraph px-5 p-10 text-center">
      I was looking to find a new style of illustrations through these
      creations.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
      <AWorkImageToClick
        :srcImage="'/images/works/DigitalArt/rooms/bluelight.png'"
        :altImage="'Blue-lit rooms'"
        :classesImage="'h-full object-cover'"
      />
      <AWorkImageToClick
        :srcImage="'/images/works/DigitalArt/rooms/redlight.png'"
        :altImage="'Red-lit rooms'"
        :classesImage="'h-full object-cover'"
      />
      <AWorkImageToClick
        :srcImage="'/images/works/TraditionalArt/lit-rooms-1.jpg'"
        :altImage="'Brouillon'"
        :classesImage="'h-full object-cover'"
      />
    </div>
  </section>
</template>
<script setup>
import AWorkImageToClick from "./AWorkImageToClick.vue";
</script>
