
const qts = document.getElementById("quote")
qts.innerText = "Favourite quote"

const infBx = document.getElementsByClassName("info-box")
infBx[0].style.backgroundColor ="pink"
infBx[1].style.backgroundColor ="pink"
infBx[2].style.backgroundColor ="pink"


const lst = document.getElementsByTagName("li")
lst[2].innerHTML = "Changed"

const ftr = document.querySelectorAll("footer span")
ftr.forEach((element) => {
    element.innerHTML = "Have a great day" 
})