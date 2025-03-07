document.getElementById('changeColorButton').addEventListener('click', function() {
    // Cambia el valor de la variable CSS
    document.documentElement.style.setProperty('--color-fondo-primario', '#311b4c');
    document.documentElement.style.setProperty('--color-fondo-segundario', '#ffffff');
    document.documentElement.style.setProperty('--color-fondo-terciario', '#6e0e00');

    options.background.color = "#311b4c"; // Cambia a negro o cualquier otro color
    tsParticles.load("tsparticles", options);
});