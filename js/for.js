// Il ciclo for rappresenta una struttura in grado di ripetere l'esecuzione di un
// blocco di codice un numero assolutamente PREDETERMINATO di volte.
// Rappresenta largamente la tipologia di ciclo più usata, anche perchè andrà
// a "braccetto" con l'esplorazione di una struttura dati che abbiamo esplorato: GLI ARRAY

// la sintassi del for è:
// for(creazione del contatore; condizione da controllare; incremento del contatore)
for (let i = 0; i < 10; i++) {
  // qui va il codice
  console.log('CIAO ' + i)
}

console.log('FINITO IL FOR!')

// varianti "strane"
for (let i = 1; i <= 5; i += 2) {
  console.log('HELLO ' + i)
}
