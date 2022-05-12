import { leerUsuarios } from "./leerUsuarios.js"
import { leerUsuarioId} from "./leerUsuarioId.js"
import { borrarUsuarioId } from "./borrarUsuario.js"
import { crearUsuario } from "./crearUsuario.js"
import { modificarUsuarioId, editarUsuarioId } from "./modificarUsuarioId.js"


const app = ()=>{
    leerUsuarios()

    document.querySelector('#formulario').addEventListener('submit', crearUsuario );

    document.querySelector('#formularioModificar').addEventListener('submit', (e)=>{
        e.preventDefault()
        const id = document.querySelector('#usuarioId').value;
        editarUsuarioId(id)
    })

    document.querySelector('.card').addEventListener('click', (e)=>{
        const usuarioID = e.target.dataset.id
        console.log(usuarioID);
        if(e.target.classList.contains('borrar')){
            borrarUsuarioId(usuarioID)
        }
        if(e.target.classList.contains('editar')){
            modificarUsuarioId(usuarioID)
        }
    } );
}
export {app}
