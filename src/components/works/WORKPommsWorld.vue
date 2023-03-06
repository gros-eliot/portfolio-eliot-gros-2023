<template>
  <p class="portfolio-works-paragraph p-10">
    I started by making some character sketches. The hardest part was to find a
    name for them. So I present you Pomm, the main character of this fictional
    universe. You can also meet Mia, Eld, and Sharon. These are his friends.
  </p>

  <h3 class="portfolio-works-h3">Sketchs</h3>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full p-10 2xl:p-20">
    <a
      href="/images/works/TraditionalArt/pomms-world-sketch-1.jpg"
      target="_blank"
    >
      <img
        src="/images/works/TraditionalArt/pomms-world-sketch-1.jpg"
        alt="Pomms World : sketch"
      />
    </a>

    <a
      href="/images/works/TraditionalArt/pomms-world-sketch-2.jpg"
      target="_blank"
    >
      <img
        src="/images/works/TraditionalArt/pomms-world-sketch-2.jpg"
        alt="Pomms World : sketch"
      />
    </a>
  </div>

  <p class="portfolio-works-paragraph p-10">
    I started by making some character sketches. The hardest part was to find a
    name for them. So I present you Pomm, the main character of this fictional
    universe. You can also meet Mia, Eld, and Sharon. These are his friends.
  </p>

  <h3 class="portfolio-works-h3">Sketchs with actions</h3>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full p-10 2xl:p-20">
    <a
      href="/images/works/TraditionalArt/pomms-world-scene-1.jpg"
      target="_blank"
    >
      <img
        src="/images/works/TraditionalArt/pomms-world-scene-1.jpg"
        alt="Pomms world scene 1"
      />
    </a>
    <a
      href="/images/works/TraditionalArt/pomms-world-scene-2.jpg"
      target="_blank"
    >
      <img
        src="/images/works/TraditionalArt/pomms-world-scene-2.jpg"
        alt="Pomms world scene 2"
      />
    </a>
    <a
      href="/images/works/TraditionalArt/pomms-world-scene-3.jpg"
      target="_blank"
    >
      <img
        src="/images/works/TraditionalArt/pomms-world-scene-3.jpg"
        alt="Pomms world scene 3"
      />
    </a>
    <a
      href="/images/works/TraditionalArt/pomms-world-scene-4.jpg"
      target="_blank"
    >
      <img
        src="/images/works/TraditionalArt/pomms-world-scene-4.jpg"
        alt="Pomms world scene 4"
      />
    </a>
  </div>

  <h3 class="portfolio-works-h3">Artworks on Fresco & logos</h3>
  <article class="my-10">
    <!--Pomm-->
    <section class="bgPomm p-10">
      <div class="flex flex-row gap-3 justify-center items-end">
        <h3 class="uppercase text-3xl font-black p-0">Pomm</h3>
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/pomm-logo.svg'"
          :altImage="'Pomm Logo (svg)'"
          :classesImage="'w-10 h-10 brightness-0'"
        />
      </div>
      <p class="portfolio-works-paragraph p-10">
        Pomm is a little boy who is reckless and bold. He never worries about
        the dangers that may surround him, but prefers to take things lightly
        and go on an adventure as soon as possible.
      </p>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 justify-items-center"
      >
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/pomm-1.jpg'"
          :altImage="'Pomm illustration 1'"
          :classesImage="'border-2 border-black'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/pomm-2.jpg'"
          :altImage="'Pomm illustration 2'"
          :classesImage="'border-2 border-black'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/pomm-3.jpg'"
          :altImage="'Pomm logo'"
          :classesImage="'border-2 border-black'"
        />
      </div>
      <p class="portfolio-works-paragraph p-10 text-center">
        The Pomm logo, with its large curves, represents the dynamism and
        lightness that characterize it.
      </p>
      <AWorkImageToClick
        :srcImage="'/images/works/DigitalArt/pomm-4.jpg'"
        :altImage="'Pomm illustration'"
        :classesImage="'border-2 border-black w-3/6'"
        class="flex justify-center items-center"
      />
    </section>
    <!--Mia-->
    <section class="bgMia p-10">
      <div class="flex flex-row gap-3 justify-center items-end">
        <h3 class="uppercase text-3xl font-black p-0">Mia</h3>
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/mia-logo.svg'"
          :altImage="'Mia Logo (svg)'"
          :classesImage="'w-10 h-10 brightness-0'"
        />
      </div>
      <p class="portfolio-works-paragraph p-10">
        Mia is a strong, courageous woman who is not afraid to face problems :
        very responsible and perceptive. She needs the people around her for
        reassurance and motivation, though.
      </p>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 justify-items-center"
      >
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/mia-1.jpg'"
          :altImage="'Mia illustration 1'"
          :classesImage="'border-2 border-black'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/mia-2.jpg'"
          :altImage="'Mia illustration 2'"
          :classesImage="'border-2 border-black'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/mia-3.jpg'"
          :altImage="'Mia logo'"
          :classesImage="'border-2 border-black'"
        />
      </div>
      <p class="portfolio-works-paragraph p-10 text-center">
        The Mia logo represents its strong character and straightness by its
        straight lines and regular spacing.
      </p>
      <AWorkImageToClick
        :srcImage="'/images/works/DigitalArt/mia-4.jpg'"
        :altImage="'Mia illustration'"
        :classesImage="'border-2 border-black w-3/6'"
        class="flex justify-center items-center"
      />
    </section>
    <!--Eld-->
    <section class="bgEld p-10">
      <div class="flex flex-row gap-3 justify-center items-end">
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/eld-logo.svg'"
          :altImage="'Eld Logo (svg)'"
          :classesImage="'w-32 h-32 brightness-0'"
        />
      </div>
      <p class="portfolio-works-paragraph p-10">
        Eld is a man who deserves recognition for his bravery and dedication.
        His calm demeanor hides a tough soldier who is ready for anything when
        his loved ones are threatened.
      </p>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 justify-items-center"
      >
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/eld-1.jpg'"
          :altImage="'Eld illustration 1'"
          :classesImage="'border-2 border-black'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/eld-2.jpg'"
          :altImage="'Eld illustration 2'"
          :classesImage="'border-2 border-black'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/eld-3.jpg'"
          :altImage="'Eld logo'"
          :classesImage="'border-2 border-black'"
        />
      </div>
      <p class="portfolio-works-paragraph p-10 text-center">
        Eld is a person who takes care of his environment. A tree represents the
        strong elder that he is to Pomm.
      </p>
      <AWorkImageToClick
        :srcImage="'/images/works/DigitalArt/eld-4.jpg'"
        :altImage="'Eld illustration'"
        :classesImage="'border-2 border-black w-3/6'"
        class="flex justify-center items-center"
      />
    </section>
    <!--Sharon-->
    <section class="bgSharon p-10 text-white">
      <div class="flex flex-row gap-3 justify-center items-end">
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/sharon-logo.svg'"
          :altImage="'Sharon Logo (svg)'"
          :classesImage="'w-52 '"
        />
      </div>
      <p class="portfolio-works-paragraph p-10">
        Sharon, underneath her air of a seductive and resourceful woman, is a
        person who can be quickly overcome and edgy. She is a precious ally to
        Pomm, whom he considers as his big sister.
      </p>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 justify-items-center"
      >
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/sharon-1.jpg'"
          :altImage="'Sharon illustration 1'"
          :classesImage="'border-2 border-black'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/sharon-2.jpg'"
          :altImage="'Sharon illustration 2'"
          :classesImage="'border-2 border-black'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/sharon-3.jpg'"
          :altImage="'Sharon logo'"
          :classesImage="'border-2 border-black'"
        />
      </div>
      <p class="portfolio-works-paragraph p-10 text-center">
        Sharon's logo, sober, recalls luxury: this dimension is very important
        for this character.
      </p>
      <AWorkImageToClick
        :srcImage="'/images/works/DigitalArt/sharon-4.jpg'"
        :altImage="'Sharon illustration'"
        :classesImage="'border-2 border-black w-3/6'"
        class="flex justify-center items-center"
      />
    </section>
    <!--All logos-->
    <section class="bg-zinc-800 p-10 text-white">
      <div class="flex flex-row gap-3 justify-center items-end">
        <h3 class="uppercase text-3xl font-black p-0 text-center">
          Logos from Pomm's Universe
        </h3>
      </div>
      <div
        class="flex flex-row flex-wrap justify-center gap-20 items-center p-20"
      >
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/pomm-logo.svg'"
          :altImage="'Pomm Logo (svg)'"
          :classesImage="'w-32 mb-2'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/mia-logo.svg'"
          :altImage="'Mia Logo (svg)'"
          :classesImage="'w-24'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/eld-logo.svg'"
          :altImage="'Eld Logo (svg)'"
          :classesImage="'w-32'"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/sharon-logo.svg'"
          :altImage="'Sharon Logo (svg)'"
          :classesImage="'w-60'"
        />
      </div>
    </section>
  </article>
</template>

<script setup>
import AWorkImageToClick from "./AWorkImageToClick.vue";
</script>

<style scoped>
.bgPomm {
  background-color: #ffa6a6;
}
.bgMia {
  background-color: #dcbefe;
}
.bgEld {
  background-color: #ffe1b2;
}
.bgSharon {
  background-color: #38498f;
}
</style>
