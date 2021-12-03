// 1)
// let firstCard = 10
// let secondCard = 4
// let sum = firstCard + secondCard + 0
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.querySelector("#cards-el")
// function startGame() {
//     cardsEl.textContent = "Cards : " + firstCard + " " + secondCard
//     sumEl.textContent = "Sum : " + sum
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
// // 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
// function newCard() {
//     console.log("Drawing a new card from the deck!")
// }


// 2)
// let firstCard = 10
// let secondCard = 4
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.querySelector("#cards-el")
// function startGame() {
//     cardsEl.textContent = "Cards : " + firstCard + " " + secondCard
//     sumEl.textContent = "Sum : " + sum
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
//     console.log("Drawing a new card from the deck!")
//         // 1. Create a card variable, and hard code its value to a number (2-11)
//         // 2. Add the new card to the sum variable
//         // 3. Call startGame()
//     let card = 8
//     sum += card
//     startGame()
// }

// // 3)
// let firstCard = 10
// let secondCard = 4
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.querySelector("#cards-el")
// // Create a new function called startGame() that calls renderGame()
// function startGame() {
//     renderGame()
// }
// function renderGame() {
//     cardsEl.textContent = "Cards : " + firstCard + " " + secondCard
//     sumEl.textContent = "Sum : " + sum
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
//     console.log("Drawing a new card from the deck!")
//     let card = 8
//     sum += card
//     renderGame()
// }

// 4)
// let arr1 = [1, 2, 3]
// console.log(arr1[1])
//     // Array - ordered list of items - coposite / complex data type
//     // Create an array that describes yourself. Use the three primitive data types you've learned
//     // It should contain your name (string), your age (number), and whether you like pizza (boolean)

// let me = ["Anon", 21, false]

// 5)
// let cards = [7, 4]
// cards.push(6)
// console.log(cards)

// 6)
// // Push the newMessage to the messages array, and then log out the array
// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]
// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)
//     // How can you remove the last item in an array? Try to google it!
// messages.pop()
// console.log(messages)

// 7)
// let firstCard = 10
// let secondCard = 4
//     // 1. Create a new array - cards - that contains firstCard and secondCard
// cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.querySelector("#cards-el")

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     // 2. Refer to the cards array when rendering out the cards
//     cardsEl.textContent = "Cards : " + cards[0] + " " + cards[1]
//     sumEl.textContent = "Sum : " + sum
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
//     let card = 8
//     sum += card
//         // Push the card to the cards array
//     cards.push(card)
//     renderGame()
// }

// 8)
// // Count to ten!
// // We need to specify...
// // Where should we START counting?
// // Where is the FINISH line?
// // What's the STEP SIZE we should use?
// //    START           FINISH       STEP SIZE
// for ( let count = 10;  count < 11;  count += 1 )  
//     console.log(count)
// }

// 9)
// // Create a for loop that counts from 10 to 100 in steps of 10
// // Use console.log to log out the numbers
// for (let i = 10; i <= 100; i += 10) {
//     console.log(i)
// }

// 10)
// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "🙌"
// ]
// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i])
// }

// 11)
// let cards = [7, 3, 9]
//     // Create a for loop that logs out all the cards in the array
//     // Use cards.length to specify how long the loop should run
// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i])
// }