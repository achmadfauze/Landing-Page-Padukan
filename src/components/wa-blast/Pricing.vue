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
    title: "Standart",
    popular: 0,
    price: "200.000",
    description:
      "Cocok untuk percobaan awal mengirim pesan broadcast WhatsApp.",
    buttonText: "Langganan Standart",
    benefitList: [
      "3 akun WhatsApp",
      "Pesan tak terbatas",
      "Fitur penjadwalan pesan",
      "Statistik & laporan campaign",
      "Dukungan prioritas",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: "250.000", // harga per bulan
    description:
      "Paket populer untuk bisnis yang aktif melakukan promosi via WhatsApp.",
    buttonText: "Langganan Premium",
    benefitList: [
      "5 akun WhatsApp",
      "Pesan tak terbatas",
      "Fitur penjadwalan pesan",
      "Statistik & laporan campaign",
      "Dukungan prioritas",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: "300.000",
    description:
      "Solusi WhatsApp blast untuk perusahaan besar dengan kebutuhan skala tinggi.",
    buttonText: "Hubungi Kami",
    benefitList: [
      "7 akun WhatsApp",
      "Pesan tak terbatas",
      "Fitur penjadwalan pesan",
      "Statistik & laporan campaign",
      "Dukungan prioritas",
    ],
  },
];
</script>

<template>
  <section class="container py-24 sm:py-32">
    <h2 class="text-lg text-blue-800 text-center mb-2 tracking-wider">Harga</h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Akses tanpa batas
    </h2>

    <h3
      class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14"
    >
      Pilih paket terbaik untuk mendukung strategi marketing Anda dengan Blast
      Sonic, mulai dari percobaan gratis hingga solusi enterprise.
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
