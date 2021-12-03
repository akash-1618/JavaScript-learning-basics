// 1)
// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }



// 2)
// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })

// for (let i = 0; i < myLeads.length; i++) {
//     // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//     // 
//     // create element
//     // set text content
//     // append to ul
//     const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li)
// }


// 3)
// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })
// // 1. Create a variable, listItems, to hold all the HTML for the list items
// // Assign it to an empty string to begin with
// let listItems = ''
// for (let i = 0; i < myLeads.length; i++) {
//     // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
//     // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//     listItems += "<li>" + myLeads[i] + "</li>"
// }
// // 3. Render the listItems inside the unordered list using ulEl.innerHTML
// ulEl.innerHTML = listItems
//     // DOM manipulation comes with a cost

// 4)
// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//         // 2. Call the renderLeads() function
//     renderLeads()
//         // Clear out the input field
//     inputEl.value = ""
// })

// // 1. Wrap the code below in a renderLeads() function
// function renderLeads() {
//     let listItems = ''
//     for (let i = 0; i < myLeads.length; i++) {
//         listItems += "<li>" + myLeads[i] + "</li>"
//     }
//     ulEl.innerHTML = listItems
// }

// 5)
// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     renderLeads()
//     inputEl.value = ""
// })

// function renderLeads() {
//     let listItems = ''
//     for (let i = 0; i < myLeads.length; i++) {
//         // Wrap the lead in an anchor tag (<a>) inside the <li>
//         // Can you make the link open in a new tab?
//         listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
//     }
//     ulEl.innerHTML = listItems
// }

// 6)
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a href='${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}