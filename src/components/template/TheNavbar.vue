<template>
  <nav class="absolute top-0 left-0 z-50 w-full py-6">
    <div class="container flex items-center justify-between">
      <router-link :to="{ name: 'Home' }">
        <BaseLogo class="h-12 w-12" text-size="text-xl" />
      </router-link>

      <NavbarLists />
    </div>
  </nav>
</template>
