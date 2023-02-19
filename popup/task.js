const wind = document.querySelector(".modal")

if (!localStorage.getItem("wind")) {
    wind.classList.add("modal_active")
}

const closeWind = wind.querySelector(".modal__close")

closeWind.addEventListener("click", () => {
    wind.classList.remove("modal_active")
    localStorage.wind = "True"
})