import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { idProyecto, DOMProjectos, proyectos } from "./proyectos";

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".swiper")) {
    const opciones = {
      slidePerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidePerView: 2,
        },
        1024: {
          slidePerView: 3,
        },
        1200: {
          slidePerView: 4,
        },
      },
    };
    Swiper.use([Navigation]);
    new Swiper(".swiper", opciones);
  }
});

// // Add event listeners to the buttons
const prevButton = document.querySelector(".swiper-button-prev");
const nextButton = document.querySelector(".swiper-button-next");

prevButton.addEventListener("click", () => {
  console.log("Previous button clicked");
  if (idProyecto === 1) {
    idProyecto = Object.values(proyectos).length;
    DOMProjectos(idProyecto);
    return;
  }

  console.log(idProyecto);
  console.log(proyectos.length);
  idProyecto--;
  DOMProjectos(idProyecto);
});

nextButton.addEventListener("click", () => {
  console.log("Next button clicked");
  if (idProyecto === Object.values(proyectos).length) {
    idProyecto = 1;
    DOMProjectos(idProyecto);
    return;
  }

  console.log(idProyecto);
  console.log(Object.values(proyectos).length);
  idProyecto++;
  DOMProjectos(idProyecto);
});
