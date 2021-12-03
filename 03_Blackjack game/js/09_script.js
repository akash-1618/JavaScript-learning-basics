// 1)
// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// // let playerName = "Anon"
// // let playerChips = 145
// // let playerEl = document.getElementById("player-el")
// // playerEl.textContent = playerName + ": $" + playerChips
// let player = {
//     name: "Anon",
//     chips: 145
// }
// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips
// console.log(cards)
// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random() * 13) + 1
//     if (randomNumber === 1) {
//         return 11
//     }
//     // else if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13) {
//     //     return 10
//     // } 
//     else if (randomNumber > 10) {
//         return 10
//     } else {
//         return randomNumber
//     }
// }
// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
//     renderGame()
// }
// function renderGame() {
//     cardsEl.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }
// function newCard() {
//     // Only allow the player to get a new card if they are alive and does NOT have Blackjack
//     if (isAlive === true && hasBlackJack === false) {
//         let card = getRandomCard()
//         sum += card
//         cards.push(card)
//         renderGame()
//     }
// }

// 2)
// // Objects - store data in-depth - composite / complex data type
// // key-value pairs
// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 19,
//     creator: "Anon",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }
// console.log(course.tags)
//     // console.log( course["tags"] )

// 3)
// // Create an object that represents an airbnb castle listing.
// // It should contain at least one boolean, one string, one number, and one array
// // Log out at least two of the keys using the dot notation
// let airbnb = {
//     name: "San Giusto Abbey",
//     price: 173,
//     isAvailable: true,
//     category: ["castle"],
//     features: ["guests", "bedrooms", "beds", "baths"]
// }
// console.log(airbnb.name)
// console.log(airbnb.isAvailable)