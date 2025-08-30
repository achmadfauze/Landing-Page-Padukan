<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();

import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ImageLight from "@/assets/pos-retail-light.png";
import ImageDark from "@/assets/pos-retail-dark.png";
import { Check } from "lucide-vue-next";
import logo from "@/assets/logo-blue.png";
import whatsappLogo from "@/assets/whatsapp-light.png";
import productImage from "@/assets/produk&layanan/produk.png";

// Data for the product in one object
const product = {
  logo,
  whatsappLogo,
  productImage,
  title: "Pos Retail",
  description:
    "Solusi Point of Sale (POS) modern yang dirancang untuk memudahkan pengelolaan bisnis retail, dengan antarmuka yang intuitif dan fitur lengkap.",
  features: [
    "Manajemen stok & inventori otomatis.",
    "Akses Barang secara real-time.",
    "Laporan penjualan dan keuangan lengkap.",
    "Pencatatan penjualan dan transaksi yang cepat.",
    "Multi-user & multi-cabang.",
  ],
  whatsappLink: "https://wa.me/6282227779880",
  productLink: "https://pos-retail.padukan.uacak.com",
};
</script>

<template>
  <section class="container lg:w-[80%] pb-12 pt-5">
    <Breadcrumb class="mb-10">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <RouterLink to="/"> Home </RouterLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <RouterLink to="/produk"> Produk </RouterLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Pos Retail</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="grid gap-4">
        <div class="flex items-center gap-4 cursor-pointer">
          <img :src="product.logo" alt="Logo Dark" class="h-10 w-auto" />
          <p
            class="mb-1 leading-none text-foreground hover:text-blue-800 dark:hover:text-primary text-2xl md:text-4xl font-bold"
          >
            {{ product.title }}
          </p>
        </div>
        <p class="text-muted-foreground mx-auto leading-snug">
          {{ product.description }}
        </p>
        <div class="grid gap-2">
          <div
            v-for="(item, index) in product.features"
            :key="index"
            class="flex gap-4 items-center"
          >
            <div class="bg-blue-800 rounded-full p-1">
              <Check :size="14" class="text-white" />
            </div>
            <p>{{ item }}</p>
          </div>
        </div>
        <div class="flex gap-4 items-center mt-8">
          <a
            :href="product.whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center"
          >
            <Button class="font-bold group/arrow bg-blue-800 hover:bg-blue-900">
              <img
                :src="product.whatsappLogo"
                alt="Whatsapp"
                class="w-8 h-8 mr-2 group-hover/arrow:translate-x-1 transition-transform"
              />
              Whatsapp Kami
            </Button>
          </a>
          <a
            :href="product.productLink"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center"
          >
            <Button variant="secondary"> Kunjungi Aplikasi </Button>
          </a>
        </div>
      </div>
      <div class="w-full justify-center hidden md:block">
        <img
          :src="product.productImage"
          alt="Logo Light"
          class="h-auto w-auto mr-2"
        />
      </div>
    </div>
  </section>
  <section class="container">
    <div class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto pb-12">
      <div class="relative group mt-14">
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-blue-800/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <img
          class="w-full md:w-[1200px] mx-auto rounded-xl relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
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

<!-- <style scoped>
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
</style> -->
