let listaContactos = ["FelipeCalvache", "CarlosPerez", "AbnerJimenez"];

function agregarContacto(nuevoContacto) {
listaContactos.push(nuevoContacto);
return listaContactos 
}

function borrarContacto(contactoABorrar){
let nuevaLista = listaContactos.filter((contacto) => contacto !== contactoABorrar)
listaContactos = nuevaLista 
}

borrarContacto("AbnerJimenez")
agregarContacto("Alejandra")
console.log(agregarContacto("Jonathan"));

