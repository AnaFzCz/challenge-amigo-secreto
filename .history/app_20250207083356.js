let listaAmigosJava = [];


function adicionarAmigo() {

    let nomeAmigo = document.getElementById('amigo').value;
    listaAmigosJava.push(nomeAmigo);
    console.log(listaAmigosJava);
    muestraNomeAmigos();

}

function muestraNomeAmigos() {

    let nombreAmigoLista = document.querySelector('ul');
    document.getElementById("listaAmigo").appendChild(li);
    input.value = "";
    nombreAmigoLista.innerHTML = (listaAmigosJava);
}

