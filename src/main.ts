import './style.css'
import { ToDoList } from './ToDoList';

const toDoList = new ToDoList(); //Aktivera ToDoList klass

document.addEventListener("DOMContentLoaded", () => {
  writeTodos();
  //Formulär element
  const form = document.getElementById("add-todos") as HTMLFormElement;

  //Lyssnare för submit event
  form.addEventListener("submit", (event) => {
    event.preventDefault(); //Förhindra default-event
    addTodo();
  });

});

function addTodo(): void {
  //Hämta HTML-element
  const taskInput = document.getElementById("task") as HTMLInputElement;
  const prioInput = document.getElementById("prio") as HTMLInputElement;
  const errorEl = document.getElementById("error-message") as HTMLDivElement;
  //Input värden
  const task = taskInput.value;
  const priority = parseInt(prioInput.value);
  //Skicka till klass-funktion
  const validationOk = toDoList.addTodos(task, priority);

  if (validationOk) {
    errorEl.textContent = "";
    //töm inputfält
    taskInput.value = "";
    prioInput.value = "";

    writeTodos();

  } else {
    //felmeddelande
    errorEl.textContent = "Båda fälten måste vara ifyllda. Prioritet: 1 - hög till 3 låg."
  }
}

function writeTodos(): void {
  toDoList.loadFromLocalStorage();
  const todos = toDoList.getTodos();
  const todosEl = document.getElementById("my-todos") as HTMLUListElement;

  todosEl.innerHTML = "";

  if (todosEl) {

    todos.forEach((todo) => {
      const liEl = document.createElement("li") as HTMLLIElement;

      liEl.innerHTML = `Uppgift: ${todo.task} <br>
      Prio: ${todo.priority}<br>`;
      todosEl.appendChild(liEl);

      const buttonEl = document.createElement("button") as HTMLButtonElement;
      buttonEl.classList.add("finish-todo");
      buttonEl.textContent = "Uppgift klar";

      todosEl.appendChild(buttonEl);
    })
  }
}