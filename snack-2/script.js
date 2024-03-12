/*
- L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/



// Chiedo di inserire due parole
const firstWord = prompt('inserisci una parola');
const secondWord = prompt('inserisci una seconda parola');

// Controllo il numero di lettere di ogni parola
const firstWordLng = firstWord.length;

const secondWordLng = secondWord.length;


// stampo prima la parola più corta, poi la parola più lunga
let prntWord ;

if (firstWordLng > secondWordLng) {

    prntWord = secondWord +'-'+ firstWord;

}else {

    prntWord = firstWord +'-'+ secondWord;
}
console.log(prntWord)

