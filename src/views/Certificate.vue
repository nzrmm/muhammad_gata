<template>
  <main class="bg-dark-800">
    <section class="py-28">
      <div class="container grid gap-16">
        <div v-for="certificate in certificates" :key="certificate.id">
          <div class="mb-8">
            <h4 class="mb-2">{{ certificate.name }}</h4>
            <p class="text-typo-400">{{ certificate.snippet }}</p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="image in certificate.images" :key="image.id">
              <BaseImageSmall :img="image.img" :alt="image.alt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();

    const certificates = computed(() => {
      return store.state.certificates;
    });

    return {
      certificates,
    };
  },
};
</script>
