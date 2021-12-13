function substituirPares(array) {
  if(!array) return -1
  if(!array.length) return -1;

  for (let i in array) {
    if (array[i] === 0) {
      console.log("Já é um zero!")
    } else if (array[i] % 2 === 0) {
        console.log(`Substituindo ${array[i]} por 0`)
        array[i] = 0
    }
  }
  return array;
}

let array = [0,2,3,5,6,10,14,21,25,29,30]
console.log(substituirPares(array))
