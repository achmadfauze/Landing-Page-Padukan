<script lang="ts" setup>
import { ref } from "vue";

import { useColorMode } from "@vueuse/core";
const mode = useColorMode({
  initialValue: "dark", // default dark
});

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Menu } from "lucide-vue-next";
import ToggleTheme from "./ToggleTheme.vue";
import { RouterLink } from "vue-router";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
  href: string;
}

const routeList: RouteProps[] = [
  { href: "/team", label: "Tentang Kami" },
  { href: "/contact", label: "Hubungi Kami" },
];

const product: FeatureProps[] = [
  {
    title: "Padukan Pos Retail",
    description: "💳 Kelola penjualan & stok toko dengan mudah.",
    href: "/posretail",
  },
  {
    title: "Padukan Blast Sonic",
    description: "📢 Kirim pesan WhatsApp massal lebih cepat.",
    href: "/wablast",
  },
];

const services: FeatureProps[] = [
  {
    title: "Periklanan Digital",
    description:
      "Strategi Pemasaran online untuk meningkatkan brand awareness.",
    href: "/iklan-digital",
  },
  {
    title: "Konten Kreatif",
    description: "Produksi foto, video, desain grafis dan copywriting.",
    href: "/konten-kreatif",
  },
  {
    title: "Konsultasi Media",
    description: "Solusi strategis untuk pengelolaan media perusahaan.",
    href: "/konsultasi-media",
  },
];

const isOpen = ref<boolean>(false);
</script>

<template>
  <header
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
      'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2 px-4 bg-card shadow-md': true,
    }"
  >
    <RouterLink to="/" class="flex items-center">
      <!-- Logo Light -->
      <img
        v-if="mode === 'light'"
        src="@/assets/logo-dark.png"
        alt="Logo Light"
        class="h-6 w-auto mr-2"
      />

      <img
        v-else
        src="@/assets/logo-light.png"
        alt="Logo Dark"
        class="h-6 w-auto mr-2"
      />
    </RouterLink>

    <!-- Mobile -->
    <div class="flex items-center lg:!hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu @click="isOpen = true" class="cursor-pointer" />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
        >
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <RouterLink to="/" class="flex items-center">
                  <!-- Logo Light -->
                  <img
                    v-if="mode === 'light'"
                    src="@/assets/logo-dark.png"
                    alt="Logo Light"
                    class="h-6 w-auto mr-2"
                  />

                  <img
                    v-else
                    src="@/assets/logo-light.png"
                    alt="Logo Dark"
                    class="h-6 w-auto mr-2"
                  />
                </RouterLink>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <Button
                v-for="{ href, label } in routeList"
                :key="label"
                as-child
                variant="ghost"
                class="justify-start text-base"
              >
                <RouterLink @click="isOpen = false" :to="href">
                  {{ label }}
                </RouterLink>
              </Button>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2" />

            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop -->
    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-card text-base">
            Produk & Layanan
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="w-[700px] grid grid-cols-2 gap-5 p-4">
              <ul class="flex flex-col gap-2">
                <RouterLink
                  v-for="{ title, description, href } in product"
                  :key="title"
                  :to="href"
                >
                  <li
                    class="rounded-md p-3 text-sm hover:bg-muted cursor-pointer"
                  >
                    <p class="mb-1 font-semibold leading-none text-foreground">
                      {{ title }}
                    </p>
                    <p class="line-clamp-2 text-muted-foreground">
                      {{ description }}
                    </p>
                  </li>
                </RouterLink>
              </ul>
              <ul class="flex flex-col gap-2">
                <RouterLink
                  v-for="{ title, description, href } in services"
                  :key="title"
                  :to="href"
                >
                  <li
                    class="rounded-md p-3 text-sm hover:bg-muted cursor-pointer"
                  >
                    <p class="mb-1 font-semibold leading-none text-foreground">
                      {{ title }}
                    </p>
                    <p class="line-clamp-2 text-muted-foreground">
                      {{ description }}
                    </p>
                  </li>
                </RouterLink>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button
              v-for="{ href, label } in routeList"
              :key="label"
              as-child
              variant="ghost"
              class="justify-start text-base"
            >
              <RouterLink @click="isOpen = false" :to="href">
                {{ label }}
              </RouterLink>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <div class="hidden lg:flex">
      <ToggleTheme />

      <!-- <Button as-child size="sm" variant="ghost">
        <a href="#" target="_blank">
          <img
            v-if="mode === 'light'"
            src="@/assets/whatsapp.png"
            alt="Logo Light"
            class="h-8 w-auto"
          />

          <img
            v-else
            src="@/assets/whatsapp-light.png"
            alt="Logo Dark"
            class="h-8 w-auto"
          />
        </a>
      </Button> -->
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
