

function popularTabela(response){
	for (var i = 0; i < response.length; i++) {
		console.info(response[i]);

		var conteudo = `
			<tr>
				<td>`+response[i].texto3+`</td>
				<td>`+i+`</td>
			</tr>`;
		$("#tabela").append(conteudo);
	}
}


$(document).ready(function(){
	
	$.ajax({
	  	url: "http://sistema.memphisnet.com.br/barramento/api/v1/banner",
	}).done(function(response) {
		popularTabela(response);
	});

});

