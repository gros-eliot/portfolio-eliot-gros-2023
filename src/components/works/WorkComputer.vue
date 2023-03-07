<template>
  <div
    class="flex flex-col gap-0 justify-center items-center m-auto p-3 my-5 w-fit"
  >
    <div class="p-3 border rounded-xl w-fit" :class="ComputerBorderColor">
      <a :href="aHref" class="w-fit h-fit"
        ><img :src="srcImage" class="w-fit rounded-xl"
      /></a>
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
    <ComputerSVGBottom class="w-40 h-16" :class="ComputerStrokeColor" />
  </div>
</template>

<script>
import ComputerSVGBottom from "./ComputerSVGBottom.vue";
export default {
  name: "WorkComputer",
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
  },
};
</script>
