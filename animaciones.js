// animaciones.js
const phrases = [
    ["I'm ", "Kenneth", " Rodríguez"],
    ["i'm ", "Front End", " Programer."]
  ];
  const colors = ["blue", "red", "white"];
  const interval = 250;
  
  function typeText(textElement, textArray, index, charIndex) {
    if (index < textArray.length) {
      if (charIndex < textArray[index].length) {
        const char = textArray[index][charIndex];
        const span = document.createElement("span");
        span.classList.add(colors[index]); // Agregar la clase CSS de color
        span.textContent = char;
        textElement.appendChild(span);
        charIndex++;
        setTimeout(() => typeText(textElement, textArray, index, charIndex), interval);
      } else {
        index++;
        charIndex = 0;
        setTimeout(() => typeText(textElement, textArray, index, charIndex), interval);
      }
    } else {
      setTimeout(() => clearText(textElement), 3000); // Esperar 3 segundos antes de borrar el texto
    }
  }
  
  function clearText(textElement) {
    const textLength = textElement.children.length;
    if (textLength > 0) {
      textElement.removeChild(textElement.children[textLength - 1]);
      setTimeout(() => clearText(textElement), interval);
    } else {
      setTimeout(() => showNextPhrase(textElement), 100); // Esperar un corto tiempo antes de mostrar la siguiente frase
    }
  }
  
  function showNextPhrase(textElement) {
    textElement.textContent = ""; // Limpiar el contenido anterior
    const currentPhrase = phrases.shift();
    phrases.push(currentPhrase);
    typeText(textElement, currentPhrase, 0, 0); // Comenzar el efecto de escritura
  }
  
  // Iniciar la animación cuando se cargue el DOM
  document.addEventListener("DOMContentLoaded", function () {
    const consoleElement = document.querySelector(".nombre__header");
    showNextPhrase(consoleElement);
  });

  