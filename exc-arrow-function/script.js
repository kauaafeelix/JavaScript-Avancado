// 1. Converta as funções abaixo para Arrow Functions.

// function somar(a, b) {
//   return a + b;
// };

const somar = (a, b) => a + b

console.log(somar(3, 3))

// function verificarNegativo(numero) {
//   return numero < 0;
// };

const verificarNegativo = numero => numero < 0
console.log(verificarNegativo(-10))

// function criarUsuario(nome, idade) {
//   return {
//     nome,
//     idade,
//   }
// };

const criarUsuario = (nome, idade) => ({nome, idade})


// setTimeout(function() {
//   console.log('Hello world!')
// }, 1000)

setTimeout(() => {
  console.log('Hello world!')
}, 1000)

