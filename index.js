// Formulario de contacto de Road Coleman Gym.
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-contacto");
  if (!formulario) return;

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const texto = `Hola, Road Coleman Gym.\n\nNombre: ${nombre}\nCorreo: ${correo}\nAsunto: ${asunto}\nMensaje: ${mensaje}`;
    const enlace = "https://wa.me/573143665856?text=" + encodeURIComponent(texto);
    window.open(enlace, "_blank", "noopener,noreferrer");
  });
});
