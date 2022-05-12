import { leerUsuarios } from "./leerUsuarios.js";

const borrarUsuarioId = async (id)=>{
    const uri = 'http://localhost:6969/api/usuarios/'+id
    try {
        const usuario = await fetch(uri, {
            method: 'DELETE'
        })
        console.log('Usuario '+id+ ' borrado');
    } catch (error) {
        console.log('Error al borrar elemento '+id+' '+error);
    }
    leerUsuarios()
}
export {borrarUsuarioId}