<template>
  <RouterLink :to="RouterLinkTo" class="w-fit h-fit">
    <button
      class="bg-yellow-portfolio border-black border-2 w-fit h-fit p-4 rounded-full font-bold uppercase"
    >
      {{ textButton }}
    </button>
  </RouterLink>
</template>
<script>
export default {
  name: "WorkButton",
  props: {
    textButton: {
      type: String,
      required: true,
    },
    RouterLinkTo: {
      type: Object,
      required: true,
    },
  },
};
</script>
