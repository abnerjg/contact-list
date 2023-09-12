// Banco de información de clientes
let baseDeDatosClientes = [
    {
        id: "1",
        Nombre: "Abner",
        Apellido: "Jimenez",
        Telefono: "33924849",
        Ubicaciones: { Ciudad: "Tocoa", Direccion: "Barrio El Centro" }
    },
    {
        id: "2",
        Nombre: "Jonathan",
        Apellido: "Gomez",
        Telefono: "31919225",
        Ubicaciones: { Ciudad: "La Ceiba", Direccion: "Barrio Tamarindo" }
    }
];
// Función para buscar un cliente por ID
function buscarClientePorId(id) {
    return baseDeDatosClientes.find(cliente => cliente.id === id);
}
// Función para modificar datos de un cliente
function modificarDatosCliente(id, nuevosDatos) {
    let cliente = buscarClientePorId(id);
    if (cliente) {
        Object.assign(cliente, nuevosDatos);
        return true; // Modificación exitosa
    }
    return false; // Cliente no encontrado
}

// Ejemplo de uso: Buscar y modificar datos de un cliente
let idClienteABuscar = "1";
let nuevosDatosCliente = {
    Nombre: "Abner",
    Apellido: "Smith",
    Telefono: "55555555",
    Ubicaciones: { Ciudad: "San Pedro Sula", Direccion: "Barrio Centro" }
};
let clienteEncontrado = buscarClientePorId(idClienteABuscar);
if (clienteEncontrado) {
    console.log("Cliente encontrado:", clienteEncontrado);

    if (modificarDatosCliente(idClienteABuscar, nuevosDatosCliente)) {
        console.log("Datos modificados exitosamente.");
    } else {
        console.log("No se pudo modificar los datos. Cliente no encontrado.");
    }
} else {
    console.log("Cliente no encontrado.");
}

// Función para actualizar un contacto
function actualizarContacto(id, nuevosDatos) {
    let cliente = buscarClientePorId(id);
    if (cliente) {
        Object.assign(cliente, nuevosDatos);
        return true; // Actualización exitosa
    }
    return false; // Cliente no encontrado
}
// Ejemplo de uso: Actualizar datos de un cliente
let idClienteAActualizar = "1";
let nuevosDatosCliente = {
    Nombre: "Abner",
    Apellido: "Smith",
    Telefono: "55555555",
    Ubicaciones: { Ciudad: "San Pedro Sula", Direccion: "Barrio Centro" }
};
let clienteEncontrado = buscarClientePorId(idClienteAActualizar);
if (clienteEncontrado) {
    console.log("Cliente encontrado:", clienteEncontrado);

    if (actualizarContacto(idClienteAActualizar, nuevosDatosCliente)) {
        console.log("Datos actualizados exitosamente.");
    } else {
        console.log("No se pudo actualizar los datos. Cliente no encontrado.");
    }
} else {
    console.log("Cliente no encontrado.");
}