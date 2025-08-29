<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();

import { Button } from "@/components/ui/button";
import ImageLight from "@/assets/pos-retail-light.png";
import ImageDark from "@/assets/pos-retail-dark.png";
</script>

<template>
  <section class="container lg:w-[75%] py-24 sm:py-32">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Padukan Pos Retail</h2>
      <p class="text-muted-foreground md:w-3/4 mx-auto leading-relaxed">
        Aplikasi Padukan POS Retail adalah solusi Point of Sale (POS) modern
        yang dirancang untuk memudahkan pengelolaan bisnis retail. Dengan
        antarmuka yang intuitif dan fitur lengkap, aplikasi ini membantu pemilik
        toko mencatat transaksi, mengelola stok barang, memantau penjualan,
        hingga membuat laporan keuangan secara cepat dan akurat.
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
          <li>Manajemen stok & inventori otomatis.</li>
          <li>Akses Barang secara real-time.</li>
          <li>Laporan penjualan dan keuangan lengkap.</li>
          <li>Pencatatan penjualan dan transaksi yang cepat.</li>
          <li>Multi-user & multi-cabang.</li>
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

        <img
          class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
          :src="mode == 'light' ? ImageLight : ImageDark"
          alt="dashboard using shadcn-vue"
        />

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
