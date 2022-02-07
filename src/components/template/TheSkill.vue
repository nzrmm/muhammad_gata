<template>
  <div class="py-10">
    <div class="flex-center flex-wrap gap-8">
      <div
        v-for="skill in skills"
        :key="skill.id"
        class="group flex flex-col items-center">
        <!-- <IconVue class="icon-color" /> -->
        <Icon
          :icon="skill.icon"
          class="h-20 w-20 text-neutral-800 transition-all duration-500 hover:text-teal-500" />
        <span
          class="opacity-0 transition-all duration-500 group-hover:opacity-100">
          {{ skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Icon } from '@iconify/vue';
export default {
  components: {
    Icon,
  },
  setup() {
    const store = useStore();

    const skills = computed(() => {
      return store.state.skills;
    });

    return {
      skills,
    };
  },
};
</script>
