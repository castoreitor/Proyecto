let url = 'http://localhost:4077/';

///Primera consulta de datos
fetch(url + 'consultar', {
  method: 'GET'
})
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error))

//Concatena los datos a la tabla


//Envia datos creados
const create = () => {
  const data = {
    "Nombre": document.getElementById('name').value,
    "Apellido": document.getElementById('lastName').value,
    "Telefono": document.getElementById('phone').value,
    "Correo_electronico": document.getElementById('email').value,
    "Contraseña": document.getElementById('password').value,
  }

  console.log(data)

  fetch(url + 'crear', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  },
  ).then((res) => {
    if (res.status == 500) {
      alert('error interno - Usuario no creado')
    } else {
      alert('Usuario Creado')

      fetch(url + 'consultar', {
        method: 'GET'
      })
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))

    }

  }).catch((err) => {
    console.log(err);
  })

}

//Corre al dar click crear
document.getElementById("crear")
  .addEventListener("click", function (event) {
    event.preventDefault();
    create()
  });