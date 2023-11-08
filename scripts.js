// scripts.js

let descripciones = [
    "Este modelo es de 9400 btu'.",
    "Esta es la descripción de 'Nuestra Misión'."
];

let mensajeMostrado = ''; // Variable para almacenar el mensaje


    function mostrarMensaje(overlay, mensaje) {
        overlay.style.display = 'block';
        overlay.innerHTML = mensaje;
        mensajeMostrado = mensaje;
    }
    
    function ocultarMensaje(overlay) {
        overlay.style.display = 'none';
        overlay.innerHTML = ''; // Limpiar el contenido del mensaje
    }
    
    function cotizarProducto(cardIndex) {
        // Implementa la acción de cotización aquí, por ejemplo, abrir un formulario de cotización en una nueva ventana.
        window.open(`https://wa.me/+56941123987?text=${encodeURIComponent(descripciones[cardIndex])}`,"_blank");
    }
    