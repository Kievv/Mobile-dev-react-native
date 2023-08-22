import { getTasks, addTasks, removeTask, updateTasks } from "./tasks.js"

const listaTarefas = () => {
    let taskList = getTasks();
    taskList.forEach(x => {
        console.log(`Id da tarefa: ${x.id} \nNome da tarefa: ${x.name} \nEstado da tarefa: ${x.completed == true ? "Completada" : "Não completada"}`)
    })
}

const addTarefa = (task) => {
    addTasks(task)
}

const removerTarefa = (idTarefa) => {
    removeTask(idTarefa)
}

const atualizarTarefa = (id, objTarefa) => {
    updateTasks(id, objTarefa);
}


listaTarefas()
addTarefa("Formatar o PC")

console.log("============================================================")

removerTarefa(0)

console.log("============================================================")

listaTarefas();

console.log("============================================================")

atualizarTarefa(2, {completed: true})

console.log("============================================================")

console.log("============================================================")


listaTarefas()