const clientes = require("../model/db");


const clienteController = {
  getClientes: (req, res) => {
    const query = "SELECT * FROM cliente";

    clientes.query(query, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json({ Error: "Error en el servidor" });
      } else {
        res.status(200).json(rows);
      }
    });
  },
/*
  getClientesId: (req, res) => {
    const { ID_Cliente } = req.params;

    console.log(ID_Cliente);

    const query = "SELECT * FROM Cliente WHERE ID_Cliente = ?";

    clientes.query(query, [ID_Cliente], (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json({ Error: "Error en el servidor" });
      } else {
        console.log(rows);
        if (rows.length > 0) {
          res.status(200).json(rows);
        } else {
          res.status(400).json({ "No encontrado": "El usuario no existe" });
        }
      }
    });
  }, 

  login: (req, res) => {
    const { cliente, password } = req.body;

    const query =
      "SELECT COUNT(*) sum FROM Cliente WHERE Correo_electronico = ? and contraseña = ?";

    clientes.query(query, [cliente, password], (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.stringify(rows));

        const count = JSON.parse(JSON.stringify(rows))[0]["sum"];

        if (count == 0) {
          res.status(400).json({ Error: "No existe" });
        } else {
          res.status(200).json({ Exito: "Existe" });
        }
      }
    });
  },
  */

  createCliente: (req, res) => {
    const {
      ID_Cliente,
      Nombre,
      Apellido,
      Correo_electronico,
      Telefono,
      Contraseña
    } = req.body;

    const query = "INSERT INTO cliente VALUES (?,?,?,?,?,?)";

    clientes.query(
      query,
      [ID_Cliente, Nombre, Apellido, Correo_electronico, Telefono, Contraseña],
      (err, rows) => {
        if (err) {
          console.log(err);
          res.status(500).json({ Error: "Error en el servidor" });
        } else {
          res.status(201).json({ Exito: "Usuario Creado" });
        }
      }
    );
  },
};

exports.default = clienteController;
