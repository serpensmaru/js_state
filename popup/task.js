function setCookie(name, val) {
    //  Время жизни куки 1 день
    let date = new Date(Date.now() + 86400e3)
    date = date.toUTCString()
    document.cookie = `${name}=${encodeURIComponent(val)}; expires=${date}`
}

function getCookie(name) {
    const pairs = document.cookie.split("; ")
    const cookie = pairs.find(p => p.startsWith(`${name}=`))
    const res = cookie ? true : false
    return res
}


const wind = document.querySelector(".modal")

if (!getCookie("valid")) {
    wind.classList.add("modal_active")
}

const closeWind = wind.querySelector(".modal__close")

closeWind.addEventListener("click", () => {
    wind.classList.remove("modal_active")
    setCookie("valid", "true")
    console.log(document.cookie)
})



