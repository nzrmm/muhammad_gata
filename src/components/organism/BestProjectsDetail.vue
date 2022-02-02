<template>
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
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
