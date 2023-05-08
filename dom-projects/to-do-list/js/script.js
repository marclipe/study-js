const addTask = document.querySelector('#push').addEventListener('click', () => {
    if (document.querySelector('.newtask input').value.length == 0) {
        alert('Por favor little friend insira a frase!')
    } else {
        document.querySelector("#tasks").innerHTML += ` 
        <div class="task">
            <span id="taskname">
                ${document.querySelector(".newtask input").value}
            </span>
            <button class="delete">
                <i class='bx bxs-trash'></i>
            </button>
        </div>`;

        document.querySelectorAll(".delete").forEach((currentTask) => {
            currentTask.addEventListener("click", function() {
                this.parentNode.remove()
            })
        })
    }  
})