<script setup lang="ts">
import PosRetail from "@/components/wa-blast/WaBlast.vue";
import Footer from "@/components/Footer.vue";
import Pricing from "@/components/wa-blast/Pricing.vue";
import FAQ from "@/components/wa-blast/FAQ.vue";
</script>

<template>
  <PosRetail />
  <Pricing />
  <FAQ />
  <div class="bg-muted/50 dark:bg-card w-full mt-12">
    <Footer />
  </div>
</template>
