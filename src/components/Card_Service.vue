<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import WebDev from "@/assets/produk&layanan/web_dev.png";
import KontenKreatif from "@/assets/produk&layanan/konten-kreatif.png";
import Iklan from "@/assets/produk&layanan/digital_service.png";

interface ServiceProps {
  title: string;
  icon: string;
  description: string;
  href: string;
}

const services: ServiceProps[] = [
  {
    title: "Website & Aplikasi Mobile",
    description:
      "Kami membangun website & aplikasi yang responsif dan user-friendly untuk membantu bisnis Anda tampil profesional di dunia digital.",
    icon: WebDev,
    href: "/layanan/website-dan-aplikasi",
  },
  {
    title: "Konsultan Media Sosial",
    description:
      "Kami menyusun strategi pengelolaan media sosial yang efektif untuk meningkatkan engagement, membangun brand awareness, dan menjangkau audiens yang lebih luas.",
    icon: Iklan,
    href: "/layanan/konsultan-media-sosial",
  },
  {
    title: "Konten Kreatif",
    description:
      "Kami menyediakan layanan fotografi dan videografi profesional untuk mendukung branding bisnis Anda, mulai dari konten produk hingga kebutuhan promosi.",
    icon: KontenKreatif,
    href: "/layanan/konten-kreatif",
  },
];
</script>

<template>
  <section class="container md:w-[80%] py-12">
    <div class="py-16">
      <div class="text-center">
        <h2 class="text-lg text-blue-800 text-center mb-2 tracking-wider">
          What We Do
        </h2>
      </div>

      <div class="text-center text-lg max-w-3xl mx-auto mb-12">
        <p>
          Kami hadir dengan berbagai layanan yang dirancang untuk membantu Anda
          mengembangkan bisnis dengan lebih mudah dan efisien. Mulai dari
          pembuatan website yang menarik hingga meningkatkan visibilitas bisnis
          Anda di mesin pencari.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="{ title, icon, description, href } in services"
          :key="title"
          class="bg-white rounded-lg border transition-all"
        >
          <div class="flex justify-center mb-4 bg-slate-100">
            <div class="p-12">
              <img
                :src="icon"
                alt="service icon"
                class="w-full object-contain"
              />
            </div>
          </div>
          <div class="p-6">
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
