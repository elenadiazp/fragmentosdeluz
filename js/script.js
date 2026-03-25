const mensaje = document.getElementById('mensajeProtegido');

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        mensaje.style.display = 'block';
        setTimeout(() => mensaje.style.display = 'none', 2000);
    });
});