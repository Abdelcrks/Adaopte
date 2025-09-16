
const form = document.querySelector("#form")
const sectionResult = document.querySelector("#result")
const select = document.querySelector("#pet-select")
const input = document.querySelector("#city-input")
console.log(sectionResult)



// ---------- pagination ----------//

const next = document.querySelector("#next")
const prev = document.querySelector("#prev")

let pets = []
let data = pets
let page = 1
const perPage = 10



const showCard = (list) => {
    sectionResult.textContent = ""

    list.forEach(pet => {
        const article = document.createElement("article")
        sectionResult.appendChild(article)
        article.className = "card"

        const img = document.createElement("img")
        article.appendChild(img)
        img.src = pet.imageUrl
        img.alt = `${pet.name}, ${pet.type} ${pet.age}`


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



const renderPage = ()=>{
    const start = (page - 1) * perPage // -1 car tblx commence à 0
    const slice = data.slice(start, start + perPage)
    showCard(slice)

    prev.disabled = page === 1
    next.disabled = start + perPage >= data.length

}

prev.addEventListener("click", () =>{
    if(page >1 ){
        page--
        renderPage()
    }
})

next.addEventListener("click", () =>{
    if(page * perPage < data.length){
        page++ 
        renderPage()
    }
})


// pas de resultats

const showNoResult = () => {

    const alreadyMsg = document.querySelector(".no-result")

    if (alreadyMsg)
        alreadyMsg.remove()
    
    const noResult = document.createElement("p")
    noResult.classList.add("no-result")
    noResult.textContent = "Pas de résultat."
    form.appendChild(noResult)
}



const loadPetsAndInit = async () => {
    try {

        const response = await fetch("../data/pets.json")
        pets = await response.json()

        const params = new URLSearchParams(location.search)
        const type = params.get("type") || ""
        const city = (params.get("city") || "").trim()

        if (type){
            select.value = type 
        }
        if (city){
            input.value = city 
        }


    if (type && city) {
    data = pets.filter(pet => pet.type === type && pet.city.toLowerCase()=== city.toLowerCase());
    page = 1;
  } else {
    data = pets;
    page = 1;
  }
  renderPage();


    } catch (error) {
        console.log(error, 'erreur')
    }
}

loadPetsAndInit()




form.addEventListener("submit", (event) => {
    event.preventDefault()

    const alreadyMsg = document.querySelector(".no-result")
    if (alreadyMsg) alreadyMsg.remove()

    const animal = select.value
    const city = input.value.trim()

    const resultInputAndSelect = pets.filter(pet => pet.type === animal && pet.city.toLowerCase() === city.toLowerCase())
    
    if(resultInputAndSelect.length === 0){
            sectionResult.textContent=""
             showNoResult()
             
             prev.disabled = true
             next.disabled = true

             return
    }

    data = resultInputAndSelect
    page = 1

    renderPage()
    
})