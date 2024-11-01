let url = "http://localhost:4077/";

const busqueda = () => {
  const ID_producto = document.getElementById("ID_producto").value;

  //console.log('Que carajos'+inputId)

  const data = {
    "ID_producto": ID_producto,
  };

  //console.log(inputId)

  fetch(url + "consultar2/" + ID_producto, {
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
      <td>${data[i].ID_producto}</td>
      <td>${data[i].Nombre}</td>
      <td>${data[i].Categoria}</td>
      <td>${data[i].Descripcion}</td>
      <td>${data[i].Precio_unitario}</td>
      <td>${data[i].Stock}</td>
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
