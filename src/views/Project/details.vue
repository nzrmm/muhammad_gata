<template>
  <main class="bg-dark-700">
    <section class="py-40">
      <div class="container">
        <div class="mb-20 grid lg:grid-cols-2 gap-6">
          <div>
            <h1 class="mb-10 capitalize">
              {{ project.title }}
            </h1>
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
          <div class="py-6 flex justify-center gap-4">
            <a
              href="https://github.com/nzrmm"
              class="flex-center w-40 h-40 bg-dark-800/10 hover:box-gradient rounded-full group">
              <IconGithub class="w-20 h-20 fill-white group-hover:scale-125" />
            </a>
            <a
              href="https://github.com/nzrmm"
              class="flex-center w-40 h-40 bg-dark-800/10 hover:box-gradient rounded-full group">
              <IconArrowUpRight
                class="w-20 h-20 fill-white group-hover:scale-125" />
            </a>
          </div>
        </div>

        <BaseImageLarge :img="project.img" :alt="project.slug" />
      </div>
    </section>
  </main>
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
