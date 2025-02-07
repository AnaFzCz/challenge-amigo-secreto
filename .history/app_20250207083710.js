let listaAmigosJava = [];

function adicionarAmigo() {

    let nomeAmigo = document.getElementById('amigo').value;
    listaAmigosJava.push(nomeAmigo);
    console.log(listaAmigosJava);
    muestraNomeAmigos();

}

function muestraNomeAmigos() {

    let nombreAmigoLista = document.querySelector('ul');
    nombreAmigoLista.innerHTML = `<li>${listaAmigosJava}</li>`;
}

listaAmigos.innerHTML += `<li>${nuevoAmigo}</li>`
