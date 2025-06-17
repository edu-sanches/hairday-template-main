import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Date atual para o input
const inputDate = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual
selectedDate.value = inputDate

// Define a data mínima como sendo a atual
selectedDate.min = inputDate

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        // Recuperando o nome do cliente
        const name = clientName.value.trim()
        
        // Exibe um alerta para informar um nome
        if(!name) {
            return alert("Informe o nome do cliente")
        }

        // Recupera o horário selecionado
        const hourSelected = document.querySelector(".hour-selected")
        
        // Exibe um alerta caso nenhum horario selecionado
        if(!hourSelected) {
            return alert("Selecione um horário")
        }
        
        // Recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")
        
        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // Gera um ID
        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when
        })

    } catch (error) {
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
}