const agg = [
  {
    personaggio: 'Pdor',
    attore: 'Giovanni',
    anno: 1997,
    comparsa: 'Tel chi el telùn',
    citazione: 'Io sono Pdor, figlio di Kmer, della tribù di Istar!',
    caratteristiche: ['epico', 'serio', 'grottesco', 'immaginario'],
  },
  {
    personaggio: 'Dottor Pivetta',
    attore: 'Giacomo',
    anno: 1999,
    comparsa: 'Così è la vita',
    citazione: 'Guanti? 10 professore.',
    caratteristiche: ['psichiatra', 'freddo', 'ironico', 'inquietante'],
  },
  {
    personaggio: 'Nico',
    attore: 'Giovanni',
    anno: 1997,
    comparsa: 'Mai dire gol',
    citazione: "Mi suono l'adagio di Albinoni!",
    caratteristiche: ['rustici', 'esagerati', 'aggressivi', 'stereotipati'],
  },
  {
    personaggio: 'I bulgari',
    attore: 'Aldo, Giovanni e Giacomo',
    anno: 1999,
    comparsa: 'Tel chi el telùn!',
    citazione: '',
    caratteristiche: ['slavi', 'esilaranti', 'atleti', 'macchiette'],
  },
  {
    personaggio: 'Johnny Glamour',
    attore: 'Giovanni',
    anno: 1996,
    comparsa: 'I corti',
    citazione: 'Fa fa fa fa fa, Johnny Glamour!',
    caratteristiche: ['vanitoso', 'stravagante', 'grottesco', 'dj'],
  },
  {
    personaggio: 'Flanagan',
    attore: 'Giovanni',
    anno: 1996,
    comparsa: 'Mai dire gol',
    citazione: 'The pen is on the table!',
    caratteristiche: ['professore', 'inglese', 'sarcastico', 'ironico'],
  },
  {
    personaggio: 'Rolando',
    attore: 'Aldo',
    anno: 1999,
    comparsa: 'Mai dire gol',
    citazione: 'Miiii, non ci posso credereeee!',
    caratteristiche: ['entusiasta', 'ingenuo', 'istrionico'],
  },
  {
    personaggio: 'I chirurghi',
    attore: 'Aldo, Giovanni e Giacomo',
    anno: 1997,
    comparsa: 'Tel chi el telùn',
    citazione: "Doctor, c'ho sotto un cannone!",
    caratteristiche: ['surreali', 'maldestri', 'comici', 'nonsense'],
  },
]

let risultato = ''

for (let i = 0; i < agg.length; i++) {
  // queste operazioni verranno eseguite un totale di 8 volte
  // ogni volta la 1 avrà un valore diverso, da 0 a 7
  risultato += agg[i].personaggio + ' '
  // risultato = risultato + agg[i].personaggio
}

console.log(risultato)

// creiamo un nuovo array per contenere solo i personaggi nati nel 1997
const just1997 = []

for (let i = 0; i < agg.length; i++) {
  if (agg[i].anno === 1997) {
    // entro in queste righe solamente se il personaggio è uscito nel 1997
    just1997.push(agg[i]) // pusho nell'array l'intero oggetto!
  }
}

console.log('PERSONAGGI NATI NEL 1997', just1997)

// creiamo un array con solo i nomi dei personaggi interpretati da Aldo
const justAldo = [] // risultato: ['Rolando']

for (let i = 0; i < agg.length; i++) {
  if (agg[i].attore === 'Aldo') {
    // qui dentro entro solo per gli oggetti dei personaggi interpretati da Aldo
    justAldo.push(agg[i].personaggio)
  }
}

console.log('Personaggi di Aldo', justAldo)

// creiamo un array con solamente l'ultima delle caratteristiche per ogni personaggio
const caratteristiche = []

for (let i = 0; i < agg.length; i++) {
  caratteristiche.push(
    agg[i].caratteristiche[agg[i].caratteristiche.length - 1]
  )
}

console.log('caratteristiche', caratteristiche)
