let url = "http://localhost:4077/";

// Simula la verificación de inicio de sesión
function isLoggedIn() {
  // Aquí deberías verificar el estado de sesión del usuario (por ejemplo, usando localStorage o cookies)
  return localStorage.getItem("userLoggedIn") === "true"; // Cambia esto según tu lógica
}

// Función para mostrar/ocultar el área del usuario
function toggleUserSection() {
  const userSection = document.getElementById("user-section");
  const register = document.getElementById("register");
  const login = document.getElementById("login");

  console.log(userSection);
  if (isLoggedIn()) {
    userSection.style.display = "block"; // Muestra el avatar y el carrito
    register.style.display = "none"; // Oculta el registro
    login.style.display = "none"; // y el login
    console.log("muestra");
  } else {
    userSection.style.display = "none"; // Oculta el avatar y el carrito
    register.style.display = "block";
    login.style.display = "block";
    console.log("no muestra");
  }
}

// Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", toggleUserSection);
