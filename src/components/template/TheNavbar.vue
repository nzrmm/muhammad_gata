<template>
  <nav class="nav">
    <div class="container flex-between-center">
      <router-link :to="{ name: 'Home' }" class="nav-logo">
        <IconLogo />
      </router-link>

      <div
        class="flex items-center flex-row-reverse gap-2 sm:flex-row sm:gap-12">
        <BaseNavList />
        <BaseNavTheme />
      </div>
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
