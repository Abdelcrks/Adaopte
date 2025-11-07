const form = document.querySelector("#form")
const select = document.querySelector("#pet-select")
const input = document.querySelector("#city-input")

console.log(form)
console.log(select)
console.log(input)

const showNoResult = () => {

    const alreadyMsg = document.querySelector(".no-result")

    if (alreadyMsg)
        alreadyMsg.remove()
    
    const noResult = document.createElement("p")
    noResult.classList.add("no-result")
    noResult.textContent = "Pas de résultat."
    form.appendChild(noResult)
}



form.addEventListener("submit", (event) => {
    event.preventDefault()

    const animal = select.value
    const city = input.value.trim()


    if (!animal || !city){
        showNoResult()
        return
    }

    const url = new URL("pages/j_adopte.html", location.href)
    url.searchParams.set("type", animal)
    url.searchParams.set("city", city)

    location.href = url.toString()


})