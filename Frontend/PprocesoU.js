
const busqueda = () => {
  const ID_producto = document.getElementById("ID_producto").value;

  const data = {
    "ID_producto": ID_producto,
  };

  fetch(url + "consultar2/" + ID_producto, {
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
      <td>${data[i].ID_producto}</td>
      <td>${data[i].Nombre}</td>
      <td>${data[i].Categoria}</td>
      <td>${data[i].Descripcion}</td>
      <td>${data[i].Precio_unitario}</td>
      <td>${data[i].Stock}</td>
      
        <button onclick="ponerData('${data[i].ID_producto}', '${data[i].Nombre}', '${data[i].Categoria}', '${data[i].Descripcion}' , '${data[i].Precio_unitario}','${data[i].Stock}')">Editar?</button>
      </td>
     </tr>`;
  }
  document.getElementById("data").innerHTML = body;
};

//Coloca los datos en los inputs
const ponerData = (cod, name, cant, val) => {
  const inputId = document.getElementById("cod");
  const inputName = document.getElementById("name");
  const inputCant = document.getElementById("cant");
  const inputVal = document.getElementById("val");

  inputId.value = cod;
  inputName.value = name;
  inputCant.value = cant;
  inputVal.value = val;
};

//Envia los datos editados
const editar = () => {
  const inputId = document.getElementById("cod").value;
  const inputName = document.getElementById("name").value;
  const inputCant = document.getElementById("cant").value;
  const inputVal = document.getElementById("val").value;

  const data = {
    "codigo": inputId,
    "nombre": inputName,
    "cantidad": inputCant,
    "valor": inputVal,
  };

  fetch(url + "editar", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status == 500) {
      alert("Error editando");
    } else {
      alert("Editado con exito");
      formulario.addEventListener("form2", function () {
        formulario.reset();
      });

      /*    fetch(url + 'consultar', {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
*/
    }
  });
};

const mostrarData2 = (data) => {
  let body = "";
  body += `<tr>
      <td>${data[0].id}</td>
      <td>${data[0].nombrep}</td>
      <td>${data[0].cantidad}</td>
      <td>${data[0].valor}</td>
     </tr>`;

  document.getElementById("data").innerHTML = body;
};

//Corre al dar click consultar
document
  .getElementById("modificar1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    busqueda();
  });

//Corre al dar click editar
document
  .getElementById("modificar2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    editar();
  });
