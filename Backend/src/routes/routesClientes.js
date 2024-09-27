
const clienteController = require("../controllers/clientes").default;
const express = require("express");

class routeCliente {
  constructor() {
    this.ruta = express.Router();
    this.config();
  }

  config() {
    this.ruta.get("/login", clienteController.getClientes);
  }
}

exports.default = routeCliente;
