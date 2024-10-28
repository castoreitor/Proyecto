const database = require("../model/database");

const productoController = {
  getProducto: (req, res) => {
    const query = "SELECT * FROM Producto";

    database.query(query, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json({ "Error": "Error en el servidor" });
      } else {
        res.status(200).json(rows);
      }
    });
  },

  getProductoI: (req, res) => {
    const { ID_producto } = req.params;

    console.log(codigo);

    const query = "SELECT * FROM Producto WHERE ID_producto = ?";

    database.query(query, [ID_producto], (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json({ "Error": "Error en el servidor" });
      } else {
        console.log(rows);
        if (rows.length > 0) {
          res.status(200).json(rows);
        } else {
          res.status(400).json({ "No encontrado": "El producto no existe" });
        }
      }
    });
  },

  createProducto: (req, res) => {
    const {
      ID_producto,
      Nombre,
      Categoria,
      Descripcion,
      Precio_unitario,
      Stock,
    } = req.body;

    const query = "INSERT INTO Producto VALUES (?,?,?,?,?,?)";

    database.query(
      query,
      [ID_producto, Nombre, Categoria, Descripcion, Precio_unitario, Stock],
      (err, rows) => {
        //console.log(cod, name, cant, val);
        if (err) {
          console.log(err);
          res.status(500).json({ "Error": "Error en el servidor" });
        } else {
          res.status(201).json({ "Exito": "Producto Creado" });
        }
      }
    );
  },

  updateProducto: (req, res) => {
    const {
      ID_producto,
      Nombre,
      Categoria,
      Descripcion,
      Precio_unitario,
      Stock,
    } = req.body;

    const query =
      "UPDATE Producto SET ID_producto = ?, Nombre = ?, Categoria = ?, Descripcion = ?, Precio_unitario = ?, Stock = ? WHERE id = ?";

    database.query(
      query,
      [ID_producto, Nombre, Categoria, Descripcion, Precio_unitario, Stock],
      (err, rows) => {
        if (err) {
          console.log(err);
          res.status(500).json({ "Error": "Error en el servidor" });
        } else {
          res.status(201).json({ "Exito": "Producto Actualizado" });
        }
      }
    );
  },

  deleteProducto: (req, res) => {
    const { ID_producto } = req.body;

    const query = "DELETE FROM Producto where ID_producto = ?";

    database.query(query, [ID_producto], (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json({ "Error": "Error en el servidor" });
      } else {
        res.status(201).json({ "Exito": "Producto Eliminado" });
      }
    });
  },
};

exports.default = productoController;
