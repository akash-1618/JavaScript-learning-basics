// document.getElementById("count").innerText = 5
// is a comment

// let count = 5 // let is used to declare a variable
// console.log(count)

// 1)
// let myAge = 21
// console.log(myAge)
// console.log(count + myAge)

// 2)
// let count = 5 - 7

// 3)
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// 4)
// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console
// 1 human year = 7 dog years

// let myAge = 21
// let humanDogRatio = 7
// myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// 5)
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// let bonusPoints = 50
// bonusPoints += 50
// bonusPoints -= 75
// bonusPoints += 45
// console.log(bonusPoints)

// 6)
// let number = 45
// function logger(x) {
//     console.log(x)
// }
// logger(number)

// 7)
// let lapsCompleted = 0
//     // Create a function that increments the lapsCompleted variable with one
//     // Run it three times
// function increaseLaps() {
//     lapsCompleted = lapsCompleted + 1
// }
// increaseLaps()
// increaseLaps()
// increaseLaps()
// console.log(lapsCompleted)

// 8)
// // intialize the count as 0
// // listen for clicks on the increment button
// // increment the count variable when the button is clicked (log it out)
// // change the count-el in the HTML to reflect the new count
// let count = 0
// let countEl = document.getElementById("count-el")
// function increaseCount() {
//     count += 1
//     countEl.innerText = count
//     console.log(count)
// }

// 9)
// Create a function, save(), which logs out the count when it's called
// let count = 0
// let countEl = document.getElementById("count-el")
// function increaseCount() {
//     count += 1
//     countEl.innerText = count
// }
// function save() {
//     console.log(count)
// }

// 10)
// Create a variable, message, that stores the string: "You have tree new notifications"
// Create a variable, messageToUser, that contains the message we have logged
// let username = "per"
// let message = "You have 3 new notifications"
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// 11)
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "
// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
// let name = "Anon"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// 13)
// 1. Grab the save-el paragrah and store it in a variable called saveEl
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increaseCount() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
        // saveEl.innerText += countStr
    saveEl.textContent += countStr
        // 
    count = 0
    countEl.textContent = count
        // 
}