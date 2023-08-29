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

function removerUsuario(id) {
    const indice =  listaDeUsuarios.findIndex(function(usuario){
        return usuario.id == id
    })
    if(indice >= 0){
        listaDeUsuarios.splice(indice, 1);
    }
    return listaDeUsuarios
}

function buscarUsuarios() {
    console.log(listaDeUsuarios)
    return listaDeUsuarios;
}

module.exports  = {
    buscarUsuarios, 
    criarUsuario,
    buscarUsuario,
    removerUsuario
}