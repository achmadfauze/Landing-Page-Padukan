// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import PosRetail from "@/views/product/PosRetail.vue";
import WaBlast from "@/views/product/WaBlast.vue";
import IklanDigital from "@/views/service/IklanDigital.vue";
import KontenKreatif from "@/views/service/KontenKreatif.vue";
import KonsultanMedsos from "@/views/service/KonsultanMedsos.vue";
import Contact from "@/views/Contact.vue";
import Team from "@/views/AboutUs.vue";
import AllService from "@/views/service/ServicePage.vue"
import AllProduct from "@/views/product/ProductPage.vue"
import WebDevPage from "@/views/service/WebDevPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/produk/pos-retail", name: "PosRetail", component: PosRetail },
  { path: "/produk/wa-blast", name: "WaBlast", component: WaBlast },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/team", name: "Team", component: Team },
  { path: "/iklan-digital", name: "IklanDigital", component: IklanDigital },
  {
    path: "/layanan/konten-kreatif",
    name: "KontenKreatif",
    component: KontenKreatif,
  },
{
    path: "/layanan/konsultan-media-sosial",
    name: "KonsultanMedsos",
    component: KonsultanMedsos,
  },
  { path: "/layanan", name: "AllService", component: AllService },
  { path: "/produk", name: "AllProduct", component: AllProduct },
  { path: "/layanan/website-dan-aplikasi", name: "WebDevPage", component: WebDevPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
