

$(document).ready(function(){
	$.ajax({
	  	url: "http://sistema.memphisnet.com.br/barramento/api/v1/banner",
	}).done(function(response) {
	  	//alert(response);
	});

	for (var i = 1; i <= 5; i++) {
		var conteudo = `
			<tr>
				<td>`+i+`</td>
				<td>`+i+`</td>
			</tr>`;
		$("#tabela").append(conteudo);
	}

});