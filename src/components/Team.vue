<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import LinkedInIcon from "@/icons/LinkedInIcon.vue";
import GithubIcon from "@/icons/GithubIcon.vue";
import XIcon from "@/icons/XIcon.vue";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/250?img=58",
    firstName: "Tommi",
    lastName: "Sutrisno",
    positions: ["Chief Executive Officer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Revi",
    lastName: "Firandama",
    positions: ["Business Analyst"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Diki Rahmad",
    lastName: "Sandi",
    positions: ["Fullstack Developer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Achmad",
    lastName: "Fauzi",
    positions: ["Web Designer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
      {
        name: "X",
        url: "https://x.com/leo_mirand4",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Rafi",
    lastName: "Ajah",
    positions: ["Video Editor"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Hasane",
    lastName: "Gituloh",
    positions: ["Digital Marketing Specialist"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
      {
        name: "Github",
        url: "https://github.com/leoMirandaa",
      },
    ],
  },
  // {
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   firstName: "Evan",
  //   lastName: "James",
  //   positions: ["Backend Developer"],
  //   socialNetworks: [
  //     {
  //       name: "LinkedIn",
  //       url: "https://www.linkedin.com/in/leopoldo-miranda/",
  //     },
  //     {
  //       name: "Github",
  //       url: "https://github.com/leoMirandaa",
  //     },
  //     {
  //       name: "X",
  //       url: "https://x.com/leo_mirand4",
  //     },
  //   ],
  // },
  // {
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   firstName: "Pam",
  //   lastName: "Taylor",
  //   positions: ["Fullstack developer", "UX Researcher"],
  //   socialNetworks: [
  //     {
  //       name: "X",
  //       url: "https://x.com/leo_mirand4",
  //     },
  //   ],
  // },
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return LinkedInIcon;

    case "Github":
      return GithubIcon;

    case "X":
      return XIcon;
  }
};
</script>

<template>
  <section id="about" class="container lg:w-[75%] py-12">
    <div class="text-center mb-12">
      <h2 class="text-lg text-blue-800 mb-2 tracking-wider">Perusahaan</h2>
      <h2 class="text-2xl md:text-4xl font-bold mb-6">Tentang Kami</h2>
      <p class="text-muted-foreground mx-auto leading-relaxed text-justify">
        PT Digital Kreativa Nusantara, didirikan pada tahun 2024 dan berbasis di
        Lampung, berfokus pada periklanan digital, konten kreatif, konsultasi
        media, serta pengembangan aplikasi e-commerce. Perusahaan ini
        berkomitmen untuk memberikan solusi inovatif berbasis teknologi,
        mendukung transformasi bisnis klien dalam menghadapi tantangan era
        digital.
      </p>
    </div>

    <div class="mt-12 grid md:grid-cols-2 gap-12 text-left">
      <!-- Visi -->
      <div>
        <h3 class="text-lg text-blue-800 mb-4 text-center">Visi</h3>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Menjadi perusahaan terdepan dalam solusi digital yang kreatif dan
          berbasis budaya Nusantara.
        </p>
        <ul
          class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"
        >
          <li>
            Menjadi perusahaan terkemuka dalam menyediakan solusi digital yang
            inovatif dan berdaya saing tinggi di era teknologi.
          </li>
          <li>
            Mengintegrasikan kreativitas dan nilai budaya Nusantara dalam setiap
            solusi digital yang dihadirkan.
          </li>
        </ul>
      </div>

      <!-- Misi -->
      <div>
        <h3 class="text-lg text-blue-800 mb-4 text-center">Misi</h3>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Mendorong transformasi digital dengan inovasi berkualitas tinggi,
          menghormati nilai budaya Nusantara, membantu perkembangan bisnis, dan
          menciptakan manfaat luas melalui teknologi.
        </p>
        <ul
          class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"
        >
          <li>
            Menyediakan layanan digital yang inovatif dan menghormati budaya
            Nusantara.
          </li>
          <li>
            Mendukung pertumbuhan bisnis dengan pendekatan kreatif dan
            profesional.
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section id="team" class="container lg:w-[75%] pt-12">
    <div class="text-center mb-8">
      <h2 class="text-lg text-blue-800 text-center mb-2 tracking-wider">Tim</h2>

      <h2 class="text-2xl md:text-4xl text-center font-bold">
        Tim Impian Perusahaan
      </h2>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <Card
        v-for="{
          imageUrl,
          firstName,
          lastName,
          positions,
          socialNetworks,
        } in teamList"
        :key="imageUrl"
        class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
      >
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img
              :src="imageUrl"
              alt=""
              class="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
            />
          </div>
          <CardTitle class="py-6 pb-4 px-6"
            >{{ firstName }}
            <span class="text-blue-800">{{ lastName }}</span>
          </CardTitle>
        </CardHeader>

        <CardContent
          v-for="(position, index) in positions"
          :key="index"
          :class="{
            'pb-0 text-muted-foreground ': true,
            'pb-4': index === positions.length - 1,
          }"
        >
          {{ position }}<span v-if="index < positions.length - 1">,</span>
        </CardContent>

        <CardFooter class="space-x-4 mt-auto">
          <a
            v-for="{ name, url } in socialNetworks"
            key="name"
            :href="url"
            target="_blank"
            class="hover:opacity-80 transition-all"
            :aria-label="`Visit our ${name} page`"
          >
            <component :is="socialIcon(name)" />
          </a>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
