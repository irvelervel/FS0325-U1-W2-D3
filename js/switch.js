// COSTRUTTO SWITCH

// Il costrutto switch fa parte del regno della logica condizionale.
// Non è altro che uno "sugar coating" (una maniera più elegante e mantenibile) sopra
// il concetto di if/else if/else if etc.
// Non si tratta di niente di nuovo, solo di una sintassi più leggibile

const firstName = 'Amelio'

// immaginiamo di dover calcolare le ore di studio intenso necessarie per passare
// un esame all'università
let hoursOfStudy

// IF/ELSE IF
// if (firstName === 'Giovanni') {
//   hoursOfStudy = 30
// } else if (firstName === 'Stefano') {
//   hoursOfStudy = 50
// } else if (firstName === 'Amelio') {
//   hoursOfStudy = 15
// } else if (firstName === 'Mario') {
//   hoursOfStudy = 0
// } else {
//   hoursOfStudy = 20
// }

// SWITCH
switch (firstName) {
  case 'Giovanni':
    hoursOfStudy = 30
    break // break vuol dire "esci dallo switch"
  case 'Stefano':
    hoursOfStudy = 50
    break
  case 'Amelio':
    hoursOfStudy = 15
    // come Federico suggerisce, è possibile annidare altre condizioni
    // o altri ragionamenti in ogni casistica!
    if (true) {
      console.log('Federico, si può fare!')
    }
    break
  case 'Mario':
    hoursOfStudy = 0
    break
  default:
    // nel caso nessuno dei case predecenti sia stato raggiunto
    // prenditi questo bel valore di default
    hoursOfStudy = 20
}

console.log(
  "Per passare l'esame ho dovuto studiare ben " + hoursOfStudy + ' ore!'
)
