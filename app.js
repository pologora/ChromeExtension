
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let myLeads = []

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const renderLeads = () => {
   let listItems = ""
   for (let i = 0; i < myLeads.length; i++) {
      listItems += `<li><a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`
   }
   ulEl.innerHTML = listItems
}

if (leadsFromLocalStorage) {
   myLeads = leadsFromLocalStorage
   renderLeads()
}

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.second.com")
// myLeads = JSON.stringify(myLeads)



const saveLead = () => {
   if (inputEl.value) {
      myLeads.push(inputEl.value)
      inputEl.value = ""
      localStorage.setItem("myLeads", JSON.stringify(myLeads))
      renderLeads()
   }
}




inputBtn.addEventListener("click", saveLead)