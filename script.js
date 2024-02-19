const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];



function renderElements(a) {
  
  const tasksList = document.querySelector(".tasks__list");

  tasksList.innerHTML = '';

  for (i = 0; i < a.length; i++) {

    const newTask = createTaskItem(tasks[i].title, tasks[i].type);

    tasksList.appendChild(newTask);

  }
  
}

renderElements(tasks)

function createTaskItem(atividade, urgencia) {
  
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const p = document.createElement("p");
  const button = document.createElement("button");

  button.addEventListener("click", function(event){
    event.preventDefault();

    for (i = 0; i < tasks.length; i++) {
      if (tasks[i].title == atividade) {
        tasks.splice([i], 1)
      }
    }
    
    renderElements(tasks)
  })
  
  
  li.classList.add("task__item");
  div.classList.add("task-info__container");
  if (urgencia === "Urgente") {
    span.classList.add("task-type__span-urgent")
  } else if (urgencia === "Importante") {
    span.classList.add("task-type__span-important")
  } else if (urgencia === 'Normal') {
    span.classList.add("task-type__span-normal")
  }
  button.classList.add("task__button--remove-task");
  
  p.textContent = atividade;
  span.textContent = "•";
  
  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(button);
  
  return li
}

const button = document.querySelector("button");
const inputTask = document.getElementById("input_title");
const inputType = document.querySelector("select");

button.addEventListener("click", function(event){
  event.preventDefault();
  
  const taskTitle = inputTask.value;
  const taskType = inputType.value.charAt(0).toUpperCase() + inputType.value.slice(1);
  
  const newTask = {
    title: taskTitle,
    type: taskType,
  }
  
  tasks.push(newTask);
  renderElements(tasks)
})
