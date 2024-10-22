let url = "http://localhost:4077/";

function logout() {
    localStorage.removeItem('userLoggedIn');
    location.href = 'login.html'; // Redirige al usuario a la página de inicio de sesión
  }

  document.getElementById("salir").addEventListener("click", function (event) {
    event.preventDefault();
    logout();
  });