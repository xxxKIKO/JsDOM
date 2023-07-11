import checkComplete from "./components/checkcomplete.js";
import deleteIcon from "./components/deleteicon.js";

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
    console.log(checkComplete());
    const taskContent = document.createElement("div");
    
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    // task.innerHTML = content;

    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);


}


//arrow functions o funciones anonimas
btn.addEventListener("click", createTask);

