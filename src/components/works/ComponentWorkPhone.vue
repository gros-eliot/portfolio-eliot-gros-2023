<template>
  <section class="flex flex-col gap-1 justify-center items-center">
    <div
      class="border-2 rounded-xl grid grid-rows-[92%,8%] justify-items-center"
      :class="{
        'w-[220px] h-[410px] p-2 rounded-xl': PhoneSize === 'big',
        'w-[110px] h-[210px] p-1 rounded-lg': PhoneSize === 'small',
        'border-white': PhoneBorderColor === 'border-white',
        'border-black': PhoneBorderColor === 'border-black',
      }"
    >
      <a :href="aHref" class="w-full h-full" target="_blank"
        ><img
          :src="srcImage"
          class="rounded-xl w-full h-full object-cover object-top"
          :class="{
            ' rounded-xl': PhoneSize === 'big',
            ' rounded-lg': PhoneSize === 'small',
          }"
      /></a>

      <!--Cercle de l'iPhone-->

      <div
        class="m-auto py-2"
        :class="{
          'py-2': PhoneSize === 'big',
          'py-1': PhoneSize === 'small',
        }"
      >
        <div
          class="rounded-full border-2 bg-transparent w-6 h-6"
          :class="{
            'w-6 h-6': PhoneSize === 'big',
            'w-3 h-3': PhoneSize === 'small',
            'border-white': PhoneBorderColor === 'border-white',
            'border-black': PhoneBorderColor === 'border-black',
          }"
        ></div>
      </div>
    </div>
    <div class="w-fit h-fit" v-if="responsive === false">
      <p class="text-center font-bold p-1" v-if="websiteIssues === false">
        Visit the website (mobile)
      </p>
      <p
        class="text-center text-yellow-portfolio p-1"
        v-if="websiteIssues === true"
      >
        This website is currently unavailable !
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ComponentWorkPhone",

  props: {
    srcImage: {
      type: String,
      required: true,
    },
    aHref: {
      type: String,
      required: true,
    },
    PhoneBorderColor: {
      type: String,
      required: true,
    },
    PhoneSize: {
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
