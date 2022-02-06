<template>
  <article
    class="w-full h-min lg:h-[25rem] hover:p-4 bg-gradient-to-br from-teal-500 to-purple-500 transition-500">
    <img
      :src="`/images/${img}`"
      class="w-full h-full object-cover"
      :alt="alt" />
  </article>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: 'image-large',
    },
  },
};
</script>
