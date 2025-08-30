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

interface PlanProps {
  title: string;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Basic",

    price: 1000000,
    description:
      "Paket dasar untuk pengelolaan 1 akun media sosial dengan konten rutin dan laporan kinerja.",
    buttonText: "Langganan Basic",
    benefitList: [
      "Pengelolaan 1 Akun Media Sosial",
      "10 konten per bulan (grafis, caption, hashtag)",
      "+ 3 konten video pendek",
      "Gratis pembuatan 1 Akun Media Sosial",
      "Manajemen posting & engagement dasar",
      "Laporan bulanan kinerja",
    ],
  },
  {
    title: "Premium",

    price: 1500000,
    description:
      "Paket lengkap untuk pengelolaan 2 akun media sosial dengan konten lebih banyak dan video pendek tambahan.",
    buttonText: "Langganan Premium",
    benefitList: [
      "Pengelolaan 2 Akun Media Sosial",
      "14 konten per bulan (grafis, caption, hashtag)",
      "+ 5 konten video pendek",
      "Gratis pembuatan 1 Akun Media Sosial",
      "Manajemen engagement dasar (komentar & DM)",
      "Laporan bulanan kinerja",
    ],
  },
  {
    title: "Platinum",

    price: 2000000,
    description:
      "Paket premium untuk pengelolaan 3 akun media sosial dengan konten maksimal dan dukungan komunitas.",
    buttonText: "Langganan Platinum",
    benefitList: [
      "Pengelolaan 3 Akun Media Sosial",
      "20 konten per bulan (grafis, caption, hashtag)",
      "+ 8 konten video pendek",
      "Gratis pembuatan 1 Akun Media Sosial",
      "Manajemen engagement (komentar, DM & komunitas)",
      "+ 4 Story mingguan",
      "Laporan bulanan kinerja",
    ],
  },
  {
    title: "Podcast YouTube",

    price: 2000000,
    description:
      "Layanan produksi dan publikasi podcast YouTube lengkap dengan promosi media sosial.",
    buttonText: "Pesan Podcast",
    benefitList: [
      "1 episode podcast durasi 30 menit",
      "Perencanaan narasi pertanyaan & jawaban",
      "Perencanaan & riset konten",
      "Produksi & editing video dasar",
      "Publikasi di channel YouTube",
      "Promosi di media sosial",
      "Sudah termasuk biaya transportasi & akomodasi",
    ],
  },
];
</script>

<template>
  <section class="py-5">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
      <Card
        v-for="{ title, price, description, buttonText, benefitList } in plans"
        :key="title"
        class="text-left"
      >
        <CardHeader class="border-b pb-2 mb-2">
          <CardTitle class="pb-2">
            {{ title }}
          </CardTitle>

          <!-- <CardDescription class="pb-4">{{ description }}</CardDescription> -->

          <div>
            <span class="text-2xl font-bold">Rp. {{ price }}</span>
            <span class="text-muted-foreground"> /bulan</span>
          </div>
        </CardHeader>

        <CardContent class="flex text-left p-2">
          <div class="space-y-4">
            <span
              v-for="benefit in benefitList"
              :key="benefit"
              class="flex items-center"
            >
              <Check class="text-blue-800 mr-2 h-4" />
              <p>{{ benefit }}</p>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
