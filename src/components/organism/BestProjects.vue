<template>
  <div
    v-for="project in bestProjects.slice(0, 3)"
    :key="project.id"
    class="py-20 lg:py-28 border-t border-neutral-800">
    <BestProjectsDetail v-bind="{ project }" />
    <BestProjectsImage :img="project.img" :alt="project.slug" />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();

    const bestProjects = computed(() => {
      return store.state.projects;
    });

    return {
      bestProjects,
    };
  },
};
</script>
