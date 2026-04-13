import './style.css'
import { ToDoList } from './ToDoList';
import type { Todo } from './ITodo';

const toDoList = new ToDoList(); //Aktivera ToDoList klass

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("add-todos") as HTMLFormElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    addTodo();
  });

});

function addTodo(): void {
  const taskInput = document.getElementById("task") as HTMLInputElement;
  const prioInput = document.getElementById("prio") as HTMLInputElement;

  const task = taskInput.value;
  const priority = parseInt(prioInput.value);

  toDoList.addTodos(task, priority);

  console.log(toDoList);
}

