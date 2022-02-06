<template>
  <div class="mb-20 flex-center flex-col">
    <h2 class="lg:w-6/12 mb-16 uppercase text-center">_{{ name }}_</h2>
    <p
      class="w-10/12 lg:w-8/12 lg:text-xl text-typo-400 leading-loose lg:text-justify">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>
