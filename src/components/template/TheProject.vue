<template>
  <section class="py-20">
    <div class="grid gap-8">
      <div
        v-for="(project, index) in bestProjects"
        :key="index"
        class="py-28 border-t-2 border-neutral-700">
        <div class="mb-20 grid grid-cols-2 items-end">
          <h3>{{ project.title }}</h3>
          <div>
            <div class="mb-4 flex gap-4">
              <span
                v-for="(tag, index) in project.tags"
                :key="index"
                class="px-3 py-1 bg-teal-700 rounded text-base">
                {{ tag }}
              </span>
            </div>
            <p class="text-typo-400">{{ project.snippet }}</p>
          </div>
        </div>
        <div
          class="w-full h-[600px] hover:p-4 bg-gradient-to-br from-teal-500 to-purple-500 transition-all duration-500">
          <img
            :src="`/images/${project.img}`"
            class="w-full h-full"
            :alt="project.slug" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { projects } from '@/data/projects.js';
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
