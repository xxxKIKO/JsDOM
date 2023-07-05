const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    //backticks son estas comillas invertidas que sirven para meter textos o variables en los valores a imprimr
    const content = `   <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;

    list.appendChild(task);

    console.log(content);
}


console.log(btn);


//arrow functions o funciones anonimas
btn.addEventListener("click", createTask);