<template>
  <MainLayout>
    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__zoomIn"
        leave-active-class="animate__animated animate__zoomOut">
        <component :is="Component" />
      </transition>
    </router-view>
  </MainLayout>
</template>
