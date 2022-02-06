<template>
  <div class="flex-center mb-20 flex-col">
    <h2 class="mb-16 text-center uppercase lg:w-6/12">_{{ name }}_</h2>
    <p
      class="w-10/12 leading-loose text-typo-400 lg:w-8/12 lg:text-justify lg:text-xl">
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
