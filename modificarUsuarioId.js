import { leerUsuarioId } from "./leerUsuarioId.js";
import { leerUsuarios } from "./leerUsuarios.js";

const modificarUsuarioId = async (id)=>{
    console.log('modificarUsuarioId' + id);
    const usuario = await leerUsuarioId(id)
   
    document.querySelector('.modificar #nombre').value = usuario.data.nombre;
    
    document.querySelector('.modificar #email').value = usuario.data.email;
    
    document.querySelector('.modificar #apellidos').value = usuario.data.apellidos;

    document.querySelector('.modificar #usuarioId').value = usuario.data._id;

    
}




const editarUsuarioId = async (id)=>{
   
    const datos = {
        
        nombre: document.querySelector('#formularioModificar #nombre').value,
        apellidos: document.querySelector('#formularioModificar #apellidos').value,
        email: document.querySelector('#formularioModificar #email').value
    }
    try {
        const uri = 'http://localhost:6969/api/usuarios/'+id
        const usuario = await fetch(uri, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded' CUANDO QUEREMOS SUBIR ARCHIVOS,
            }
        })
        leerUsuarios()
        limpiarFormulario()
    } catch (error) {
        console.log('error al modificar el usuario '+ id + ' ' + error);
    }
        
    
};

function limpiarFormulario(){
    document.querySelector('.modificar #nombre').value = '';
    
    document.querySelector('.modificar #email').value = '';
    
    document.querySelector('.modificar #apellidos').value = '';

    document.querySelector('.modificar #usuarioId').value = '';
}
export {modificarUsuarioId, editarUsuarioId}