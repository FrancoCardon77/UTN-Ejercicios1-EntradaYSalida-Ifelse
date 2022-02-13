/*Escribir un algoritmo que: imprima los numeros del 1 al 100, con la condicion que si el numero a imprimir es multiplo de 3, imprima el string 'Fizz' si el numero es multiplo de 5 imprima: 'Buzz', y si es multiplo de ambos imprima: 'FizzBuzz'*/
let mensajeFizz = "Fizz";
let mensajeBuzz = "Buzz";
let mensajeFizzBuzz = "FizzBuzz";

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(mensajeFizzBuzz);
  } else if (i % 3 === 0) {
    console.log(mensajeFizz);
    if (i % 5 === 0) {
      console.log(mensajeBuzz);
    } else {
      console.log(i);
    }
  }
}
