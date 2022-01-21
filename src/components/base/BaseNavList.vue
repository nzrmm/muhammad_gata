<template>
  <div class="flex flex-row-reverse gap-2 sm:flex-row items-center sm:gap-12">
    <!-- Mobile Navigation -->
    <transition name="menu-mobile">
      <section v-if="menu" class="nav-list-mobile">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Project' }">Project</router-link>
        <router-link :to="{ name: 'Certificate' }">Certificate</router-link>
        <router-link :to="{ name: 'Blog' }">Blog</router-link>
        <div
          class="mt-4 p-2 hover:bg-white/10 rounded-full cursor-pointer transition-all"
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

    <button
      class="w-10 h-10 flex-center rounded-full bg-black/40 cursor-pointer"
      v-else
      @click="toggleMenu">
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
  @apply flex gap-6 text-lg
    sm:flex-row 
    sm:justify-end 
    sm:items-start  
    sm:static   
  sm:text-black/60 dark:text-white/60
    sm:bg-transparent;
}
.nav-list-mobile {
  @apply flex gap-6 text-lg
    flex-col 
    justify-center
    items-center 
    fixed
    top-0 left-0 w-full 
    min-h-screen
    text-white/60
    bg-black;
}
.router-link-exact-active {
  @apply text-white sm:text-black dark:text-white font-semibold;
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
