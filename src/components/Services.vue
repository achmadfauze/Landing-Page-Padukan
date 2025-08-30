<script setup lang="ts">
import LogoPadukan from "@/assets/logo-blue.png";
import LogoBlast from "@/assets/logo-Sonic.png";

interface FeatureProps {
  title: string;
  icon: string;
  href: string;
}

const product: FeatureProps[] = [
  {
    title: "Pos Retail",
    icon: LogoPadukan,
    href: "/produk/pos-retail",
  },
  {
    title: "Sonic Blast",
    icon: LogoBlast,
    href: "/produk/wa-blast",
  },
];

const services: FeatureProps[] = [
  {
    title: "Website & Aplikasi",
    icon: LogoPadukan,

    href: "/layanan/website-dan-aplikasi",
  },
  {
    title: "Konsultan Media Sosial",
    icon: LogoPadukan,

    href: "/layanan/konsultan-media-sosial",
  },
  {
    title: "Konten Kreatif",
    icon: LogoPadukan,

    href: "layanan/konten-kreatif",
  },
];
</script>

<template>
  <section id="services" class="container pb-12 pt-0">
    <h2
      class="text-lg text-blue-800 dark:text-white text-center mb-2 tracking-wider"
    >
      Produk & Layanan
    </h2>

    <h2 class="text-2xl md:text-4xl text-center font-bold mb-4">
      Kembangkan Bisnis Anda
    </h2>
    <h3
      class="md:w-1/2 mx-auto text-base md:text-xl text-center text-muted-foreground mb-8"
    >
      Dari pemasaran dan penjualan hingga operasional dan strategi, kami
      memiliki keahlian untuk membantu Anda mencapai tujuan.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
        class="rounded-lg bg-muted/80 dark:bg-slate-700 p-6 shadow-md dark:shadow-md dark:shadow-slate-800"
      >
        <div class="w-full flex justify-center">
          <img
            src="@/assets/produk&layanan/produk.png"
            alt="Logo Light"
            class="h-auto w-auto mr-2"
          />
        </div>
        <div class="text-lg font-bold text-left mt-2">Produk unggulan kami</div>
        <div class="text-sm text-left">
          Kami menawarkan berbagai produk unggulan yang dirancang untuk memenuhi
          kebutuhan bisnis Anda, dengan antarmuka intuitif dan fitur yang
          lengkap.
        </div>
        <div class="grid grid-cols-1 gap-4 mt-4">
          <RouterLink
            v-for="{ title, icon, href } in product"
            :key="title"
            :to="href"
          >
            <div class="flex items-center gap-2 cursor-pointer">
              <img :src="icon" alt="Logo Dark" class="h-5 w-auto" />
              <p
                class="mb-1 leading-none text-foreground hover:text-blue-800 dark:hover:text-primary"
              >
                {{ title }}
              </p>
            </div>
          </RouterLink>
        </div>
      </div>
      <div
        class="rounded-lg p-6 bg-muted/80 dark:bg-slate-700 shadow-md dark:shadow-md dark:shadow-slate-800"
      >
        <div class="w-full flex justify-center">
          <img
            src="@/assets/produk&layanan/service.png"
            alt="Logo Light"
            class="h-auto w-auto mr-2"
          />
        </div>
        <div class="text-lg font-bold text-left mt-2">
          Layanan unggulan kami
        </div>
        <div class="text-sm text-left">
          Kami menyediakan berbagai layanan profesional untuk mendukung
          pertumbuhan bisnis Anda melalui solusi yang inovatif dan tepat
          sasaran.
        </div>
        <div class="grid lg:grid-cols-1 gap-4 mt-4">
          <RouterLink
            v-for="{ title, icon, href } in services"
            :key="title"
            :to="href"
          >
            <div class="flex items-center gap-2 cursor-pointer">
              <img :src="icon" alt="Logo Dark" class="h-5 w-auto" />
              <p
                class="mb-1 leading-none text-foreground hover:text-blue-800 dark:hover:text-primary"
              >
                {{ title }}
              </p>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
