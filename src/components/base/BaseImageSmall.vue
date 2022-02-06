<template>
  <article
    class="transition-500 h-min w-full bg-gradient-to-br from-teal-500 to-purple-500 hover:p-4 lg:h-[25rem]">
    <img
      :src="`/images/${img}`"
      class="h-full w-full object-cover"
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
