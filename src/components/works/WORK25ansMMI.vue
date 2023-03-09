<template>
  <article class="flex flex-col mt-10">
    <!--bg-[#FFD600] JAUNE-->
    <!--bg-[#FF3636] ROUGE-->
    <!--bg-[#BBA7E7] BLEU-->
    <!--bg-[#6DD678] VERT-->
    <p class="portfolio-works-paragraph text-[8px] p-5 text-center italic">
      Project made with Julie Albinie (web co-developer), Loup Lobato
      (designer), and Sacha Wicky (designer).
    </p>

    <section class="flex flex-col gap-5 bg-[#6DD678] text-black">
      <h3 class="portfolio-works-h3 p-5">Website</h3>
      <p class="portfolio-works-paragraph">
        We have created a website for the 25th anniversary of the MMI of
        Montbéliard. You will be able to find elements about its history, the
        staff, the artworks made for the contest, as well as useful information
        for the dedicated event.
      </p>
      <p class="portfolio-works-paragraph">
        This site is linked to a Firebase database, which counts the votes for
        each work, after the voting user has created an account.
      </p>

      <!--Note to me : when a website is responsive use this div.-->
      <div class="p-5 flex flex-col justify-center items-center gap-5">
        <div class="flex flex-col md:flex-row gap-3 items-center">
          <ComponentWorkComputer
            :aHref="'https://mmi25ans.eliotgros.fr'"
            :srcImage="'/images/works/Websites/25ansMMI/mmi25ans-1.jpg'"
            :ComputerBorderColor="'border-black'"
            :ComputerStrokeColor="'stroke-black'"
            :websiteIssues="false"
            :responsive="true"
            class="hidden md:flex"
          />
          <ComponentWorkPhone
            :aHref="'https://mmi25ans.eliotgros.fr'"
            :srcImage="'/images/works/Websites/25ansMMI/mmi25ans-1.jpg'"
            :PhoneBorderColor="'border-black'"
            :PhoneSize="'small'"
            :websiteIssues="false"
            :responsive="true"
          />
        </div>
        <p class="portfolio-works-paragraph">
          Visit the website -
          <span class="font-bold text-black">responsive</span>
        </p>
      </div>
    </section>

    <section class="flex flex-col gap-5 pb-20 bg-[#FFD600]">
      <h3 class="portfolio-works-h3 p-5">Art competition</h3>
      <p class="portfolio-works-paragraph">
        We organized a contest for the realization of artistic or digital works
        on this occasion. We received real masterpieces, available on the
        website. The winner of the contest won a trophy and the possibility to
        have his work integrated by us in the NFTs blockchain.
      </p>
      <div class="h-screen w-fit rounded-xl border-2 border-black my-10 m-auto">
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/Websites/25ansMMI/mmi25ans-oeuvres.jpg'"
          :altImage="'mmi 25 years screenshot'"
          :classesImage="'w-full h-full object-cover object-center rounded-xl'"
          class="h-full w-full rounded-xl"
        />
      </div>
    </section>

    <section class="flex flex-col gap-5 pb-20 bg-[#BBA7E7]">
      <h3 class="portfolio-works-h3 p-5">Event</h3>
      <p class="portfolio-works-paragraph">
        We also organized a party on March 21, 2023, at the MMI in Montbéliard.
        This evening, dedicated to the anniversary, gathered many former
        students but also students of the 2022-2023 classes.
      </p>
      <div class="h-screen w-fit rounded-xl border-2 border-black my-10 m-auto">
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/Websites/25ansMMI/mmi25ans-histoire3.jpg'"
          :altImage="'mmi 25 years screenshot'"
          :classesImage="'w-full h-full object-cover object-center rounded-xl'"
          class="h-full w-full rounded-xl"
        />
      </div>
    </section>

    <section class="flex flex-col gap-5 pb-20 bg-black text-white">
      <h3 class="portfolio-works-h3 p-5">Screenshots</h3>

      <div
        class="grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 gap-5 h-3/6 justify-center items-center"
      >
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/Websites/25ansMMI/mmi25ans-1.jpg'"
          :altImage="'25 ans MMI - screenshot'"
          :classesImage="'w-fit h-full object-cover object-top rounded-xl'"
          class="border border-white rounded-xl h-[50vh]"
        />
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/Websites/25ansMMI/mmi25ans-accueil.jpg'"
          :altImage="'25 ans MMI - screenshot'"
          :classesImage="'w-fit h-full object-cover object-top rounded-xl'"
          class="border border-white rounded-xl h-[50vh]"
        />
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/Websites/25ansMMI/mmi25ans-histoire.jpg'"
          :altImage="'25 ans MMI - screenshot'"
          :classesImage="'w-fit h-full object-cover object-top rounded-xl'"
          class="border border-white rounded-xl h-[50vh]"
        />
        <AWorkImageToClick
          :classesHref="'w-fit h-fit'"
          :srcImage="'/images/works/Websites/25ansMMI/mmi25ans-histoire2.jpg'"
          :altImage="'25 ans MMI - screenshot'"
          :classesImage="'w-fit h-full object-cover object-top rounded-xl'"
          class="border border-white rounded-xl h-[50vh]"
        />
      </div>
    </section>
  </article>
</template>

<script setup>
import AWorkImageToClick from "./AWorkImageToClick.vue";
import ComponentWorkComputer from "./ComponentWorkComputer.vue";
import ComponentWorkPhone from "./ComponentWorkPhone.vue";
import Confetti from "./Confetti.vue";
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
