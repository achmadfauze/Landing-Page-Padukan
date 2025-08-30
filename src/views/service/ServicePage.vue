<script lang="ts" setup>
import Card_Service from "@/components/Card_Service.vue";
import Footer from "@/components/Footer.vue";
import Footer2 from "@/components/Footer2.vue";

interface ServiceProps {
  title: string;
  icon: string;
  description: string;
  // href: string;
}

const services: ServiceProps[] = [
  {
    title: "Website Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin arcu vitae nisi.",
    icon: "https://via.placeholder.com/100/0000FF/808080?text=Website",
  },
  {
    title: "Mobile Apps Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tempor eros.",
    icon: "https://via.placeholder.com/100/008000/FFFFFF?text=Mobile",
  },
  {
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque ligula vel.",
    icon: "https://via.placeholder.com/100/FF6347/FFFFFF?text=UI/UX",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac turpis ac.",
    icon: "https://via.placeholder.com/100/FFD700/FFFFFF?text=SEO",
  },
];
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
        <!-- Your content here -->
        <div class="text-center">
          <p class="md:text-5xl text-3xl font-bold text-white">Service</p>
        </div>
      </div>
    </div>
  </section>
  <Card_Service />
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
