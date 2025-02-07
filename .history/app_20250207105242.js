let listaAmigosJava = [];

function adicionarAmigo() {

    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == '') {
        alert('Debes ingresa el nombre de un amig@');
    } else {
        let verificaAmigo = nomeAmigo;
        if (listaAmigosJava.includes(verificaAmigo)) {
            alert('Ya se encuentra en la lsita')
        }
        else {
            listaAmigosJava.push(nomeAmigo);
            console.log(listaAmigosJava);
            muestraNomeAmigos();
            limparCampo();
        }
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

        let nombreAleatorio = listaAmigosJava[Math.floor(Math.random() * listaAmigosJava.length)];
        let datoFinal = document.getElementById('resultado');
        datoFinal.innerHTML = (`Tu amig@ secreto es :${nombreAleatorio}`);
        //console.log(datoFinal);
    }
}


function limparCampo() {
    let nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}


