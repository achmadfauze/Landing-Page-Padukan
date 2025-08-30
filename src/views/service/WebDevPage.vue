<script setup lang="ts">
import WebDevPage from "../../components/web-dev/WebDevPage.vue";
import Footer from "../../components/Footer.vue";
import Pricing from "../../components/web-dev/Pricing.vue";
import FAQ from "../../components/web-dev/FAQ.vue";
import Footer2 from "@/components/Footer2.vue";
</script>

<template>
  <WebDevPage />
  <!-- <Pricing />
  <FAQ /> -->
  <div class="bg-blue-800/90 dark:bg-card w-full mt-12">
    <Footer />
  </div>
  <!-- <div class="bg-muted/50 dark:bg-card w-full"> -->
  <div
    class="w-full md:h-[35%] h-[50%] bg-cover bg-center flex items-end"
    style="background-image: url('/src/assets/maps.png')"
  >
    <Footer2 />
  </div>
  <!-- </div> -->
</template>
