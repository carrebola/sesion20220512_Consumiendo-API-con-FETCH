const leerUsuarioId = async (id)=>{
    console.log('leerUsuarioId');
    try {
        const uri = 'http://localhost:6969/api/usuarios/'+id
        const peticionUsuario = await fetch(uri, {
            method: 'GET'
        })
        const usuario = await peticionUsuario.json() 
        return usuario
 
    }catch (error) {
        console.log('Error al leer en la base de datos ' + error);   
    }
}
export {leerUsuarioId}