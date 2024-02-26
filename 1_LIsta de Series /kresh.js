// função que adiciona tarefa 
function addTask() {

    // titulo da terefa 
    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle) {

        //clona template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // removendo as classes desnescesaárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona tarefa na lista 
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        // limpar texto do input
        document.querySelector("#task-title").value = "";

        // adicionar evento de remover série
        const removebtn = newTask.querySelector(".remove-btn")
            .addEventListener("click", function () {
                removeTask(this);
                this.style.backgroundColor = " ";
            });

        // adicionar evento de concluir série
        const donebtn = newTask.querySelector(".done-btn")
            .addEventListener("click", function () { completeserie(this); });

    }

}

// função de apagar série
function removeTask(task) {

    task.parentNode.remove(true);

}

// função de completar série
function completeserie(tudo) {

    const completetudo = tudo.parentNode;

    completetudo.classList.toggle("done");



}

// evento de adicionar tarefa 
const addbtn = document.querySelector("#add-btn");

addbtn.addEventListener("click", function (e) {

    e.preventDefault();

    addTask();

});