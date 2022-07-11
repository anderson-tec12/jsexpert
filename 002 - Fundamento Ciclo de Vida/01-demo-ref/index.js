'strict mode'

let counter = 0
let counter2 = counter

counter2++


// para variaveis do tipo primitivos é copiado o valor e o que faz no counter2 nao interfere no counter
console.log(counter)
console.log(counter2)
console.log("########################################################")

const item = {counter:0}
const item2 = item

item2.counter++

// para objetos e arrays os dados não são copiados e sim usado uma referencia de memoria
// com isso as nudança se aplica em ambas variaveis pois elas usam o mesmo endereço de memoria
console.log(item)
console.log(item2)