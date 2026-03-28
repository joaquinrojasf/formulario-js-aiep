const form = document.getElementById("formulario");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Evita recargar la página

  let valido = true;

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  // Limpiar errores
  document.getElementById("errorNombre").textContent = "";
  document.getElementById("errorCorreo").textContent = "";
  document.getElementById("errorMensaje").textContent = "";

  // Validación nombre
  if (nombre === "") {
    document.getElementById("errorNombre").textContent = "Nombre obligatorio";
    valido = false;
  }

  // Validación correo con RegExp
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(correo)) {
    document.getElementById("errorCorreo").textContent = "Correo inválido";
    valido = false;
  }

  // Validación mensaje
  if (mensaje === "") {
    document.getElementById("errorMensaje").textContent = "Mensaje obligatorio";
    valido = false;
  }

  // Si todo está correcto → simular envío
  if (valido) {
    document.getElementById("resultado").textContent = "Enviando...";

    simularEnvio()
      .then(() => {
        document.getElementById("resultado").textContent = "✅ Enviado correctamente";
      })
      .catch(() => {
        document.getElementById("resultado").textContent = "❌ Error al enviar";
      });
  }
});

// PROMESA (simulación de envío)
function simularEnvio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.3; // 70% éxito
      if (exito) resolve();
      else reject();
    }, 2000);
  });
}