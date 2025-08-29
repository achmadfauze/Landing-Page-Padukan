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
    question: "Apa itu layanan konten kreatif ini?",
    answer:
      "Layanan konten kreatif kami mencakup produksi foto dan video profesional, desain grafis, serta copywriting yang dirancang untuk meningkatkan branding dan pemasaran bisnis Anda.",
    value: "item-1",
  },
  {
    question: "Apakah layanan ini cocok untuk semua jenis bisnis?",
    answer:
      "Ya, layanan kami cocok untuk berbagai jenis bisnis, mulai dari UMKM hingga perusahaan besar yang ingin meningkatkan kualitas tampilan dan pesan visual mereka.",
    value: "item-2",
  },
  {
    question: "Bagaimana cara memulai menggunakan layanan konten kreatif ini?",
    answer:
      "Anda dapat menghubungi tim kami melalui website untuk konsultasi awal. Setelah itu, kami akan membantu menentukan konsep dan layanan yang sesuai dengan kebutuhan Anda.",
    value: "item-3",
  },
  {
    question: "Apakah saya bisa meminta revisi pada hasil konten?",
    answer:
      "Tentu. Kami menyediakan sesi revisi terbatas sesuai dengan paket yang dipilih untuk memastikan hasil akhir sesuai dengan harapan Anda.",
    value: "item-4",
  },
  {
    question:
      "Apakah layanan ini bisa digunakan untuk kebutuhan kampanye tertentu?",
    answer:
      "Bisa. Kami dapat menyesuaikan konten untuk berbagai kebutuhan seperti kampanye promosi, peluncuran produk, konten media sosial, dan lainnya.",
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
