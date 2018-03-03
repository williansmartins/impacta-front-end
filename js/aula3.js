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

var categoria = "adulto";

if(categoria=="infantil"){
	console.info("infantil.html");
}else{
	if(categoria=="adulto"){
		console.info("adulto.html");
	}else{
		console.info("adolescente.html");
	}
}