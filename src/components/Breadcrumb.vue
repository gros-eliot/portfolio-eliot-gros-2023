<template>
  <section
    class="bg-transparent border border-white text-white text-sm uppercase w-fit p-2 rounded-xl flex flex-row gap-1 absolute"
  >
    <div
      class="flex flex-col items-center justify-center md:flex-row gap-1 text-[8px] md:text-sm"
    >
      <div class="w-fit">
        <RouterLink :to="Item1.RouterLinkTo" class="underline">
          {{ Item1.text }}</RouterLink
        >
      </div>
      <div class="w-fit">
        <p class="font-bold hidden md:block">&gt;</p>
        <p class="font-bold block md:hidden">V</p>
      </div>
      <div class="w-fit">
        <RouterLink :to="Item2.RouterLinkTo" class="underline">
          {{ Item2.text }}</RouterLink
        >
      </div>
      <div class="w-fit">
        <p class="font-bold hidden md:block">&gt;</p>
        <p class="font-bold block md:hidden">V</p>
      </div>
      <div class="w-fit">
        <p class="font-bold">{{ Item3.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
/*
 text: "",
 to: {
   name: "",
   params: { id: "" },
 },
    
    */
export default {
  props: {
    Item1: {
      type: Object,
      default: {},
    },
    Item2: {
      type: Object,
      default: {},
    },
    Item3: {
      type: String,
      required: true,
    },
  },
};
</script>
