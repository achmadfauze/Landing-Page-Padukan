<script setup lang="ts">
import PosRetail from "@/components/wa-blast/WaBlast.vue";
import Footer from "@/components/Footer.vue";
import Pricing from "@/components/wa-blast/Pricing.vue";
import FAQ from "@/components/wa-blast/FAQ.vue";
import Footer2 from "@/components/Footer2.vue";
</script>

<template>
  <PosRetail />
  <div class="bg-muted/50 dark:bg-card w-full mt-12">
    <FAQ />
  </div>
  <Pricing />
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
