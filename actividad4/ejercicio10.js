// Parte 1: Sueldo máximo
const sueldos = [2500, 3000, 1800, 4200, 3500];
console.log(`Sueldo máximo: ${Math.max(...sueldos)}`);

// Parte 2: Contador con E
for (let i = 0; i <= 99999; i++) {
  const str = i.toString().padStart(5, '0');
  const contador = str.split('').map(d => d === '3' ? 'E' : d).join('-');
  console.log(contador);
}