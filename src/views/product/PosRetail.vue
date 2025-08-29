<script setup lang="ts">
import PosRetail from "../../components/pos-retail/PosRetail.vue";
import Footer from "../../components/Footer.vue";
import Pricing from "@/components/pos-retail/Pricing.vue";
import FAQ from "@/components/pos-retail/FAQ.vue";
</script>

<template>
  <PosRetail />
  <Pricing />
  <FAQ />
  <div class="bg-muted/50 dark:bg-card w-full mt-12">
    <Footer />
  </div>
</template>
