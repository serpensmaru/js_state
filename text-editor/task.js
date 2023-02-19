const editor = document.getElementById("editor")
let editorSave = localStorage.getItem("editorSave")
editor.value = editorSave
editor.addEventListener("input", () => {
    localStorage.setItem("editorSave", editor.value)

})

const reset = document.getElementById("reset")
reset.addEventListener("click", () => {
    reset.closest(".content").querySelector("textarea").value = ""
    localStorage.setItem("editorSave", "")
})