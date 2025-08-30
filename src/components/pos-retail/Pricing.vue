<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check } from "lucide-vue-next";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Pro",
    popular: 0,
    price: "2.500.000",
    description: "Fleksibel & Andal untuk Bisnis Bertumbuh",
    buttonText: "Langganan Pro",
    benefitList: [
      "Unlimited User",
      "Full service outlet",
      "Manajemen Stock",
      "Akses laporan real-time",
      "Dukungan prioritas",
      "Software & update 1 tahun",
    ],
  },
  {
    title: "Enterprice",
    popular: 1,
    price: "4.500.000", // harga per bulan
    description: "Skalabilitas Maksimal untuk Bisnis Besar & Terintegrasi.",
    buttonText: "Langganan Enterprice",
    benefitList: [
      "Unlimited User",
      "Full service outlet",
      "Manajemen stok",
      "Akses laporan real-time & Dukungan prioritas",
      "Entry data produk & karyawan",
      "Perangkat Komputer",
      "1 Printer, 1 Scanner & 1 Laci Uang",
      "Software & update 1 tahun",
    ],
  },
  {
    title: "Premium",
    popular: 0,
    price: "3.500.000",
    description: "Kontrol penuh untuk bisnis yang terus tumbuh.",
    buttonText: "Langganan Premium",
    benefitList: [
      "Unlimited User",
      "Full service outlet",
      "Manajemen stok",
      "Akses laporan real-time",
      "Dukungan prioritas",
      "1 Printer, 1 Scanner & 1 Laci Uang",
      "Software & update 1 tahun",
    ],
  },
];
</script>

<template>
  <section class="container py-24 sm:py-32">
    <h2 class="text-lg text-blue-800 text-center mb-2 tracking-wider">Harga</h2>

    <h2 class="text-2xl md:text-4xl text-center font-bold mb-4">
      Akses tanpa batas
    </h2>

    <h3
      class="md:w-1/2 mx-auto text-lg md:text-xl text-center text-muted-foreground pb-14"
    >
      Pilih paket terbaik untuk mendukung usaha retail Anda, mulai dari fitur
      kasir sederhana hingga manajemen cabang lengkap.
    </h3>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
      <Card
        v-for="{
          title,
          popular,
          price,
          description,
          buttonText,
          benefitList,
        } in plans"
        :key="title"
        :class="{
          'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-blue-800 lg:scale-[1.1]':
            popular === PopularPlan?.YES,
        }"
      >
        <CardHeader>
          <CardTitle class="pb-2">
            {{ title }}
          </CardTitle>

          <CardDescription class="pb-4">{{ description }}</CardDescription>

          <div>
            <span class="text-3xl font-bold">Rp. {{ price }}</span>
            <span class="text-muted-foreground"> /bulan</span>
          </div>
        </CardHeader>

        <CardContent class="flex">
          <div class="space-y-4">
            <span v-for="benefit in benefitList" :key="benefit" class="flex">
              <Check class="text-blue-800 mr-2" />
              <h3>{{ benefit }}</h3>
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <a
            href="https://wa.me/6282227779880"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-full"
          >
            <Button
              :variant="popular === PopularPlan?.NO ? 'secondary' : 'default'"
              class="w-full"
            >
              {{ buttonText }}
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
