// 1)
// // Create two variables:
// // myLeads -> should be assigned to an empty array
// // inputEl -> should be assigned to the text input field
// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
//     //const can't be reassigned, let can be

// inputBtn.addEventListener("click", function() {
//     console.log("Button clicked from addEventListener")
// })

// 2)
// const playerName = "Per"
// let credits = 45
// credits = credits - 10
// playerName = "something else"
// // If possible, use const. If not, use let.


// 3)
// // If possible, use const. If not, use let.
// // Which variables below should be changed from let to const?
// // The customer wants to order some stuff. Here are the details:
// let basePrice = 520 //const
// let discount = 120 //const
// let shippingCost = 12
// let shippingTime = "5-12 days"
// // Whops! Turns out the shipping will be a bit more complex
// shippingCost = 15
// shippingTime = "7-14 days"
// // Calculating the full price
// let fullPrice = basePrice - discount + shippingCost //const
// // Finally, notifying the customer
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// 4)
// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// // Push the value "www.awesomelead.com" to myArray when the input button is clicked
// inputBtn.addEventListener("click", function() {
//     myLeads.push("www.awesomelead.com")
//     console.log(myLeads)
// })

// 5)
// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     // Push the value from the inputEl into the myLeads array 
//     // instead of the hard-coded "www.awesomeleads.com" value
//     // Google -> "get value from input field javascript"

//     // const inputFieldValue = document.getElementById("input-el").value
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })

// 6)
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
        myLeads.push(inputEl.value)
        console.log(myLeads)
    })
    // Log out the items in the myLeads array using a for loop
for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
}