<template>
  <nav class="z-50 w-full py-4 absolute top-0 left-0">
    <div class="container flex justify-between items-center">
      <router-link :to="{ name: 'Home' }" class="nav-logo">
        <IconLogo class="w-28" />
      </router-link>

      <BaseNavList />
    </div>
  </nav>
</template>
