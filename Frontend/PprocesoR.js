let url = "http://localhost:4077/";

const busqueda = () => {
  const codigo = document.getElementById("cod").value;

  //console.log('Que carajos'+inputId)

  const data = {
    "codigo": codigo,
  };

  //console.log(inputId)

  fetch(url + "consultar2/" + codigo, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status == 400) {
      alert("Error comprobando - Producto no encontrado");
    } else {
      alert("Producto encontrado con Exito");
      res.json().then((data) => mostrarData(data));
    }
  });
};

const mostrarData = (data) => {
  let i;
  let body = "";
  for (i = 0; i < data.length; i++) {
    body += `<tr>
      <td>${data[i].id}</td>
      <td>${data[i].nombrep}</td>
      <td>${data[i].cantidad}</td>
      <td>${data[i].valor}</td>
     </tr>`;
  }
  document.getElementById("data").innerHTML = body;
};

//Corre al dar click consultar
document
  .getElementById("consultar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    busqueda();
  });
