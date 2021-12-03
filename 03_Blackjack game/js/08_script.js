// 1)
// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//     renderGame()
// }
// function renderGame() {
//     cardsEl.textContent = "Cards: "
//         // Create a for loop that renders out all the cards instead of just two
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
//     let card = 6
//     sum += card
//     cards.push(card)
//     console.log(cards)
//     renderGame()
// }

// 2)
// let player1Time = 102
// let player2Time = 107
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// 3)
// // Write a function that returns the total race time
// // Call/invoke the function and store the returned value in a new variable
// // Finally, log the variable out
// let player1Time = 102
// let player2Time = 107

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }
// let totalTime = getTotalRaceTime()
// console.log(totalTime)



// 4)
// // 2. Use getRandomCard() to set the values of firstCard and secondCard
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// // 1. Create a function, getRandomCard(), that always returns the number 5
// function getRandomCard() {
//     return 5
// }
// function startGame() {
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
//     // 3. Use the getRandomCard() to set the value of card
//     let card = getRandomCard()
//     sum += card
//     cards.push(card)
//     console.log(cards)
//     renderGame()
// }

// 5)
// let randomNumber = Math.random()
// console.log(randomNumber)

// 6)
// dice function
// let randomNumber = Math.random() * 6
// console.log(randomNumber)

// 7)
// let flooredNumber = Math.floor(3.45632)
// let flooredNumber = Math.floor(-3.45632)
// console.log(flooredNumber)

// 8)
// randomNumber = Math.floor(Math.random() * 6)
// console.log(randomNumber)

// 9)
// // Try to modify the expression so that we get a range from 1 to 6
// let randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber)

// 10)
// // Create a function, rollDice(), that returns a random number between 1 and 6
// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1
// }
// console.log(rollDice())

// 11)
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// // Make this function return a random number between 1 and 13
// function getRandomCard() {
//     return (Math.floor(Math.random() * 13) + 1)
// }
// function startGame() {
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
//     let card = getRandomCard()
//     sum += card
//     cards.push(card)
//     renderGame()
// }

// 12)
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// function getRandomCard() {
//     // if 1     -> return 11
//     // if 11-13 -> return 10
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
//     let card = getRandomCard()
//     sum += card
//     cards.push(card)
//     renderGame()
// }

// 13)
// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
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
//         // Generate two random numbes
//         // Re-assign the cards and sum variables so that the game can start
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
//     let card = getRandomCard()
//     sum += card
//     cards.push(card)
//     renderGame()
// }

// 14)
// let hasCompletedCourse = false
// let givesCertificate = true
// // if (hasCompletedCourse === true) {
// //     if (givesCertificate === true) {
// //         generateCertificate()
// //     }
// // }
// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }
// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// 15)
// let hasSolvedChallenge = false
// let hasHintsLeft = false
//     // Create an if statement that checks that both variables are false.
//     // If so, run the showSolution() function
// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }
// function showSolution() {
//     console.log("Showing the solution....")
// }

// 16)
// // Create two boolean variables, likesDocumentaries and likesStartups
// // Use an OR statement (||) to call recommendMovie() if either of those variables are true
// let likesDocumentaries = true
// let likesStartups = false
// if (likesDocumentaries === true || likesStartups === false) {
//     recommendMovie()
// }
// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }

// 17)
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    }
    // else if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13) {
    //     return 10
    // } 
    else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    // Only allow the player to get a new card if they are alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}