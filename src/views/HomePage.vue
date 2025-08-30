<!-- src/views/HomePage.vue -->
<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import Services from "@/components/Services.vue";
import Sponsors from "@/components/Sponsors.vue";
import Testimonials from "@/components/Testimonials.vue";
import FAQ from "@/components/FAQ.vue";
import Footer from "@/components/Footer.vue";
import Footer2 from "@/components/Footer2.vue";
</script>

<template>
  <Hero />
  <Sponsors />
  <!-- <Benefits /> -->
  <!-- <Features /> -->
  <Services />
  <!-- <HowItWorks /> -->
  <div class="bg-muted/90 dark:bg-slate-800 w-full mt-12">
    <Testimonials />
  </div>
  <!-- <div class="bg-gray-100 w-full">
    <Team />
  </div> -->
  <!-- <Community /> -->
  <!-- <Pricing /> -->
  <!-- <Contact /> -->
  <FAQ />
  <div class="bg-blue-800/90 dark:bg-card w-full mt-12">
    <Footer />
  </div>
  <div
    class="w-full md:h-[35%] h-[50%] bg-cover bg-center flex items-end"
    style="background-image: url('/src/assets/maps.png')"
  >
    <Footer2 />
  </div>
</template>
