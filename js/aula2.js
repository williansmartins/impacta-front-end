var nome = "Willians Martins";

//expressao 
//debugger;
console.info("nome: " + nome);
console.error("nome: " + nome);
console.log("nome: " + nome);
document.write("nome: " + nome);
// alert("nome: " + nome);


//tipos de variaveis
var inteiro = 10; console.info(typeof inteiro, inteiro);
var decimal = 10.11; console.info(typeof decimal, decimal);
var caractere = 'w'; console.info(typeof caractere, caractere);
var string = "willians"; console.info(typeof string, string);
var boleano = true; console.info(typeof boleano, boleano);
var nulo = null; console.info(typeof nulo, nulo);
var indefinido; console.info(typeof indefinido, indefinido);

//conversoes
console.info(parseInt("11") + parseFloat("22"));

//caracteres especial
console.info("joanad\"arq");
console.info("aspas\'simples");
console.info("barra\\invertida");
console.info("nova\nlinha");
console.info("aaaaaa'aaaaaa");
console.info('aaaaaa"aaaaaa');

//concatenacao
var curso = "javascript";
document.write("<h1>Meu curso é: " + curso + "</h1>");

//constantes
const navegador = "Chrome";
//navegador = "IE";

//objetos globais
console.info(window);
console.info(this);
// console.info(document);
// window.location = "http://williansmartins.com";

//valores especiais
var infinito = 1.7976931348623157 * Math.pow(10, 308);
console.info(infinito);

console.info("aaaaa\tbbbbbb");
