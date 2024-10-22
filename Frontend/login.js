let url = "http://localhost:4077/";

// Envia los datos para permitir acceso
const comprobar = () => {
  const inputEmail = document.getElementById("email").value;
  const inputPassword = document.getElementById("password").value;

  // Expresión regular para verificar que la contraseña sea exactamente de 4 caracteres
  const passwordRegex = /^.{4}$/;

  // Verificar si la contraseña cumple con el formato
  if (!passwordRegex.test(inputPassword)) {
    alert("La contraseña debe tener exactamente 4 caracteres.");
    return; // Detiene la ejecución si la contraseña no es válida
  }

  const data = {
    "Correo_electronico": inputEmail,
    "contraseña": inputPassword,
  };
  console.log(data);
  fetch(url + "login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status == 400) {
      alert("Error comprobando - Usuario o contraseña errados");
    } else {
      
        localStorage.setItem('userLoggedIn', 'true');
        alert("Acceso con éxito");
        location.href = "shop.html";
      
    }
  });
};

// Corre al dar click enviar
document.getElementById("enviar").addEventListener("click", function (event) {
  event.preventDefault();
  comprobar();
});

