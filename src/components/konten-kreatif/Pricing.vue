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
  price: string;
  description: string;
}

const plans: PlanProps[] = [
  {
    title: "Multicam Event",
    price: "4.600.000",
    description:
      "Layanan multicam event profesional untuk dokumentasi acara Anda.",
  },
  {
    title: "Rental Video Trone / LED Screen",
    price: "747.500",
    description:
      "Sewa LED Screen atau video trone berkualitas tinggi (per meter).",
  },
  {
    title: "Live Streaming Multimedia",
    price: "4.600.000",
    description:
      "Layanan live streaming multimedia dengan kualitas siaran profesional.",
  },
  {
    title: "Rental Jimmyjib",
    price: "3.450.000",
    description:
      "Sewa jimmyjib atau swing camera untuk pengambilan gambar dinamis.",
  },
  {
    title: "Video Cinematic ",
    price: "3.450.000",
    description:
      "Produksi video cinematic dan company profile untuk branding bisnis Anda.",
  },
  {
    title: "Video Jokey",
    price: " 2.300.000",
    description:
      "Layanan video jokey dan operator multimedia untuk mendukung acara Anda.",
  },
];
</script>

<template>
  <section class="py-5">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-3">
      <Card
        v-for="{ title, price, description } in plans"
        :key="title"
        class="text-left p-0"
      >
        <CardHeader class="mb-2">
          <CardTitle class="pb-2">
            {{ title }}
          </CardTitle>

          <CardDescription class="pb-4">{{ description }}</CardDescription>

          <div>
            <span class="text-muted-foreground"> mulai dari: </span>
            <span class="text-2xl font-bold">Rp. {{ price }}</span>
          </div>
        </CardHeader>
      </Card>
    </div>
  </section>
</template>
