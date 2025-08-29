<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Apa itu sistem POS Retail ini?",
    answer:
      "POS Retail adalah aplikasi kasir modern yang membantu mencatat penjualan, mengelola stok, dan memantau laporan bisnis secara real-time.",
    value: "item-1",
  },
  {
    question: "Apakah cocok untuk usaha kecil maupun besar?",
    answer:
      "Ya, sistem kami mendukung UMKM seperti warung atau toko kecil hingga bisnis retail besar dengan banyak cabang.",
    value: "item-2",
  },
  {
    question: "Bagaimana cara memulai menggunakan POS ini?",
    answer:
      "Anda bisa mendaftar langsung di website kami dan mencoba paket gratis. Setelah itu, pilih paket berbayar sesuai kebutuhan toko Anda.",
    value: "item-3",
  },
  {
    question: "Apakah saya bisa melihat laporan penjualan?",
    answer:
      "Tentu. Sistem menyediakan laporan harian, mingguan, dan bulanan yang bisa diunduh untuk memantau perkembangan bisnis.",
    value: "item-4",
  },
  {
    question: "Apakah bisa digunakan di lebih dari satu perangkat?",
    answer:
      "Bisa. Anda dapat menggunakan POS ini di beberapa perangkat sekaligus, misalnya kasir utama dan perangkat mobile untuk pemilik toko.",
    value: "item-5",
  },
];
</script>

<template>
  <section id="faq" class="container md:w-[700px] py-12">
    <div class="text-center mb-8">
      <h2 class="text-lg text-blue-800 text-center mb-2 tracking-wider">FAQ</h2>

      <h2 class="text-3xl md:text-4xl text-center font-bold">
        Pertanyaan Umum
      </h2>
    </div>

    <Accordion type="single" collapsible class="AccordionRoot">
      <AccordionItem
        v-for="{ question, answer, value } in FAQList"
        :key="value"
        :value="value"
      >
        <AccordionTrigger class="text-left"> {{ question }} </AccordionTrigger>

        <AccordionContent>{{ answer }}</AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 class="font-medium mt-4">
      Masih punya pertanyaan?
      <a href="#" class="text-muted-foreground">
        <RouterLink to="/contact" class="underline">Hubungi kami</RouterLink>
      </a>
    </h3>
  </section>
</template>
