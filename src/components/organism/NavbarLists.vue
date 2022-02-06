<template>
  <div class="flex items-center">
    <!-- Mobile Navigation -->
    <transition
      enter-active-class="animate__animated animate__fadeInDownBig"
      leave-active-class="animate__animated animate__fadeOutUpBig">
      <section v-if="menu" class="nav-list list-mobile flex-center">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Project' }">Project</router-link>
        <router-link :to="{ name: 'Certificate' }">Certificate</router-link>
        <router-link :to="{ name: 'Blog' }">Blog</router-link>
        <div
          class="flex-center transition-500 mt-4 h-12 w-12 cursor-pointer rounded-full hover:bg-neutral-200/10"
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

    <button type="button" class="cursor-pointer" v-else @click="toggleMenu">
      <IconMenu class="fill-white" />
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
      if (window.innerWidth <= 768) {
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
  @apply flex gap-6 text-lg text-typo-400;
}

.list-mobile {
  @apply fixed top-0 left-0  
    min-h-screen w-full flex-col  
    bg-dark-700 text-typo-400;
}

.router-link-exact-active {
  @apply font-semibold text-white;
}
</style>
