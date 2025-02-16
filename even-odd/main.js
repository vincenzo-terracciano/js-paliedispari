/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */


const userChoice = prompt("Scegli pari o dispari");
console.log(userChoice);

const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);


function randomNumber () {
    const pcNumber = Math.ceil(Math.random() * 5);
    return pcNumber;
    
}

const pcChoice = randomNumber();
console.log(pcChoice);

function isSumEvenOdd(user, pc) {
    const sum = user + pc;
    console.log(sum);
    if (sum % 2 === 0) {
        return `${sum} is even number`
    } else {
        return `${sum} is odd number`
    }
}

const answer = isSumEvenOdd(userNumber, pcChoice);
console.log(answer);









