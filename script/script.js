import { pets } from './pets.js'
// console.log(pets);


const form = document.querySelector("#form")
const select = document.querySelector("#pet-select")
const input = document.querySelector("#city-input")

console.log(form)
console.log(select)
console.log(input)


// Message si pas de resultat//

const showNoResult = () => {

    const alreadyMsg = document.querySelector(".no-result")

    if (alreadyMsg)
        alreadyMsg.remove()
    
    const noResult = document.createElement("p")
    noResult.classList.add("no-result")
    noResult.textContent = "Pas de résultat."
    form.appendChild(noResult)
}


// ecouteur d'evenement formulaire //

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const animal = select.value
    const city = input.value.trim()

    const resultInputAndSelect = pets.filter(pet => pet.type === animal && pet.city.toLowerCase() === city.toLowerCase())
    
    if(resultInputAndSelect.length === 0){
             showNoResult()
             return
    }

    // if (!animal || !city){
    //     showNoResult()
    //     return
    // }

    const url = new URL("pages/j_adopte.html", location.href)
    url.searchParams.set("type", animal)
    url.searchParams.set("city", city)

    // window.location.href= "pages/j_adopte.html"

    location.href = url.toString()

    
})