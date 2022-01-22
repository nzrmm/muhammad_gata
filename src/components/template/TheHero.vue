<template>
  <section class="py-20 min-h-screen flex items-center">
    <div class="flex-between-start w-full">
      <div class="mb-6 md:mb-0">
        <h1 class="w-6/12 sm:w-full name-after tracking-[-.4rem]">
          M. Gata <br />Hafi Lutfi
        </h1>
      </div>
      <div>
        <div class="mt-4 flex flex-col gap-6">
          <a href="https://github.com/nzrmm" target="_blank">
            <IconGithub
              class="fill-neutral-500 hover:fill-neutral-900 hover:dark:fill-primary-600" />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100010330266856"
            target="_blank">
            <IconFacebook
              class="fill-neutral-500 hover:fill-neutral-900 hover:dark:fill-primary-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-gata-44a66b1b5/"
            target="_blank">
            <IconLinkedin
              class="fill-neutral-500 hover:fill-neutral-900 hover:dark:fill-primary-600" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.name-after {
  @apply after:content-['']
   after:ml-2 after:mt-3
   after:block after:border-b-[10px] 
   after:border-primary-600 after:w-[80px];
}
</style>
