const submitForm = document.querySelector("#emailForm")

submitForm.addEventListener("submit", function(e){
    e.preventDefault()
    const email = document.querySelector("#email").value
    toggleCards()
    console.log("success", email)
})
const formCard = document.querySelector(".container"), successForm = document.querySelector(".success")
const toggleCards = () => {
    formCard.classList.toggle("show")
    successForm.classList.toggle("show")
}

const dismissBtn = document.querySelector("#dismiss")

dismissBtn.addEventListener("click", function(){
    toggleCards()
    document.querySelector("#email").value = ""
})