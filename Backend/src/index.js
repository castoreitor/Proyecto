const express = require('express')
const cors = require('cors')
const connection = require('./model/db')
const routeCliente = require('./routes/routesClientes').default

class Server {

    constructor() {

        this.app = express()
        this.app.set('port', 4077)
        this.app.use(express.json())
        this.app.use(cors())

        this.app.get('/', (req, res) => {
            res.status(200).json({ correcto: "Conectado" })
        })
        this.app.use(new routeCliente().ruta)


        this.app.listen(4077, () => {
            console.log("Corriendo en puerto " + 4077)
        })

        this.connectionBd

    }

    async connectionBd() {
        await connection
    }

}

const run = new Server()
