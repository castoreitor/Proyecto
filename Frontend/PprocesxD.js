let url = "http://localhost:4077/";

const busqueda = () => {
  const inputId = document.getElementById("Id").value;

  const data = {
    "codigo": inputId,
  };

  fetch(url + "consultar2/" + inputId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status == 400) {
      alert("Error comprobando - Producto no encontrado");
    } else {
      alert("Producto encontrado OK");
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
      <td>
      <button onclick="deleteProducto(${data[i].id})">Eliminar</button>
      </td>
     </tr>`;
  }
  document.getElementById("data").innerHTML = body;
};

//Elimina producto por id
const deleteProducto = (id) => {
  console.log(id);

  fetch(url + "borrar", {
    method: "DELETE",
    body: JSON.stringify({ "Id": id }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status == 500) {
      alert("Error interno");
    } else {
      alert("Producto eliminado");

      /*    fetch(url + 'consultar', {
          method: 'GET'
        })
          .then(response => response.json())
          .then(data => mostrarData2(data))
          .catch(error => console.log(error)) */
    }
  });
};

const mostrarData2 = (data) => {
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
document.getElementById("busqueda").addEventListener("click", function (event) {
  event.preventDefault();
  busqueda();
});
