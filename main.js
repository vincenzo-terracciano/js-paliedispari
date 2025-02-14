/* Palidroma
Chiedere all’utente di inserire una parola e creare una funzione per capire se la parola inserita è palindroma */

function palindroma(word) {
    const reversePalin = [];
    for (let i = word.length - 1; i >= 0; i--) {
        const thisPalin = word[i];
        reversePalin.push(thisPalin);
    }
    console.log(reversePalin);
    return reversePalin;
}

const userPalin = prompt("Inserisci una parola");
const isPalin = palindroma(userPalin);

if (isPalin == userPalin) {
    console.log(`${userPalin} è una parola palindroma`);
} else {
    console.log(`${userPalin} non è una parola palindroma`);
}

