//===============operadores de atribuição=======================
//declaração
var idade;

//atribuição
idade = 18;
console.info( idade );

//atribuição 2
idade = 20;
console.info( idade) ;

idade +=5; //idade = idade + 5;
console.info( idade) ;


idade -=5; //idade = idade - 5;
console.info( idade) ;


idade *=5; //idade = idade * 5;
console.info( idade) ;


idade /=5; //idade = idade / 5;
console.info( idade) ;

idade %=5; //idade = idade % 5;

//===============operadores de comparação=======================
console.info( idade==99) ;
console.info( idade==99) ;
var valor1 = 1;
var valor2 = "1";
console.info( "comparar com ==", valor1==valor2) ;



var a = 10;
var b = 20;
var c = 30;
var d = 40;
console.info("a == b", a == b);
console.info("b != c", b != c);
console.info("c > d", c > d);
console.info("d >= a", d >= a);
console.info("a < b", a < b);
console.info("c <= d", c <= d);

//===============operadores aritméticos=======================

var a = 10;
var b = 20;
var c = 30;
var d = 40;
console.info("a + b", a + b);
console.info("b - c", b - c);
console.info("c * d", c * d);
console.info("d / a", d / a);
console.info("a % b", a % b);
console.info("c ++", c ++);
console.info("c --", c --);

//===============operadores lbitwise=======================
console.info("8 & 13", 8 & 13);
console.info("8 | 13", 8 | 13);
console.info("8 ^ 13", 8 ^ 13);
console.info("~ 13",~ 13);


//===============operadores lógicos=======================
var a = 10;
var b = 20;
console.log("a > 15 && b > 15", a > 15 && b > 15);
console.log("a > 15 || b > 15", a > 15 || b > 15);

//===============Estruturas condicionais;=======================

//==================== ESTRUTURA DE CONTROLE - IF


if ("5>10") { 
	console.info("SIM"); 
}else{
	console.info("NAO"); 
}
var categoria = "xxx";

if(categoria=="infantil"){
	console.info("infantil.html");
}else{
	if(categoria=="adulto"){
		console.info("adulto.html");
	}else{
		console.info("adolescente.html");
	}
}

//==================== ESTRUTURA DE CONTROLE - SWITCH CASE
var day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
    	day = "OPAAAAAAA";
}

console.info(day);

//==================== ESTRUTURA DE CONTROLE - LOOPS
var contador = 11;
while(contador < 10){
	console.info("Vai danada1!" + contador);
	contador++;
}

do{
	console.info("Vai danada 2!" + contador);
	contador++;
}while(contador < 10)

contador = 0;
for(var contador = 0; contador < 10; contador++){
	console.info("Vai danada3!" + contador);
}

//forEach
var lista = ['coca-cola', 'conduite', 'fio', 'fita isolante', 'luminarias'];

//comum
for(produto in lista){
	console.info("nao esquecer de comprar: " + lista[produto]);
}
console.info("-----");
//break
for(produto in lista){
	console.info("nao esquecer de comprar: " + lista[produto]);
	if(lista[produto]=="fio"){
		break;
	}
}

console.info("-----");
//break
for(produto in lista){
	if(lista[produto]=="fio" || lista[produto]=="coca-cola"){
		continue;
	}
	console.info("nao esquecer de comprar: " + lista[produto]);
}
console.info("-----");

//==================== ESTRUTURA DE CONTROLE - TRY/CATCH
try{
	var idade = converterParaInteiro("01111");
	console.info(idade);
}catch(e){
	console.info("ops: " + e);
}

function converterParaInteiro(entrada){
	if(isNaN(parseInt(entrada))){
		throw "erro ao converter entrada";
	}else{
		return parseInt(entrada);
	}
}


for(var contador = 10; contador >= 1 ; contador--){
//	document.write("<h1>contador:" + contador + "</h1>");
}
for(var contador = 10; contador >= 1 ; contador--){
//	document.write("<h" + contador + ">contador:" + contador + "</h" + contador + ">");
}
for(var contador = 0; contador <= 100 ; contador++){
	var resultado = contador % 2 == 0;
	
	if(resultado){
		document.write("<h6>contador:" + contador + "</h6>");
		}
}
for(var contador = 0; contador <= 100 ; contador++){
	document.write("<h6>contador:" + contador + "</h6>");
	contador+=4;
}

function somar(){
	document.write(5+1);
	document.write(10+1);
	document.write(5-1);
}
 somar();
 somar();
 somar();

function crash(){
	document.write(5%1);
	document.write(10/1);
	document.write(5^1);
}
 crash();
 crash();
 crash();
 
 