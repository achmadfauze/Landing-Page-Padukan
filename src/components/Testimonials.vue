<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Star } from "lucide-vue-next";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe",
    userName: "Product Manager",
    comment:
      "Layanan ini benar-benar membantu tim kami dalam mengelola operasional sehari-hari. Proses jadi lebih cepat dan rapi.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sophia Collins",
    userName: "Cybersecurity Analyst",
    comment:
      "Aplikasinya mudah digunakan dan tim support sangat responsif. Kami merasa lebih aman dan efisien dalam bekerja.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Adam Johnson",
    userName: "Chief Technology Officer",
    comment:
      "Integrasi dengan sistem lain berjalan mulus. Fitur-fiturnya fleksibel sehingga bisa disesuaikan dengan kebutuhan perusahaan.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ethan Parker",
    userName: "Data Scientist",
    comment:
      "Dashboard analitiknya sangat membantu kami membaca data penjualan dan membuat keputusan bisnis lebih cepat.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ava Mitchell",
    userName: "IT Project Manager",
    comment:
      "Proses implementasi sangat lancar. Tim kami bisa langsung beradaptasi karena tampilannya simpel dan intuitif.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Isabella Reed",
    userName: "DevOps Engineer",
    comment:
      "Performa aplikasinya stabil, bahkan saat digunakan oleh banyak user sekaligus. Sangat bisa diandalkan.",
    rating: 4.9,
  },
];
</script>

<template>
  <section id="testimonials" class="container py-24 mb-10">
    <div class="text-center mb-8">
      <h2
        class="text-lg text-blue-800 text-center dark:text-white mb-2 tracking-wider"
      >
        Testimoni
      </h2>

      <h2 class="text-2xl md:text-4xl text-center font-bold mb-4">
        Dengarkan Apa yang Dikatakan oleh 100+ Klien Kami
      </h2>
    </div>

    <Carousel
      :opts="{
        align: 'start',
      }"
      class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
    >
      <CarouselContent>
        <CarouselItem
          v-for="review in reviewList"
          :key="review.name"
          class="md:basis-1/2 lg:basis-1/3"
        >
          <Card class="bg-white dark:bg-black/50">
            <CardContent class="pt-6 pb-0">
              <div class="flex gap-1 pb-6">
                <Star class="size-4 fill-blue-800 text-blue-800" />
                <Star class="size-4 fill-blue-800 text-blue-800" />
                <Star class="size-4 fill-blue-800 text-blue-800" />
                <Star class="size-4 fill-blue-800 text-blue-800" />
                <Star class="size-4 fill-blue-800 text-blue-800" />
              </div>

              "{{ review.comment }}"
            </CardContent>

            <CardHeader>
              <div class="flex flex-row items-center gap-4">
                <div class="flex flex-col">
                  <CardTitle class="text-lg">{{ review.name }}</CardTitle>
                  <CardDescription>{{ review.userName }}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
</template>
