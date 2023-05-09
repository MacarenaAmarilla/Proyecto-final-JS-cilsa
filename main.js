function agregarTarea() {
  let titulo = document.getElementById('titulo').value;
  let descripcion = document.getElementById('descripcion').value;

  if (titulo.length < 1 || descripcion.length < 1){
    alert('USTED NO INGRESO DATOS')
  }
  else{
    let publi = {
      titulo,
      descripcion
    };
    
    let entrada = document.createTextNode(publi.titulo +": " + publi.descripcion);
    let elemento = document.createElement("div");
    elemento.appendChild(entrada);

    var publicaciones = document.getElementById("publicaciones");
    publicaciones.innerHTML += `<div class="card mb-3">
                                  <div class="card-body">
                                    <p>${publi.titulo} - ${publi.descripcion}
                                      <a href="#" onclick="alert('La tarea fue enviada')" class="btn btn-info ml-5">ESTADO</a>
                                      <a href="#" onclick="eliminarTarea(this)" class="btn btn-danger ml-5">ELIMINAR</a>
                                    </p>
                                  </div>
                                </div>`;

    document.getElementById('formulario').reset();
  }
}

function eliminarTarea(botonEliminar) {
  botonEliminar.parentNode.parentNode.parentNode.remove();
}