function verificar(){

var n1 = document.getElementById("n1").innerHTML; //pega o conteudo que está dentro da div
var n2 = document.getElementById("n2").value; //pega o valor digitado pelo usuário

if(n1 == n2)
	alert("Parabéns, você acertou!");
else if(n2 == "")
	alert("ATENÇÃO, preencha o campo...");
else
	alert("Infelizmente, você errou!");

	resetar();
}

function resetar(){
	document.getElementById("n2").value = "";
	var r = Math.floor(Math.random()*100); //gera numero aleatorio inteiro
	document.getElementById("n1").innerHTML = r;
}