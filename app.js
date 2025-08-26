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
