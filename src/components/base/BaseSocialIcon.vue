<template>
  <div class="flex justify-center items-center gap-x-4">
    <a href="https://github.com/nzrmm" target="_blank">
      <IconGithub class="icon icon-color transition-500" />
    </a>
    <a href="https://web.facebook.com/profile.php?id=100010330266856">
      <IconFacebook class="icon icon-color transition-500" />
    </a>
    <a href="https://www.linkedin.com/in/muhammad-gata-44a66b1b5/">
      <IconLinkedin class="icon icon-color transition-500" />
    </a>
  </div>
</template>

<style scoped>
.icon {
  @apply w-10 h-10;
}

.icon-color {
  @apply fill-white hover:fill-teal-500;
}
</style>
