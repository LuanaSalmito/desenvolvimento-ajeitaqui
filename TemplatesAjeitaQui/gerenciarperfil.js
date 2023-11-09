document.querySelector("header").addEventListener("click", function(event) {
    if (event.target.closest(".perfil-btns")) {
        document.querySelector(".perfil-dropdown").classList.add("ativo");
    } else {
        document.querySelector(".perfil-dropdown").classList.remove("ativo");
    }
});