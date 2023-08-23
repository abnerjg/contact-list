let listaContactos = [
{id: "1", 
Nombre: "Abner", 
Apellido: "Jimenez",
 Telefono: "33924849",
  Ubicaciones: {Ciudad: "Tocoa", Direccion: "Barrio El Centro"}}
]

function agregarContacto(nuevoContacto) {
listaContactos.push(nuevoContacto);
return listaContactos 
}

function borrarContacto(contactoABorrar){
let nuevaLista = listaContactos.filter((contacto) => contacto !== contactoABorrar)
listaContactos = nuevaLista 
}

function imprimirContactos (){
console.log(listaContactos)
}

agregarContacto("Keren")
imprimirContactos()
borrarContacto("FelipeCalvache")
imprimirContactos()
