<template>
  <main class="bg-dark-800">
    <section class="py-40">
      <div class="container">
        <div class="mb-20 flex-center flex-col">
          <h2 class="lg:w-6/12 mb-16 uppercase text-center">
            _{{ project.name }}_
          </h2>
          <p
            class="w-10/12 lg:w-8/12 lg:text-xl text-typo-400 leading-loose lg:text-justify">
            {{ project.description }}
          </p>
        </div>
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
        <div
          class="flex flex-col lg:flex-row justify-between items-center gap-4">
          <router-link :to="{ name: 'Home' }">
            <h4>&lt; Back</h4>
          </router-link>
          <a href="#">
            <h4>email.me@pm</h4>
          </a>
        </div>
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
