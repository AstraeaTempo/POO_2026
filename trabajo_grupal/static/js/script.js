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


function verificar(numero) {
    if (isNaN(numero)) {
        return "Debes ingresar un número valido";
    } else {
        return "Número ingresado correctamente";
    }
}

function verificarNumero() {
    const container = document.getElementById("container1");
    const result = document.getElementById("result1");
    const input = document.getElementById("input1");
    let numero = parseInt(input.value);
    let validacion = verificar(numero)
    result.textContent = validacion;
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

function nota(numero) {
    if (numero >= 6.0 && numero <= 7.0) {
        return "Sobresaliente"
    } else if (numero <= 5.0 && numero >= 4.0) {
        return "Aprobado"
    } else if (numero >= 1.0 && numero <= 3.9) {
        return "Reprobado"
    } else if (numero < 1.0 || numero > 7.0) {
        return "Coloque una nota válida"
    } else {
        return "Ingrese un valor válido"
    }
}

function evaluarNota () {
    const result = document.getElementById("result2");
    const container = document.getElementById("container2");
    let input = document.getElementById("input2");
    let numero = parseFloat(input.value);
    let notas = nota(numero);

    input.value = "";
    result.textContent = notas;
    container.classList.remove("d-none")
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
    verificarNumero(numero)
    return numero * numero;
};

function calcularTriple(numero) {
    return numero * 3;
};

fu

function procesarNumero() {
    const container = document.getElementById("container3");
    const result = document.getElementById("result3");
    let input = document.getElementById("input3");
    let resultInput = parseInt(input.value);
    let resultadoCuadrado = calcularCuadrado(resultInput);
    let resultadoTriple = calcularTriple(resultInput);
    input.value = "";
    result.textContent = `Cuadrado: ${resultadoCuadrado}, Triple: ${resultadoTriple}`;
    container.classList.remove("d-none");
};

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
