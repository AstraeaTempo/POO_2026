// Inicio
console.log("Conectado a js...");

/* Bloque 1: Calentamiento (Lógica Básica)
1. El Portero Digital
Crea una variable edad. Si la edad es 18 o más, muestra por consola: 
"Acceso permitido a la App". Si es menor, muestra: "Acceso denegado: necesitas ser mayor de edad".
2. Validador de Nombres
Declara una variable nombre.
Si el nombre no está vacío, crea un arreglo llamado 
usuarios y agrega el nombre usando .push().
Si está vacío, muestra: "Error: El nombre no puede estar en blanco".
 */

function validarEdad() {
    let edad = parseInt(prompt("Ingresa Edad "));

    if (edad < 0 && edad >= 130) {
        alert("Ingresa una edad valida po")
    }
    else if (edad >= 18) {
        alert("Acceso permitido a la app")
    }
    else if (edad <= 17 && edad > 0) {
        alert("Necesitas ser mayor de edad")
    }
    else {
        alert("Ingresa un valor valido")
    }
}

/* Bloque 2: Gestión de Inventarios y Listas
3. El Filtro de Duplicados Tienes esta lista: 
let productos = ["celular", "teclado", "mouse"];
Declara una variable nuevoProducto.
Si el producto no está en la lista (usa .includes()), 
agrégalo al final y muestra la lista completa.
Si ya existe, muestra: "El producto ya está en el inventario".
4. Control de Stock Máximo
Imagina que una bodega solo tiene espacio para 5 cajas.
let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
Si el tamaño de la bodega (.length) es mayor a 5, elimina la última caja 
con .pop() y muestra: "Bodega llena, eliminando último ingreso".
Si es 5 o menos, muestra: "Espacio disponible". */

function filaEspera() {
    let nombre = prompt("Ingrese su nombre");
    let usuarios = [];
    if (nombre !== "") {
        usuarios.push(nombre);
        alert(`Hola ${usuarios}`);
    } else {
        alert("Error: El nombre no puede estar en blanco");
    }
}

/* Bloque 3: Prioridades y Turnos (Inicio de la Lista)
5. Limpieza de Datos
A veces recibimos datos basura. 
et colaEspera = ["error_404", "Juan", "Sofía"];
Si el primer elemento (índice 0) es igual a "error_404", 
elimínalo usando .shift() y muestra la cola limpia.
Si no, muestra: "La lista de espera está correcta".
6. Acceso VIP
Tienes una lista de usuarios comunes: let foro = ["User1", "User2"];
Declara la variable rol.
Si el rol es "Admin", agrega el nombre al inicio de la lista 
con .unshift() para que tenga prioridad.
Si no es Admin, agrégalo al final con .push(). */

function () {


}