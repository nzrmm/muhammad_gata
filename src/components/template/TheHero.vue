<template>
  <section class="min-h-screen flex items-center">
    <div>
      <h1 class="mb-6 text-7xl uppercase">
        Hi! Im <span class="text-teal-500">Muhammad Gata</span>,
        <span class="span-gradient-with-hover">Front end Developer</span>. I
        focused to make beautifull <span class="span-gradient">UI</span> and
        satisfied <span class="span-gradient">UX</span>.
      </h1>
      <span class="text-typo-400 flex justify-end">
        - Write by Muhammad Gata
      </span>
    </div>
  </section>
</template>

<style scoped>
.span-gradient {
  @apply bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent transition-all duration-500;
}
.span-gradient-with-hover {
  @apply hover:bg-gradient-to-r from-teal-400 to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-500;
}
</style>
