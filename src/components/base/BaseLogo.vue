<template>
  <div class="flex-center box-gradient rounded-full">
    <span :class="[textSize, 'font-bold']">GA</span>
  </div>
</template>

<script>
export default {
  props: {
    textSize: {
      type: String,
      default: '',
    },
  },
};
</script>
