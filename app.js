let nombres=[];

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
    let lista=document.getElementById(`listaAmigos`);
    lista.innerHTML="";
    for(contador=0;contador<nombres.length;contador++){
        let nuevoLi=document.createElement(`li`);
        nuevoLi.textContent=nombres[contador];
        lista.appendChild(nuevoLi);
    }
}

function sortearAmigo(){
    let ganador="";
    let numeroSorteado;
    let lista=document.getElementById(`listaAmigos`);
    let listaGanador=document.getElementById(`resultado`);
    let nuevoLi=document.createElement(`li`);
    if (nombres.length==0) {
        alert(`Introduce al menos un nombre en la lista`);
    } else {
        numeroSorteado=Math.floor(Math.random()*nombres.length);
        ganador=nombres[numeroSorteado];
        nuevoLi.textContent="El amigo secreto sorteado es: "+nombres[numeroSorteado];
        listaGanador.appendChild(nuevoLi);
        lista.innerHTML="";
    }
}