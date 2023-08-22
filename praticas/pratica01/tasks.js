let tasks = [{id: 0, name: "Correr", completed: true}, {id: 1, name: "Dormir", completed: false}, {id: 2, name: "Estudar", completed: false}];


const getTasks = () =>{
return tasks;
}

const addTasks = (taskName) => {
    let tarefa = {id: tasks.length, name: taskName, completed: false }
    tasks.push(tarefa);    
    return tasks;
}

const removeTask = (taskId) => {
    let arrayNovo = tasks.filter(x => x.id !== taskId)
    console.log(arrayNovo)   
    tasks = arrayNovo;
    return tasks;
}

const updateTasks = (taskId, newObj) => {
    let updateTask = tasks.findIndex(x => x.id == taskId);
    
    tasks[updateTask] = {...tasks[updateTask], ...newObj}
console.log(tasks[updateTask])
    
    return tasks;
}



export {getTasks, addTasks, removeTask, updateTasks};