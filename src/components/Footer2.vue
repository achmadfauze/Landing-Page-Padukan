<script setup lang="ts">
import {
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-vue-next";
import Separator from "./ui/separator/Separator.vue";
</script>

<template>
  <div class="container w-[100%] h-auto">
    <div class="py-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
        <img
          src="../assets/logo-light.png"
          alt="Logo Dark"
          class="h-6 w-auto mr-2"
        />
        <div class="grid gap-2 text-white text-md">
          <div class="flex items-center gap-2">
            <MapPin class="h-5" />
            <div>
              <p>Perumahan arum Lestari permai3 blok c21,</p>
              <p>fajar baru, jati agung,lampung selatan</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <Phone class="h-5" />
            <p>(+62)-822-2777-9880, (+62)-857-8876-0001</p>
          </div>
          <div class="flex items-center gap-2 mt-4">
            <Facebook class="h-5" />
            <Instagram class="h-5" />
            <Twitter class="h-5" />
            <Linkedin class="h-5" />
          </div>
        </div>
        <div
          class="grid gap-2 grid-cols-2 text-white text-md items-start mt-3 md:mt-0"
        >
          <!-- Produk -->
          <div class="grid gap-2">
            <p class="">Produk</p>
            <div class="h-px w-24 bg-muted-foreground"></div>
            <div class="flex flex-col gap-1">
              <RouterLink to="/produk/pos-retail">Pos Retail</RouterLink>
              <RouterLink to="/produk/wa-blast">Sonic Blast</RouterLink>
            </div>
          </div>

          <!-- Layanan -->
          <div class="grid gap-2">
            <p class="">Layanan</p>
            <div class="h-px w-36 bg-muted-foreground"></div>

            <div class="flex flex-col gap-1">
              <RouterLink to="/layanan/website-dan-aplikasi">
                Website & Aplikasi
              </RouterLink>
              <RouterLink to="/layanan/konsultan-media-sosial">
                Konsultan Media Sosial
              </RouterLink>
              <RouterLink to="/layanan/konten-kreatif">
                Konten Kreatif
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <Separator class="my-6" />
      <section className="">
        <h3 class="text-white font-normal">
          &copy; 2025 Crafted with care by, PT. Digital Kreativa Nusantara.
        </h3>
      </section>
    </div>
  </div>
</template>
