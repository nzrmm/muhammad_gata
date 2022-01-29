<template>
  <div
    class="py-28 border-t border-neutral-700"
    v-for="(project, index) in bestProjects"
    :key="index">
    <div class="mb-20 grid grid-cols-2 items-center">
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
    <BaseBestProjectImage :img="project.img" :alt="project.slug" />
  </div>
</template>

<script>
export default {
  props: {
    bestProjects: {
      type: Array,
      required: true,
    },
  },
};
</script>
