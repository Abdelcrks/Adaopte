import { pets } from './pets.js'

const sectionResult = document.querySelector("#result")
console.log(sectionResult)

const params = new URLSearchParams(location.search)
const type = params.get("type") || ""
const city = (params.get("city") || "").trim()


const results = pets.filter(pet => pet.type === type && pet.city === city)



results.forEach(pet => {
    const article = document.createElement("article")
    sectionResult.appendChild(article)
    article.className ="card"

    const img= document.createElement("img")
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
    information.textContent= `${pet.type} ${pet.age}`

    const informationCity = document.createElement("p")
    divOverlay.appendChild(informationCity)
    informationCity.textContent= `${pet.city} ${pet.zipcode}`

    const description = document.createElement("p")
    description.textContent = pet.description
    divOverlay.appendChild(description)

})

