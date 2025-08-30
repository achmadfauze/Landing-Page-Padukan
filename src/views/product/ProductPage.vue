<script lang="ts" setup>
import Card_Product from "@/components/Card_Product.vue";
import Footer from "@/components/Footer.vue";
import Footer2 from "@/components/Footer2.vue";
</script>

<template>
  <section class="container md:w-[90%] w-full">
    <div
      class="relative h-auto grid place-items-center lg:max-w-screen-xl gap-8 mx-auto mt-10 py-10 rounded-2xl overflow-hidden border"
    >
      <div
        class="absolute inset-0 bg-[url('../assets/service_bg.png')] bg-cover bg-center blur-sm scale-110 z-0"
      ></div>
      <div class="relative z-20">
        <div class="text-center">
          <p class="md:text-5xl text-3xl font-bold text-white">Produk</p>
        </div>
      </div>
    </div>
  </section>
  <Card_Product />
  <FooterNew />

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
