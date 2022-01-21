<template>
  <div class="flex items-center flex-row-reverse gap-2 sm:flex-row sm:gap-12">
    <!-- Mobile Navigation -->
    <transition name="menu-mobile">
      <section v-if="menu" class="nav-list list-mobile flex-center">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Project' }">Project</router-link>
        <router-link :to="{ name: 'Certificate' }">Certificate</router-link>
        <router-link :to="{ name: 'Blog' }">Blog</router-link>
        <div
          class="mt-4 w-12 h-12 flex-center hover:bg-white/10 rounded-full cursor-pointer transition-all"
          @click="toggleMenu">
          <IconClose />
        </div>
      </section>
    </transition>

    <!-- Tablet and Desktop Navigation -->
    <section v-if="!mobile" class="nav-list">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Project' }">Project</router-link>
      <router-link :to="{ name: 'Certificate' }">Certificate</router-link>
      <router-link :to="{ name: 'Blog' }">Blog</router-link>
    </section>

    <button class="cursor-pointer" v-else @click="toggleMenu">
      <IconMenu />
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const menu = ref(false);
    const mobile = ref(false);

    const toggleMenu = () => {
      menu.value = !menu.value;
    };

    const checkScreen = () => {
      if (window.innerWidth <= 640) {
        mobile.value = true;
        return;
      }
      mobile.value = false;
      menu.value = false;
    };

    window.addEventListener('resize', checkScreen);
    checkScreen();

    return {
      menu,
      mobile,
      toggleMenu,
    };
  },
};
</script>

<style scoped>
.nav-list {
  @apply flex gap-6 text-lg text-typo-500;
}

.list-mobile {
  @apply w-full min-h-screen flex-col  
    fixed top-0 left-0  
    text-typo-500
    bg-dark;
}

.router-link-exact-active {
  @apply text-white sm:text-typo-900 dark:text-white font-semibold;
}
/* Menu Mobile Animation */
.menu-mobile-enter-from,
.menu-mobile-leave-to {
  @apply opacity-0 -translate-y-full;
}
.menu-mobile-enter-active,
.menu-mobile-leave-active {
  @apply transition duration-500;
}
</style>
