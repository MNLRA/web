// Manejo básico de eventos
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
            form.reset();
        });
    }

    console.log("Sitio de Catering Home listo.");
});