// let a;
// const PI = 3.1416;
// console.log (PI);

// a = "kenai";
// console.log(a);

// let objeto = {
//     nombre:"Ricardo",
//     edad: 31
// }

// let colores = [
//     "blanco", "negro", "azul"
// ];

// console.log(objeto);
// console.log(colores);

// objeto.correo = "rinaldi.r@gmail.com";
// colores.push("naranja");

// console.log(objeto);
// console.log(colores);


// // Strings  


// let nombre = "Ricardo";
// let apellido = "Rinaldi";
// let saludo = new String("Hola Mundo");
// let lorem = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam placeat quas esse ipsum sed doloremque! Perferendis error fugiat, nostrum eligendi sapiente expedita sunt accusantium quasi eius cum, quaerat aliquid repellat."

// console.log(nombre, apellido, saludo);
// console.log(
// nombre.length, 
// apellido.length,
// saludo.length,
// nombre.toUpperCase(),
// apellido.toLowerCase(),
// lorem.includes("nostrum"),
// lorem.includes("ricardo")
// );


// // Concatenacion


// let nombre1 = "Ricardo";
// let apellido1 = "Rinaldi";

// let saludo1 = "Hola mi nombre es " + nombre1 + " " + apellido1 + "."

// console.log(saludo1);
// // Interpolacion de variables
// // Template strings
// let saludo2 = `Hola mi nombre es ${nombre1} ${apellido1}.`;
// console.log(saludo2);

// let ul = `   <ul>
//         <li>Primavera</li>
//         <li>Verano</li>
//         <li>Otoño</li>
//         <li>Invierno</li>
//     </ul>`;
// console.log(ul);


// Declaracion de funcion


// function unaFuncionQueDevuelveValor(){
//     console.log("Uno");
//     // return 19;

//     console.log("Dos");
//     console.log("Tres");
//     return "La funcion ha retornado una cadena de texto"

// }
//  let valorDeFuncion = unaFuncionQueDevuelveValor();
// console.log(valorDeFuncion);

// function saludar(nombre, edad){
//     console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
// }
// saludar("Ricardo", 31);


// // Funciones Declaradas VS Funciones Expresadas


// funcionDeclarada();

// function funcionDeclarada(){
//     console.log("Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada")
// }
// funcionDeclarada();


// // funcionExpresada();
// const funcionExpresada = function(){
//     console.log("Esto es una funcion expresada,es decir, una funcion que se le ha asignado como valor a una variable, si invocamos esta funcion antes de su definicion JS nos dira 'Cannot access 'funcionExpresada' before initialization'");
// }
// funcionExpresada();


// // Arrays


// const colores = ["Rojo", "Verde", "Azul"]
// console.log(colores);

// colores.push("Negro");
// // colores.pop();

// colores.forEach(function (el, i){
//     console.log(`<li id="${i}">${el}</li>`)
// });


// Condicionales


// let edad = 17

// if(edad >= 18) {
//     console.log("Eres mayor de edad");
// }
// else{
//     console.log("Eres menor de edad");
// }

// ----------

// let hora = 5;
// if (hora >= 0 && hora <= 5){
//     console.log("Dejame dormir");
// } else if(hora >= 6 && hora <= 1){
//     console.log("Buenos dias");
// }else if(hora >= 12 && hora <= 18){
//     console.log("Buenos tardes");
// }else{
//     console.log("Buenos noches");
// }


// Operador ternario


// let edad = 17
// console.log("Operador ternario");
// let eresMayor = (edad >=18)
//  ? "Eres mayor de edad"
//  : "Eres menor de edad";
// console.log(eresMayor);


// Switch / Case


// let dia = 2;
// switch(dia){
//     case 0:
//         console.log("Domingo");
//         break;
//     case 1:
//         console.log("Lunes");   
//         break;
//     case 2:
//         console.log("Martes");   
//         break;
//     case 3:
//         console.log("Miercoles");   
//         break;
//     case 4:
//         console.log("Jueves");   
//         break;
//     case 5:
//         console.log("Viernes");   
//         break;
//     case 6:
//         console.log("Sabado");   
//         break;   
//     default:
//         console.log("El dia no existe");
//         break;     
// }


