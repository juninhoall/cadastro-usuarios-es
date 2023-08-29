const listaDeUsuarios = [{id: 1, nome: "Joe."}];

function criarUsuario (user) {
    listaDeUsuarios.push(user)
    return listaDeUsuarios;
}

function buscarUsuario(id){
    return listaDeUsuarios.find(function(usario) {
        return usario.id == id
    })
}

function buscarUsuarios() {
    console.log(listaDeUsuarios)
    return listaDeUsuarios;
}

module.exports  = {
    buscarUsuarios, 
    criarUsuario,
    buscarUsuario
}