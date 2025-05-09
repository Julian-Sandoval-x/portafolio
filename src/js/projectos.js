const projectos = {
  dwc: {
    titulo: "DevWebCamp",
    resumen: "",
    code: "",
    tech: [],
    img: {
      phone: "",
      tablet: "",
      desktop: "/",
    },
  },

  uptask: {
    titulo: "UpTask",
    resumen: "",
    code: "https://github.com/Julian-Sandoval-x/upTask",
    tech: [],
    img: {
      phone: "",
      tablet: "",
      desktop: "",
    },
  },

  salon: {
    titulo: "AppSalon",
    resumen: "",
    code: "https://github.com/Julian-Sandoval-x/appSalon-mvc-php",
    tech: [],
    img: {
      phone: "",
      tablet: "",
      desktop: "",
    },
  },

  bienesRaices: {
    titulo: "Bienes Raices",
    resumen: "",
    code: "",
    tech: [],
    img: {
      phone: "",
      tablet: "",
      desktop: "",
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  iniciarApp();
});

function iniciarApp() {
  DOMProjectos();
}

function DOMProjectos() {
  const contenedor = document.querySelector("#projectos-contenedor");

  const mockup = document.createElement("IMG");

  // DOM SCRIPTING
  mockup.src = "/src/img/mockup/mcDWC.png";
  mockup.alt = "Ejemplo de pagina en Desktop";
  mockup.classList.add("projectos-contenedor--img");

  contenedor.appendChild(mockup);
}
