import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Date atual para o input
const inputDate = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual
selectedDate.value = inputDate

// Define a data mínima como sendo a atual
selectedDate.min = inputDate

form.onsubmit = (event) => {
    event.preventDefault()

    console.log("Enviado")
}