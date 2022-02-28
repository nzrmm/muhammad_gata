<template>
  <section class="py-40">
    <ProjectDetailHeader
      :title="project.title"
      :description="project.description" />
    <div class="mb-32">
      <div class="mb-16 flex items-center justify-end gap-2">
        <div class="group flex-center gap-6">
          <span class="transition-500 opacity-0 group-hover:opacity-100">
            please give me a star 😇
          </span>
          <BaseIconBoxLink :link="project.linkGithub">
            <Icon icon="bx:bxl-github" class="h-8 w-8 text-white" />
          </BaseIconBoxLink>
        </div>
        <BaseIconBoxLink :link="project.linkLiveProject">
          <Icon
            icon="bx:bx-up-arrow-alt"
            class="h-8 w-8 rotate-45 text-white" />
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
import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon,
  },
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
