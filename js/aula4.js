function popularTabela(response){
	for (var i = 0; i < response.length; i++) {
		var conteudo = `
			<tr>
				<td>`+response[i].id+`</td>
				<td>`+response[i].descricao+`</td>
				<td>`+response[i].url+`</td>
				<td>`+response[i].link+`</td>
				<td>`+response[i].botao+`</td>
				<td>`+$.datepicker.formatDate('mm/yy', new Date(response[i].created_at))+`</td>
			</tr>`;
		$("#tabela").append(conteudo);
	}
}

$(document).ready(function(){

	//iniciar o loading
	console.info("loading......")
	$(".wrapper-loader").show();
	$(".wrapper-table").hide();

	$.ajax({
	  	url: "http://sistema.memphisnet.com.br/barramento/api/v1/banner",
	}).done(function(response) {
		popularTabela(response);

		$(".wrapper-loader").hide();
		$(".wrapper-table").show();
	});

});