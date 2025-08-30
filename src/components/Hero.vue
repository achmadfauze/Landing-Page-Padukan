<script setup lang="ts">
// import { useColorMode } from "@vueuse/core";
// const mode = useColorMode();

import { Button } from "@/components/ui/button";
</script>

<template>
  <section class="container">
    <div
      class="relative h-auto grid place-items-left lg:max-w-screen-xl gap-8 mx-auto my-10 pt-20 md:pt-32 pb-20 rounded-2xl overflow-hidden border"
    >
      <div
        class="absolute inset-0 bg-[url('../assets/background-unsplash.jpg')] bg-cover bg-center blur-sm scale-110 z-0"
      ></div>
      <div class="relative z-20">
        <!-- Your content here -->
        <div class="text-left space-y-8">
          <div
            class="max-w-screen-md ml-8 lg:ml-20 text-left font-bold text-white"
          >
            <p class="md:text-5xl text-3xl">Padukan,</p>
            <p class="md:text-2xl text-xl">Solusi Digital untuk Bisnis Anda</p>
          </div>

          <p
            class="max-w-screen-sm lg:ml-20 ml-8 text-base md:text-xl text-white pr-3"
          >
            Kami menghadirkan berbagai solusi digital modern untuk mempermudah
            pengelolaan bisnis, meningkatkan efisiensi, serta membantu Anda
            terhubung lebih baik dengan pelanggan.
          </p>

          <div
            class="space-y-4 md:space-y-0 md:space-x-4 place-items-start text-left"
          >
            <a
              href="https://wa.me/6282227779880"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center"
            >
              <Button
                class="w-flex font-bold group/arrow bg-blue-800 hover:bg-blue-900 ml-8 lg:ml-20"
              >
                <img
                  src="@/assets/whatsapp-light.png"
                  alt="Whatsapp"
                  class="w-8 h-8 mr-2 group-hover/arrow:translate-x-1 transition-transform"
                />
                Whatsapp Kami
              </Button>
            </a>

            <!-- <Button as-child variant="secondary" class="w-5/6 md:w-1/4 font-bold">
          <a
            href="https://github.com/leoMirandaa/shadcn-vue-landing-page.git"
            target="_blank"
            >Hubungi Kami</a
          >
        </Button> -->
          </div>
        </div>
      </div>

      <!-- <div class="relative group mt-14">
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <img
          class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
          :src="
            mode == 'light' ? 'hero-image-light.jpg' : 'hero-image-dark.jpg'
          "
          alt="dashboard using shadcn-vue"
        />

        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
        ></div>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
.img-shadow-animation {
  animation-name: img-shadow-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.img-border-animation {
  animation-name: img-border-animation;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes img-shadow-animation {
  from {
    opacity: 0.5;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes img-border-animation {
  from {
    @apply border-t-primary/10;
  }

  to {
    @apply border-t-primary/60;
  }
}
</style>
