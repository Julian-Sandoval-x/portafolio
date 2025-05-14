import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import { cambiarMockup } from "./proyectos";

document.addEventListener("DOMContentLoaded", () => {
  const contenedorSwiper = document.querySelector(".swiper");
  if (!contenedorSwiper) return;

  Swiper.use([Navigation, Pagination, EffectFade, Autoplay, Keyboard]);

  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    grabCursor: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    loop: true,
    on: {
      slideChangeTransitionStart: function () {
        const activeButton = document.querySelector(
          ".proyectos--menu--icono.active"
        );
        if (activeButton) {
          const tipo = activeButton.attributes["data-device"].value;
          cambiarMockup(tipo);
        }
      },
    },
  });
});
