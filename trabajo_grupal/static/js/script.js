console.log("conectado a js...")

/* Ejercicio 1: Función con validación de datos
Objetivo: Validar entradas antes de procesarlas.

Instrucciones:
Crea un input donde el usuario escriba un número.
Crea una función verificarNumero.
La función debe:
Capturar el valor del input
Verificar si está vacío
Si está vacío → mostrar: "Debes ingresar un número"
Si tiene valor → mostrar: "Número ingresado correctamente" */


function verificarNumero() {
    const container = document.getElementById("container1");
    const result = document.getElementById("result1");
    const input = document.getElementById("input1");
    let numero = parseInt(input.value);
    if(isNaN(numero) || numero == "") {
        result.textContent = "Debes ingresar un número valido";
    } else {
        result.textContent = "Número ingresado correctamente";
    }
    container.classList.remove("d-none")
}

/* Ejercicio 2: Función que usa condicional múltiple
Objetivo: Aplicar lógica con múltiples condiciones.

Instrucciones:

Crea un input para ingresar una nota (1.0 a 7.0).
Crea una función evaluarNota.
La función debe:
Convertir el valor a número
Mostrar en pantalla:
"Reprobado" si es menor a 4.0
"Aprobado" si está entre 4.0 y 5.9
"Sobresaliente" si es 6.0 o más */

function evaluarNota() {
    let notas = "";
    for (let i = 0; i <= notas.length; i++) {
        if (6.0 >= notas[i]) {
        }
    }
    if (notas == "") {
        return "Reprobado"
    } else {
        return `Sobresaliente`
    }
}

function multiplesCondiciones() {
    let input = document.getElementById("input2")
    const container = document.getElementById("container2");
    const result = document.getElementById("result2");
    let numero = parseInt(input.value);

    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}

/* Ejercicio 3: Uso de múltiples funciones (flujo completo)
Objetivo: Integrar varias funciones con roles distintos.

Instrucciones:

Crea dos funciones ayudantes:
function calcularCuadrado(numero) {
    return numero * numero;
}

function calcularTriple(numero) {
    return numero * 3;
}
Crea una función principal procesarNumero que:
Capture un número desde un input
Llame a ambas funciones
Muestre en pantalla:
Cuadrado: X
Triple: Y
Sugerencia didáctica (para tu clase)

Puedes usar estos ejercicios como: */

function calcularCuadrado(numero) {
    return numero * numero;
}

function calcularTriple(numero) {
    return numero * 3;
}

function procesarNumero() {
    let numero = document.getElementById("input3")
    const container = document.getElementById("container3");
    const result = document.getElementById("result3");

    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}

/* Ejercicio 4: Función que transforma texto
Objetivo: Manipular strings desde un input.

Instrucciones:

Crea un input para ingresar un texto.
Crea una función transformarTexto.
La función debe:
Capturar el texto
Convertirlo a mayúsculas (toUpperCase())
Mostrar el resultado en un <div>

Ejemplo esperado:

Entrada: hola mundo
Salida: HOLA MUNDO */

function strings() {
    let input = document.getElementById("input4");
    const container = document.getElementById("container4");
    const result = document.getElementById("result4");
    let resultado = input.value.toUpperCase();

    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}
