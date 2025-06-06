import { getIcon } from "./icons";
import { menuFlotante, seccionActual, mensajeCopiado } from "./navegacion";

const proyectos = {
  0: {
    titulo: "DevWebCamp",
    resumen:
      "Aplicación web desarrollada con PHP y JavaScript bajo el patrón MVC, orientada a la gestión de conferencias y eventos tecnológicos. Incluye funcionalidades como registro y autenticación de usuarios, administración de ponentes y conferencias, inscripciones, panel de control y manejo de sesiones. El proyecto utiliza SCSS para estilos, Gulp para tareas automatizadas y Composer para la gestión de dependencias. Estructurado siguiendo buenas prácticas y organización modular del código.",
    code: "https://github.com/Julian-Sandoval-x/devwebcamp",
    site: "",
    tech: ["html", "scss", "php", "js", "mysql", "paypal"],
    img: {
      phone: {
        webp: "/build/img/mockup/dwc/mcDWC-phone.webp",
        png: "/build/img/mockup/dwc/mcDWC-phone.png",
      },
      tablet: {
        webp: "/build/img/mockup/dwc/mcDWC-tablet.webp",
        png: "/build/img/mockup/dwc/mcDWC-tablet.png",
      },
      desktop: {
        webp: "/build/img/mockup/dwc/mcDWC.webp",
        png: "/build/img/mockup/dwc/mcDWC.png",
      },
    },
  },

  1: {
    titulo: "UpTask",
    resumen:
      "Aplicación web desarrollada con PHP, JavaScript y SCSS, siguiendo el patrón de arquitectura MVC. UpTask permite a los usuarios gestionar tareas y proyectos de manera eficiente, ofreciendo funcionalidades como autenticación de usuarios, creación y edición de tareas, y organización por proyectos. El proyecto utiliza MySQL para la gestión de bases de datos, Gulp para la automatización de tareas y Composer para el manejo de dependencias. La interfaz está diseñada para ser intuitiva y responsiva, asegurando una experiencia de usuario óptima.",
    code: "https://github.com/Julian-Sandoval-x/upTask",
    site: "https://uptask-mvc-php-sandoval.mnz.dom.my.id",
    tech: ["html", "scss", "php", "js", "mysql"],
    img: {
      phone: {
        webp: "/build/img/mockup/uptask/mcUptask-phone.webp",
        png: "/build/img/mockup/uptask/mcUptask-phone.png",
      },
      tablet: {
        webp: "/build/img/mockup/uptask/mcUptask-tablet.webp",
        png: "/build/img/mockup/uptask/mcUptask-tablet.png",
      },
      desktop: {
        webp: "/build/img/mockup/uptask/mcUptask.webp",
        png: "/build/img/mockup/uptask/mcUptask.png",
      },
    },
  },

  2: {
    titulo: "AppSalon",
    resumen:
      "Aplicación web desarrollada con PHP, JavaScript y SCSS, siguiendo el patrón de arquitectura MVC. AppSalon permite a los usuarios agendar citas en un salón de belleza, ofreciendo funcionalidades como autenticación de usuarios, gestión de servicios y programación de citas. El proyecto utiliza Gulp para la automatización de tareas y Composer para la gestión de dependencias. La interfaz está diseñada para ser intuitiva y responsiva, asegurando una experiencia de usuario óptima.",
    code: "https://github.com/Julian-Sandoval-x/appSalon-mvc-php",
    site: "https://appsalon-php-mvc-sandovaljulian.mnz.dom.my.id",
    tech: ["html", "scss", "php", "js", "mysql"],
    img: {
      phone: {
        webp: "/build/img/mockup/appsalon/mcAppSalon-phone.webp",
        png: "/build/img/mockup/appsalon/mcAppSalon-phone.png",
      },
      tablet: {
        webp: "/build/img/mockup/appsalon/mcAppSalon-tablet.webp",
        png: "/build/img/mockup/appsalon/mcAppSalon-tablet.png",
      },
      desktop: {
        webp: "/build/img/mockup/appsalon/mcAppSalon.webp",
        png: "/build/img/mockup/appsalon/mcAppSalon.png",
      },
    },
  },

  3: {
    titulo: "Bienes Raices",
    resumen:
      "Plataforma web orientada a la gestión de propiedades inmobiliarias, desarrollada con PHP, JavaScript y SCSS bajo el patrón MVC. Permite a los usuarios publicar, editar y eliminar anuncios de propiedades, así como gestionar imágenes asociadas. El proyecto emplea Gulp para la automatización de tareas y Composer para la gestión de dependencias. La interfaz está optimizada para ofrecer una experiencia de usuario fluida y responsiva.",
    code: "https://github.com/Julian-Sandoval-x/bienesRaices",
    site: "",
    tech: ["html", "scss", "php", "js", "mysql"],
    img: {
      phone: {
        webp: "/build/img/mockup/bienes/mcBR-phone.webp",
        png: "/build/img/mockup/bienes/mcBR-phone.png",
      },
      tablet: {
        webp: "/build/img/mockup/bienes/mcBR-tablet.webp",
        png: "/build/img/mockup/bienes/mcBR-tablet.png",
      },
      desktop: {
        webp: "/build/img/mockup/bienes/mcBR.webp",
        png: "/build/img/mockup/bienes/mcBR.png",
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", InicializarProyectos);

function generarSlides() {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  if (!swiperWrapper) return;

  // Limpiamos el contenedor
  swiperWrapper.innerHTML = "";

  // Por cada proyecto creamos un slide
  Object.entries(proyectos).forEach(([id, proyecto]) => {
    const slide = document.createElement("DIV");
    slide.classList.add("swiper-slide");
    slide.dataset.proyectoId = id;

    // Generamos el contenido del slide
    const contenedorProyecto = document.createElement("DIV");
    contenedorProyecto.classList.add("proyectos--contenedor");

    // Creamos el contenedor de la imagen
    const contenedorMockup = document.createElement("DIV");
    contenedorMockup.classList.add("proyectos--mockup");
    contenedorMockup.id = `proyectos-mockup-${id}`;

    // Creamos el picture para la imagen
    const proyectoImg = document.createElement("PICTURE");
    proyectoImg.classList.add("proyectos--mockup--img");

    // Mostraremos la imagen de desktop por defecto
    let source =
      dispositivoActual === "tablet"
        ? "tablet"
        : dispositivoActual === "phone"
        ? "phone"
        : "desktop";

    // Creamos el source de la imagen para webp
    const sourceWebp = document.createElement("SOURCE");
    sourceWebp.srcset = proyecto.img[source].webp;
    sourceWebp.type = "image/webp";
    sourceWebp.classList.add("mockup--webp");

    // creamos la imagen para png
    const sourcePng = document.createElement("IMG");
    sourcePng.src = proyecto.img[source].png;
    sourcePng.classList.add("mockup--png");
    sourcePng.alt = `Ejemplo de ${proyecto.titulo}`;
    sourcePng.rel = "preload";
    sourcePng.as = "image";

    // Agregamos el source y la imagen al picture
    proyectoImg.appendChild(sourceWebp);
    proyectoImg.appendChild(sourcePng);

    // Agregamos el picture al contenedor de la imagen
    contenedorMockup.appendChild(proyectoImg);

    // Creamos el contenedor del resumen
    const contenedorResumen = document.createElement("DIV");
    contenedorResumen.classList.add("proyectos--resumen");

    // Creamos el titulo
    const titulo = document.createElement("H3");
    titulo.textContent = proyecto.titulo;
    titulo.classList.add("proyecto--resumen-titulo");

    // Creamos el resumen
    const resumen = document.createElement("P");
    resumen.textContent = proyecto.resumen;
    resumen.classList.add("proyecto--resumen-texto");

    // Creamos el contenedor de las tecnologias
    const contenedorTech = document.createElement("DIV");
    contenedorTech.classList.add("proyecto--resumen-tech");
    const icons = document.createElement("DIV");
    icons.classList.add("proyecto--resumen-icons");

    // Agregamos el svg de las tecnologias
    proyecto.tech.forEach((tech) => {
      const techWrap = document.createElement("SVG");
      techWrap.classList.add("proyecto--resumen-icon");
      techWrap.innerHTML = getIcon(tech);
      icons.appendChild(techWrap);
    });

    // Creamos el boton para obtener el codigo
    const codigoWrap = document.createElement("DIV");
    codigoWrap.classList.add("proyecto--resumen-boton-wrap");
    const codigo = document.createElement("A");
    const site = document.createElement("A");
    if (proyecto.code) {
      generarEnlaces(codigo, "github", proyecto);
    }

    if (proyecto.site) {
      generarEnlaces(site, "enlace", proyecto, true);
    }

    // Agregamos el contenedor de las tecnologias al contenedor del resumen
    contenedorTech.appendChild(icons);

    // Agregamos el boton de codigo y el de sitio al contenedor de las tecnologias
    if (proyecto.code) {
      codigoWrap.appendChild(codigo);
    }

    if (proyecto.site) {
      site.classList.add("proyecto--resumen-boton--enlace");
      codigoWrap.appendChild(site);
    }

    contenedorTech.appendChild(codigoWrap);

    // Agregamos el titulo, resumen y contenedor de las tecnologias al contenedor del resumen
    contenedorResumen.appendChild(titulo);
    contenedorResumen.appendChild(resumen);
    contenedorResumen.appendChild(contenedorTech);

    // Agregamos el contenedor de la imagen y el contenedor del resumen al slide
    slide.appendChild(contenedorMockup);
    slide.appendChild(contenedorResumen);

    // Agregamos el slide al swiper wrapper
    swiperWrapper.appendChild(slide);
  });
}

let dispositivoActual = "desktop";

function cambiarMockup(tipo) {
  // Vista de dispositivo actual
  dispositivoActual = tipo;

  // Obtenemos el slide actual
  const slideActual = document.querySelector(".swiper-slide-active");

  if (!slideActual) return;

  const proyectoId = parseInt(slideActual.dataset.proyectoId);
  const proyecto = proyectos[proyectoId];

  // Obtenemos el contenedor de la imagen
  const contenedorMockup = slideActual.querySelector(".proyectos--mockup");
  const imgMockup = contenedorMockup.querySelector("picture");
  const sourceProyecto = imgMockup.querySelector("source");
  const imgProyecto = imgMockup.querySelector("img");

  // Validamos que se encontraron las imagenes
  if (!sourceProyecto || !imgProyecto) return;

  // Removemos las clases de los mockups
  imgProyecto.classList.remove("proyectos--mockup--img-tablet");
  imgProyecto.classList.remove("proyectos--mockup--img-phone");

  // Cambiamos la imagen según el tipo
  if (tipo === "desktop") {
    sourceProyecto.srcset = proyecto.img.desktop.webp;
    imgProyecto.src = proyecto.img.desktop.png;
  } else if (tipo === "tablet") {
    sourceProyecto.srcset = proyecto.img.tablet.webp;
    imgProyecto.src = proyecto.img.tablet.png;
    imgProyecto.classList.add("proyectos--mockup--img-tablet");
  } else {
    sourceProyecto.srcset = proyecto.img.phone.webp;
    imgProyecto.src = proyecto.img.phone.png;
    imgProyecto.classList.add("proyectos--mockup--img-phone");
  }
}

function InicializarProyectos() {
  menuFlotante();
  generarSlides();
  seccionActual();
  mensajeCopiado();

  // Configuramos los botones del menu de dispositivos
  const botonesMockup = document.querySelectorAll(".proyectos--menu--icono");

  botonesMockup.forEach((boton) => {
    boton.addEventListener("click", () => {
      // Quitamos la clase active y la aplicamos al botón actual
      botonesMockup.forEach((button) => {
        button.classList.remove("active");
      });

      // Agregamos la clase active al botón actual
      boton.classList.add("active");

      const tipo = boton.getAttribute("data-device");
      cambiarMockup(tipo);
    });
  });
}

function generarEnlaces(node, icon, proyecto, site = false) {
  const svg = document.createElement("DIV");
  svg.classList.add("proyecto--resumen-icon");
  svg.innerHTML = getIcon(icon);
  if (site) {
    node.href = proyecto.site;
  } else {
    node.href = proyecto.code;
  }
  // node.href = proyecto.code;
  node.target = "_blank";
  node.rel = "noopener noreferrer";
  node.classList.add("proyecto--resumen-boton");
  node.appendChild(svg);
}

export { cambiarMockup };
