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
    question: "Apa itu Blast Sonic?",
    answer:
      "Blast Sonic adalah aplikasi broadcast WhatsApp yang membantu Anda mengirim pesan massal ke banyak kontak secara cepat dan efisien.",
    value: "item-1",
  },
  {
    question: "Apakah cocok untuk bisnis kecil maupun besar?",
    answer:
      "Ya, Blast Sonic bisa digunakan oleh UMKM, toko online, hingga perusahaan besar untuk mendukung promosi, informasi pelanggan, dan campaign marketing.",
    value: "item-2",
  },
  {
    question: "Bagaimana cara memulai menggunakan Blast Sonic?",
    answer:
      "Cukup daftar akun di website kami, login ke aplikasi, lalu Anda bisa langsung mengimpor kontak dan mulai mengirim pesan broadcast.",
    value: "item-3",
  },
  {
    question: "Apakah saya bisa menjadwalkan pesan?",
    answer:
      "Ya, Blast Sonic mendukung fitur penjadwalan pesan sehingga Anda bisa mengatur kapan pesan akan dikirim sesuai kebutuhan campaign.",
    value: "item-4",
  },
  {
    question: "Apakah aman digunakan?",
    answer:
      "Tentu. Blast Sonic dibangun dengan sistem keamanan yang menjaga data kontak dan pesan Anda tetap terlindungi.",
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
