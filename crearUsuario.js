import { leerUsuarios } from "./leerUsuarios.js"

const crearUsuario = async (evento)=>{
    evento.preventDefault()
    console.log('crearUsuario')

    try {
        const dato = {
            nombre: document.querySelector('#nombre').value,
            apellidos: document.querySelector('#apellidos').value,
            email: document.querySelector('#email').value
        }
        console.log(dato);

        const uri='http://localhost:6969/api/usuarios'
        const usuarioNuevo = await fetch(uri,{
            method: 'POST',
            body: JSON.stringify(dato),
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded' CUANDO QUEREMOS SUBIR ARCHIVOS,
            }
        })
        limpiarFormulario()
        
    } catch (error) {
        console.log('se ha producido un error al escribir ', error);
    }
    leerUsuarios()
}
function limpiarFormulario(){
    document.querySelector('#nombre').value = '';
    
    document.querySelector('#email').value = '';
    
    document.querySelector('#apellidos').value = '';

    document.querySelector('#usuarioId').value = '';
}
export {crearUsuario}