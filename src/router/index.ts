// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PosRetail from "@/views/product/PosRetail.vue";
import WaBlast from "@/views/product/WaBlast.vue";
import IklanDigital from "@/views/service/IklanDigital.vue";
import KontenKreatif from "@/views/service/KontenKreatif.vue";
import KonsultasiMedia from "@/views/service/KonsultasiMedia.vue";
import Contact from "@/views/Contact.vue";
import Team from "@/views/AboutUs.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/posretail", name: "PosRetail", component: PosRetail },
  { path: "/wablast", name: "WaBlast", component: WaBlast },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/team", name: "Team", component: Team },
  { path: "/iklan-digital", name: "IklanDigital", component: IklanDigital },
  {
    path: "/konten-kreatif",
    name: "KontenKreatif",
    component: KontenKreatif,
  },
{
    path: "/konsultasi-media",
    name: "KonsultasiMedia",
    component: KonsultasiMedia,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
