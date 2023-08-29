const express = require("express")
const { criarUsuario, buscarUsuarios, buscarUsuario } = require("./service/userService")

const porta = 3000;

const app = express()

app.use(express.json())


/**
 * @Todo Listar Usuário
 */
app.get("/usuarios", function(req, response) {
    response.send(buscarUsuarios())
})

app.get("/usuario/:id", function(requisicao, resposta){    
    resposta.send(buscarUsuario(requisicao.params.id))
})

/**
 * @Todo Criar usuário
 */
app.post("/usuario", function(req, response) {
    criarUsuario(req.body)
    response.status(201).send(req.body)
})

app.listen(porta, function() {
    console.log("Testando servidor na porta 3000")
})

