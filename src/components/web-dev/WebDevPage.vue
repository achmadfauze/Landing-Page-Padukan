<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Check } from "lucide-vue-next";

const product = {
  features: [
    "Website Profil Perusahaan",
    "Website Toko Online",
    "Landing Page Promosi",
    "Custom",
  ],
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
            <RouterLink to="/layanan"> Layanan </RouterLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Website & Aplikasi</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

    <div class="text-center">
      <img
        src="@/assets/produk&layanan/web-dev-bg.jpg"
        alt="Logo Light"
        class="w-full rounded-lg"
      />

      <div class="py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="flex flex-col">
            <div class="">
              <h3 class="text-2xl font-semibold text-left">
                Pengembangan Website
              </h3>
              <h3 class="text-2xl font-semibold text-left">
                dan Aplikasi Mobile
              </h3>
            </div>
            <p class="text-left text-gray-600 mt-4">
              Kami menyediakan layanan pengembangan website dan aplikasi mobile
              yang modern, responsif, dan sesuai kebutuhan bisnis Anda. Dengan
              teknologi terkini, kami membantu menghadirkan solusi digital yang
              dapat meningkatkan produktivitas, memperluas jangkauan pelanggan,
              serta memperkuat identitas brand Anda secara online.
            </p>
            <div class="grid gap-2 mt-8">
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
          </div>
          <div class="flex flex-col items-center">
            <div class="relative mb-6">
              <img
                src="../../assets/produk&layanan/web-left.png"
                class="w-full max-w-md"
              />
            </div>
          </div>
        </div>
        <div class="mt-20 space-y-4">
          <h3 class="text-lg font-semibold text-left">Teknologi</h3>
          <div class="flex items-center gap-4">
            <img src="../../assets/produk&layanan/technology.png" class="h-8" />
          </div>
        </div>
        <div class="mt-12 space-y-4">
          <h3 class="text-lg font-semibold text-left">Cakupan Layanan Kami</h3>
          <div class="grid md:grid-cols-8 grid-cols-4 md:gap-4 gap-2">
            <div class="grid gap-4 text-left">
              <img src="../../assets/produk&layanan/ideas.png" class="w-full" />
              <p>Ideation</p>
            </div>
            <div class="grid gap-4 text-left">
              <img
                src="../../assets/produk&layanan/design.png"
                class="w-full"
              />
              <p>Design</p>
            </div>
            <div class="grid gap-4 text-left">
              <img
                src="../../assets/produk&layanan/implementation.png"
                class="w-full"
              />
              <p class="hidden md:block">Implementasi</p>
              <div class="md:hidden">
                <p>Implemen-</p>
                <p>tasi</p>
              </div>
            </div>
            <div class="grid gap-4 text-left">
              <img
                src="../../assets/produk&layanan/support.png"
                class="w-full"
              />
              <p>Support</p>
            </div>
          </div>
        </div>
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
