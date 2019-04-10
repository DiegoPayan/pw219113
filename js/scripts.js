function iniciarWorker3(){
    if(typeof(w2) == "undefined"){
        w2=new Worker('demoWorker.js');
        w2.onmessage = function(event){
            document.getElementById('resultado3').innerHTML = event.data;
        }
    }else{
        alert("El navegador no soporta WebWorkers");
    }
}
 function paraWorker3(){
     w2.terminate();
     w2 = undefined;
 }