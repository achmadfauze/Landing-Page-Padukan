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
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Basic",
    popular: 0,
    price: 150000,
    description:
      "Paket entry-level untuk bisnis yang mulai membangun identitas visual dan konten online.",
    buttonText: "Langganan Basic",
    benefitList: [
      "3 desain grafis per bulan",
      "1 sesi foto produk (maks. 5 foto)",
      "Copywriting untuk sosial media (maks. 3 caption)",
      "1 kali revisi konten",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 300000,
    description:
      "Paket ideal untuk bisnis yang ingin tampil konsisten dan profesional di berbagai platform.",
    buttonText: "Langganan Premium",
    benefitList: [
      "8 desain grafis per bulan",
      "2 sesi foto atau video pendek",
      "Copywriting untuk sosial media & promosi (hingga 10 caption)",
      "Revisi hingga 3 kali",
      "Konsultasi kreatif bulanan",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 600000,
    description:
      "Paket komprehensif untuk brand besar atau agensi dengan kebutuhan konten yang intensif dan beragam.",
    buttonText: "Hubungi Kami",
    benefitList: [
      "Produksi konten custom tanpa batas (desain, foto, video)*",
      "Strategi konten & branding menyeluruh",
      "Tim kreatif khusus untuk proyek Anda",
      "Revisi tanpa batas selama kerja sama",
      "Meeting & support via video call atau on-site*",
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
          <Button
            :variant="popular === PopularPlan?.NO ? 'secondary' : 'default'"
            class="w-full"
          >
            {{ buttonText }}
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
