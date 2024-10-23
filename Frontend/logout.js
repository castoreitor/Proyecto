let url = "http://localhost:4077/";

function logout() {
  localStorage.removeItem("userLoggedIn");
  location.href = "shop.html"; // Redirige al usuario a la página de inicio
}

document.getElementById("salir").addEventListener("click", function (event) {
  event.preventDefault();
  logout();
});
