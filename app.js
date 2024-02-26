//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';

//definicíon de una función usando la palabre reservada "funtion" 
//despues se le da un nombre seguido de los parentesis que reciben los parametros y al final llaves
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 4;
console.log(numeroSecreto);
/*
function intentoDeUsuario(){
    alert(generadorDeNumeroSecreto());
    return;
}
*/
/*creación y uso de una función generica para el modificar el texto de las etiquetas 
del html, a traves de parametros 
*/
function limpiarCaja() {
    document.querySelector('#valorIgresadoJugador').value = '';
    return;
}

function asignarTextoElementos (elementos,textos){
    let parrafo = document.querySelector(elementos);
    parrafo.innerHTML = textos;
    return;
}

function generadorDeNumeroSecreto (){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //condicion para saber si el valor generado se a repetido
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElementos('p','Ya se sortearon todos los números posibles');
    }else{
        if (listaNumeroSorteado.includes(numeroGenerado)){
        return generadorDeNumeroSecreto();

        } else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
        }
    }    
}

//función para almacenar el valor ingresado en un input
function numeroIngresadoUsuario() {
    let numeroDeJugador = parseInt(document.getElementById("valorIgresadoJugador").value);
    
    if (numeroDeJugador === numeroSecreto ){
        asignarTextoElementos('p',`Acertaste el número en la ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroDeJugador > numeroSecreto){
            asignarTextoElementos('p','El número secreto es menor');   
        }else{
            asignarTextoElementos('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
           
    return;
}

function condicionesInicial (){
    asignarTextoElementos ('h1','Juego De Adivinar El Número Secreto');
    asignarTextoElementos ('p', `Selecciona un número entre el 1 y el ${numeroMaximo}`);  
    //generar número secreto
    numeroSecreto = generadorDeNumeroSecreto();
    //contar el número de intentp
    intentos = 1;
}



function reiniciarJuego (){
    //limpiar caja
    limpiarCaja();
    //mesaje inicial del juego
    condicionesInicial();
    //bloquear el boton de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled','true');
   
}

condicionesInicial();