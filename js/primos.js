 
function verificarSeEhPrimo(entrada){
	var variavel = entrada;
	var verificador = 0;


	for(contador = variavel-1; contador>=2; contador--){ 

		if(variavel % contador == 0){
			//nao primo
			verificador++;
		}
	}

	if(verificador==0){
		return true;
	}else{
		return false;
	}
}

for(i=0; i<=100; i++){
	console.info("i="+i + "->" +verificarSeEhPrimo(i));
}