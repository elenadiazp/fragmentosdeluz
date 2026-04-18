

      document.addEventListener("DOMContentLoaded", () => {

    const fechaObjetivo = new Date("2026-04-18T12:55:00").getTime();

    function actualizarContador() {
        const ahora = new Date().getTime();
        const diferencia = fechaObjetivo - ahora;

        const overlay = document.getElementById("overlay");
        const countdown = document.getElementById("countdown");

        if (diferencia <= 0) {
            overlay.style.opacity = "0";

            setTimeout(() => {
                overlay.style.display = "none";
            }, 1000);

            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);

        countdown.innerHTML =
            `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    setInterval(actualizarContador, 1000);
    actualizarContador();

});
   