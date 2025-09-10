import { pets } from './pets.js'
// console.log(pets);


const form = document.querySelector("#form")
const select = document.querySelector("#pet-select")
const input = document.querySelector("#city-input")
const result = document.querySelector("#result")

console.log(form)
console.log(select)
console.log(input)
console.log(result)





// Message si pas de resultat//

const showNoResult = () => {

        const alreadyMsg = document.querySelector(".no-result")

        if (alreadyMsg)
            alreadyMsg.remove()
        
        const noResult = document.createElement("p")
        noResult.classList.add("no-result")
        noResult.innerText = "Pas de résultat."
        form.appendChild(noResult)
}


// ecouteur d'evenement formulaire //

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const animal = select.value
    const city = input.value.trim()

    const resultInputAndSelect = pets.filter(pet => pet.type === animal && pet.city === city)
    
    if(resultInputAndSelect.length === 0){
             showNoResult()
             return
    }


    window.location.href= "pages/j_adopte.html"


})

