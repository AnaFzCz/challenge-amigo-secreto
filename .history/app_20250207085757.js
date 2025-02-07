let listaAmigosJava = [];

function adicionarAmigo() {

    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == '') {
        alert('Debes ingresa el nombre de un amig@');
    } else {

        listaAmigosJava.push(nomeAmigo);
        console.log(listaAmigosJava);
        muestraNomeAmigos();
    }

}

function muestraNomeAmigos() {
    let nombreAmigoLista = document.querySelector('ul');
    let listaHTML = listaAmigosJava.map(amigo => `<li>${amigo}</li>`).join('');
    nombreAmigoLista.innerHTML = listaHTML;
}




