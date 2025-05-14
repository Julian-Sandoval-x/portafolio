const navegacion = document.querySelector("nav");

function menuFlotante() {
  const banner = document.querySelector(".banner");

  // Obtenemos la posición del banner
  window.addEventListener("scroll", function () {
    // Calculamos si sobrepasamos el banner
    banner.getBoundingClientRect().bottom < 1
      ? navegacion.classList.add("navegacion--flotante")
      : navegacion.classList.remove("navegacion--flotante");
  });
}

function seccionActual() {
  const secciones = document.querySelectorAll("section");
  const enlaces = document.querySelectorAll("nav a");

  document.addEventListener("scroll", function () {
    let actual = "";
    secciones.forEach((seccion) => {
      const seccionTop = seccion.offsetTop; // Obtenemos la posición de la sección
      const seccionHeight = seccion.clientHeight; // Obtenemos la altura de la sección

      if (window.scrollY >= seccionTop - seccionHeight / 3) {
        actual = seccion.id;
      }
    });

    enlaces.forEach((enlace) => {
      enlace.classList.remove("active");
      if (enlace.getAttribute("href") === "#" + actual) {
        enlace.classList.add("active");
      }
    });
  });
}

// email
function mensajeCopiado() {
  const botones = document.querySelectorAll(".banner--texto-email--boton");
  botones.forEach((botonCopiar) => {
    botonCopiar.addEventListener("click", function () {
      let email;
      if (botonCopiar.getAttribute("data-location") === "footer") {
        const footer = document.querySelector("footer");
        email = footer.querySelector(".banner--texto-email--input");
      } else {
        email = document.querySelector(".banner--texto-email--input");
      }

      console.log(email);
      // const email = document.querySelector("");
      const emailTexto = email.value;
      navigator.clipboard
        .writeText(emailTexto)
        .then(() => {
          botonCopiar.classList.add("btn--copiado");
          setTimeout(() => botonCopiar.classList.remove("btn--copiado"), 500);
          email.classList.add("email--fade-out");

          setTimeout(() => {
            email.value = "¡Email copiado!";
            email.classList.remove("email--fade-out");
            email.classList.add("email--copiado", "email--fade-in");

            setTimeout(() => {
              email.classList.remove("email--fade-in");
              email.classList.add("email--fade-out");

              setTimeout(() => {
                email.value = emailTexto;
                email.classList.remove("email--fade-out", "email--copiado");
                email.classList.add("email--fade-in");

                setTimeout(() => {
                  email.classList.remove("email--fade-in");
                }, 300);
              }, 300);
            }, 2000);
          }, 300);
        })
        .catch((error) => {
          console.error("Error al copiar el email: ", error);
          email.value = "Error al copiar el email";
          setTimeout(() => {
            email.value = emailTexto;
          }, 1500);
        });
    });
  });
}
export { menuFlotante, seccionActual, mensajeCopiado };
