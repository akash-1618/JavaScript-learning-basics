// 1)
// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards
// let firstCard = 8
// let secondCard = 9
// let sum = firstCard + secondCard
// console.log(sum)


// 2) if else statement
// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// console.log(sum)
// if (sum < 21) {
//     console.log("Do you want to draw a new card?")
// } else if (sum === 21) {
//     console.log("BLACKJACK!!!")
// } else {
//     console.log("You've lost")
// }

// 3)
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases
// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"
// let age = 21
// if (age < 21) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

// 4)
// // Check if the person is elegible for a birthday card from the King! (100)
// let age = 2021
//     // if less than 100    -> "Not elegible"
//     // else if exactly 100 -> "Here is your birthday card from the King!"
//     // else                -> "Not elegible, you have already gotten one"
// if (age < 100) {
//     console.log("Not eligible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not eligible, you have already gotten one")
// }

// 5)
// let firstCard = 10
// let secondCard = 7
// let sum = firstCard + secondCard
//     // Write the conditional according to these rules:
//     // if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
//     // else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
//     // else -> "You're out of the game! 😭"
// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
// } else {
//     console.log("You're out of the game! 😭")
// }

// 6)
// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// let hasBlackJack = false
// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
//     hasBlackJack = true
// } else {
//     console.log("You're out of the game! 😭")
// }
// // CASH OUT!
// console.log(hasBlackJack)

// 7)
// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard + 22
// let hasBlackJack = false
//     // 1. Create a variable called isAlive and assign it to true
//     // 2. Flip its value to false in the appropriate code block 
//     // 3. Log it out to check that you're doing it right
// let isAlive = true
// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
//     hasBlackJack = true
// } else {
//     console.log("You're out of the game! 😭")
//     isAlive = false
// }
// console.log(isAlive)

// 8)
// console.log(4 === 3) // false
// console.log(5 > 2) // false 
//     //err.. 5 is greater than 2 fool
// console.log(12 > 12) // false
// console.log(3 < 0) // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) // true
// console.log(3 <= 2) // false

// 9)
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true
let message = ""
    // 1. Declare a variable called message and assign its value to an empty string
    // 2. Reassign the message variable to the string we're logging out
    // 3. Log it out!
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"

} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}
console.log(message)