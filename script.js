var actualizar = function(){

var fecha = new Date();
var diadesemana = document.getElementById("diadesemana");
var diasDeLaSemana =["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
var mesesDelAnio =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
var main = document.getElementById("main");




//variables de la fecha--------------------------------------------
var diaDeLaSemana = diasDeLaSemana[fecha.getDay()];
var diaDelMes = fecha.getDate();
var nombreDelMes = mesesDelAnio[fecha.getMonth()];
var numeroDeAnio = fecha.getFullYear();

//variables de la hora---------------------------------------------
var horaActual = fecha.getHours();
var minutoActual = fecha.getMinutes();
var segundos = fecha.getSeconds();
// var milisegundos = fecha.getMilliseconds();
var amopm;



//cambio de fondo -------------------------------------------

if(horaActual >= 18){

    main.classList.add("noche"); 

}else if(horaActual >= 17){

    main.classList.add("atardecer"); 

}else if(horaActual >= 12){

    main.classList.add("mediodia"); 

}else if(horaActual >= 6){

    main.classList.add("manana"); 

}else if(horaActual >= 5){

    main.classList.add("amanecer"); 

}else if(horaActual >= 0 ){

    main.classList.add("madrugada");

}


// if(horaActual >= 0 ){

//     main.classList.add("madrugada");

// }else if(horaActual >= 5){

//     main.classList.add("amanecer"); 

// }else if(horaActual >= 6){

//     main.classList.add("manana"); 

// }else if(horaActual >= 12){

//     main.classList.add("mediodia"); 

// }else if(horaActual >= 13){

//     main.classList.add("atardecer"); 

// }else if(horaActual >= 14){

//     main.classList.add("noche"); 
// }


//arreglo del am y el pm -------------------------------------------

if (horaActual >= 12){

    amopm = "PM";

}else if (horaActual >= 0){

    amopm = "AM";

}
//arreglo de la hora ------------------------------------------------

if (horaActual == 24){

    horaActual = horaActual - 12;

}else if (horaActual == 0){

    horaActual = 12;

}else if (horaActual > 12){

    horaActual = horaActual - 12;

}

//arreglo de minutos-----------------------------------------------

if(minutoActual < 10){
    minutoActual = "0" + minutoActual;
}
//arreglo de segundos-----------------------------------------------

if(segundos < 10){
    segundos = "0" + segundos;
}

//dia de la semana---------------------------------------------------------
diadesemana.innerText = diaDeLaSemana;
//dia del mes
dia.innerText = diaDelMes;
//nombre del mes
mes.innerText = nombreDelMes;
//el año
anio.innerText = numeroDeAnio;

//la hora-------------------------------------------------------------------
hora.innerText = horaActual;
//los minutos
minuto.innerText = minutoActual;
//los segundos
segundo.innerText = segundos;
//am y pm
ampm.innerText = amopm;

}


actualizar();

var int = setInterval(actualizar, 1000);


