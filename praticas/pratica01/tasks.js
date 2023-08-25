const tasks = [
  { id: 0, name: "Correr", completed: true },
  { id: 1, name: "Dormir", completed: false },
  { id: 2, name: "Estudar", completed: false },
];

const getTasks = () => {
  return tasks;
};

const addTasks = (taskName) => {
  const tarefa = { id: tasks.length, name: taskName, completed: false };
  tasks.push(tarefa);
  return tasks;
};

const removeTask = (taskId) => {
  const index = tasks.findIndex((x) => x.id === taskId);
  tasks.splice(index, 1);
  return tasks;
};

const updateTasks = (taskId, newObj) => {
  const updateTask = tasks.findIndex((x) => x.id == taskId);
  tasks[updateTask] = { ...tasks[updateTask], ...newObj };
  console.log(tasks[updateTask]);

  return tasks;
};

export { getTasks, addTasks, removeTask, updateTasks };
