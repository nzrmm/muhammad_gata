<template>
  <section class="py-28 grid gap-8">
    <BaseBestProject v-bind="{ bestProjects }" />
  </section>
</template>

<script>
import { projects } from '@/data/data.js';
import { ref } from 'vue';
export default {
  setup() {
    const bestProjects = ref(projects);

    return {
      bestProjects,
    };
  },
};
</script>
