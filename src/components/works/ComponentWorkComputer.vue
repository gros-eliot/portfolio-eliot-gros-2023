<template>
  <div
    class="flex flex-col gap-0 justify-center items-center m-auto p-3 my-5 w-fit"
  >
    <div class="p-3 border-2 rounded-xl w-fit" :class="ComputerBorderColor">
      <a :href="aHref" class="w-fit h-fit" target="_blank"
        ><img :src="srcImage" class="rounded-xl w-96 object-cover object-top"
      /></a>
      <div v-if="responsive === false">
        <p class="text-center font-bold p-1" v-if="websiteIssues === false">
          Visit the website
        </p>
        <p
          class="text-center text-yellow-portfolio p-1"
          v-if="websiteIssues === true"
        >
          This website is currently unavailable !
        </p>
      </div>
    </div>
    <ComputerSVGBottom class="w-40 h-16" :class="ComputerStrokeColor" />
  </div>
</template>

<script>
import ComputerSVGBottom from "./ComputerSVGBottom.vue";
export default {
  name: "ComponentWorkComputer",
  components: {
    ComputerSVGBottom,
  },
  props: {
    srcImage: {
      type: String,
      required: true,
    },
    aHref: {
      type: String,
      required: true,
    },
    ComputerBorderColor: {
      type: String,
      required: true,
    },
    ComputerStrokeColor: {
      type: String,
      required: true,
    },
    websiteIssues: {
      type: Boolean,
      default: false,
    },
    responsive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
