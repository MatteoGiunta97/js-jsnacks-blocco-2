/*
- L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/



// Chiedo di inserire due parole
const firstWord = prompt('inserisci una parola');
const secondWord = prompt('inserisci una seconda parola');

// Controllo il numero di lettere di ogni parola
for (let index = 0; index < firstWord.length; index++) {
    
    fWordLength = firstWord[index];
    //console.log(fWordLength)
}

for (let index = 0; index < secondWord.length; index++) {
    
    sWordLength = secondWord[index];
    //console.log(sWordLength)
}

// Stampo prima la parole che contiene meno lettere e poi quella con più lettere