<template>
  <section class="py-28">
    <div class="grid gap-16">
      <div v-for="certificate in certificates" :key="certificate.id">
        <div class="mb-8">
          <h4 class="mb-2">{{ certificate.name }}</h4>
          <p class="text-typo-400">{{ certificate.snippet }}</p>
        </div>
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div v-for="image in certificate.images" :key="image.id">
            <BaseImageSmall :img="image.img" :alt="image.alt" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, toRefs } from 'vue';
import { useStore } from 'vuex';

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
