<template>
  <section class="py-28">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div v-for="project in projects" :key="project.id">
        <router-link
          :to="{
            name: 'Project Details',
            params: { slug: project.slug },
          }">
          <BaseImageSmall :img="project.img" :alt="project.slug" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();

    const projects = computed(() => {
      return store.state.projects;
    });

    return {
      projects,
    };
  },
};
</script>
