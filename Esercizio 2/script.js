// Creare un array

const numList = [];



let somma = 0;
// Continua a chiedere numeri all'utente
do {
    somma = 0;
    let nums = parseInt(prompt("Inserisci un numero"));
    numList.push(nums);

    for (let i = 0; i < numList.length; i++) {
        somma += numList[i];
    } 

}
// finchè la somma non da 50
while (somma < 50);


console.log(numList);
