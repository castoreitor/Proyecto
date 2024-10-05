let url = "http://localhost:4077/";

//Envia los datos para permitir acceso
const comprobar = () => {
  const inputEmail = document.getElementById("email").value;
  const inputPassword = document.getElementById("password").value;

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
      alert("Error comprobando - Usario o contraseña errados");
    } else {
      alert("Acceso con exito");
      location.href = "productos.html";
    }
  });
};

//Corre al dar click enviar
document.getElementById("enviar").addEventListener("click", function (event) {
  event.preventDefault();
  comprobar();
});
