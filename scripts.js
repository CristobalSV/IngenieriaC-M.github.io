// scripts.js

let descripciones = [
    "Hola, ¿Quieres cotizar con nosotros?",
    "Esta es la descripción de 'Nuestra Misión'."
];

    function cotizarProducto(cardIndex) {
        // Implementa la acción de cotización aquí, por ejemplo, abrir un formulario de cotización en una nueva ventana.
        window.open(`https://wa.me/+56941123987?text=${encodeURIComponent(descripciones[cardIndex])}`,"_blank");
    }
    