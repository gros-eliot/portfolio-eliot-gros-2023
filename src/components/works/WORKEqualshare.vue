<template>
  <article class="flex flex-col gap-10 mt-10">
    <section class="flex flex-col gap-5">
      <p class="portfolio-works-paragraph p-5 px-10">
        This website is the first one that I made, at the MMI of Montbéliard,
        during the first semester. We had to present feminism in the way we
        wanted, as long as the site was translated into English and French, as
        well as containing three articles, a timeline and an image gallery.
        Personally, I preferred to present feminism as a whole.
      </p>
      <ComponentWorkPhone
        :srcImage="'/images/works/Websites/equalshare/equalshare-phone-4.jpg'"
        :aHref="'https://equalshare.eliotgros.fr/'"
        :PhoneBorderColor="'border-white bg-black '"
        :websiteIssues="false"
        :PhoneSize="'big'"
      />
    </section>
    <section class="flex flex-col gap-5">
      <h3 class="portfolio-works-h3 px-5">Screenshots</h3>
      <div class="flex flex-wrap gap-10 h-3/6 justify-center items-center">
        <AWorkImageToClick
          :srcImage="'/images/works/Websites/equalshare/equalshare-phone-5.jpg'"
          :altImage="'Equalshare screenshot'"
          :classesImage="'w-full h-full rounded-xl object-cover'"
          class="border border-white rounded-xl h-[50vh]"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/Websites/equalshare/equalshare-phone-2.jpg'"
          :altImage="'Equalshare screenshot'"
          :classesImage="'w-full h-full rounded-xl object-cover'"
          class="border border-white rounded-xl h-[50vh]"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/Websites/equalshare/equalshare-phone-3.jpg'"
          :altImage="'Equalshare screenshot'"
          :classesImage="'w-full h-full rounded-xl object-cover'"
          class="border border-white rounded-xl h-[50vh]"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/Websites/equalshare/equalshare-phone-4.jpg'"
          :altImage="'Equalshare screenshot'"
          :classesImage="'w-full h-full rounded-xl object-cover'"
          class="border border-white rounded-xl h-[50vh]"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/Websites/equalshare/equalshare-phone-1.jpg'"
          :altImage="'Equalshare screenshot'"
          :classesImage="'w-full h-full rounded-xl object-cover'"
          class="border border-white rounded-xl h-[50vh]"
        />
      </div>
    </section>
  </article>
</template>
<script setup>
import AWorkImageToClick from "./AWorkImageToClick.vue";
import ComponentWorkPhone from "./ComponentWorkPhone.vue";
</script>
