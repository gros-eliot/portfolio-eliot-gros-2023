<template>
  <article class="flex flex-col gap-20 mt-10 text-white">
    <section class="flex flex-col gap-5 bg-[#facc15] text-black">
      <!--bg-[#facc15]-->
      <!--bg-[#ff0000]-->
      <h3 class="portfolio-works-h3 p-5">Website</h3>

      <!--Note to me : when a website is responsive use this div.-->
      <div class="p-5 flex flex-col justify-center items-center gap-5">
        <div class="flex flex-col md:flex-row gap-3 items-center">
          <ComponentWorkComputer
            :aHref="'https://jazznpop-festival.eliotgros.fr'"
            :srcImage="'/images/works/Websites/jazznpop/jazznpop-full-1.jpg'"
            :ComputerBorderColor="'border-black'"
            :ComputerStrokeColor="'stroke-black'"
            :websiteIssues="false"
            :responsive="true"
            class="hidden md:flex"
          />
          <ComponentWorkPhone
            :aHref="'https://jazznpop-festival.eliotgros.fr'"
            :srcImage="'/images/works/Websites/jazznpop/jazznpop-small-1.jpg'"
            :PhoneBorderColor="'border-black'"
            :PhoneSize="'small'"
            :websiteIssues="false"
            :responsive="true"
          />
        </div>
        <p class="portfolio-works-paragraph">
          Visit the website -
          <span class="font-bold text-red-600">responsive</span>
        </p>
      </div>
    </section>

    <section class="absolute bottom-0">
      <scroll-parallax :speed="1.4" :down="true">
        <div
          class="fixed md:flex hidden justify-start w-[90vw] pointer-events-none"
        >
          <img
            src="/images/works/Websites/jazznpop/illustrations/saxophone.svg"
            alt="Saxophone"
            class="w-[35vh] h-[40vh] rotate-45 fill-black"
          />
        </div>
      </scroll-parallax>
      <scroll-parallax :speed="1.1" :down="true">
        <div
          class="fixed md:flex hidden justify-end w-[90vw] pointer-events-none"
        >
          <img
            src="/images/works/Websites/jazznpop/illustrations/saxophone.svg"
            alt="Saxophone"
            class="w-[10vh] h-[15vh] mt-20 rotationObject -rotate-45 fill-black"
          />
        </div>
      </scroll-parallax>
      <scroll-parallax :speed="2" :down="true">
        <div
          class="fixed md:flex hidden justify-center w-[90vw] pointer-events-none"
        >
          <img
            src="/images/works/Websites/jazznpop/illustrations/CD.svg"
            alt="CD"
            class="w-[20vh] h-[20vh] mt-96 rotate-90 fill-black"
          />
        </div>
      </scroll-parallax>
    </section>

    <section class="flex flex-col gap-5">
      <h3 class="portfolio-works-h3 p-5">Logos</h3>
      <p class="portfolio-works-paragraph">
        We started by thinking about the concept of the festival: what kind of
        music, what artists would be present, what theme, at what time of the
        year, etc.
      </p>
      <p class="portfolio-works-paragraph">
        We had to propose a logo, a graphic charter, personae, etc.
      </p>
      <div
        class="grid grd-cols-1 md:grid-cols-2 p-10 gap-5 justify-items-center items-center"
      >
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/TraditionalArt/jazznpop-logo-1.jpg'"
          :altImage="'JazzNPop Festival Logo ideas'"
          :classesImage="'h-full object-contain'"
          class=""
        />
        <div
          class="w-full h-full flex flex-wrap justify-center items-center gap-5 p-1"
        >
          <AWorkImageToClick
            :classesHref="'w-fit h-fit'"
            :srcImage="'/images/works/Websites/jazznpop/logos/white.svg'"
            :altImage="'JazzNPop Festival Logo ideas'"
            :classesImage="'h-full object-contain'"
            class=""
          />
          <AWorkImageToClick
            :classesHref="'w-fit h-fit'"
            :srcImage="'/images/works/Websites/jazznpop/logos/orange.svg'"
            :altImage="'JazzNPop Festival Logo ideas'"
            :classesImage="'h-full object-contain'"
            class=""
          />
          <AWorkImageToClick
            :classesHref="'w-fit h-fit'"
            :srcImage="'/images/works/Websites/jazznpop/logos/light-blue.svg'"
            :altImage="'JazzNPop Festival Logo ideas'"
            :classesImage="'h-full object-contain'"
            class=""
          />
          <AWorkImageToClick
            :classesHref="'w-fit h-fit'"
            :srcImage="'/images/works/Websites/jazznpop/logos/red.svg'"
            :altImage="'JazzNPop Festival Logo ideas'"
            :classesImage="'h-full object-contain'"
            class=""
          />
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-5 bg-[#ff0000]">
      <h3 class="portfolio-works-h3 p-5">
        Figma : a huge part of this project
      </h3>
      <p class="portfolio-works-paragraph">
        We had to make three models for the site: a mobile version, a tablet
        version and a computer version. Everything had to be made of responsive
        components, well named and organized.
      </p>
      <div class="m-auto my-10">
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/Websites/jazznpop/jazznpop-figma.gif'"
          :altImage="'JazzNPop Festival - Figma responsive'"
          :classesImage="'w-fit h-full object-contain'"
          class=""
        />
      </div>
    </section>

    <!--BIG CD-->
    <scroll-parallax :speed="1.5" :down="true">
      <div
        class="fixed md:flex hidden justify-end w-[90vw] pointer-events-none"
      >
        <img
          src="/images/works/Websites/jazznpop/illustrations/CD.svg"
          alt="CD"
          class="w-[30vw] h-[50vh] fill-white"
        />
      </div>
    </scroll-parallax>

    <!--BIG SAXO-->
    <scroll-parallax :speed="1.1" :down="true">
      <div
        class="fixed md:flex hidden justify-start w-[90vw] pointer-events-none"
      >
        <img
          src="/images/works/Websites/jazznpop/illustrations/saxophone.svg"
          alt="Saxophone"
          class="w-[30vw] h-[50vh] rotationObject rotate-45 origin-top fill-white"
        />
      </div>
    </scroll-parallax>

    <section class="flex flex-col gap-5 pb-20">
      <h3 class="portfolio-works-h3 p-5">SCREENSHOTS</h3>
      <p class="portfolio-works-paragraph">
        On the final site, it is possible to add, modify, and delete certain
        elements, all via forms linked to a Google Firebase database. This
        concerns artists or concerts.
      </p>
      <div
        class="grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 gap-5 h-3/6 justify-center items-center"
      >
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/Websites/jazznpop/jazznpop-full-1.jpg'"
          :altImage="'JazzNPop Festival screenshot'"
          :classesImage="'w-fit h-full object-cover object-top rounded-xl'"
          class="border border-white rounded-xl h-[50vh]"
        />
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/Websites/jazznpop/jazznpop-full-2.jpg'"
          :altImage="'JazzNPop Festival screenshot'"
          :classesImage="'w-fit h-full object-cover object-top rounded-xl'"
          class="border border-white rounded-xl h-[50vh]"
        />
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/Websites/jazznpop/jazznpop-full-3.jpg'"
          :altImage="'JazzNPop Festival screenshot'"
          :classesImage="'w-fit h-full object-cover object-top rounded-xl'"
          class="border border-white rounded-xl h-[50vh]"
        />
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/Websites/jazznpop/jazznpop-full-4.jpg'"
          :altImage="'JazzNPop Festival screenshot'"
          :classesImage="'w-fit h-full object-cover object-top rounded-xl'"
          class="border border-white rounded-xl h-[50vh]"
        />
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 h-5/6 justify-center items-center"
      >
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/Websites/jazznpop/jazznpop-small-1.jpg'"
          :altImage="'jazznpop screenshot'"
          :classesImage="'w-full h-full rounded-xl object-cover'"
          class="border border-white rounded-xl h-[70vh]"
        />
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/Websites/jazznpop/jazznpop-small-2.jpg'"
          :altImage="'jazznpop screenshot'"
          :classesImage="'w-full h-full rounded-xl object-cover'"
          class="border border-white rounded-xl h-[70vh]"
        />
      </div>
    </section>
  </article>
</template>

<script setup>
import AWorkImageToClick from "./AWorkImageToClick.vue";
import ComponentWorkComputer from "./ComponentWorkComputer.vue";
import ComponentWorkPhone from "./ComponentWorkPhone.vue";
</script>
<script>
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";
export default {
  components: {
    ScrollParallax,
  },
};

// lignes qui bougent en background
function rotationObject() {
  let rotationObject = document.querySelector(".rotationObject");
  let valueScroll = window.pageYOffset;
  rotationObject.style.transformOrigin = "center";
  rotationObject.style.transform = rotateY(valueScroll / 10 + "rad");
}
window.addEventListener("scroll", rotationObject);
</script>

<style scoped></style>
