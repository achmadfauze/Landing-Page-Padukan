<script lang="ts" setup>
import { ref } from "vue";

import { useColorMode } from "@vueuse/core";
const mode = useColorMode({
  initialValue: "light",
});
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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

const routeList: RouteProps[] = [
  { href: "/produk", label: "Produk" },
  { href: "/layanan", label: "Layanan" },
  { href: "/team", label: "Perusahaan" },
  { href: "/contact", label: "Kontak" },
];

const isOpen = ref<boolean>(false);
</script>

<template>
  <header
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
      'w-[100%] mx-auto sticky  top-0 z-40  flex justify-between items-center p-2 px-4 bg-white dark:bg-card border-b': true,
    }"
  >
    <RouterLink to="/" class="flex items-center">
      <!-- Logo Light -->
      <img
        v-if="mode === 'light'"
        src="@/assets/logo-dark.png"
        alt="Logo Light"
        class="h-5 w-auto mr-2"
      />

      <img
        v-else
        src="@/assets/logo-light.png"
        alt="Logo Dark"
        class="h-5 w-auto mr-2"
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
                    class="h-5 w-auto mr-2"
                  />

                  <img
                    v-else
                    src="@/assets/logo-light.png"
                    alt="Logo Dark"
                    class="h-5 w-auto mr-2"
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
        <!-- <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-card text-base">
            Produk & Layanan
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="w-[700px] grid grid-cols-3 gap-5 p-4">
              <ul class="flex flex-col gap-2">
                <div class="border-b border-muted-foreground pb-2 text-sm">
                  Produk Kami
                </div>
                <RouterLink
                  v-for="{ title, description, icon, href } in product"
                  :key="title"
                  :to="href"
                >
                  <li
                    class="rounded-md p-3 text-sm hover:bg-muted cursor-pointer border"
                  >
                    <div class="flex items-center gap-2">
                      <img :src="icon" alt="Logo Dark" class="h-5 w-auto" />
                      <p
                        class="mb-1 font-semibold leading-none text-foreground"
                      >
                        {{ title }}
                      </p>
                    </div>
                  </li>
                </RouterLink>
              </ul>
              <ul class="flex flex-col col-span-2 gap-2">
                <div class="border-b border-muted-foreground pb-2 text-sm">
                  Layanan Kami
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <RouterLink
                    v-for="{ title, description, icon, href } in services"
                    :key="title"
                    :to="href"
                  >
                    <li
                      class="rounded-md p-3 text-sm hover:bg-muted cursor-pointer border"
                    >
                      <div class="flex items-center gap-2">
                        <img :src="icon" alt="Logo Dark" class="h-5 w-auto" />
                        <p
                          class="mb-1 font-semibold leading-none text-foreground"
                        >
                          {{ title }}
                        </p>
                      </div>
                    </li>
                  </RouterLink>
                </div>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem> -->

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
