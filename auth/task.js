const url = "https://students.netoservices.ru/nestjs-backend/auth"
const btnSend = document.getElementById("signin__btn")

let inputList = document.querySelectorAll(".control"),
loginInput = inputList[0],
passInput = inputList[1]

// loginInput.value = "demo"
// passInput.value = "demo"


document.forms.signin__form.addEventListener("submit", (e) => {
    e.preventDefault()

    login = loginInput.value
    password = passInput.value

    let data = new FormData(document.forms.signin__form)


    response = new XMLHttpRequest()
    response.responseType = 'json'

    response.addEventListener("load", () => {
        if (response.readyState === response.DONE) {
            let res = response.response
            const idSpan = document.getElementById("user_id")
            if (res.success) {
                idSpan.textContent = res.user_id
                idSpan.closest(".welcome").classList.add("welcome_active")
                document.getElementById("signin__form").reset()
            } else {
                idSpan.closest(".welcome").classList.remove("welcome_active")
                alert("Неверный логин/пароль")
            }
    }})

    response.open("POST", url)
    response.send(data)

})