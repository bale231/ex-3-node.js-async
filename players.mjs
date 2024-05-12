async function getResults() {
    const players = ["Tina", "Jorge", "Julien"];

    for (const player of players) {
        try {
            const result = await luckyDraw(player);
            console.log(result); // Registra il risultato
        } catch (errore) {
            console.error(errore.message); // Gestisce il rifiuto della promises
        }
    }
}

getResults();

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}