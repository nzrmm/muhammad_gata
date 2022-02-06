<template>
  <div
    class="antialised transition-500 min-h-screen overflow-x-hidden bg-dark-800 text-white lg:text-lg">
    <TheNavbar />
    <slot></slot>
    <TheFooter />
    <TheScrollToTop />
  </div>
</template>
