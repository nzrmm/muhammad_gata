<template>
  <div class="py-10">
    <div class="container flex justify-center gap-8">
      <div class="icon-wrapper group">
        <IconHtml class="icon-color" />
        <span class="icon-name">Html</span>
      </div>
      <div class="icon-wrapper group">
        <IconCss class="icon-color" />
        <span class="icon-name">Css</span>
      </div>
      <div class="icon-wrapper group">
        <IconJavascript class="icon-color" />
        <span class="icon-name">Javascript</span>
      </div>
      <div class="icon-wrapper group">
        <IconSass class="icon-color" />
        <span class="icon-name">Sass</span>
      </div>
      <div class="icon-wrapper group">
        <IconBootstrap class="icon-color" />
        <span class="icon-name">Bootstrap</span>
      </div>
      <div class="icon-wrapper group">
        <IconTailwind class="icon-color" />
        <span class="icon-name">Tailwind</span>
      </div>
      <div class="icon-wrapper group">
        <IconVue class="icon-color" />
        <span class="icon-name">Vue</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-wrapper {
  @apply flex flex-col items-center;
}

.icon-color {
  @apply w-20 h-20 fill-neutral-800 hover:fill-teal-500 transition-all duration-500;
}

.icon-name {
  @apply opacity-0 group-hover:opacity-100 transition-all duration-500;
}
</style>
