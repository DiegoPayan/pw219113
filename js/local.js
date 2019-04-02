var imprimir = function(dato){
    document.getElementById('demo').innerHTML = dato;
}
var aumentar = function(){
    localStorage.cuenta++;
    imprimir(localStorage.cuenta);
}
var reiniciar = function(){
    localStorage.cuenta = 0;
    imprimir(localStorage.cuenta);
}
var eliminar = function(){
    localStorage.removeItem("cuenta");
    imprimir(localStorage.cuenta);
}
if(typeof(Storage) != "undefined"){
    if(localStorage.cuenta){
        imprimir(localStorage.cuenta);	
    }else{
        localStorage.cuenta = 0;
    }
}