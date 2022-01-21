<template>
  <nav class="nav">
    <div class="container flex-between">
      <router-link :to="{ name: 'Home' }" class="nav-logo">
        <IconLogo />
      </router-link>

      <BaseNavList />
    </div>
  </nav>
</template>

<style scoped>
.nav {
  @apply z-50 w-full py-4 
   fixed top-0 left-0 
   bg-transparent backdrop-blur;
}
</style>
