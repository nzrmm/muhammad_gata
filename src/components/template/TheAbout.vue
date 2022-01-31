<template>
  <section class="py-28">
    <div class="container grid lg:grid-cols-2 gap-4">
      <div class="order-last lg:order-none mt-20">
        <h2 class="mb-8 lg:mb-10">
          Muhammad <br />
          Gata
        </h2>
        <span class="uppercase">- enthusiastic front end developer</span>
        <div class="mt-8 lg:mt-12 w-full lg:w-10/12 text-typo-400">
          <p class="mb-6 leading-loose">
            Hello my name is Muhammad Gata. I was born in Malang East Java, but
            i spent time living in Mojokerto East Java. I have good skill in
            Front-end Development. Now, i focused how to make beautifull user
            interface and satisfied user exprerience to increase user enjoyment.
          </p>
          <p class="leading-loose">
            I chose front end development because I love to see beautiful
            designs, smooth interactivity in website and about the right layout.
            For me, pouring design as code is the best healing for now.
          </p>
        </div>
      </div>
      <div class="order-first lg:order-none">
        <figure class="mb-10 flex justify-center">
          <img
            src="/images/profile-me.webp"
            class="w-full sm:w-3/4 lg:w-full h-auto"
            alt="profile me" />
        </figure>
        <BaseSocialIcon />
      </div>
    </div>
  </section>
</template>
