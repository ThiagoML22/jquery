$(document).ready(function() {
    $('.slick-slider').slick({
        autoplay: true,          // Activar cambio automático
        autoplaySpeed: 3000,     // Cambia cada 4 segundos
        dots: true,              // Muestra puntos de navegación
        arrows: true,            // Permite usar flechas
        infinite: true,          // Ciclo infinito
        speed: 500,              // Velocidad de transición
        slidesToShow: 1,         // Mostrar una imagen a la vez
        slidesToScroll: 1,       // Desplazar una imagen por vez
        pauseOnHover: false,     // No detener al pasar el mouse
        adaptiveHeight: true     // Ajusta la altura automáticamente
    });
});
