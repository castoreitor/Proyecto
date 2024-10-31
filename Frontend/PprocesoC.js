let url = "http://localhost:4077/";

/*Primera consulta de datos
fetch(url + "consultar", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => console.log(error));
*/
//Concatena los datos a la tabla
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

//Envia datos creados
const createProducto = () => {
  const data = {
    "ID_producto": document.getElementById("ID_producto").value,
    "Nombre": document.getElementById("Nombre").value,
    "Categoria": document.getElementById("Categoria").value,
    "Descripcion": document.getElementById("Descripcion").value,
    "Precio_unitario": document.getElementById("Precio_unitario").value,
    "Stock": document.getElementById("Stock").value,
  };

  console.log("Datos", data);

  fetch(url + "crearProducto", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status == 500) {
        alert("Error interno - Producto no creado");
      } else {
        alert("Producto Creado");

       /* fetch(url + "consultar", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => mostrarData(data))
          .catch((error) => console.log(error)); */
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

//Corre al dar click crear
document
  .getElementById("crearProducto")
  .addEventListener("click", function (event) {
    event.preventDefault();
    createProducto();
  });


  
  // Proceso R 

  