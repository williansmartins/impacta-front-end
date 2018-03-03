//declaracao
var idade;

//==================== OPERADORES de ATRIBUICAO
//atribuicao 1
idade = 18;
console.info( idade );

//atribuicao 2
idade = 20;
console.info( idade );

idade += 5; //idade = idade + 5;
console.info( idade );

idade -= 5; //idade = idade - 5;
console.info( idade );

idade *= 5; //idade = idade * 5;
console.info( idade );

idade /= 5; //idade = idade / 5;
console.info( idade );

idade %= 5; //idade = idade % 5;
console.info( idade );


//==================== OPERADORES de COMPARACAO
var a = 10;
var b = 20;

console.log("A=" + a + " B="+b);
console.log( "a==b", a==b );
console.log( "a!=b", a!=b );
console.log( "a>b", a>b );
console.log( "a<b", a<b );
console.log( "a>=b", a>=b );
console.log( "a<=b", a<=b );

var valor1 = 1;
var valor2 = "1";
console.info( "comparar com == ", valor1==valor2 );
console.info( "comparar com === ", valor1===valor2 );

//==================== OPERADORES ARITMETICOS
console.log("A=" + a + " B="+b);
console.log( "a+b", a+b );
console.log( "a-b", a-b );
console.log( "a/b", a/b );
console.log( "a*b", a*b );
console.log( "a%b", a%b );
console.log( "a++", a++ );
console.log( "a--", a-- );

//==================== OPERADORES BITWISE
console.log( "8 & 13", 8 & 13 );
console.log( "8 | 13", 8 | 13 );
console.log( "8 ^ 13", 8 ^ 13 );
console.log( "~13", ~13 );

//==================== OPERADORES LOGICO
var a = 10;
var b = 20;
console.log( "a > 15 && b > 15", a > 15 && b > 15 );
console.log( "a > 15 || b > 15", a > 15 || b > 15 );

//CURTO CIRCUITO => &&

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