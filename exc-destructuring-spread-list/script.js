// 1. Assinale uma variavel para cada valor na lista "numeros"
// utilizando Destructuring, e logue-as no console

const numeros = [1, 2, 3, 4, 5];

const [primeiro, segundo, terceiro, quarto, quinto] = numeros;

console.log("=== Exercício 1 ===");
console.log(primeiro,segundo,terceiro,quarto,quinto);

//Resolvido por Kauã Felix às 00:41 no dia 26/02/2026


// 2. Inverta os valores das variaveis "a" e "b". Transforme o valor da variável  "a" no valor da varável "b"
// logue-as no console.

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("=== Exercício 2 ===")

console.log(`a: ${a}, b: ${b}`);

//Resolvido por Kauã Felix às 00:47 no dia 26/02/2026


// 3. Crie uma nova lista baseando-se na "melhoreSeriesDoMundo" adicionando dois novos valores
//  a ela e utilizando o Spread Operator, e logue-as no console

const melhoreSeriesDoMundo = ['GOT', 'Breaking Bad', 'Vinkings'];
const adicionandoSeries = [...melhoreSeriesDoMundo, 'The Walking Dead', 'House Of The Dragons'];

console.log("=== Exercício 3 ===");

console.log(adicionandoSeries);

//Resolvido por Kauã Felix às 00:53 no dia 26/02/2026


// Assinale os dois primeiros valores nas listas sobremesas a duas varáveis e
//  destribua o restante em apenas uma, utilizando Spread Operator, e logue-as no console.

const sobremesas = ['Sorvete', 'Petit Gateau', 'Açaí', 'Pudim', 'Mousse de Maracujá']

const [sorvete, petitGateau, ...restante] = sobremesas;

console.log("=== Exercício 4 ===")

console.log(restante);


//Resolvido por Kauã Felix às 01:01 no dia 26/02/2026
