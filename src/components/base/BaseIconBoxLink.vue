<template>
  <a
    :href="link"
    target="_blank"
    class="box-gradient flex-center transition-500 h-12 w-12 rounded-lg hover:opacity-60">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
  },
};
</script>
