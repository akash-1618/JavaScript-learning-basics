let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


function returnRandom() {
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}
var a = returnRandom()
console.log(a)