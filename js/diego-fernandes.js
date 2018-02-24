var  nome = "Diego Fernandes"
	 nome = 10;
	 nome = "Maria";
//expressão
//debugger; 
console.info("nome "+nome);
console.error("nome "+nome);
console.log("nome "+nome);
document.write("nome "+nome);
//alert("nome "+nome);

//tipos de variáveis
var inteiro = 10; console.info(typeof inteiro, inteiro);
var decimal = 10.11; console.info(typeof decimal, decimal);
var caractere='a'; console.info(typeof caractere, caractere);
var texto="Javascripit"; console.info(typeof texto, texto);
var booleano= true; console.info(typeof booleano, booleano);
var nullo = null; console.info(typeof nullo, nullo);
var indefinido = null; console.info(typeof indefinido, indefinido);
console.info(inteiro+decimal);

//conversões
console.info(parseInt("11") + parseFloat("22"));

//caracteres especiais
console.info("Joana D\"arc");
console.info("aspas\'simples");
console.info("barra\\invertida");
console.info("nova\nlinha");

//concatenação 
var curso = "javascript";
document.write("<h1>Meu curso é :" + curso + "</h1>");

//constantes
const navegador = "Chrome";
	//navegador = "IE";
//objetosglobais
console.log(this);
console.log(document);

//valores especiais infinity
var infinito = 1.7976931348623157*Math.pow(10, 308);
console.log(infinito);

this.nome = "Maria";
console.log(this.nome);




//imprimir variáveis 
//document.write(inteiro);
//document.write(decimal);