<template>
  <a :href="srcImage" target="_blank">
    <img :src="srcImage" :alt="altImage" :class="classesImage" />
  </a>
</template>

<script>
export default {
  name: "AWorkImageToClick",
  props: {
    srcImage: {
      type: String,
      required: true,
    },
    altImage: {
      type: String,
      required: false,
    },
    classesImage: {
      type: String,
      required: false,
    },
  },
};
</script>
