<template>
  <button @click="toggleTheme" class="flex-center btn-theme">
    <IconSun v-if="theme === 'dark'" />
    <IconMoon v-else />
  </button>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const theme = ref('light');
    const toggleTheme = () => {
      const html = document.documentElement;
      html.classList.toggle('dark');
      const themeIcon = html.classList.contains('dark') ? 'dark' : 'light';
      theme.value = themeIcon;
    };
    return {
      theme,
      toggleTheme,
    };
  },
};
</script>

<style scoped>
.btn-theme {
  @apply h-8 w-8 rounded-full 
         bg-neutral-300 hover:bg-neutral-400 
         dark:bg-neutral-500 hover:dark:bg-neutral-400 
         transition-all duration-500;
}
</style>
