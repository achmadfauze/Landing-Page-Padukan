<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { Button } from "./ui/button";

import { useColorMode } from "@vueuse/core";

const mode = useColorMode({
  initialValue: "dark",
});
</script>

<template>
  <div class="container w-[100%]">
    <div class="py-10">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="text-white">
          <p class="text-2xl font-semibold pb-6">
            Suka dengan apa yang Anda lihat sejauh ini?
          </p>
          <p>Tidak harus berupa proyek. Pertanyaan atau surat cinta</p>
          <p>sudah cukup. Hubungi kami.</p>
          <div class="flex items-center gap-2 mt-3">
            <RouterLink to="/contact">
              <Button size="sm" variant="outline" class="mt-4"
                >Diskusi Lebih Lanjut
                <span>
                  <ArrowRight class="ml-2 h-4" />
                </span>
              </Button>
            </RouterLink>

            <a
              href="https://wa.me/6282227779880"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center"
            >
              <Button size="sm" variant="outline" class="mt-4">
                <span>
                  <img
                    v-if="mode === 'light'"
                    src="../assets/whatsapp.png"
                    alt="Logo Light"
                    class="h-6 w-auto mr-2"
                  />
                </span>
                Whatsapp Kami
              </Button>
            </a>
          </div>
        </div>
        <div class="place-self-center hidden md:block">
          <img
            src="../assets/footer.png"
            alt="Logo Light"
            class="h-32 w-auto mr-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>
