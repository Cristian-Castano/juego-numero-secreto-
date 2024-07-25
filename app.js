let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemneto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
     if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemneto('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

     } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemneto('p','El número secreto es menor');
        } else {
            asignarTextoElemneto('p','El número secreto es mayor'); 
        }
        intentos++;
        limpiarCaja();
     }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemneto('p','ya se sortearon todos los número posibles');

    } else {
    
    
    //si el numero generado esta incluido en la lista
    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales (){
    asignarTextoElemneto('h1','Juego del número secreto');
    asignarTextoElemneto('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(params) {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //genera número aleatorio
    //inicializar intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();