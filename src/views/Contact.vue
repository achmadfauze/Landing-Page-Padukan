<script setup lang="ts">
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import Footer2 from "@/components/Footer2.vue";
</script>

<template>
  <Contact />
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
