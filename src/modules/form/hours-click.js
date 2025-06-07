export function hoursCLick() {
    const hours = document.querySelectorAll(".hour-available")

    hours.forEach(( available ) => {
        available.addEventListener("click", function(selected) {

            // Remove a classe "hour-selected" de todas as li não selecionadas
            hours.forEach(( hour ) => {
                hour.classList.remove("hour-selected")
            })
            
            this.classList.add("hour-selected")
        })
    })
}