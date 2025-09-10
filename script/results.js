import { pets } from './pets.js'




const form = document.querySelector("#form")
const sectionResult = document.querySelector("#result")
const select = document.querySelector("#pet-select")
const input = document.querySelector("#city-input")
console.log(sectionResult)











const showCard = (list) => {
    sectionResult.textContent = ""
    list.forEach(pet => {
        const article = document.createElement("article")
        sectionResult.appendChild(article)
        article.className = "card"

        const img = document.createElement("img")
        article.appendChild(img)
        img.src = pet.imageUrl


        const divOverlay = document.createElement("div")
        article.appendChild(divOverlay)
        divOverlay.classList = "overlay"

        const h3 = document.createElement("h3")
        divOverlay.appendChild(h3)
        h3.textContent = pet.name

        const information = document.createElement("p")
        divOverlay.appendChild(information)
        information.textContent = `${pet.type} ${pet.age}`

        const informationCity = document.createElement("p")
        divOverlay.appendChild(informationCity)
        informationCity.textContent = `${pet.city} ${pet.zipcode}`

        const description = document.createElement("p")
        description.textContent = pet.description
        divOverlay.appendChild(description)

        const btnAdopt = document.createElement("button")
        btnAdopt.textContent = `Rencontrer`
        btnAdopt.classList.add("btn")
        divOverlay.appendChild(btnAdopt)
    })
}


const showNoResult = () => {

    const alreadyMsg = document.querySelector(".no-result")

    if (alreadyMsg)
        alreadyMsg.remove()
    
    const noResult = document.createElement("p")
    noResult.classList.add("no-result")
    noResult.textContent = "Pas de résultat."
    form.appendChild(noResult)
}


const params = new URLSearchParams(location.search)
const type = params.get("type") || ""
const city = (params.get("city") || "").trim()


if (type) select.value = type
if (city) input.value = city



if (type && city) {
    const typeAndCity = pets.filter(pet => pet.type === type && pet.city === city)
    showCard(typeAndCity)
}else{
    showCard(pets)
}


form.addEventListener("submit", (event) => {
    event.preventDefault()


    const alreadyMsg = document.querySelector(".no-result")
    if (alreadyMsg) alreadyMsg.remove()


    const animal = select.value
    const city = input.value.trim()

    const resultInputAndSelect = pets.filter(pet => pet.type === animal && pet.city === city)
    
    if(resultInputAndSelect.length === 0){
            sectionResult.textContent=""
             showNoResult()
             return
    }

    showCard(resultInputAndSelect)
    
})


