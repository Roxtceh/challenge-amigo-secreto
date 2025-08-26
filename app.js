let nombres=[];
let lista=document.getElementById(`listaAmigos`);

function agregarAmigo(){
    let elemento=document.getElementById(`amigo`);
    let nombre=elemento.value;
    if(nombre==""){
        alert("Por favor inserte un nombre");
    }else{
        nombres.push(nombre);
        elemento.value="";
        actualizarLista(nombres);
    }
}

function actualizarLista(nombres){
    let contador;
    lista.innerHTML="";
    for(contador=0;contador<nombres.length;contador++){
        agregarElementoEnLista(lista,nombres[contador]);
    }
}

function sortearAmigo(){
    let numeroSorteado;
    let listaGanador=document.getElementById(`resultado`);
    if (nombres.length==0) {
        alert(`Introduce al menos un nombre en la lista`);
    } else {
        numeroSorteado=Math.floor(Math.random()*nombres.length);
        agregarElementoEnLista(listaGanador,"El amigo secreto sorteado es: "+nombres[numeroSorteado]);
        lista.innerHTML="";
    }
}

function agregarElementoEnLista(listaDestino, texto) {
    let nuevoLi=document.createElement(`li`);
    nuevoLi.textContent=texto;
    listaDestino.appendChild(nuevoLi);
}