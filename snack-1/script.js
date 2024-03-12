// - L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo



// Chiedo di inserire un numero
const userNum = parseInt(prompt('inserire un numero'));

// Se il numero inserito è pari lo stampo
if (userNum % 2 === 0) {
    let printNum = userNum;
    console.log(printNum)

// Se invece il numero è dispari stampo il numero successivo a quello inserito
}else {
    printNum = userNum + 1;
    console.log(printNum)
}
