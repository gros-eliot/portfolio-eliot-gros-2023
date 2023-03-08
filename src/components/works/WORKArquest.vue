<template>
  <section class="text-white">
    <p
      class="portfolio-works-paragraph px-5 text-[8px] p-10 text-center italic text-white"
    >
      Project made with Matthieu Hoareau and Héléna Jaegle.
    </p>

    <div
      class="bg-[url('/images/works/DigitalArt/arquest/title-img.jpg')] bg-cover bg-center bg-no-repeat backgroundCustom1"
    >
      <h2 class="portfolio-h1 text-center">HOW IT STARTED...</h2>
    </div>

    <section class="p-10">
      <p class="portfolio-works-paragraph px-5">
        Arquest is basically a concept. The principle is to plan your daily
        tasks in the form of quests and earn experience for each completed
        quest. This experience will allow you to unlock badges, characters, etc.
        It will also be possible to discuss with your friends directly via the
        application.
      </p>

      <h3 class="portfolio-works-h3 py-10">Evolution of the logo</h3>

      <p class="portfolio-works-paragraph px-5 p-10 text-center">
        I was in charge of making the logo for the project. Here is its
        evolution: the advices of Héléna and Matthieu were essential.
      </p>

      <div
        class="flex flex-wrap items-center justify-center gap-10 bg-white bg-opacity-10 w-full p-2 m-auto"
      >
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/old-logo-1.png'"
          :altImage="'Old logo of Arquest (1)'"
          :classesImage="'h-full object-contain'"
          class="w-32 h-32"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/old-logo-2.png'"
          :altImage="'Old logo of Arquest (2)'"
          :classesImage="'h-full object-contain'"
          class="w-32 h-32"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/old-logo-3.png'"
          :altImage="'Old logo of Arquest (3)'"
          :classesImage="'h-full object-contain'"
          class="w-32 h-32"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/old-logo-4.png'"
          :altImage="'Old logo of Arquest (4)'"
          :classesImage="'h-full object-contain'"
          class="w-32 h-32"
        />
      </div>

      <div
        class="flex justify-center items-center my-5 gap-10 bg-white bg-opacity-30 w-full py-0 p-2 m-auto"
      >
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/arquest-logo.svg'"
          :altImage="'Final logo of Arquest'"
          :classesImage="'h-full object-contain object-center'"
          class="w-96 h-fit my-5 mt-10"
        />
      </div>
    </section>

    <div
      class="bg-[url('/images/works/DigitalArt/arquest/title-img.jpg')] bg-cover bg-center bg-no-repeat backgroundCustom2"
    >
      <h2 class="portfolio-h1 text-center">LANDING PAGE</h2>
    </div>
    <section class="p-10">
      <p class="portfolio-works-paragraph px-5">
        We needed to create a landing page for this project. This site contained
        a page where it was fictitiously possible to make a donation and thus
        help us to advance more quickly on the project. It was also possible to
        find information about the team, as well as the benefits to be found on
        our application.
      </p>

      <h3 class="portfolio-works-h3 py-10">Pages of the landing website</h3>

      <WorkComputer
        :aHref="'https://arquest.eliotgros.fr'"
        :srcImage="'/images/works/DigitalArt/arquest/arquest-landing-page.gif'"
        :ComputerBorderColor="'border-white'"
        :ComputerStrokeColor="'stroke-white'"
        :websiteIssues="false"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 w-full h-fit">
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/arquest-landing-1.jpg'"
          :altImage="'Landing page Arquest (1)'"
          :classesImage="'h-full object-contain'"
          class="border border-white"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/arquest-landing-2.jpg'"
          :altImage="'Landing page Arquest (2)'"
          :classesImage="'h-full object-contain'"
          class="border border-white"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/arquest-landing-3.jpg'"
          :altImage="'Landing page Arquest (3)'"
          :classesImage="'h-full object-contain'"
          class="border border-white"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/arquest-landing-4.jpg'"
          :altImage="'Landing page Arquest (4)'"
          :classesImage="'h-full object-contain'"
          class="border border-white"
        />
      </div>

      <p class="portfolio-works-paragraph px-5 p-10 text-center">
        I made the avatars for the project group members.
      </p>

      <div
        class="flex flex-wrap items-center justify-center gap-20 bg-white bg-opacity-10 w-full p-2 m-auto py-5"
      >
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/eliot_avatar.webp'"
          :altImage="'Avatar of Eliot (developer of the team) '"
          :classesImage="'h-full object-contain'"
          class="w-32 h-32"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/matthieu_avatar.webp'"
          :altImage="'Avatar of Matthieu (developer of the team)'"
          :classesImage="'h-full object-contain'"
          class="w-32 h-32"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/helena_avatar.webp'"
          :altImage="'Avatar of Helena (developer of the team) '"
          :classesImage="'h-full object-contain'"
          class="w-32 h-32"
        />
      </div>
    </section>

    <div
      class="bg-[url('/images/works/DigitalArt/arquest/title-img.jpg')] bg-cover bg-center bg-no-repeat backgroundCustom3"
    >
      <h2 class="portfolio-h1 text-center">FINAL WEBSITE</h2>
    </div>

    <section class="p-10">
      <p class="portfolio-works-paragraph px-5">
        The final site is really different from the different models we made on
        Figma. Graphic modifications were made, functionalities were added or
        modified, or even deleted. We were still proud to present our project.
      </p>

      <div class="bg-yellow-portfolio text-black py-10 my-10">
        <h3 class="portfolio-works-h3 p-0">Dev notes</h3>
        <p class="portfolio-works-paragraph px-5">
          For the development of the landing page, we were still on HTML/CSS/JS.
          However, for the development of the final app, we used the javascript
          framework "VueJS", for the very first time first time since the year.
          Thanks to this framework, we were able to easily implement the
          database (built on Google Firebase) on the site. This database is made
          of collections like quests of each user, users, categories of quests
          categories of quests, etc.
        </p>
      </div>

      <h3 class="portfolio-works-h3 py-10">Pages of the final website</h3>

      <WorkComputer
        :aHref="'https://arquest-app.eliotgros.fr'"
        :srcImage="'/images/works/DigitalArt/arquest/arquest-final-accueil.jpg'"
        :ComputerBorderColor="'border-white'"
        :ComputerStrokeColor="'stroke-white'"
        :websiteIssues="false"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 w-full h-fit">
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/arquest-final-account.jpg'"
          :altImage="'Final page Arquest (1)'"
          :classesImage="'h-full object-contain'"
          class="border border-white"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/arquest-final-history.jpg'"
          :altImage="'Final page Arquest (2)'"
          :classesImage="'h-full object-contain'"
          class="border border-white"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/arquest-final-messages.jpg'"
          :altImage="'Final page Arquest (3)'"
          :classesImage="'h-full object-contain'"
          class="border border-white"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/arquest-final-counter.jpg'"
          :altImage="'Final page Arquest (4)'"
          :classesImage="'h-full object-contain'"
          class="border border-white"
        />
      </div>

      <p class="portfolio-works-paragraph px-5 p-10 text-center">
        I made the avatars for the users of the app.
      </p>

      <div
        class="flex justify-center items-center my-5 gap-10 bg-white bg-opacity-30 w-full p-10 m-auto"
      >
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/arquest-characters.png'"
          :altImage="'Avatar of Eliot (developer of the team) '"
          :classesImage="'h-full object-contain'"
          class="w-10/12"
        />
      </div>
      <p class="portfolio-works-paragraph px-5 p-10 text-center">
        I also made the badges from the app, and some backgrounds for the user
        informations page. Here is some examples.
      </p>

      <div
        class="flex justify-center items-center my-5 gap-10 bg-white bg-opacity-30 w-full p-10 m-auto"
      >
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/arquest-badges.png'"
          :altImage="'Avatar of Eliot (developer of the team) '"
          :classesImage="'h-full object-contain'"
          class="w-10/12"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 w-full h-fit">
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/desert.png'"
          :altImage="'Final page Arquest (1)'"
          :classesImage="'h-full object-contain'"
          class="border border-white"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/jungle.png'"
          :altImage="'Final page Arquest (2)'"
          :classesImage="'h-full object-contain'"
          class="border border-white"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/mountains.png'"
          :altImage="'Final page Arquest (3)'"
          :classesImage="'h-full object-contain'"
          class="border border-white"
        />
        <AWorkImageToClick
          :srcImage="'/images/works/DigitalArt/arquest/sunset.png'"
          :altImage="'Final page Arquest (4)'"
          :classesImage="'h-full object-contain'"
          class="border border-white"
        />
      </div>
    </section>
  </section>
</template>
<script setup>
import AWorkImageToClick from "./AWorkImageToClick.vue";
import WorkComputer from "./WorkComputer.vue";
</script>

<style scoped>
.backgroundCustom1 {
  filter: hue-rotate(360deg);
  filter: grayscale(0.5);
}
.backgroundCustom2 {
  filter: hue-rotate(360deg);
}
.backgroundCustom3 {
  filter: hue-rotate(120deg);
}
</style>
