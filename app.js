
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


let myLeads = []


const saveLead = () => {
   if (inputEl.value) {
      myLeads.push(inputEl.value)

      inputEl.value = ""
      console.log(myLeads)
      renderList()
   }
}

const renderList = () => {
   let listItems = ""
   for (let i = 0; i < myLeads.length; i++) {
      // listItems += "<li>" + "<a target='_blank' href='#'>" + myLeads[i] + "</a>" + "</li>"
      listItems += `<li><a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`
   }
   ulEl.innerHTML = listItems
}



inputBtn.addEventListener("click", saveLead)