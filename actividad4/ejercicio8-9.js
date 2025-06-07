let facturacionTotal = 0;
let litrosArticulo1 = 0;
let facturas600 = 0;

// Simular 5 facturas (modificar según entrada real)
const facturas = [
  { codigo: 1, litros: 100, precio: 5 },
  { codigo: 2, litros: 200, precio: 3 },
  { codigo: 1, litros: 50, precio: 10 },
  { codigo: 3, litros: 150, precio: 4 },
  { codigo: 2, litros: 80, precio: 8 }
];

facturas.forEach(factura => {
  const total = factura.litros * factura.precio;
  facturacionTotal += total;
  if (factura.codigo === 1) litrosArticulo1 += factura.litros;
  if (total > 600) facturas600++;
});

console.log(`Facturación total: ${facturacionTotal}`);
console.log(`Litros artículo 1: ${litrosArticulo1}`);
console.log(`Facturas >600: ${facturas600}`);