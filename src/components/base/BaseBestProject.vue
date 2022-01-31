<template>
  <div
    class="py-20 lg:py-28 border-t border-neutral-800"
    v-for="(project, index) in bestProjects"
    :key="index">
    <div class="mb-20 grid lg:grid-cols-2 items-center gap-6">
      <h2>{{ project.title }}</h2>
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
