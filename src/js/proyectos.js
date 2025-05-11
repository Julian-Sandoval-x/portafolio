import { getIcon } from "./icons";

let idProyecto = 1;
let proyectoElement;
let proyectoResumen = null;

const proyectos = {
  1: {
    titulo: "DevWebCamp",
    resumen:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eu faucibus risus, vitae accumsan massa. Vivamus in mauris ac tellus volutpat consequat. Vivamus vel arcu placerat, maximus nunc ut, porta sem. Proin at dui dictum, tempor tortor vel, euismod ipsum. Vestibulum dolor tortor, vulputate eget laoreet placerat, fringilla in nunc. Vestibulum sed lacus nisi. Praesent blandit venenatis libero nec ultrices. Ut vulputate tellus a arcu volutpat sodales. Praesent ex mauris, ullamcorper a elementum et, sollicitudin semper dui.",
    code: "3",
    tech: ["html", "scss", "php", "mysql", "paypal"],
    img: {
      phone: "/public/build/img/mockup/mcDWC-phone.webp",
      tablet: "/public/build/img/mockup/mcDWC-tablet.webp",
      desktop: "/public/build/img/mockup/mcDWC.webp",
    },
  },

  2: {
    titulo: "UpTask",
    resumen:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eu faucibus risus, vitae accumsan massa. Vivamus in mauris ac tellus volutpat consequat. Vivamus vel arcu placerat, maximus nunc ut, porta sem. Proin at dui dictum, tempor tortor vel, euismod ipsum. Vestibulum dolor tortor, vulputate eget laoreet placerat, fringilla in nunc. Vestibulum sed lacus nisi. Praesent blandit venenatis libero nec ultrices. Ut vulputate tellus a arcu volutpat sodales. Praesent ex mauris, ullamcorper a elementum et, sollicitudin semper dui.",
    code: "https://github.com/Julian-Sandoval-x/upTask",
    tech: ["html", "scss", "php", "mysql", "paypal"],
    img: {
      phone: "/public/build/img/mockup/mcDWC-phone.webp",
      tablet: "/public/build/img/mockup/mcDWC-tablet.webp",
      desktop: "/public/build/img/mockup/mcDWC.webp",
    },
  },

  3: {
    titulo: "AppSalon",
    resumen:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eu faucibus risus, vitae accumsan massa. Vivamus in mauris ac tellus volutpat consequat. Vivamus vel arcu placerat, maximus nunc ut, porta sem. Proin at dui dictum, tempor tortor vel, euismod ipsum. Vestibulum dolor tortor, vulputate eget laoreet placerat, fringilla in nunc. Vestibulum sed lacus nisi. Praesent blandit venenatis libero nec ultrices. Ut vulputate tellus a arcu volutpat sodales. Praesent ex mauris, ullamcorper a elementum et, sollicitudin semper dui.",
    code: "https://github.com/Julian-Sandoval-x/appSalon-mvc-php",
    tech: ["html", "scss", "php", "mysql", "paypal"],
    img: {
      phone: "/public/build/img/mockup/mcDWC-phone.webp",
      tablet: "/public/build/img/mockup/mcDWC-tablet.webp",
      desktop: "/public/build/img/mockup/mcDWC.webp",
    },
  },

  4: {
    titulo: "Bienes Raices",
    resumen:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eu faucibus risus, vitae accumsan massa. Vivamus in mauris ac tellus volutpat consequat. Vivamus vel arcu placerat, maximus nunc ut, porta sem. Proin at dui dictum, tempor tortor vel, euismod ipsum. Vestibulum dolor tortor, vulputate eget laoreet placerat, fringilla in nunc. Vestibulum sed lacus nisi. Praesent blandit venenatis libero nec ultrices. Ut vulputate tellus a arcu volutpat sodales. Praesent ex mauris, ullamcorper a elementum et, sollicitudin semper dui.",
    code: "3",
    tech: ["html", "scss", "php", "mysql", "paypal"],
    img: {
      phone: "/public/build/img/mockup/mcDWC-phone.webp",
      tablet: "/public/build/img/mockup/mcDWC-tablet.webp",
      desktop: "/public/build/img/mockup/mcDWC.webp",
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  iniciarApp();
});

function iniciarApp() {
  DOMProjectos();
}

function DOMProjectos(idProyecto = 1) {
  const contenedorProyecto = document.querySelector(".proyectos--contenedor");
  const contenedorImg = document.querySelector("#proyectos-mockup");

  // Limpiamos el contenedor
  limpiarHTML();

  var proyecto = proyectos[idProyecto];

  // Creamos la imagen
  proyectoElement = document.createElement("IMG");

  // Agregamos el source de la imagen dependiendo la pantalla
  // Celular
  if (window.innerWidth < 768) {
    proyectoElement.src = proyecto.img.phone || proyecto.img.desktop;

    // Tablet
  } else if (window.innerWidth < 1024) {
    proyectoElement.src = proyecto.img.tablet || proyecto.img.desktop;

    // Desktop
  } else {
    proyectoElement.src = proyecto.img.desktop;
  }

  // Agregamos el alt a nuestra imagen
  proyectoElement.alt = `Ejemplo de ${proyecto.titulo}`;

  // Agregamos la clase a nuestra imagen
  proyectoElement.classList.add("proyectos--mockup--img");

  proyectoElement.rel = "preload";

  proyectoElement.as = "image";

  // Informacion del proyecto
  if (proyectoResumen === null) {
    proyectoResumen = document.createElement("DIV");
    proyectoResumen.classList.add("proyectos--resumen");
  }

  // Titulo
  const titulo = document.createElement("H3");
  titulo.textContent = proyecto.titulo;
  titulo.classList.add("proyecto--resumen-titulo");

  // Resumen
  const resumen = document.createElement("P");
  resumen.textContent = proyecto.resumen;
  resumen.classList.add("proyecto--resumen-texto");
  // tecnologias
  const techArr = document.createElement("DIV");
  techArr.classList.add("proyecto--resumen-tech");

  const icons = document.createElement("DIV");
  icons.classList.add("proyecto-resumen-icons");
  // Agregamos el svg de las tecnologias
  proyecto.tech.forEach((tech) => {
    const techWrap = document.createElement("SVG");
    techWrap.classList.add("proyecto--resumen-icon");
    techWrap.innerHTML = getIcon(tech);
    icons.appendChild(techWrap);
  });

  // Boton para obtener el codigo
  const url = document.createElement("A");
  const boton = document.createElement("BUTTON");
  url.appendChild(boton);
  // Comprobamos que exite un link hacia el codigo
  if (proyecto.code !== "") {
    url.href = proyecto.code;
    boton.classList.add("proyecto--resumen-boton");
    boton.textContent = "code";
  }
  // Agregamos dentro del DIV de Resumen
  techArr.appendChild(icons);
  techArr.appendChild(url);
  proyectoResumen.appendChild(titulo);
  proyectoResumen.appendChild(resumen);
  proyectoResumen.appendChild(techArr);

  // Agregamos al DOM
  contenedorImg.appendChild(proyectoElement);

  contenedorProyecto.appendChild(proyectoResumen);
}

function limpiarHTML() {
  const imgMockup = document.querySelector(".proyectos--mockup--img");
  const contenedorTitulo = document.querySelector(".proyecto--resumen-titulo");
  const contenedorResumen = document.querySelector(".proyecto--resumen-texto");
  const contenedorTech = document.querySelector(".proyecto--resumen-tech");
  const contenedorBoton = document.querySelector(".proyecto--resumen-boton");

  // Limpiamos el contenedor de la imagen
  if (imgMockup) {
    imgMockup.remove();
  }
  // Limpiamos el contenedor del titulo
  if (contenedorTitulo) {
    contenedorTitulo.remove();
  }
  // Limpiamos el contenedor del resumen
  if (contenedorResumen) {
    contenedorResumen.remove();
  }
  // Limpiamos el contenedor de las tecnologias
  if (contenedorTech) {
    contenedorTech.remove();
  }
  // Limpiamos el contenedor del boton
  if (contenedorBoton) {
    contenedorBoton.remove();
  }
}

export { proyectoElement, proyectos, idProyecto, DOMProjectos };
