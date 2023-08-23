let listaContactos = ["FelipeCalvache", "CarlosPerez", "AbnerJimenez"];

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
