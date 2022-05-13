// Creiamo l'array
const numArray = [];

const nums = document.getElementById("nums");

// Generiamo numeri random e se ci sono doppioni li escludiamo
while (numArray.length < 10) {
    let num = Math.floor((Math.random() * 100) + 1);
    if (!numArray.includes(num)) {
        numArray.push(num);
    }
}

console.log(numArray);

nums.innerHTML += numArray;