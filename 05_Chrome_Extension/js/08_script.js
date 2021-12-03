// 1)
// // template strings/literals
// const recipient = "James"
// // Refactor the email string to use template strings
// // const email = "Hey " + recipient + "! How is it going? Cheers Per"
// const email = `
//     Hey ${recipient}! How is it going? Cheers Anon
// `
// console.log(email)

// 2)
// template strings/literals
const recipient = "James"
    // Create a new variable, sender, and set its value to your name
const sender = "AnonSender"
    // Use your sender variable instead of "Per"
const email = `
    Hey ${recipient}! 
    How is it going? 
        Cheers ${sender}
`
console.log(email)