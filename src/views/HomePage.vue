<!-- src/views/HomePage.vue -->
<script setup lang="ts">
import Hero from "@/components/Hero.vue";
import Services from "@/components/Services.vue";
import Sponsors from "@/components/Sponsors.vue";
import Testimonials from "@/components/Testimonials.vue";
import FAQ from "@/components/FAQ.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Hero />
  <Sponsors />
  <!-- <Benefits /> -->
  <!-- <Features /> -->
  <Services />
  <!-- <HowItWorks /> -->
  <Testimonials />
  <!-- <div class="bg-gray-100 w-full">
    <Team />
  </div> -->
  <!-- <Community /> -->
  <!-- <Pricing /> -->
  <!-- <Contact /> -->
  <FAQ />
  <div class="bg-muted/50 dark:bg-card w-full mt-12">
    <Footer />
  </div>
</template>
