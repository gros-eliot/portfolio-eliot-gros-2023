<template>
  <svg
    width="140"
    height="162"
    viewBox="0 0 140 162"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_233_345)">
      <path
        d="M52.5133 14.0945C57.4631 1.32092 75.5368 1.32092 80.4866 14.0945L127.36 135.058C132.606 148.597 117.475 160.947 105.262 153.095L74.6117 133.39C69.6704 130.214 63.3296 130.214 58.3883 133.39L27.7384 153.095C15.5247 160.947 0.393638 148.597 5.64 135.058L52.5133 14.0945Z"
        :fill="arrowFill"
        stroke="black"
        stroke-width="8"
        class="boxShadow"
      />
    </g>
  </svg>
</template>
<script>
export default {
  name: "TopArrow",
  props: {
    arrowFill: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.boxShadow {
  box-shadow: 7px 2px 0px #000000;
}
</style>
