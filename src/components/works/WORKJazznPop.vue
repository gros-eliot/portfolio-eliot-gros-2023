<template>
  <article class="flex flex-col gap-20 mt-10 text-black">
    <section class="flex flex-col gap-5 bg-[#ff0000] text-white">
      <h3 class="portfolio-works-h3 p-5">Website</h3>

      <!--Note to me : when a website is responsive use this div.-->
      <div class="p-5 flex flex-col justify-center items-center gap-5">
        <div class="flex flex-col md:flex-row gap-3 items-center">
          <ComponentWorkComputer
            :aHref="'https://jazznpop-festival.eliotgros.fr'"
            :srcImage="'/images/works/Websites/jazznpop/jazznpop-full-1.jpg'"
            :ComputerBorderColor="'border-white'"
            :ComputerStrokeColor="'stroke-white'"
            :websiteIssues="false"
            :responsive="true"
            class="hidden md:flex"
          />
          <ComponentWorkPhone
            :aHref="'https://arquest-app.eliotgros.fr'"
            :srcImage="'/images/works/Websites/jazznpop/jazznpop-small-1.jpg'"
            :PhoneBorderColor="'border-white'"
            :PhoneSize="'small'"
            :websiteIssues="false"
            :responsive="true"
          />
        </div>
        <p class="portfolio-works-paragraph">
          Visit the website -
          <span class="font-bold text-yellow-portfolio">responsive</span>
        </p>
      </div>
    </section>

    <section class="flex flex-col gap-5">
      <h3 class="portfolio-works-h3 p-5">Logos and graphic chart</h3>
      <p class="portfolio-works-paragraph">
        We started by thinking about the concept of the festival: what kind of
        music, what artists would be present, what theme, at what time of the
        year, etc.
      </p>
      <p class="portfolio-works-paragraph">
        We had to propose a logo, a graphic charter, personae, etc.
      </p>
    </section>
  </article>
</template>

<script setup>
import AWorkImageToClick from "./AWorkImageToClick.vue";
import ComponentWorkComputer from "./ComponentWorkComputer.vue";
import ComponentWorkPhone from "./ComponentWorkPhone.vue";
</script>
