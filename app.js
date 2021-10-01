
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = []


const saveLead = () => {
   myLeads.push(inputEl.value)
   inputEl.value = ""
   console.log(myLeads)
}

for(let lead of myLeads){
   
}

inputBtn.addEventListener("click", saveLead)