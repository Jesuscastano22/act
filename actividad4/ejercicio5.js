const readline = require('node:readline/promises');

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let positivos = 0, negativos = 0, ceros = 0;
    let sumaPositivos = 0, sumaNegativos = 0;

    console.log("Ingrese 10 números (pueden ser positivos, negativos o cero):");

    // Pedir 10 números
    for (let i = 1; i <= 10; i++) {
        const respuesta = await rl.question(`Número ${i}: `);
        const num = parseFloat(respuesta);

        if (isNaN(num)) {
            console.log("¡Entrada inválida! Ingrese un número.");
            i--; // Repetir la iteración
            continue;
        }

        if (num > 0) {
            positivos++;
            sumaPositivos += num;
        } else if (num < 0) {
            negativos++;
            sumaNegativos += num;
        } else {
            ceros++;
        }
    }

    // Calcular medias
    const mediaPositivos = positivos > 0 ? (sumaPositivos / positivos).toFixed(2) : 0;
    const mediaNegativos = negativos > 0 ? (sumaNegativos / negativos).toFixed(2) : 0;

    // Mostrar resultados
    console.log("\nResultados:");
    console.log(`- Media de positivos: ${mediaPositivos}`);
    console.log(`- Media de negativos: ${mediaNegativos}`);
    console.log(`- Cantidad de ceros: ${ceros}`);

    rl.close();
}

main();