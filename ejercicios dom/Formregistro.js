document.getElementById("boton").addEventListener("click", function () {

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    const nomError = document.getElementById("nomError");
    const correoError = document.getElementById("correoError");
    const contraseñaError = document.getElementById("contraseñaError");
    const mensaje = document.getElementById("mensaje");

    nomError.textContent = "";
    correoError.textContent = "";
    contraseñaError.textContent = "";
    mensaje.textContent = "";
  
    let validar = true;
  
    if (nombre === "") {
      nomError.textContent = "El nombre es obligatorio.";
      validar = false;
    }

    if (correo === "") {
      correoError.textContent = "El correo electrónico es obligatorio.";
      validar = false;
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      correoError.textContent = "El correo electrónico no es válido.";
      validar = false;
    }

    if (contraseña === "") {
      contraseñaError.textContent = "La contraseña es obligatoria.";
      validar = false;
    } else if (contraseña.length < 6) {
      contraseñaError.textContent = "La contraseña debe tener al menos 6 caracteres.";
      validar = false;
    }
  
    if (validar) {
      mensaje.textContent = "Registro exitoso.";
      console.log({
        name: nombre,
        email: correo,
        password: contraseña
      });
    }
  });
  