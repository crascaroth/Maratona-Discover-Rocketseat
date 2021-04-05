const express = require("express")
const server = express ()
const routes = require("./routes")

server.set('view engine', 'ejs')

//habilitar arquivos static
server.use(express.static("Public"))

// Routes
server.use(routes)

server.listen(3006, () => console.log("Rodando"))