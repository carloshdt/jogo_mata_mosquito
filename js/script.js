var altura = 0;
var largura = 0;
var vidas = 1;

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight;
	largura = window.innerWidth; 

	console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();

function posicaoRandomica(){

	//remover o mosquito anterior CASO exista
	if(document.getElementById('mosca')){
		document.getElementById('mosca').remove();
		if (vidas > 3) {

			alert('GAME OVER')
		}
		document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
		vidas++
	}



	//criando posições variaveis no documento
	var posicaoX = Math.floor(Math.random() * largura) - 90;
	var posicaoY = Math.floor(Math.random() * altura)  - 90;

	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;

	console.log(posicaoX, posicaoY);

	//criando elemento no html
	var mosquito = document.createElement('img');
	mosquito.src = 'imagens/mosca.png';
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
	mosquito.style.left = posicaoX + 'px';
	mosquito.style.top = posicaoY + 'px';
	mosquito.style.position = 'absolute';
	mosquito.id = 'mosca';
	mosquito.onclick = function(){
		this.remove();
	}

	document.body.appendChild(mosquito);

	tamanhoAleatorio();

}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosca1';

		case 1:
			return 'mosca2';

		case 2:
			return 'mosca3';
	}
}

function ladoAleatorio(){
	var tamanho = Math.floor(Math.random() * 2)

	switch(tamanho){
		case 0:
			return 'ladoA';

		case 1:
			return 'ladoB';
	}
}