const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const intentos = [];

function adivinarNumero() {
    let numeroIngresado;

    while (true) {
        numeroIngresado = prompt("Adivina el número secreto (del 1 al 100):");

        
        if (numeroIngresado === null) {
            console.log("Juego cancelado.");
            return;
        }

       
        numeroIngresado = Number(numeroIngresado);

    
        if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
            console.log("Error: Por favor, introduce un número válido entre 1 y 100.");
            continue;
        }

        
        intentos.push(numeroIngresado);

        
        if (numeroIngresado === numeroSecreto) {
            console.log("Felicidades, adivinaste el número secreto.");
            console.log("Tus intentos: ", intentos);
            break;
        } else {
            console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
        }
    }
}

adivinarNumero();
