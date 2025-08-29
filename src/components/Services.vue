<script setup lang="ts">
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";

const featureList = [
  {
    title: "Padukan Pos Retail",
    desc: "Kelola penjualan & stok toko dengan mudah.",
    link: "/posretail",
    label: "Lihat Produk",
  },
  {
    title: "Padukan Blast Sonic",
    desc: "Kirim pesan WhatsApp massal lebih cepat.",
    link: "/wablast",
    label: "Lihat Produk",
  },
  {
    title: "Konten Kreatif",
    desc: "Produksi foto, video, desain grafis dan copywriting.",
    link: "/konten-kreatif",
    label: "Lihat Layanan",
  },
  {
    title: "Konsultasi Media",
    desc: "Solusi strategis untuk pengelolaan media perusahaan.",
    link: "/konsultasi-media",
    label: "Lihat Layanan",
  },
  {
    title: "Periklanan Digital",
    desc: "Strategi Pemasaran online untuk meningkatkan brand awareness.",
    link: "/iklan-digital",
    label: "Lihat Layanan",
  },
];
</script>

<template>
  <section id="services" class="container pb-12 pt-0">
    <h2 class="text-lg text-blue-800 text-center mb-2 tracking-wider">
      Produk & Layanan
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Kembangkan Bisnis Anda
    </h2>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Dari pemasaran dan penjualan hingga operasional dan strategi, kami
      memiliki keahlian untuk membantu Anda mencapai tujuan.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <!-- <div
        v-for="{ title, description, pro } in serviceList"
        :key="title"
      > -->

      <Card
        v-for="({ title, desc, link, label }, i) in featureList"
        :key="i"
        class="bg-muted/60 dark:bg-card h-full relative"
      >
        <div class="p-3 text-sm">
          <p class="mb-1 font-semibold leading-none text-foreground text-lg">
            {{ title }}
          </p>
          <p class="line-clamp-2 text-muted-foreground">
            {{ desc }}
          </p>
          <div class="w-full flex justify-start mt-2">
            <Button
              as-child
              class="mt-2 group/arrow bg-blue-800 hover:bg-blue-900"
              size="sm"
            >
              <RouterLink :to="link">
                {{ label }}
                <ArrowRight
                  class="size-4 ml-2 group-hover/arrow:translate-x-1 transition-transform"
                />
              </RouterLink>
            </Button>
          </div>
        </div>
      </Card>

      <!-- </div> -->
    </div>
  </section>
</template>
