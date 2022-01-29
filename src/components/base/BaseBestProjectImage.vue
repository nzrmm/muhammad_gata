<template>
  <div
    class="w-full h-[600px] hover:p-4 bg-gradient-to-br from-teal-500 to-purple-500 transition-all duration-500">
    <img
      :src="`/images/${img}`"
      class="w-full h-full object-cover object-top"
      :alt="slug" />
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: 'img',
    },
  },
};
</script>
