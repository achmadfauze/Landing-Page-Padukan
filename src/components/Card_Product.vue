<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import PosRetail from "@/assets/produk&layanan/kasir.jpg";
import SonicBlast from "@/assets/produk&layanan/whatsapp-business.jpg";

interface ProductProps {
  title: string;
  icon: string;
  description: string;
  href: string;
}

const services: ProductProps[] = [
  {
    title: "Pos Retail",
    description:
      "Aplikasi Point of Sale (POS) yang dirancang dengan antarmuka yang intuitif dan fitur lengkap.",
    icon: PosRetail,
    href: "/produk/pos-retail",
  },
  {
    title: "Sonic Blast",
    description:
      "Aplikasi yang memungkinkan pengguna mengirimkan pesan secara massal dengan mudah dan efisien.",
    icon: SonicBlast,
    href: "/produk/wa-blast",
  },
];
</script>

<template>
  <section class="container md:w-[50%] py-12">
    <div class="py-16">
      <div class="text-center">
        <h2 class="text-lg text-blue-800 text-center mb-2 tracking-wider">
          What We Do
        </h2>
      </div>

      <div class="text-center text-lg max-w-3xl mx-auto mb-12">
        <p>
          Kami menyediakan berbagai solusi inovatif untuk mendukung pertumbuhan
          bisnis Anda. Dengan aplikasi yang mudah digunakan dan fitur lengkap,
          kami membantu Anda mengelola bisnis dengan lebih efisien.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="{ title, icon, description, href } in services"
          :key="title"
          class="bg-white rounded-lg border transition-all"
        >
          <div class="flex justify-center mb-4 bg-slate-100">
            <div class="rounded-t-lg">
              <img
                :src="icon"
                alt="service icon"
                class="w-full object-contain rounded-t-lg"
              />
            </div>
          </div>
          <div class="p-5 pt-0">
            <h3 class="text-2xl font-semibold text-left mb-4">
              {{ title }}
            </h3>
            <!-- Service Description -->
            <p class="text-left text-gray-600 mb-4">
              {{ description }}
            </p>
            <!-- Buttons -->
            <div class="flex items-center gap-4">
              <RouterLink :to="href">
                <Button
                  variant="default"
                  size="sm"
                  class="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
