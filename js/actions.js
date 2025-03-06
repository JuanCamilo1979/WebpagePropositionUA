const input = document.getElementById("es-search-form-input");
const container = document.getElementById("search-app");

input.addEventListener("focus", () => {
    container.classList.add("expanded");
});

input.addEventListener("blur", () => {
    container.classList.remove("expanded");
});