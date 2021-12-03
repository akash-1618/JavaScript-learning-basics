// 1)
// const welcomeEl = document.getElementById("welcome-el")
// function greetUser() {
//     welcomeEl.textContent = "Welcome back, Anon!"
// }
// greetUser()

// 2)
// const welcomeEl = document.getElementById("welcome-el")
// function greetUser(name) {
//     welcomeEl.textContent = "Welcome back, " + name + "!"
// }
// greetUser("Anon")


// 3)
// Give the function a parameter, greeting, that replaces "Welcome back"
// const welcomeEl = document.getElementById("welcome-el")
// function greetUser(greeting, name) {
//     welcomeEl.textContent = greeting + ", " + name + "!"
// }
// greetUser("Greetings", "Anon")


// 4)
// template string
// const welcomeEl = document.getElementById("welcome-el")
// function greetUser(greeting, name) {
//     // welcomeEl.textContent = greeting + ", " + name + "!"
//     welcomeEl.textContent = `
//         ${greeting}, ${name}! 
//         `
// }
// greetUser("Greetings", "Anon")

// 5)
// add an emoji
// const welcomeEl = document.getElementById("welcome-el")
// function greetUser(greeting, name, emoji) {
//     welcomeEl.textContent = `
//         ${greeting}, ${name} ${emoji}! 
//         `
// }
// greetUser("Greetings", "Anon", "😊")

// 6)
// Create a function, add(), that adds two numbers together and returns the sum
// console.log(add(3, 4)) // should log 7
// console.log(add(9, 102)) // should log 111

// function add(n1, n2) {
//     return n1 + n2
// }

// 7)
// Create a function, getFirst(arr), that returns the first item in the array
// Call it with an array as an argument to verify that it works
function getFirst(arr) {
    return arr[0]
}
let a = ["Apple", "Banana", "Cherry"]
let b = [1, 2, 3, 4]
console.log(getFirst(b))