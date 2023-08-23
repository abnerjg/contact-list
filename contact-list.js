let listaContactos = [
{id: "1", 
Nombre: "Abner", 
Apellido: "Jimenez",
 Telefono: "33924849",
  Ubicaciones: {Ciudad: "Tocoa", Direccion: "Barrio El Centro"}},

{id: "2", 
Nombre: "Jonathan", 
Apellido: "Gomez",
Telefono: "31919225",
Ubicaciones: {Ciudad: "La Ceiba", Direccion: "Barrio Tamarindo"}},  
];

function agregarContacto(nuevoContacto) {
listaContactos.push(nuevoContacto);
}

function borrarContacto(contactoABorrar){
let nuevaLista = listaContactos.filter((contacto) => contacto.id !== contactoABorrar)
listaContactos = nuevaLista 
}

function imprimirContactos (){
console.log(listaContactos)
}

let nuevoContacto = {
    id: "3", 
    Nombre: "Maria", 
    Apellido: "Gomez",
    Telefono: "31919225",
    Ubicaciones: {Ciudad: "La Ceiba", Direccion: "Barrio Tamarindo"},
}

//agregarContacto(nuevoContacto)
//imprimirContactos()
borrarContacto(2)
imprimirContactos()
