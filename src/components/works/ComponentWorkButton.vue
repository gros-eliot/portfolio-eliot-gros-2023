<template>
  <RouterLink :to="RouterLinkTo" class="w-fit h-fit">
    <button
      class="bg-yellow-portfolio border-black border-2 w-fit h-fit p-4 rounded-full font-bold uppercase box-shadow hover:bg-black hover:border-yellow-portfolio hover:text-yellow-portfolio boxShadow"
    >
      {{ textButton }}
    </button>
  </RouterLink>
</template>
<script>
export default {
  name: "ComponentWorkButton",
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
<style scoped>
.boxShadow {
  box-shadow: 5px 5px 0px black;
}
.boxShadow:hover {
  box-shadow: 5px 5px 0px #fcff73;
}
</style>
