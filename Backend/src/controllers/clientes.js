const clientes = require("../model/db");

const clienteController = {
  login: (req, res) => {
    const { Correo_electronico, contraseña } = req.body;

    const query =
      "SELECT COUNT(*) sum FROM cliente WHERE Correo_electronico = ? and contraseña = ?";
    clientes.query(query, [Correo_electronico, contraseña], (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.stringify(rows));
        const count = JSON.parse(JSON.stringify(rows))[0]["sum"];

        if (count == 0) {
          res.status(400).json({ Error: "No existe" });
          console.log(query);
        } else {
          res.status(200).json({ Exito: "Existe" });
          console.log(query);
        }
      }
    });
  },

  loginnivel: (req, res) => {
    const { Correo_electronico, contraseña } = req.body;
    //let documento
    //let nivel

    const query =
      "SELECT Correo_electronico FROM cliente WHERE email = ? and contraseña = ?";

    database.query(query, [Correo_electronico, contraseña], (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        if (rows.length > 0) {
          res.status(200).json(rows);
        } else {
          res.status(400).json({ "ERROR DATOS": "El usuario no existe" });
        }
      }
    });
  },

  createCliente: (req, res) => {
    const {
      ID_Cliente,
      Nombre,
      Apellido,
      Correo_electronico,
      Telefono,
      Contraseña,
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

  getClientes: (req, res) => {
    const query = "SELECT * FROM cliente";

    admin.query(query, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json({ Error: "Error en el servidor" });
      } else {
        res.status(200).json(rows);
      }
    });
  },

  getClientesId: (req, res) => {
    const { ID_Cliente } = req.params;

    console.log(ID_Cliente);

    const query = "SELECT * FROM Cliente WHERE ID_Cliente = ?";

    admin.query(query, [ID_Cliente], (err, rows) => {
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
};

exports.default = clienteController;
