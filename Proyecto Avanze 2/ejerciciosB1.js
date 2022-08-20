/*Ejercicios Numeros Reales*/

function catorce(){
   var respuestacatorce = document.getElementById("respuestacatorce").value;
   if (respuestacatorce == 14){
      document.getElementById("r").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("r").innerHTML="<h1 style=color:red;>Incorrecto</h1>";}
}

function doce(){
   var respuestadoce = document.getElementById("respuestadoce").value;
   if (respuestadoce == 12){
      document.getElementById("falta12").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("falta12").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function seis(){
   var respuestaseis = document.getElementById("respuestaseis").value;
   if(respuestaseis == 6){
      document.getElementById("falta6").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("falta6").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function veintisiete(){
   var respuestaventisiete = document.getElementById("respuestaventisiete").value;
   if(respuestaventisiete == 27){
      document.getElementById("falta27").innerHTML= "<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("falta27").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function noventa(){
   var respuestanoventa = document.getElementById("respuestanoventa").value;
   if(respuestanoventa == 90){
      document.getElementById("falta90").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("falta90").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function cuarentaycinco(){
   var respuestacuarentaycinco = document.getElementById("respuestacuarentaycinco").value;
   if(respuestacuarentaycinco == 45){
      document.getElementById("falta45").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("falta45").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

/*Ejercicios productos notables y factorizacion*/

function Ejercicio1T2(){
   var ONEBLANK = document.getElementById("ONEBLANK").value;
   var TWOBLANK = document.getElementById("TWOBLANK").value;
   if(ONEBLANK == 2 & TWOBLANK == 7) {
      document.getElementById("ejercicioone").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejercicioone").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function Ejercicio2T2(){
   var respuestatres = document.getElementById("respuestatres").value;
   var respuestados = document.getElementById("respuestados").value;
   var respuestacuatro = document.getElementById("respuestacuatro").value;
   var respuestaotrotres = document.getElementById("respuestaotrotres").value;

   if(respuestatres == 3 & respuestados == 2 & respuestacuatro == 4 & respuestaotrotres == 3){
      document.getElementById("ejerciciodoss").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejerciciodoss").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function Ejercicio3T2(){
   var respuestaCUATRO = document.getElementById("respuestaCUATRO").value;
   var respuestaCINCO = document.getElementById("respuestaCINCO").value;
   var respuestaSIETE = document.getElementById("respuestaSIETE").value;
   var respuestaCINCOO = document.getElementById("respuestaCINCOO").value;

   if(respuestaCUATRO == 4 & respuestaCINCO == 5 & respuestaSIETE == 7 & respuestaCINCOO == 5){
      document.getElementById("ejerciciotres").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejerciciotres").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}


/*Ejercicios Ecuacion cuadratica y numeros complejos*/

function Ejercicio1T3(){
   var ejercicio1t3 = document.getElementById("ejercicio1t3").value;
   var ejercicio1t3r2 = document.getElementById("ejercicio1t3r2").value;
   if(ejercicio1t3 == "x+5" & ejercicio1t3r2 == "x-3"){
      document.getElementById("ejerciciounot3").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejerciciounot3").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function Ejercicio2T3(){
   var ejercicio2t3 = document.getElementById("ejercicio2t3").value;
   var ejercicio2t3r2 = document.getElementById("ejercicio2t3r2").value;
   if(ejercicio2t3 == "x-4" & ejercicio2t3r2 == "x-11"){
      document.getElementById("ejerciciodost3").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejerciciodost3").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function Ejercicio3T3(){
   var ejercicio3t3 = document.getElementById("ejercicio3t3").value;
   var ejercicio3t3r2 = document.getElementById("ejercicio3t3r2").value;
   if(ejercicio3t3 == "x+3" & ejercicio3t3r2 == "x+1"){
      document.getElementById("ejerciciotrest3").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejerciciotrest3").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function Ejercicio4T3(){
   var ejercicio4t3 = document.getElementById("ejercicio4t3").value;
   var ejercicio4t3r2 = document.getElementById("ejercicio4t3r2").value;
   if(ejercicio4t3 == "x+12" & ejercicio4t3r2 == "x-5"){
      document.getElementById("ejerciciocuatrot3").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejerciciocuatrot3").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function Ejercicio5T3(){
   var ejercicio5t3 = document.getElementById("ejercicio5t3").value;
   var ejercicio5t3r2 = document.getElementById("ejercicio5t3r2").value;
   if(ejercicio5t3 == "x+9" & ejercicio5t3r2 == "x+7"){
      document.getElementById("ejerciciocincot3").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejerciciocincot3").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function Ejercicio6T3(){
   var ejercicio6t3 = document.getElementById("ejercicio6t3").value;
   var ejercicio6t3r2 = document.getElementById("ejercicio6t3r2").value;
   if(ejercicio6t3 == "x+6" & ejercicio3t3r2 == "x+10"){
      document.getElementById("ejercicioseist3").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejercicioseist3").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

/*Desigualdad*/

function Ejercicio1T4(){
   var ejercicio1t4 = document.getElementById("ejercicio1t4").value;
   if(ejercicio1t4 == "<"){
      document.getElementById("ejerciciounot4").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejerciciounot4").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function Ejercicio2T4(){
   var ejercicio2t4 = document.getElementById("ejercicio2t4").value;
   if(ejercicio2t4 == "<"){
      document.getElementById("ejerciciodost4").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejerciciodost4").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function Ejercicio3T4(){
   var ejercicio3t4 = document.getElementById("ejercicio3t4").value;
   if(ejercicio3t4 == ">"){
      document.getElementById("ejerciciotrest4").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejerciciotrest4").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function Ejercicio4T4(){
   var ejercicio4t4 = document.getElementById("ejercicio4t4").value;
   if(ejercicio4t4 == ">="){
      document.getElementById("ejerciciocuatrot4").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejerciciocuatrot4").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function Ejercicio5T4(){
   var ejercicio5t4 = document.getElementById("ejercicio5t4").value;
   if(ejercicio5t4 == ">="){
      document.getElementById("ejerciciocincot4").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejerciciocincot4").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

function Ejercicio6T4(){
   var ejercicio6t4 = document.getElementById("ejercicio6t4").value;
   if(ejercicio6t4 == ">"){
      document.getElementById("ejercicioseist4").innerHTML="<h1 style=color:green;>Correcta!</h1>";
   }
   else{document.getElementById("ejercicioseist4").innerHTML="<h1 style=color:red;>Incorrecta</h1>";}
}

