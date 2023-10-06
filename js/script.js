// Variables Globales
const contenedorOperacionesBasicas = document.querySelector('.contenedorOperacionesBasicas');
const contenedorOperacionesComplejas = document.querySelector('.contenedorOperacionesComplejas');
const contenedorRedondeos = document.querySelector('.contenedorRedondeos');
const resultado = document.getElementById('spanResultados');
let operador;
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');


// Función que realiza las operaciones Básicas
const operacionesBasicas = (numero1, numero2, operador) => {
  let respuesta;
  switch (operador) {
    case '+':
      respuesta = numero1 + numero2;
      break;
    case '-':
      respuesta = numero1 - numero2;
      break;
    case 'X':
      respuesta = numero1 * numero2;
      break;
    case '/':
      respuesta = numero1 / numero2;
      break;
  }
  return respuesta;
}

// Función que realiza las operaciones Avanzadas
const operacionesComplejas = (numero1, numero2, operador) => {
  let respuesta;
  switch (operador) {
    case 'Potencia':
      respuesta = Math.pow(numero1,numero2);
      break;
    case 'Raiz':
      respuesta = Math.sqrt(numero2);
      break;
    case 'Absoluto':
      respuesta = Math.abs(numero2);
      break;
    case 'Random':
      respuesta = Math.round(Math.random()*(numero2-numero1)+numero1);
      break;
  }
  return respuesta;
}
// Función que realiza los Redondeos
const redondeos = (valor, operador) => {
  let respuesta;
  switch (operador) {
    case 'Rnd':
      respuesta = Math.round(valor);
      break;
    case 'Dwn':
      respuesta = Math.floor(valor);
      break;
    case 'Up':
      respuesta = Math.ceil(valor);
      break;
    case 'C':
      respuesta = 0;
      numero1.value='';
      numero2.value='';
      break;
  }
  return respuesta;
}

// Programa Principal

// Operaciones Basicas
contenedorOperacionesBasicas.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    valor1 = parseFloat(numero1.value);
    valor2 = parseFloat(numero2.value);
    operador = event.target.textContent;
  }
  resultado.textContent = operacionesBasicas(valor1, valor2, operador);
});

// Operaciones Avanzadas
contenedorOperacionesComplejas.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    valor1 = parseFloat(numero1.value);
    valor2 = parseFloat(numero2.value);
    operador = event.target.textContent;
  }
  resultado.textContent = operacionesComplejas(valor1, valor2, operador);
});

// Redondeos
contenedorRedondeos.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    valor=parseFloat(resultado.textContent);
    operador = event.target.textContent;
    valorFinal =redondeos(valor, operador); ;
  }
  resultado.textContent = valorFinal;
});
