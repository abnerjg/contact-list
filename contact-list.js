    // Simulación de una base de datos de clientes
let baseDeDatosClientes = [
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

// Función para buscar un cliente por ID
function buscarClientePorId(id) {
    return baseDeDatosClientes.find(cliente => cliente.id === id);
}

// Función para modificar el saldo de un cliente
function modificarSaldoCliente(id, nuevoSaldo) {
    let cliente = buscarClientePorId(id);
    if (cliente) {
        cliente.saldo = nuevoSaldo;
        return true; // Modificación exitosa
    }

    return false; // Cliente no encontrado
}

// Ejemplo de uso: Buscar y modificar saldo de un cliente
let idClienteABuscar = 2;
let nuevoSaldoCliente = 1800;

let clienteEncontrado = buscarClientePorId(idClienteABuscar);
if (clienteEncontrado) {
    console.log("Cliente encontrado:", clienteEncontrado);
    
    if (modificarSaldoCliente(idClienteABuscar, nuevoSaldoCliente)) {
        console.log("Saldo modificado exitosamente.");
    } else {
        console.log("No se pudo modificar el saldo. Cliente no encontrado.");
    }
} else {
    console.log("Cliente no encontrado.");
}
