import './style.css'
import { ToDoList } from './ToDoList';
import type { Todo } from './ITodo';

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
  //Hämta input-element
  const taskInput = document.getElementById("task") as HTMLInputElement;
  const prioInput = document.getElementById("prio") as HTMLInputElement;
  //Input värden
  const task = taskInput.value;
  const priority = parseInt(prioInput.value);
  //Skicka till klass-funktion
  toDoList.addTodos(task, priority);

  console.log(toDoList);
}

