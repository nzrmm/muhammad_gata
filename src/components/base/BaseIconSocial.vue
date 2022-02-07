<template>
  <div class="flex items-center justify-center gap-x-4">
    <a
      v-for="social in socials"
      :key="social.id"
      :href="social.link"
      target="_blank">
      <Icon
        :icon="social.icon"
        class="transition-500 h-10 w-10 text-white hover:text-teal-500" />
    </a>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  components: {
    Icon,
  },
  setup() {
    const store = useStore();

    const socials = computed(() => {
      return store.state.socials;
    });

    return {
      socials,
    };
  },
};
</script>
