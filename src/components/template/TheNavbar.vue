<template>
  <nav class="z-50 w-full py-6 absolute top-0 left-0">
    <div class="container flex justify-between items-center">
      <router-link :to="{ name: 'Home' }">
        <IconLogo class="w-14" />
      </router-link>

      <NavbarLists />
    </div>
  </nav>
</template>
