import './style.css'
import { ToDoList } from './ToDoList';

const toDoList = new ToDoList(); //Aktivera ToDoList klass

document.addEventListener("DOMContentLoaded", () => {
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

  } else {
    errorEl.textContent = "Båda fälten måste vara ifyllda. Prioritet: 1 - hög till 3 låg."
  }
}