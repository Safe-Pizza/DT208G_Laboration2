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
  toDoList.loadFromLocalStorage(); //hämta från localstorage till array
  const todos = toDoList.getTodos(); //hämta array
  const todosEl = document.getElementById("my-todos") as HTMLUListElement; //html element för utskrif

  todosEl.innerHTML = ""; //töm element

  if (todosEl) {

    //loop för att skriva ut alla todos
    todos.forEach((todo, index) => {
      const liEl = document.createElement("li") as HTMLLIElement; //skapa li-element

      liEl.innerHTML = `Uppgift: ${todo.task} <br>
      Prio: ${todo.priority}<br>`;

      const buttonEl = document.createElement("button") as HTMLButtonElement; //skapa uppgiftknapp
      buttonEl.classList.add("finish-todo");
      buttonEl.textContent = "Ej utförd";

      if (todo.completed) { //kontoll om uppgift är utförd
        liEl.style.textDecoration = "line-through";
        buttonEl.classList.replace("finish-todo", "done-todo");
        buttonEl.textContent = `Klar`;
      }

      buttonEl.addEventListener("click", () => { //lyssnare för uppgiftknapp
        toDoList.markTodoComplete(index);
        liEl.style.textDecoration = "line-through";
        buttonEl.classList.replace("finish-todo", "done-todo");
        buttonEl.textContent = `Klar`;
        buttonEl.disabled;
      })

      const buttonDeleteEl = document.createElement("button") as HTMLButtonElement; // skapa tabort knapp
      buttonDeleteEl.classList.add("delete-todo");
      buttonDeleteEl.textContent = "Ta bort";

      buttonDeleteEl.addEventListener("click", () => { //lyssnare för tabort knapp
        toDoList.removeFromLocalStorage(index);

        liEl.remove();
      })

      //skriv ut till DOM
      liEl.appendChild(buttonEl);
      liEl.appendChild(buttonDeleteEl);
      todosEl.appendChild(liEl);
    })
  }
}