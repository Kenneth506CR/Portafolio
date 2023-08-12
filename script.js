// Barra del menú de movil
const toggleMenuElement = document.getElementById("toggle__menu");
const mainMenuElement = document.getElementById("main__menu");

toggleMenuElement.addEventListener("click", () => {
  mainMenuElement.classList.toggle("main__menu__show");
});

// Espera a enviar el mensaje
const form = document.querySelector(".formulario");
const successAlert = document.getElementById("success__alert");
const loadingMessage = document.getElementById("loading-message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Mostrar el mensaje de "Cargando"
  if (loadingMessage) {
    loadingMessage.style.display = "block";
  }

  const submitButton = form.querySelector('input[type="submit"]');
  if (submitButton) {
    submitButton.disabled = true;
  }

  //Error en netlify
  try {
    await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    });

    // Mostrar el mensaje de éxito y reiniciar el formulario
    if (successAlert) {
      successAlert.style.display = "block";
    }

    if (loadingMessage) {
      loadingMessage.style.display = "none";
    }

    form.reset();

    setTimeout(() => {
      if (successAlert) {
        successAlert.style.display = "none";
        console.log("Mensaje enviado");
      }
    }, 5000);
  } catch (error) {
    console.error("Error sending form:", error);
  } finally {
    // Habilitar el botón nuevamente
    if (submitButton) {
      submitButton.disabled = false;
    }
  }
});
