let url = "http://localhost:4077/";

// Ver inventario - GET
function verInventario() {
  fetch(url + "consultar", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => mostrarData(data))
    .catch((error) => console.log(error));
}

// Crear producto - POST
function createProducto(event) {
  event.preventDefault();
  const data = {
    ID_producto: document.getElementById("ID_producto").value,
    Nombre: document.getElementById("Nombre").value,
    Categoria: document.getElementById("Categoria").value,
    Descripcion: document.getElementById("Descripcion").value,
    Precio_unitario: document.getElementById("Precio_unitario").value,
    Stock: document.getElementById("Stock").value,
  };

  fetch(url + "crearProducto", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then(() => verInventario())
    .catch((err) => console.log(err));
}

// Editar producto - PUT
function editarProducto(id) {
  fetch(url + "consultar/" + id)
    .then((res) => res.json())
    .then((producto) => {
      document.getElementById("Id_producto").value = producto.ID_producto;
      document.getElementById("Nombre").value = producto.Nombre;
      document.getElementById("Descripcion").value = producto.Descripcion;
      document.getElementById("Precio").value = producto.Precio_unitario;
      document.getElementById("Stock").value = producto.Stock;
      document.getElementById("Categoria").value = producto.Categoria;
      document.getElementById("editarForm").style.display = "block";
    })
    .catch((err) => console.log(err));
}

function saveEdit() {
  const id = document.getElementById("IDProducto").value;
  const data = {
    Nombre: document.getElementById("Nombre").value,
    Descripcion: document.getElementById("Descripcion").value,
    Precio_unitario: document.getElementById("Precio").value,
    Stock: document.getElementById("Stock").value,
    Categoria: document.getElementById("Categoria").value,
  };

  fetch(url + "editarProducto/" + id, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then(() => {
      document.getElementById("editarForm").style.display = "none";
      verInventario();
    })
    .catch((err) => console.log(err));
}

// Eliminar producto - DELETE
function eliminarProducto(id) {
  fetch(url + "eliminarProducto/" + id, { method: "DELETE" })
    .then(() => verInventario())
    .catch((err) => console.log(err));
}

function mostrarData(data) {
  let body = "";
  data.forEach((producto) => {
    body += `<tr>
      <td>${producto.ID_producto}</td>
      <td>${producto.Nombre}</td>
      <td>${producto.Descripcion}</td>
      <td>${producto.Precio_unitario}</td>
      <td>${producto.Stock}</td>
      <td>${producto.Categoria}</td>
      <td>
        <button class="btn btn-warning" onclick="editarProducto('${producto.ID_producto}')">Editar</button>
        <button class="btn btn-danger" onclick="eliminarProducto('${producto.ID_producto}')">Eliminar</button>
      </td>
    </tr>`;
  });
  document.getElementById("data").innerHTML = body;
}

function cancelEdit() {
  document.getElementById("editarForm").style.display = "none";
}

// Agregar el evento para la creación de productos
document.getElementById("crearProducto").addEventListener("click", createProducto);
document.getElementById("guardarEdicion").addEventListener("click", saveEdit);
