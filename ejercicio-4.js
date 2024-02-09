// 4.- Invertir un array (10 ptos).
// Escribe un código en el cual dado un arreglo , muestre en consola el arreglo original y el
// mismo pero invertido.
// Ejemplo arreglo original: [23,5,34,56,98,”cadena”,7] el arreglo invertido:
// [7,”cadena”,98,56,34,5,23].

let arrayOriginal = [1, 2, 3, 4, 5];
let arrayInvertido = arrayOriginal.slice().reverse();
console.log(
  `El array original es ${arrayOriginal}, y al invertirlo es ${arrayInvertido}`
);
