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

// il ciclo for è PREZIOSISSIMO per l'ESPLORAZIONE degli ARRAY!

const names = [
  'Stefano', // 0
  'Amin', // 1
  'Claudio', // 2
  'Anna', // 3
  'Andrea', // 4
  'Cristina', // 5
]

names.length // 6
names[names.length - 1] // sempre l'ultimo elemento dell'array

names[0] // 'Stefano'
names[1] // 'Amin'
names[2] // 'Claudio'
names[3] // 'Anna'
names[4] // 'Andrea'
names[5] // 'Cristina'
// names[6] -> undefined

for (let i = 0; i < names.length; i++) {
  //   al primo giro i vale 0
  //   al secondo giro i vale 1
  //   al terzo giro i vale 2
  //   al quarto giro i vale 3
  //   al quinto giro i vale 4
  //   al sesto giro i vale 5
  console.log(i) // vale da 0 a 5, incrementando di 1
  console.log(names[i]) // vale da 0 a 5, incrementando di 1
}

const pets = [
  {
    // 0
    name: 'Fufy',
    species: 'Cat',
    age: 1,
  },
  {
    // 1
    name: 'Fido',
    species: 'Dog',
    age: 3,
  },
  {
    // 2
    name: 'Poppy',
    species: 'Parrot',
    age: 5,
  },
  {
    // 3
    name: 'Crokky',
    species: 'Crocodile',
    age: 40,
  },
  {
    // 4
    name: 'Webby',
    species: 'Spider',
    age: 0.5,
  },
]

// ciclo for per stampare in console tutte le specie di tutti gli animali
for (let i = 0; i < pets.length; i++) {
  // i parte da 0 e arriva a 4
  // posso usare la i come indice "dinamico" per esplorare il mio array
  // sarà 0 alla prima iterazioni, 1 alla seconda, ..., 4 alla quinta
  //   console.log(i) // 0, 1, 2, 3, 4
  //   console.log(pets[i]) // tutti gli oggetti dell'array, uno alla volta
  console.log(pets[i].species)
}

// ciclo for per calcolare e stampare alla fine in console la somma di tutti le età
let somma = 0
for (let i = 0; i < pets.length; i++) {
  somma = somma + pets[i].age
  //   somma += pets[i].age

  // FUNZIONAMENTO DI QUESTO FOR
  // PRIMO GIRO: somma vale 0; vi addiziono l'età del PRIMO animale (pets[0].age), 1
  // SECONDO GIRO: somma vale 1; vi addiziono l'età del SECONDO animale (pets[1].age), 3
  // TERZO GIRO: somma vale 4; vi addiziono l'età del TERZO animale (pets[2].age), 5
  // QUARTO GIRO: somma vale 9; vi addiziono l'età del QUARTO animale (pets[3].age), 40
  // QUINTO GIRO: somma vale 49; vi addiziono l'età del QUINTO animale (pets[4].age), 0.5
}

console.log('LA SOMMA DELLE ETÀ È', somma) // 49.5

if (pets[3].age < 50) {
  // queste righe di codice verranno eseguite solamente se l'età di Crokky è < 50
  console.log('Crokky ha meno di 50 anni')
} else if (pets[3].age < 60) {
  // delimita delle righe di codice che vengono eseguite solamente se la condizione
  // iniziale NON È VERA (è falsa!) e invece è vera la seconda condizione
} else {
  // se finiamo qui vuol dire che Crokky ha un'età >= 60
}
