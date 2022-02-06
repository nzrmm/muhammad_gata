<template>
  <transition
    enter-active-class="animate__animated animate__fadeInUp"
    leave-active-class="animate__animated animate__fadeOutDown">
    <div
      @click="scrollToTop"
      v-if="isVisible"
      class="flex-center fixed bottom-6 right-0 cursor-pointer flex-col">
      <p class="-rotate-90 text-sm">Back to top</p>
      <div
        class="flex-center transition-500 mt-10 h-12 w-12 rounded-full bg-dark-700 shadow shadow-dark-800 hover:mt-12">
        <IconArrowUp class="h-8 w-8 fill-white" />
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const isVisible = ref(false);
    const intervalId = ref();

    const scrollVisible = () => {
      isVisible.value = window.scrollY > 250;
    };

    const scrollToTop = () => {
      intervalId.value = setInterval(() => {
        if (window.scrollY === 0) {
          clearInterval(intervalId.value);
        }
        window.scroll(0, window.scrollY - 80);
      }, 20);
    };

    onMounted(() => {
      window.addEventListener('scroll', scrollVisible);
    });

    return {
      isVisible,
      scrollToTop,
    };
  },
};
</script>
