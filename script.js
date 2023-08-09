//Barra dell menu de movil
const toggleMenuElement = document.getElementById("toggle__menu");
const mainMenuElement = document.getElementById("main__menu");

toggleMenuElement.addEventListener("click", () => {
  mainMenuElement.classList.toggle("main__menu__show");
});

//Correo enviado con exito
const form = document.querySelector(".formulario");
const successAlert = document.getElementById("success__alert");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    });

    successAlert.style.display = "block";
    form.reset();

    setTimeout(() => {
      successAlert.style.display = "none";
    }, 5000);
  } catch (error) {
    console.error("Error sending form:", error);
  }
});
