<template>
  <section class="py-28">
    <div class="grid gap-8">
      <div
        v-for="project in bestProjects.slice(0, 3)"
        :key="project.id"
        class="border-t border-neutral-800 py-20 lg:py-28">
        <BestProjectsHeader v-bind="{ project }" />
        <BestProjectsImage v-bind="{ project }" />
      </div>
    </div>
  </section>
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
