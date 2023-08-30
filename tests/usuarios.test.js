
const request = require("supertest")
const app = require("../index")
const { criarUsuario, buscarUsuarios, buscarUsuario, removerUsuario } = require("../service/userService")

jest.mock("../service/userService")

describe("CRUD", function() {
    it("Criar um usuários", async function () {
        const usuario = {id: 11, name: "Rodrigo"}
        criarUsuario.mockReturnValue(usuario)
        const resposta = await request(app).post("/usuario").send(usuario)
        expect(resposta.statusCode).toEqual(200)
        //expect(resposta.body).toEqual(usuario)
    })
})