
var botonFlotante = document.getElementById('boton-flotante');
var redesSociales = document.getElementById('redes-sociales');

botonFlotante.addEventListener('click', toggleRedesSociales);

function toggleRedesSociales() {
    redesSociales.classList.toggle('mostrar');
}
