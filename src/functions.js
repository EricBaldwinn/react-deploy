function rollDice(percentage) {
    const roll = Math.floor(Math.random() * 100) + 1;
    return roll <= percentage;
}

function chanceToWin(startingAmt, betamount, numberofbets, percentage) {
    for (let x = 0; x < numberofbets; x++) {
        // console.log('current bet amount', startingAmt)
        if (startingAmt >= betamount) {
            if (rollDice(percentage)) {
                startingAmt += betamount * 2;
            } else {
                startingAmt -= betamount * 2;
            }
        }
    }
    return startingAmt
}

export function total(totalRuns, startingAmt, betAmount, numberOfBets, percentage) {
    let avg = 0;
    let total = 0;
    let totalLosses = 0;
    for (let x = 0; x < Number(totalRuns); x++) {
        let currentbet = chanceToWin(Number(startingAmt), Number(betAmount), Number(numberOfBets), Number(percentage));
        // console.log('ending amount ', currentbet)
        if (currentbet === 0) {
            totalLosses += 1
        } else {
            total += currentbet
        }
    }
    let totalAvg = total / totalRuns;
    avg = total / (totalRuns - totalLosses);
    return `average return of non 0 runs: $${avg.toFixed(2)}
    average return of all total runs: $${totalAvg.toFixed(2)}
    Number of times it hit 0: ${totalLosses} times`;
}