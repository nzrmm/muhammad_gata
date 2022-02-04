<template>
  <MainLayout>
    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__slideInRight"
        leave-active-class="animate__animated animate__slideOutLeft">
        <component :is="Component" />
      </transition>
    </router-view>
  </MainLayout>
</template>
