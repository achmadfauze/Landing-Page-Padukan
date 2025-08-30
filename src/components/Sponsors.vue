<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";
import Ali from "@/assets/sponsor/ali.png";
import LidahTengku from "@/assets/sponsor/lidah-tengku.png";
import Benedection from "@/assets/sponsor/benedection.png";
import Gerai from "@/assets/sponsor/gerai_kita.png";
import Ayesha from "@/assets/sponsor/ayesha.png";
import Hatim from "@/assets/sponsor/hatim.png";
import PLN from "@/assets/sponsor/PLN.png";
import {
  Crown,
  Vegan,
  Ghost,
  Puzzle,
  Squirrel,
  Cookie,
  Drama,
} from "lucide-vue-next";

interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: LidahTengku,
    name: "Lidah Tengku",
  },

  {
    icon: Gerai,
    name: "Gerai Kita",
  },
  {
    icon: Benedection,
    name: "Benedection",
  },
  {
    icon: Hatim,
    name: "Hatim Besari",
  },
  {
    icon: Ali,
    name: "CCTV",
  },
  {
    icon: Ayesha,
    name: "Ayesha Collection",
  },
  {
    icon: PLN,
    name: "PLN",
  },
  // {
  //   icon: "cookie",
  //   name: "Accmee",
  // },
  // {
  //   icon: "drama",
  //   name: "Acmetech",
  // },
];

const iconMap: Record<
  string,
  | typeof Crown
  | typeof Vegan
  | typeof Ghost
  | typeof Puzzle
  | typeof Squirrel
  | typeof Cookie
  | typeof Drama
> = {
  crown: Crown,
  vegan: Vegan,
  ghost: Ghost,
  puzzle: Puzzle,
  squirrel: Squirrel,
  cookie: Cookie,
  drama: Drama,
};
</script>

<template>
  <section id="sponsors" class="max-w-[75%] mx-auto pb-24 sm:pb-32">
    <h2 class="text-lg md:text-xl text-center mb-6">
      Telah dipercaya 100+ perusahaan bisnis di indonesia
    </h2>

    <div class="mx-auto">
      <Marquee
        class="gap-[5rem]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[5rem]"
      >
        <div v-for="{ icon, name } in sponsors" :key="name">
          <div
            class="flex items-center text-xl md:text-2xl font-medium text-center"
          >
            <!-- <component :is="iconMap[icon]" class="mr-2" stroke-width="3" /> -->
            <img
              :src="icon"
              alt="Logo Dark"
              class="h-8 mr-2 w-auto filter grayscale"
            />
            <div class="whitespace-nowrap">
              {{ name }}
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>
