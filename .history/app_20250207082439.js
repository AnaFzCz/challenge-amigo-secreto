let listaAmigos = [];


function adicionarAmigo() {

    let nomeAmigo = document.getElementById('amigo').value;
    listaAmigos.push(nomeAmigo);
    console.log(listaAmigos);
    muestraNomeAmigos();

}

function muestraNomeAmigos() {
    let nombreAmigoLista = document.querySelector('ul');
    nombreAmigoLista.innerHTML = (listaAmigos);
}

function exibirNome() {
    exibirTextoNaTela('h1', 'Juego de Número Secreto');
    exibirTextoNaTela('p', 'Elige un número entre 1 y 10');
}
exibirMensagemNaTela();