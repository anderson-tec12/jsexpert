console.log(true + 2) // true = 1 

console.log(true - 2) // true = 1 

console.log('21' + true)  

console.log('21' - true)  

console.log(9999999999999999)

console.log(0.1 + 0.2)  

console.log(3 > 2)  
console.log(2 > 1)  
console.log(3 > 2 > 1)  

console.log('21' - - 1)

console.log('1' == 1)  
console.log('1' === 1)  

console.log('B'+'a'+ + "a" +"a")

console.log(typeof String(123))
console.log(typeof (123 + ''))


if(null || 1){
  console.log('AE!')
}

if('Hello' || 1){
  console.log('AE!')
}

// ----------------------------

const item = {
  name: 'Anderson',
  age:30,
  toString(){
    return `Name: ${this.name}, Age:${this.age}`
  },
  valueOf(){
    return 007
  }
}

// Com os objetos o comportamento é diferente 
// se tentar fazer uma operção numerica ele tenta chamar no objeto 
// valueOf caso não tenha ele chama o toString
// ja se for uma string ele tenta chamar o toString
console.log('item', item + 0)
console.log('item', ''.concat(item) )
