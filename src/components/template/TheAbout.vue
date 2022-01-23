<template>
  <section class="py-20">
    <div class="mb-10 text-center">
      <span>{{ about.title }}</span>
      <h3>{{ about.snippet }}</h3>
    </div>
    <div class="grid gap-y-8 grid-cols-1 xl:grid-cols-4 items-center">
      <div class="xl:col-span-3 grid gap-4 grid-cols-1 md:grid-cols-2">
        <div
          v-for="(me, index) in about.aboutme"
          :key="index"
          class="p-6 bg-neutral-200 dark:bg-white/10 rounded-xl">
          <h4 class="mb-2">{{ me.title }}</h4>
          <p class="text-typo-600 dark:text-white/60">{{ me.desc }}</p>
        </div>
      </div>
      <div class="xl:col-span-1 flex-center">
        <span class="text-9xl">👋</span>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const about = reactive({
      title: 'About Me',
      snippet: 'Welcome to about me',
      aboutme: [
        {
          title: 'Biodata',
          desc: 'Hello, my name is M. Gata Hafi Lutfi, i was born in Mojokerto East Java. Now, iam 18 yo.',
        },
        {
          title: 'Education',
          desc: 'actually my educational background is networking, but iam very interested in programming😅',
        },
        {
          title: 'Games & Music',
          desc: 'For game, i like to play soccer games like PES or FIFA. and for music, i love calm music.',
        },
        {
          title: 'Hobby',
          desc: 'I like watch movies, read programming article, and of course playing games😅',
        },
      ],
    });

    return {
      about,
    };
  },
};
</script>
