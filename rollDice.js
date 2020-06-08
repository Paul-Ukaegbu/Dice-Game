//Dice Game
//Two dice being rolled and totalled.


const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 7 + 1)
    console.log (die1)
    let die2 = Math.floor(Math.random() * 7 + 1)
    console.log(die2)
    return Math.floor(die1 + die2)
}

console.log(rollTheDice())