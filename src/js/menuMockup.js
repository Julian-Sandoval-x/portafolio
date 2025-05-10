import { idProyecto, proyectoElement, proyectos } from "./proyectos.js";

// Obtenemos los botones
const botonesMockup = document.querySelectorAll(".proyectos--menu--icono");
const dataset = "data-device";

botonesMockup.forEach((boton) => {
  boton.addEventListener("click", cambiarMockup);
});

function cambiarMockup(boton) {
  let tipo = boton.target.attributes[dataset].value;

  // Verificamos si ya está seleccionado este dispositivo
  if (
    (tipo === "desktop" &&
      !proyectoElement.classList.contains("proyectos--mockup--img--tablet") &&
      !proyectoElement.classList.contains("proyectos--mockup--img--phone")) ||
    (tipo === "tablet" &&
      proyectoElement.classList.contains("proyectos--mockup--img--tablet")) ||
    (tipo !== "desktop" &&
      tipo !== "tablet" &&
      proyectoElement.classList.contains("proyectos--mockup--img--phone"))
  ) {
    return;
  }

  // Cambiamos la imagen según el tipo
  if (tipo === "desktop") {
    proyectoElement.classList.remove(
      "proyectos--mockup--img--tablet",
      "proyectos--mockup--img--phone"
    );
    proyectoElement.src = proyectos[idProyecto].img.desktop;
  } else if (tipo === "tablet") {
    proyectoElement.classList.remove("proyectos--mockup--img--phone");
    proyectoElement.src = proyectos[idProyecto].img.tablet;
    proyectoElement.classList.add("proyectos--mockup--img--tablet");
  } else {
    proyectoElement.classList.remove("proyectos--mockup--img--tablet");
    proyectoElement.src = proyectos[idProyecto].img.phone;
    proyectoElement.classList.add("proyectos--mockup--img--phone");
  }
  // Quitamos la clase active y la aplicamos al botón actual
  quitarClaseActive();
  boton.target.classList.add("active");
}

function quitarClaseActive() {
  botonesMockup.forEach((boton) => {
    boton.classList.remove("active");
  });
}

export { cambiarMockup };
