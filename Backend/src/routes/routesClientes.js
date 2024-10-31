const clienteController = require("../controllers/clientes").default;
const productoController = require("../controllers/producto").default;
const express = require("express");

class routeCliente {
  constructor() {
    this.ruta = express.Router();
    this.config();
  }

  config() {
    this.ruta.post("/login", clienteController.login);
    this.ruta.post("/crear", clienteController.createCliente);
    this.ruta.get("/consultaResultado", productoController.getProducto);
    this.ruta.get("/consultar2/:ID_producto", productoController.getProductoI);
    this.ruta.post("/crearProducto", productoController.createProducto);
    this.ruta.delete("/borrar", productoController.deleteProducto);
  }
}

exports.default = routeCliente;
