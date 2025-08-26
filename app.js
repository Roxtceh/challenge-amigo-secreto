let nombres=[];

function agregarAmigo(){
    let elemento=document.getElementById(`amigo`);
    let nombre=elemento.value;
    if(nombre==""){
        alert("Por favor inserte un nombre");
    }else{
        nombres.push(nombre);
        elemento.value="";
    }
}