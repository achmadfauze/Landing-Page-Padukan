<script setup lang="ts">

import { Button } from "@/components/ui/button";
</script>

<template>
  <section class="container lg:w-[75%] pt-24 pb-0 sm:py-32 sm:pb-0">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Konten Kreatif</h2>
      <p class="text-muted-foreground md:w-3/4 mx-auto leading-relaxed">
        Kami menawarkan layanan konten kreatif profesional untuk membantu bisnis
        tampil menonjol di dunia digital. Mulai dari produksi foto dan video
        berkualitas tinggi, desain grafis yang menarik, hingga copywriting yang
        persuasif — tim kreatif kami siap mendukung kebutuhan branding dan
        pemasaran Anda agar lebih efektif dan berkesan.
      </p>
    </div>

    <div class="mt-12 text-center">
      <!-- Visi -->
      <div>
        <h3 class="text-xl font-semibold text-blue-800 mb-4 text-center">
          Fitur Utama
        </h3>
        <ul
          class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"
        >
          <li>Produksi konten visual seperti foto, video, dan desain grafis</li>
          <li>
            Copywriting untuk keperluan branding, promosi, dan media sosial
          </li>
          <li>
            Pengembangan konsep kreatif yang disesuaikan dengan identitas brand
          </li>
          <li>Revisi dan penyempurnaan konten hingga sesuai kebutuhan</li>
          <li>Konsultasi kreatif langsung dengan tim profesional</li>
        </ul>
      </div>

      <a
        href="https://wa.me/6282227779880"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center"
      >
        <Button
          class="w-5/6 md:w-1/4 font-bold group/arrow bg-blue-800 hover:bg-blue-900 mt-12"
        >
          <img
            src="@/assets/whatsapp-light.png"
            alt="Whatsapp"
            class="w-8 h-8 mr-2 group-hover/arrow:translate-x-1 transition-transform"
          />
          Whatsapp Kami
        </Button>
      </a>
    </div>
  </section>
  <section class="container">
    <div class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto pb-12">
      <div class="relative group mt-14">
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-blue-800/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <!-- <img
          class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
          :src="mode == 'light' ? ImageLight : ImageDark"
          alt="dashboard using shadcn-vue"
        /> -->

        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
        ></div>
      </div>
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
