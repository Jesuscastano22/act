const readline = require('node:readline/promises');

async function mostrarTabla() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        // Paso 1: Pedir el número y validarlo
        let numero;
        do {
            const respuesta = await rl.question('Ingrese un número entre 0 y 10: ');
            numero = parseInt(respuesta);
        } while (isNaN(numero) || numero < 0 || numero > 10);

        // Paso 2: Generar la tabla de multiplicar
        console.log(`\nTabla del ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }

    } finally {
        rl.close();
    }
}

mostrarTabla();