// ----- For

// for(inicializacion de variable; condicion; decremento o incremento){
//     sentencias que ejecuta el for
// }

// for(let index = 0; index < array.length; index++){
//     console.log("for" + index)
// }

// let numeros = [10,20,30,40,50,60,70,80];

// for(let i = 0; i < numeros.length; i++){
//     console.log(numeros[i]);
// }


// ------------------ Botones Ejercicio 1 ------------------
// window.onload=inicio;

// function inicio(){
//     boton[0].onclick=accion1;
//     boton[1].onclick=accion2;
//     boton[2].onclick=accion3;
//     boton[3].onclick=accion4;
// }

// function accion1(){
// document.querySelector(".caja").innerHTML="Hola mundo";
// }
// function accion2(){
//     document.querySelector(".caja").innerHTML="<img src='img/noun-laptop-1889160.svg'>";
//     }
// function accion3(){
//     document.querySelector(".caja").insertAdjacentHTML("beforeend", "<button>Boton</button>");
//     }
// function accion4(){
//     document.querySelector(".caja").innerHTML="";
//     }        

// ------------------ Botones Ejercicio 2 ------------------
// window.onload=inicio;

// var imagen, cajaImagen, boton;

// function inicio(){
//     document.querySelector("body").insertAdjacentHTML("beforeend",`   
//     <button id="boton1" class="boton">Boton 1</button>
//     <button id="boton2" class="boton">Boton 2</button>
//     <button id="boton3" class="boton">Boton 3</button>
//     <div id="imagen"><img src="img/noun-laptop-1889160.svg"></div>`);
    
//     imagen=document.querySelector("img");
//     cajaImagen=document.querySelector("#imagen");
//     boton=document.querySelectorAll(".boton");

//     boton[0].onclick=accion1;
//     boton[1].onclick=accion2;
//     boton[2].onclick=accion3;
//     resaltar();
// }

// function accion1(){
//    imagen.style.backgroundColor="#1162ac";
//    cajaImagen.style.borderRadius="50%";
//    cajaImagen.style.transform="rotate(10deg)";
//    boton[0].style.visibility="hidden";
// }

// function accion2(){
//     if(cajaImagen.style.display==="none"){
//    cajaImagen.style.display="block";
//    resaltar();
//    } else {
//    cajaImagen.style.display="none";
//    boton[1].style.background=null;
//    boton[1].style.borderColor=null;
//    }
// }

// function accion3(){
//     imagen.style=null;
//     cajaImagen.style=null;
//     boton[0].style=null
//     boton[2].style=null
//     resaltar();
// }

// function resaltar(){
//     boton[1].style.background="#e44d26";
//     boton[1].style.borderColor="#e44d26";
// }

//------------------ Botones Ejercicio 2 ------------------

window.onload=inicio;

const NOMBRECORRECTO="RICARDO";

function inicio(){
    document.querySelector("body").insertAdjacentHTML("beforeend",
    `<input id="campo" type="text"/>
    <button>Aceptar</button>
    <div id="saludo"></div>`);
    document.querySelector("button").onclick=leer;
}
function leer(){
    let nombre=(document.querySelector("#campo").value);
    let nombreMayusculas=nombre.toUpperCase();
    let nombreFormateado=nombre.substr(0,1).toUpperCase() + 
    nombre.substr(1).toLowerCase();
    if (nombreMayusculas == NOMBRECORRECTO){
        document.querySelector("#saludo").innerHTML=`Hola ${nombreFormateado} <button id="boton">Ir a la web</button>`;
        document.querySelector("#boton").onclick=acceder;
    } else{
        document.querySelector("#saludo").innerHTML="";
        document.querySelector("#campo").value="";
        document.querySelector("#campo").focus();    
    }
}

function acceder(){
    location.href="https://www.google.com"

}