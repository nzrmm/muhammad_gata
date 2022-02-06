<template>
  <section class="py-40">
    <ProjectDetailHeader
      :name="project.name"
      :description="project.description" />
    <div class="mb-32">
      <div class="mb-16 flex justify-end items-center gap-2">
        <div class="group flex-center gap-6">
          <span class="opacity-0 group-hover:opacity-100 transition-500">
            please give me a star 😇
          </span>
          <BaseIconBoxLink :link="project.linkGithub">
            <IconGithub class="w-8 h-8 fill-white" />
          </BaseIconBoxLink>
        </div>
        <BaseIconBoxLink :link="project.linkLiveProject">
          <IconArrowUpRight class="w-8 h-8 fill-white" />
        </BaseIconBoxLink>
      </div>
      <BaseImageLarge :img="project.img" :alt="project.slug" />
    </div>
    <BaseBackAndContact />
  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const slug = route.params.slug;

    const project = computed(() => {
      return store.getters.getProjectBySlug(slug);
    });

    return {
      project,
    };
  },
};
</script>
