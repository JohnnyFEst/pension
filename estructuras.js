function validarPension(){
    let edad=document.getElementById("edad").value;
    let sem=document.getElementById("semanas").value;
    let g=document.getElementById("Genero").value;
   if(g=="M" && edad>=60 && sem>=1300){
        alert("Si recibe pension");
   }else if(g=="F" && edad>=58 && sem>=1300){
        alert("Si recibe pension");
   }else{
        alert("Aun no recibe pension");
    }
 }

 function imprimirSemana(){
    let cont=0;
    while (cont<5){
        alert("contador:"+cont);
        cont+=1;
    }
 }