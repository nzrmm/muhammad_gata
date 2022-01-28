<template>
  <section class="py-20">
    <div class="mb-10 text-center">
      <span>{{ title }}</span>
      <h3>{{ snippet }}</h3>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <router-link
        :to="{ name: 'Project' }"
        v-for="(project, index) in bestsProject"
        :key="index"
        class="group relative w-full h-full overflow-hidden">
        <img
          :src="`/images/${project.img}`"
          class="rounded-3xl"
          :alt="project.name" />
        <div
          class="p-6 w-full h-40 absolute left-0 bottom-0 bg-neutral-900/40 text-typo-100 backdrop-blur translate-y-full group-hover:translate-y-0 transition-all duration-500 rounded-b-3xl rounded-t-md">
          <div class="mb-4 flex-between-center">
            <h5>{{ project.title }}</h5>
            <span v-for="(tag, index) in project.tags" :key="index">
              {{ tag }}
            </span>
          </div>
          <p class="text-typo-300">{{ project.snippet }}</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const bestProject = reactive({
      title: 'My Best Project',
      snippet: 'A Selection of my best project',
      bestsProject: [
        {
          slug: 'project-1',
          img: 'project-1.webp',
          title: 'Cuanmaker Dashboard',
          tags: ['tailwindcss', 'vue 3', 'axios'],
          snippet:
            'Slicing Dashboard from discord challenge Mas Azarie Muhammad and design by Mas Affan',
        },
        {
          slug: 'project-2',
          img: 'project-2.webp',
          title: 'Countries',
          tags: ['tailwindcss', 'vue 3', 'axios'],
          snippet: 'Country finder challenge by Frontend Mentor',
        },
      ],
    });

    return {
      ...toRefs(bestProject),
    };
  },
};
</script>
