const readline = require('node:readline/promises');

async function juegoAdivinanza() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        // Paso 1: Pedir número objetivo
        const objetivo = await rl.question('Ingrese el número a adivinar (N): ');
        const N = parseInt(objetivo);

        if (isNaN(N)) {
            console.log('¡Debe ser un número!');
            return;
        }

        // Paso 2: Lógica del juego
        let intentos = 0;
        while (true) {
            const respuesta = await rl.question('Adivina: ');
            const num = parseInt(respuesta);

            if (isNaN(num)) {
                console.log('¡Ingresa un número válido!');
                continue;
            }

            intentos++;

            if (num === N) {
                console.log(`¡Correcto! Lo lograste en ${intentos} intentos.`);
                break;
            } else {
                console.log(num > N ? 'Menor' : 'Mayor');
            }
        }

    } finally {
        rl.close();
    }
}

juegoAdivinanza();