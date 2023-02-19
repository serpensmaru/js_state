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
    data.append("логин", login)
    data.append("пароль", password)

    response = new XMLHttpRequest()

    response.addEventListener("readystatechange", () => {
        if (response.readyState === response.DONE) {
            let res = JSON.parse(response.response)
            const idSpan = document.getElementById("user_id")
            if (res.success) {
                idSpan.textContent = res.user_id
                idSpan.closest(".welcome").classList.add("welcome_active")
            } else {
                idSpan.closest(".welcome").classList.remove("welcome_active")
                alert("Неверный логин/пароль")
            }
    }})

    response.open("POST", url)
    response.send(data)

})