const search = document.querySelector(".search")
const button = document.querySelector(".button")
const error = document.querySelector(".error")
const todaySearch = document.querySelector(".today-search")
const todayButton = document.querySelector(".today-button")
const todayError = document.querySelector(".today-error")
const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener("click", function () {
    if (re.test(search.value)) {
        search.style.border = "0.625px solid #07043B"
        error.style.display = "none"
    } else {
        search.style.border = "0.625px solid #EF4877"
        error.style.display = "block"
    }
})

todayButton.addEventListener("click", function () {
    if (re.test(todaySearch.value)) {
        todaySearch.style.border = "0.625px solid #07043B"
        todayError.style.display = "none"
    } else {
        todaySearch.style.border = "0.625px solid #EF4877"
        todayError.style.display = "block"
    }
})