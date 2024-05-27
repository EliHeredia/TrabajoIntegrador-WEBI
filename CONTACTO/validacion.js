const formulario = document.querySelector(".contactoForm");
const divMsj = document.querySelector(".divMensaje");
const btnMsjAceptar = document.querySelector(".btnAceptar");
const errores = []; // Lista de errores acumulados


//logo de error para agregar al msj
const imgError = document.createElement("img");
imgError.className = "imgError";
imgError.src = "./img/error2png";

//logo Ok para ingresar cuando cumple:
const imgOk = document.createElement("img");
imgOk.className = "imgOk";
imgOk.src = "./img/todoOK.png";


// Función para mostrar mensajes
function mostrarMensajes() {
    //Limpiar mensajes anteriores
    divMsj.innerHTML = '';
    divMsj.appendChild(btnMsjAceptar);

    // Crear una lista ordenada para los msjs
    const ul = document.createElement("ul");
    ul.style.flexDirection = "column";
    ul.style.gap = "5px";

    // LI cada msj en la lista de errores, o un solo msj.
    const tituloDivMsj = document.createElement("li");
    tituloDivMsj.style.display = "flex";
    tituloDivMsj.style.alignItems = "center";
    tituloDivMsj.style.width = "100%";
    tituloDivMsj.style.justifyContent = "center";
    tituloDivMsj.style.fontSize = "1.3rem";
    tituloDivMsj.style.letterSpacing = "1px";

    // Si hay errores, mostrar todos los errores 
    if (errores.length > 0) {

        tituloDivMsj.textContent = "ERROR ";
        tituloDivMsj.appendChild(imgError);

        ul.appendChild(tituloDivMsj);


        errores.forEach((error) => {
            //ROJO PARA errores
            ul.style.color = "red";
            const li = document.createElement("li");
            li.textContent = error;
            li.style.letterSpacing = "1px";
            ul.appendChild(li);
        });
        divMsj.appendChild(ul);
        btnMsjAceptar.classList.add("hoverError");

    } else {
        tituloDivMsj.textContent = "Mensaje enviado: pronto te responderemos al correo electronico."
        tituloDivMsj.appendChild(imgOk);
        ul.style.color = "green";
        ul.appendChild(tituloDivMsj);
        divMsj.appendChild(ul);
    }

    // Agregar el nuevo mensaje
    divMsj.classList.add("mostrarMsj");

}

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir la presentación automática del formulario
    //Limpiar errores anteriores
    errores.length = 0;

    const nombre = document.getElementById("nombreContacto").value;
    const correo = document.getElementById("correoElectronicoContacto").value;
    const mensaje = document.getElementById("mensajeContacto").value;

    let nombreCumple = true;
    let correoCumple = true;
    let msjCumple = true;

    const expNom = /^[a-zA-Z\s]{6,}$/;
    const expCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expNom.test(nombre)) {
        errores.push("El nombre debe contener al menos 6 letras.");
        nombreCumple = false;
    }

    if (!expCorreo.test(correo)) {
        errores.push("El formato de correo es incorrecto.");
        correoCumple = false;
    }

    if (mensaje.trim() === "") {
        errores.push("Debe ingresar algún mensaje.");
        msjCumple = false;
    }

    if (nombreCumple && correoCumple && msjCumple) {
        btnMsjAceptar.classList.remove("hoverError");
        btnMsjAceptar.classList.add("hoverOk");
        mostrarMensajes();

        // click para la card de mensajes
        btnMsjAceptar.addEventListener('click', function () {
            //ocultamos el div con los mensajes
            divMsj.classList.remove("mostrarMsj");
            // Enviar el formulario
            formulario.submit();
        });
    } else {
        mostrarMensajes();
       
        btnMsjAceptar.addEventListener('click', function () {
            
            divMsj.classList.remove("mostrarMsj");
        });
    }


});