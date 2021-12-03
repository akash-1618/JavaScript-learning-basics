// 1)
// let myLeads = []
// let oldLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
//     // 1. Grab the SAVE TAB button and store it in a tabBtn variable
// const tabBtn = document.getElementById("tab-btn")
// const tabs = [
//     { url: "https://www.google.com" }
// ]
// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     render(myLeads)
// }
// // 2. Listen for clicks on tabBtn. Log Anon's LinkedIn URL to the console
// tabBtn.addEventListener("click", function() {
//     // console.log(tabs[0].url)
//     // Save the url instead of logging it out
//     myLeads.push(tabs[0].url)
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
//     console.log(localStorage.getItem("myLeads"))
// })
// function render(leads) {
//     let listItems = ""
//     for (let i = 0; i < leads.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${leads[i]}'>
//                     ${leads[i]}
//                 </a>
//             </li>
//         `
//     }
//     ulEl.innerHTML = listItems
// }
// deleteBtn.addEventListener("dblclick", function() {
//     console.log("double clicked")
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })
// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     render(myLeads)
//     console.log(localStorage.getItem("myLeads"))
// })

// 2)
let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
    // const tabs = [
    //     { url: "https://www.google.com" }
    // ]

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    // myLeads.push(tabs[0].url)
    chrome.tabs.query({ active: true, currentWindow: true }, function() {
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            render(myLeads)
        })
        // 
        // localStorage.setItem("myLeads", JSON.stringify(myLeads))
        // render(myLeads)
        // console.log(localStorage.getItem("myLeads"))
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})