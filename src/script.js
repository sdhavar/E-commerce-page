// Obtener el botón de alternar tema
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark'); // Alternar la clase "dark"
    // Cambiar el ícono del botón
    if (document.body.classList.contains('dark')) {
        themeToggle.textContent = "☀️"; // Modo claro
    } else {
        themeToggle.textContent = "🌙"; // Modo oscuro
    }
});
