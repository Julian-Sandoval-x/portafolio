import { techIcons } from "./icons";

const contenedorFront = document.querySelector(".habilidades--front-iconos");
const contenedorBack = document.querySelector(".habilidades--back-iconos");
const contenedorDatabase = document.querySelector(
  ".habilidades--database-iconos"
);
const contenedorHerramientas = document.querySelector(
  ".habilidades--herramientas-iconos"
);

// Frontend
const habilidadesFrontend = ["html", "css", "scss", "js", "tailwind"];

habilidadesFrontend.forEach((habilidad) => {
  const habilidadItem = document.createElement("DIV");
  habilidadItem.classList.add("habilidades--icon");
  habilidadItem.innerHTML = techIcons[habilidad];
  contenedorFront.appendChild(habilidadItem);
});

// Backend
const habilidadesBackend = ["php", "laravel", "npm"];
habilidadesBackend.forEach((habilidad) => {
  const habilidadItem = document.createElement("DIV");
  habilidadItem.classList.add("habilidades--icon");
  habilidadItem.innerHTML = techIcons[habilidad];
  contenedorBack.appendChild(habilidadItem);
});

// database
const habilidadesDatabase = ["mysql"];
habilidadesDatabase.forEach((habilidad) => {
  const habilidadItem = document.createElement("DIV");
  habilidadItem.classList.add("habilidades--icon");
  habilidadItem.innerHTML = techIcons[habilidad];
  contenedorDatabase.appendChild(habilidadItem);
});

// Herramientas
const habilidadesHerramientas = [
  "docker",
  "git",
  "github",
  "terminal",
  "paypal",
  "notion",
];
habilidadesHerramientas.forEach((habilidad) => {
  const habilidadItem = document.createElement("DIV");
  habilidadItem.classList.add("habilidades--icon");
  habilidadItem.innerHTML = techIcons[habilidad];
  contenedorHerramientas.appendChild(habilidadItem);
});

cambiarTamanoIconos();

function cambiarTamanoIconos() {
  const iconos = document.querySelectorAll(".habilidades--icon svg");
  iconos.forEach((icono) => {
    icono.width.baseVal.value = 50;
    icono.height.baseVal.value = 50;
  });
}
