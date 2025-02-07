//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


// let listaAmigos = [];


// function adicionarAmigo() {
//     let listaAmigosfun = document.getElementById("listaAmigos").innerHTML;
//     console.log("amigos", listaAmigosfun);
// }

function adicionarAmigo() {
    let listaAmigos = document.getElementById('amigo');
    let nuevoAmigo = listaAmigos; // Puedes cambiar esto para recibir datos de un input

    listaAmigos.innerHTML += `<li>${nuevoAmigo}</li>`;
    
    console.log("Lista actualizada:", listaAmigos.innerHTML);
}