const frases = [
    " Hola, mucho gusto!",
    " Soy Juan David",
    " Gracias por visitarme",
    " Contáctame",
    " Si necesitas algo",
    " ¡Un saludo!"
];

let index = 0;
const nombre = document.getElementById("nombre");

function actualizarTexto() {
    const frase = frases[index];
    nombre.textContent = frase;
    nombre.style.setProperty('--text-length', `${frase.length}ch`);
    nombre.style.animation = 'none';
    nombre.offsetHeight; // Forzar reflow para reiniciar la animación

    // Paso 1: Escribir el texto
    nombre.style.animation = `typing 2s steps(${frase.length}) forwards, blink 0.5s infinite step-end alternate`;

    // Paso 2: Esperar y luego borrar
    setTimeout(() => {
        nombre.style.animation = `deleteText 1s steps(${frase.length}) forwards`;
    }, 3500);

    // Cambiar frase para la próxima iteración
    index = (index + 1) % frases.length;
}

window.onload = function () {
    actualizarTexto();
    setInterval(actualizarTexto, 5000); // Repetir cada 5 segundos
};