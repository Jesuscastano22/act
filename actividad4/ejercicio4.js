const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Número para factorial: ', (n) => {
    let factorial = 1;
    for (let i = 2; i <= n; i++) factorial *= i;
    console.log(`Factorial de ${n}: ${factorial}`);
    rl.close();
  });