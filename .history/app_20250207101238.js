let listaAmigosJava = [];
let nombreAleatorio;
function adicionarAmigo() {

    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == '') {
        alert('Debes ingresa el nombre de un amig@');
    } else {

        listaAmigosJava.push(nomeAmigo);
        console.log(listaAmigosJava);
        muestraNomeAmigos();
        limparCampo();
    }

}

function muestraNomeAmigos() {
    let nombreAmigoLista = document.querySelector('ul');
    let listaHTML = listaAmigosJava.map(amigo => `<li>${amigo}</li>`).join('');
    nombreAmigoLista.innerHTML = listaHTML;
    // console.log(listaHTML);
}

function sortearAmigo() {

    if (listaAmigosJava.length == 0) {
        alert('La lista está vacía, ingresa datos');
    } else {

        nombreAleatorio = listaAmigosJava[Math.floor(Math.random() * listaAmigosJava.length)];
        //console.log(nombreAleatorio);
        document.querySelector('ul').value = nombreAleatorio;
        alert(nombreAleatorio);
    }
}


function limparCampo() {
    let nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}


