<template>
  <a
    :href="link"
    target="_blank"
    class="box-gradient hover:opacity-60 flex-center w-12 h-12 rounded-lg transition-500">
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
