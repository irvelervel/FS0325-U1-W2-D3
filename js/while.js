// I CICLI
// Un ciclo è una struttura fondamentale nello sviluppo software.
// Consiste in una direttiva capace di RIPETERE l'esecuzione di un blocco di codice,
// un numero predeterminato/indeterminato di volte.

// Il ciclo WHILE fa parte di quella famiglia di direttive che ripetono un blocco di
// istruzioni un numero NON-PREDETERMINATO di volte: nello specifico, ripeteranno
// il blocco di istruzioni fino a che la loro CONDIZIONE rimane TRUE.

let counter = 5

while (counter < 20) {
  // questo blocco di istruzioni verrà eseguito fino a che la condizione rimane VERA
  console.log(counter)
  counter = counter + 1
}

// PROBLEMA VERO: lanciamo un dado e vediamo quando esce 6!
