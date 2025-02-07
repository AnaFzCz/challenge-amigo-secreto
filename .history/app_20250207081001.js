//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let listaAmigos = [];


function adicionarAmigo() {

    let nomeAmigo = document.getElementById('amigo').value;
    console.log("Nombre amigo:", nomeAmigo);
    listaAmigo.push(nomeAmigo);
    console.log(listaAmigo.length - 1);

    // let listaAmigos = document.getElementById("listaAmigos");
    // let nuevoAmigo = "Nuevo Amigo"; // Puedes cambiar esto para recibir datos de un input

    // listaAmigos.innerHTML += `<li>${nuevoAmigo}</li>`;
    //     console.log("Lista actualizada:", listaAmigos.innerHTML);
}
