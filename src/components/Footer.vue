<script setup lang="ts">
import Separator from "./ui/separator/Separator.vue";

import { useColorMode } from "@vueuse/core";

const mode = useColorMode({
  initialValue: "dark", // default dark
});
</script>

<template>
  <footer id="footer" class="container">
    <div class="p-10">
      <div
        class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8"
      >
        <div class="col-span-full xl:col-span-2">
          <div></div>
          <a href="/" class="flex items-center">
            <!-- Logo Light -->
            <img
              v-if="mode === 'light'"
              src="../assets/logo-dark.png"
              alt="Logo Light"
              class="h-6 w-auto mr-2"
            />

            <img
              v-else
              src="../assets/logo-light.png"
              alt="Logo Dark"
              class="h-6 w-auto mr-2"
            />
          </a>
        </div>

        <div class="flex flex-col col-span-2 gap-2">
          <h3 class="font-bold text-lg">Alamat</h3>
          <div>
            <a class="opacity-60 hover:opacity-100">
              Perumahan arum Lestari permai3 blok c21, fajar baru, jati
              agung,lampung selatan
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Contact</h3>
          <div>
            <a
              href="https://wa.me/6282227779880"
              target="_blank"
              rel="noopener noreferrer"
              class="opacity-60 hover:opacity-100"
            >
              Whatsapp
            </a>
          </div>

          <div>
            <a href="#" class="opacity-60 hover:opacity-100"> Email </a>
          </div>

          <div>
            <a href="#" class="opacity-60 hover:opacity-100"> Instagram </a>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <h3 class="font-bold text-lg">Help</h3>
          <div>
            <a href="#" class="opacity-60 hover:opacity-100"> Contact Us </a>
          </div>

          <div>
            <a href="#" class="opacity-60 hover:opacity-100"> FAQ </a>
          </div>
        </div>
      </div>

      <Separator class="my-6" />
      <section className="">
        <h3 class="">
          &copy; 2025 Crafted with care by,
          <a
            target="_blank"
            className="text-blue-800 transition-all border-primary hover:border-b-2"
          >
            Padukan
          </a>
        </h3>
      </section>
    </div>
  </footer>
</template>
