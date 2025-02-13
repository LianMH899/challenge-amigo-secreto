// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    nombres.push(nombre);
    actualizarListaAmigos();
    input.value = ""; 
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < nombres.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombres[i];
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSorteado = nombres[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}