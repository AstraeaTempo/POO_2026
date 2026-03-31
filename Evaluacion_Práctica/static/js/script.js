/* Desafíos a Desarrollar */
console.log("Conectado a js...");
/* 1. Módulo de Tesorería: Pago de Permisos (Cálculos y Retorno)
El vecino ingresa el monto de su permiso de circulación para saber 
cuánto pagará tras el descuento municipal.
Lógica: Si el monto es mayor a $70.000, el descuento es del 15%. Si es menor, es del 5%.
Regla: La Función Principal debe mostrar el total a pagar con un signo de peso ($). */

function calculo(numero) {
    if (numero >= 70000) {
        return `$${numero} tiene un 15% de descuento`
    } else if (numero <= 69999) {
        return `$${numero} tiene un 5% de descuento`
    } else {
        alert("Ingrese un numero valido")
    }
};

function pagoPermisos() {
    const result = document.getElementById("result1");
    const container = document.getElementById("container1");
    let input = document.getElementById("input1");
    let numero = parseFloat(input.value);
    let pago = calculo(numero);
    input.value = "";
    result.textContent = pago;
    container.classList.remove("d-none")
};


/* 2. Módulo de Salud: Fila de Vacunación (Arreglos y Prioridad)
Gestión de nombres en la fila de espera del consultorio local.
Lógica: * Botón Normal: Agrega el nombre al final de la lista (push).
Botón Urgencia: Agrega el nombre al inicio de la lista (unshift).
Regla: El resultado debe mostrarse como una lista ordenada en el HTML.<ol> */

let pacientes = ["Santiago", "Carla", "Josefina", "Mario"];
function agregarVacuna(nombre) {
    pacientes.unshift(nombre);
    return pacientes.join(", ");
};

function filaVacunacion() {
    const container = document.getElementById("container2");
    const result = document.getElementById("result2");
    let input = document.getElementById("input2");
    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarVacuna(nombre);
        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("El nombre no puede estar vacio.")
    };
};

/* 3. Módulo de Subsidios: Buscador de Beneficiarios (Ciclos e If)
Verificar si un RUT o nombre está en el listado de entrega de beneficios.
Lógica: Tener un arreglo con al menos 6 nombres. Usar un ciclo for para 
buscar si el dato ingresado existe en la lista.
Regla: La función debe devolver "Beneficiario Verificado" o "No registrado". */

//nose profe 😥😔

function buscadorbeneficiador() {
    let rut = ["12.395.351-1", "25.895.364-2", "98.516.204-3", "11.007.387-4", "32.654.099-5", "53.728.435-6"];
    let personas = ["Maria", "Sofia", "Alfredo", "Luigi", "william", "Clara"];
    let resultado = [];
    const container = document.getElementById('container3');
    const result = document.getElementById('result3');
    const input = document.getElementById("input3");
    for (let i = 0; i < personas.length; i++) {
        if (i % 2 === 0) {
            resultado.push(`${personas[i]} [VIP]`)
        } else {
            resultado.push(`${personas[i]} `)
        }
    }
    result6.textContent = resultado.join(" - ");
    container.classList.remove('d-none');
}