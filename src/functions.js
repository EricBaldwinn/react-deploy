function rollDice(percentage) {
    const roll = Math.floor(Math.random() * 100) + 1;
    return roll <= percentage;
}

function chanceToWin(startingAmt, betamount, numberofbets, percentage) {
    let totalLosses = 0;
    for (let x = 0; x < numberofbets; x++) {
        if (startingAmt >= betamount) {
            if (rollDice(percentage)) {
                startingAmt += betamount * 2;
            } else {
                startingAmt -= betamount;
                totalLosses += 1;
            }
        }
    }
    return { currentbet: startingAmt, totalLosses: totalLosses };
}

export function total(totalRuns, startingAmt, betAmount, numberOfBets, percentage) {
    let numRuns = 0;
    let avg = 0;
    let total = 0;
    let totalLosses = 0;
    for (let x = 0; x < Number(totalRuns); x++) {
        numRuns += 1;
        // console.log(`current bet # ${numRuns}`);
        const {currentbet, totalLosses: losses} = chanceToWin(Number(startingAmt), Number(betAmount), Number(numberOfBets), Number(percentage));
        // console.log(`current bet leftover ${currentbet}`);
        total += currentbet;
        // console.log(`total amount ${total}`);
        totalLosses += losses
    }
    avg = total / numRuns;
    return `average return: $${avg} total amount after bets: $${total} total losses: $${totalLosses}`;
}