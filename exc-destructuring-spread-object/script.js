// 1. Acesse as propriedades "tamanhoBarba", "idade", e "familia" do objeto "vinking"
//  por meio do destructuring, e logue-as no console.


const vinking = {
    familia: "Lothbrok",
    tamanhoBarba: "enorme",
    idade: 30
};

const {familia, tamanhoBarba, idade} = vinking;


console.log("=== Exercício 1 ===");

console.log(familia);
console.log(tamanhoBarba);
console.log(idade);

//Resolvido por Kauã Felix às 11:05 no dia 26/02/2026


console.log("=== Exercício 2 ===");

// 2. Acesse as propriedades "name" e "age" do objeto "usuário" por meio do Destructuring,
//  renomeie-as para sua tradução em português e logue-as no console      

const usuario ={
    name : 'Jane Doe',
    age : 28
};

const {name : nome, age: idade1} = usuario;

console.log(nome);
console.log(idade1);

//Resolvido por Kauã Felix às 11:11 no dia 26/02/2026


console.log("=== Exercício 3 ===");

// Acesse, utilizando Destructuring todas as propriedades dentro dos objetos
//  "dadosPesoais" e "dadosProfissionais" do objeto "piloto", e logue-as no console.

const piloto = {
    dadosPessoais : {
        nome: 'Ayrton Sena',
        idade : 34
    },
    dadosProfissionais : {
        categoria : 'Fórmula 1',
        conquistas : 'É o melhor de todos os tempos.'
    }
}

const {dadosPessoais: {nome:_nome, idade:_idade}, dadosProfissionais: {categoria, conquistas}} = piloto;

console.log(_nome);
console.log(_idade);
console.log(categoria);
console.log(conquistas);


//Resolvido por Kauã Felix às 11:05 no dia 26/02/2026

console.log("=== Exercício 4 ===");

// 4. Assinale as propriedas "a" e "b" do objeto abaixo as duas variaveis, e distribua as restantes em uma.

const obj = {a:10, b:20, c:30, d:40};

const {a, b, ...restante} = obj;

console.log (restante);

//Resolvido por Kauã Felix às 11:20 no dia 26/02/2026



