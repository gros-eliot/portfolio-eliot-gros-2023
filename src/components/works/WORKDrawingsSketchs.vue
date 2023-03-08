<template>
  <article class="flex flex-col gap-10 mt-10">
    <section class="flex flex-col gap-5 px-5">
      <h3 class="portfolio-works-h3">Pomm's world</h3>
      <p class="portfolio-works-paragraph text-center">
        Here are some illustrations coming from the universe of Pomm, that I
        imagined.
      </p>
      <!--button voir projet-->
      <div class="flex justify-center items-center">
        <ComponentWorkButton
          :textButton="`See the Pomm's world project`"
          :RouterLinkTo="{
            name: 'WorkView',
            params: { id: 'TPLcXbIddtJmaECS058f' },
          }"
          @click="reloadPageFunction()"
        />
      </div>

      <!--grille des dessins-->

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
    </section>

    <section class="flex flex-col gap-5 px-5">
      <h3 class="portfolio-works-h3">Inktober 2017</h3>
      <p class="portfolio-works-paragraph text-center">
        I followed the
        <strong class="bg-black bg-opacity-10">
          <a href="https://inktober.com/">Inktober movement</a>
        </strong>
        in 2017, when I was in high school. Here are some examples.
      </p>
      <!--grille des dessins-->
      <div class="grid grid-rows-2 w-full px-10 2xl:px-20">
        <div class="grid grid-cols-1 md:grid-cols-3 w-full">
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/inktober-1.jpg'"
            :altImage="'inktober illustration 1'"
            :classesImage="'h-full object-cover object-center'"
            class="border border-black"
          />
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/inktober-2.jpg'"
            :altImage="'inktober illustration 1'"
            :classesImage="'h-full object-cover object-center'"
            class="border border-black"
          />
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/inktober-3.jpg'"
            :altImage="'inktober illustration 1'"
            :classesImage="'h-full object-cover object-center'"
            class="border border-black"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 w-full">
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/inktober-4.jpg'"
            :altImage="'inktober illustration 1'"
            :classesImage="'h-full object-cover object-center'"
            class="border border-black"
          />
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/inktober-5.jpg'"
            :altImage="'inktober illustration 1'"
            :classesImage="'h-full object-cover object-center'"
            class="border border-black"
          />
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-5 px-5">
      <h3 class="portfolio-works-h3">Forest</h3>
      <p class="portfolio-works-paragraph px-10">
        I made some drawings with the aim of creating a manga. It tells the
        story of children facing in teams in the forest, and having to hurt the
        opposing teams. The unhurt team would be the winner of the game. I
        imagined this story in high school, when I was 16.
      </p>
      <!--grille des dessins-->
      <div class="grid grid-rows-2 w-full px-10 2xl:px-20">
        <div class="grid grid-cols-1 md:grid-cols-3 w-full">
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/forest-kids-1.jpg'"
            :altImage="'forest-kids illustration 1'"
            :classesImage="'h-full object-cover object-center'"
            class="border border-black"
          />
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/forest-kids-2.jpg'"
            :altImage="'forest-kids illustration 1'"
            :classesImage="'h-full object-cover object-center'"
            class="border border-black"
          />
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/forest-kids-3.jpg'"
            :altImage="'forest-kids illustration 1'"
            :classesImage="'h-full object-cover object-center'"
            class="border border-black"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 w-full">
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/forest-kids-4.jpg'"
            :altImage="'forest-kids illustration 1'"
            :classesImage="'h-full object-cover object-center'"
            class="border border-black"
          />
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/forest-kids-5.jpg'"
            :altImage="'forest-kids illustration 1'"
            :classesImage="'h-full object-cover object-center'"
            class="border border-black"
          />
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-5 h-fit">
      <h3 class="portfolio-works-h3 px-5">Random sketchs</h3>

      <!--grille des dessins: MOBILE-->
      <div class="grid grid-cols-2 md:hidden">
        <AWorkImageToClick
          :srcImage="'/images/works/TraditionalArt/clocher.jpg'"
          :altImage="'Random sketch'"
          :classesImage="'h-full object-cover object-center'"
          class="h-[40vh]"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/TraditionalArt/football.jpg'"
          :altImage="'Random sketch'"
          :classesImage="'h-full object-cover object-center'"
          class="h-[40vh]"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/TraditionalArt/lake.jpg'"
          :altImage="'Random sketch'"
          :classesImage="'h-full object-cover object-center'"
          class="h-[40vh]"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/TraditionalArt/lit-rooms-1.jpg'"
          :altImage="'Random sketch'"
          :classesImage="'h-full object-cover object-center'"
          class="h-[40vh]"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/TraditionalArt/vegetal.jpg'"
          :altImage="'Random sketch'"
          :classesImage="'h-full object-cover object-center'"
          class="h-[40vh]"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/TraditionalArt/fight.jpg'"
          :altImage="'Random sketch'"
          :classesImage="'h-full object-cover object-center'"
          class="h-[40vh]"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/TraditionalArt/random-sketch-1.jpg'"
          :altImage="'Random sketch'"
          :classesImage="'h-full object-cover object-center'"
          class="h-[40vh]"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/TraditionalArt/luffy-2.jpg'"
          :altImage="'Random sketch'"
          :classesImage="'h-full object-cover object-center'"
          class="h-[40vh]"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/TraditionalArt/woman-in-swimming-pool.jpg'"
          :altImage="'Random sketch'"
          :classesImage="'h-full object-cover object-center'"
          class="h-[40vh]"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/TraditionalArt/random-sketch-3.jpg'"
          :altImage="'Random sketch'"
          :classesImage="'h-full object-cover object-center'"
          class="h-[40vh]"
        />
      </div>

      <!--grille des dessins: TAB & DESKTOP-->
      <div class="grid-cols-3 p-10 md:grid hidden">
        <section
          class="grid grid-rows-[55%,45%] justify-items-center w-full h-full"
        >
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/clocher.jpg'"
            :altImage="'Random sketch'"
            :classesImage="'w-full h-full object-cover object-center'"
            :classesHref="'w-fit h-fit'"
            class="h-full w-full border border-black"
          />

          <div class="grid grid-cols-2">
            <AWorkImageToClick
              :srcImage="'/images/works/TraditionalArt/football.jpg'"
              :altImage="'Random sketch'"
              :classesImage="'h-full object-cover object-center'"
              class="h-full w-full border border-black"
            />
            <AWorkImageToClick
              :srcImage="'/images/works/TraditionalArt/lake.jpg'"
              :altImage="'Random sketch'"
              :classesImage="'h-full object-cover object-center'"
              class="h-full w-full border border-black"
            />
            <AWorkImageToClick
              :srcImage="'/images/works/TraditionalArt/lit-rooms-1.jpg'"
              :altImage="'Random sketch'"
              :classesImage="'h-full object-cover object-center'"
              class="h-full w-full border border-black"
            />
            <AWorkImageToClick
              :srcImage="'/images/works/TraditionalArt/vegetal.jpg'"
              :altImage="'Random sketch'"
              :classesImage="'h-full object-cover object-center'"
              class="h-full w-full border border-black"
            />
          </div>
        </section>

        <section class="grid grid-rows-3">
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/fight.jpg'"
            :altImage="'Random sketch'"
            :classesImage="'h-full object-cover object-center'"
            class="h-full w-full border border-black"
          />
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/random-sketch-1.jpg'"
            :altImage="'Random sketch'"
            :classesImage="'h-full object-cover object-center'"
            class="h-full w-full border border-black"
          />
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/luffy-2.jpg'"
            :altImage="'Random sketch'"
            :classesImage="'h-full object-cover object-center'"
            class="h-full w-full border border-black"
          />
        </section>

        <section class="grid grid-rows-2">
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/woman-in-swimming-pool.jpg'"
            :altImage="'Random sketch'"
            :classesImage="'h-full object-cover object-center'"
            class="h-full w-full border border-black"
          />
          <AWorkImageToClick
            :srcImage="'/images/works/TraditionalArt/random-sketch-3.jpg'"
            :altImage="'Random sketch'"
            :classesImage="'h-full object-cover object-center'"
            class="h-full w-full border border-black"
          />
        </section>
      </div>
    </section>
  </article>
</template>
<script setup>
import AWorkImageToClick from "./AWorkImageToClick.vue";
import ComponentWorkButton from "./ComponentWorkButton.vue";

function reloadPageFunction() {
  setTimeout(() => {
    document.location.reload();
  }, 1);
}
</script>
