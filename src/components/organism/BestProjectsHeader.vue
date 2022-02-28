<template>
  <div class="mb-20 grid items-center gap-6 lg:grid-cols-2">
    <h2>
      <router-link
        :to="{
          name: 'Project Details',
          params: { slug: project.slug, title: project.title },
        }">
        {{ project.title }}
      </router-link>
    </h2>
    <div>
      <div class="mb-4 flex gap-4">
        <span
          v-for="(tag, index) in project.tags"
          :key="index"
          class="rounded bg-teal-700 px-3 py-1 text-base">
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
