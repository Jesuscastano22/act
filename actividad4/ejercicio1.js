const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calcularCuadrado() {
    readline.question('Ingrese un número: ', (num) => {
      const n = parseFloat(num);
      if (n < 0) {
        readline.close();
        return;
      }
      console.log(`Cuadrado: ${n * n}`);
      calcularCuadrado(); // Llamada recursiva
    });
  }
  
  calcularCuadrado();