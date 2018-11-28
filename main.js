$(document).ready(function(){
	alert(123);
	
	//Esconde a Div
	$("#alvo").esconde();

	$("#telefone").aplicarMascara();
	
	//Remove o atributo style da tag em 2 segundos fazendo aparecer a Div com a frase contida nela
	setTimeout(function(){$("div").reset()}, 2000);
});