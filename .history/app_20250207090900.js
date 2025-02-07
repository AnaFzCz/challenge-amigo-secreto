let listaAmigosJava = [];
let listaHTML = [];
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
    listaHTML = listaAmigosJava.map(amigo => `<li>${amigo}</li>`).join('');
    nombreAmigoLista.innerHTML = listaHTML;
    console.log(listaHTML);
}

function sortearAmigo() {

    let sorteo = listaHTML[Math.floor(Math.random() * listaHTML.length)];
    console.log(sorteo);
}



