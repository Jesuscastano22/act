// Generar los primeros 10 números impares
const numerosImpares = [];
for (let i = 1, contador = 0; contador < 10; i += 2, contador++) {
  numerosImpares.push(i);
}

// Mostrar el resultado en la consola
console.log("Los primeros 10 números impares son:");
console.log(numerosImpares.join(", "));