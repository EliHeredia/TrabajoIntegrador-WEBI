const formulario = document.querySelector(".contactoForm");
const divMsj = document.querySelector(".divMensaje");
const btnMsjAceptar = document.querySelector(".btnAceptar");


function mostrarMensajes(errores) {
  const divErrores = document.getElementById("errores");
  const divDatosValidados = document.getElementById("datosValidados");

  if (errores.length > 0) {
    divErrores.style.display = 'block';
    divDatosValidados.style.display = 'none';

    divErrores.innerHTML = ''; 

    errores.forEach(error => {
      const pError = document.createElement("p");
      pError.textContent = error;
      divErrores.appendChild(pError);
    });
  } else {
    divErrores.style.display = 'none';
    divDatosValidados.style.display = 'block';

    const nombre = document.getElementById("nombreContacto").value;
    const correo = document.getElementById("correoElectronicoContacto").value;
    const mensaje = document.getElementById("mensajeContacto").value;

    divDatosValidados.innerHTML = `<p>¡Mensaje enviado!</p><p>Nombre: ${nombre}</p><p>Correo Electrónico: ${correo}</p><p>Mensaje: ${mensaje}</p>`;
  }

  divMsj.style.display = 'block';
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const errores = [];
  const nombre = document.getElementById("nombreContacto").value;
  const correo = document.getElementById("correoElectronicoContacto").value;
  const mensaje = document.getElementById("mensajeContacto").value;

  const expNom = /^[a-zA-Z\s]{4,}$/;
  const expCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!expNom.test(nombre)) {
    errores.push("El nombre debe contener al menos 4 letras.");
  }

  if (!expCorreo.test(correo)) {
    errores.push("El formato de correo es incorrecto.");
  }

  if (mensaje.trim() === "") {
    errores.push("Debe ingresar algún mensaje.");
  }

  mostrarMensajes(errores);

  btnMsjAceptar.addEventListener('click', function () {
    divMsj.style.display = 'none';
    if (errores.length === 0) {
      formulario.submit();
    }
  });
});