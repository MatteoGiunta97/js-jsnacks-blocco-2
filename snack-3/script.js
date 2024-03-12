/*
- Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari
e in verde i numeri pari.
*/



// Creo un array di numeri
const numbersArray = [56,56,2,16,5,823,44,97,456,13,5,62149,52,69,52655,78,64,554,216,2479,324,648,23]

let even = document.querySelector('#green');

let odd = document.querySelector('#red');

// Scorro l'array
for (let index = 0; index < numbersArray.length; index++) {
    
     // I numeri pari saranno stampati nell'id verde
     if (numbersArray[index] % 2 === 0) {
        
        even.innerHTML += '-' + numbersArray[index];

     // I numeri dispari saranno stampati nell'id rosso      
     }else {

        odd.innerHTML += '-' + numbersArray[index];

     }
    
}
   