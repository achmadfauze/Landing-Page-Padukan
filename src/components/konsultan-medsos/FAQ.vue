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
    question: "Apa itu layanan periklanan digital ini?",
    answer:
      "Layanan periklanan digital kami membantu bisnis mempromosikan produk atau jasa secara online melalui berbagai platform seperti Google, Instagram, dan Facebook Ads.",
    value: "item-1",
  },
  {
    question: "Apakah layanan ini cocok untuk bisnis kecil maupun besar?",
    answer:
      "Ya, layanan kami dirancang untuk mendukung UMKM yang baru mulai beriklan, hingga perusahaan besar yang membutuhkan strategi pemasaran digital yang kompleks.",
    value: "item-2",
  },
  {
    question: "Bagaimana cara memulai menggunakan layanan ini?",
    answer:
      "Anda dapat mendaftar di website kami dan memilih paket Basic atau Premium sesuai kebutuhan. Setelah itu, Anda bisa langsung membuat dan mengelola kampanye iklan.",
    value: "item-3",
  },
  {
    question: "Apakah saya bisa melihat laporan performa iklan?",
    answer:
      "Tentu. Sistem kami menyediakan laporan performa kampanye secara harian, mingguan, dan bulanan, lengkap dengan metrik seperti jangkauan, klik, dan konversi.",
    value: "item-4",
  },
  {
    question: "Apakah layanan ini bisa digunakan oleh tim atau agensi?",
    answer:
      "Bisa. Paket Premium dan Enterprise memungkinkan akses multi pengguna, cocok untuk tim internal maupun agensi pemasaran digital.",
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
        <!-- <a href="#" class="underline">Hubungi kami</a> -->
      </a>
    </h3>
  </section>
</template>
