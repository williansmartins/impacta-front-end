

function popularTabela(response){
	for (var i = 0; i < response.length; i++) {
		var conteudo = `
			<tr>
				<td>`+response[i].id+`</td>
				<td>`+response[i].descricao+`</td>
				<td>`+response[i].url+`</td>
				<td>????</td>
				<td>????</td>
			</tr>`;
		$("#tabela").append(conteudo);
	}
}


$(document).ready(function(){
	
	//iniciar o loading
	console.info("loading......")
	//$(".loader").show()

	$.ajax({
	  	url: "http://sistema.memphisnet.com.br/barramento/api/v1/banner",
	}).done(function(response) {
		popularTabela(response);

		//finalizar o loading
		console.info("loading ok")
	});

});

