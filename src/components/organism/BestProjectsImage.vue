<template>
  <router-link
    :to="{
      name: 'Project Details',
      params: { slug: project.slug },
    }">
    <BaseImageLarge :img="project.img" :alt="project.slug" />
  </router-link>
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
