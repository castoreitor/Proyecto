const clienteController = require("../controllers/clientes").default;
const express = require("express");

class routeCliente {
  constructor() {
    this.ruta = express.Router();
    this.config();
  }

  config() {
    this.ruta.post("/login", clienteController.login);
    this.ruta.post("/crear", clienteController.createCliente);
    his.ruta.post("/login", clienteController.createCliente);
  }
}

exports.default = routeCliente;
