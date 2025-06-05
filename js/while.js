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
  //   console.log(counter)
  counter = counter + 1
}

// PROBLEMA VERO: lanciamo un dado e vediamo quando esce 6!
let lancio

// le variabili definite con let e const hanno visibilità di BLOCCO (block-scoped variables)

let numeriDiLanci = 0

while (lancio !== 6) {
  const tentativo = Math.ceil(Math.random() * 6)
  console.log('Ho tirato il dado: è uscito ' + tentativo)
  lancio = tentativo // torna un intero tra 1 e 6
  numeriDiLanci = numeriDiLanci + 1
}

// che questi due console log qui sotto verranno eseguiti SE E SOLO è uscito 6!
console.log('Ho fatto 6 con il dado!')
console.log('Mi ci sono voluti ' + numeriDiLanci + ' lanci.')

// voglio lanciare il dado fino a che non restituirà un 6
// Math.random() genera un numero più o meno nell'intervallo tra 0.00001 e 0.99999

// Math.random() * 6 è qualcosa tipo 0.00006 e 5.999999

// Math.ceil() arrotonda un numero all'intero immediatamente successivo (per eccesso)
// Math.ceil(3.456) // 4
// Math.ceil(93.1) // 94

// Math.random() * 7 // 0.00001 e 6.99999 --> 0 e 6 Math.floor()
