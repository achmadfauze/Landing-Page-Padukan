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
    question: "Apa itu layanan konsultasi media ini?",
    answer:
      "Layanan konsultasi media kami membantu perusahaan merancang, mengelola, dan mengoptimalkan strategi media untuk komunikasi dan branding yang efektif.",
    value: "item-1",
  },
  {
    question: "Apakah layanan ini cocok untuk semua jenis perusahaan?",
    answer:
      "Ya, layanan kami dirancang untuk berbagai jenis perusahaan, mulai dari UMKM hingga korporasi besar yang membutuhkan pengelolaan media profesional.",
    value: "item-2",
  },
  {
    question:
      "Bagaimana cara memulai menggunakan layanan konsultasi media ini?",
    answer:
      "Anda dapat menghubungi tim kami melalui website untuk konsultasi awal, kemudian kami akan membantu merancang strategi media yang sesuai dengan kebutuhan bisnis Anda.",
    value: "item-3",
  },
  {
    question: "Apakah saya mendapatkan laporan performa media secara berkala?",
    answer:
      "Tentu. Kami menyediakan laporan dan analisis performa media secara rutin sesuai paket yang dipilih untuk memantau efektivitas komunikasi perusahaan Anda.",
    value: "item-4",
  },
  {
    question: "Apakah layanan ini termasuk pelatihan untuk tim internal?",
    answer:
      "Ya, paket tertentu mencakup pelatihan dan pendampingan tim internal agar pengelolaan media dapat berjalan optimal secara berkelanjutan.",
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
