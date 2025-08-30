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
    question: "Apa layanan utama yang ditawarkan perusahaan ini?",
    answer:
      "Kami membantu bisnis berkembang melalui strategi marketing digital, optimasi penjualan, hingga pengelolaan operasional agar lebih efisien.",
    value: "item-1",
  },
  {
    question: "Apakah layanan cocok untuk bisnis kecil maupun besar?",
    answer:
      "Ya, kami mendukung UMKM hingga perusahaan besar dengan solusi yang bisa disesuaikan kebutuhan dan skala bisnis.",
    value: "item-2",
  },
  {
    question: "Bagaimana cara memulai menggunakan layanan Anda?",
    answer:
      "Cukup hubungi tim kami melalui halaman kontak. Kami akan menjadwalkan sesi konsultasi gratis untuk memahami kebutuhan bisnis Anda.",
    value: "item-3",
  },
  {
    question: "Apakah saya akan mendapat laporan hasil kerja secara berkala?",
    answer:
      "Tentu. Kami menyediakan laporan performa marketing, penjualan, dan strategi yang transparan agar Anda bisa memantau perkembangan bisnis.",
    value: "item-4",
  },
  {
    question: "Berapa lama biasanya hasil dapat terlihat?",
    answer:
      "Tergantung jenis layanan. Untuk campaign marketing digital biasanya 2–4 minggu, sedangkan strategi operasional bisa memakan waktu lebih panjang.",
    value: "item-5",
  },
];
</script>

<template>
  <section id="faq" class="container md:w-[700px] py-12">
    <div class="text-center mb-8">
      <h2 class="text-lg text-blue-800 text-center mb-2 tracking-wider">FAQ</h2>

      <h2 class="text-2xl md:text-4xl text-center font-bold">
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
        <a href="#" class="underline">Hubungi kami</a>
      </a>
    </h3>
  </section>
</template>
