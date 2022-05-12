const leerUsuarios = async ()=>{
    console.log('leerUsuarios');
    try {
        const uri = 'http://localhost:6969/api/usuarios'
        const peticionUsuarios = await fetch(uri, {
            method: 'GET'
        })
        const datos = await peticionUsuarios.json() 
        console.log(datos);
        var html = `
        <table class="table">
            <tr>
                <th>Nombre</th><th>Apellidos</th><th></th><th></th>
            </tr>
        `
        datos.forEach(element => {
            html+=`
            <tr>
                <td>${element.nombre}</td><td>${element.apellidos}</td><td><button id="borrar" data-id="${element._id}" class="borrar btn btn-danger ">Borrar</button></td><td><button id="editar" data-id="${element._id}" class="btn btn-primary me-2 editar">Editar</button></td>
            </tr>
            `
        });
        html+=`
        </table>
        `


        //inyectamos datos en el html
        document.querySelector('.listaUsuarios').innerHTML = html

    }catch (error) {
        console.log('Error al leer en la base de datos ' + error);   
    }
}

export {leerUsuarios}