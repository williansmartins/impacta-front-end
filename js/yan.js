var nome = "Yan Gomes"

//expressao
//debugger;
console.info("nome : " + nome);
console.error("nome : " + nome);
console.log("nome : " + nome);
document.write("nome : " + nome);
//alert("nome : " + nome);

//tipos de variaveis

var inteiro = 10;
var decimal = 10.11;

console.log(typeof inteiro, inteiro);
console.log(typeof decimal, decimal);

var caractere = 'a'; console.log(typeof caractere, caractere);
var texto = "JavaScript"; console.log(typeof texto, texto);
var booleano = true; console.log(typeof booleano, booleano);
var nulo = null; console.log(typeof nulo, nulo);
var indefinido; console.log(typeof indefinido, indefinido);

//conversoes

console.log(inteiro+decimal);
console.log(parseInt("11") + parseFloat("22"));

//var textoBaguncado = "pedro, 23, casado, sao paulo"; 

//caracteres especiais

console.log("joana d\'arq");
console.log("aspas\'simples");
console.log("barra\\invertida");
console.log("nova\nlinha");
console.log("aaaaaa'aaaaaa");
console.log('aaaaaa"aaaaaa');

//concatenacao

var curso = "javascript";
document.write("<h1>Meu curso: " + curso + "</h1>");

//constantes

const navegador = "Chrome"
//navegador = "IE"

//objetos globais
console.log(window);

console.log(this);

console.log(document);

//valores especiais
var infinito = 1.79769313486231*Math.pow(10, 308);
console.log(infinito);