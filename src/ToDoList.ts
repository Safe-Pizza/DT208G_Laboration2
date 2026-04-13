import type { Todo } from './ITodo';

export class ToDoList {
    private todos: Todo[] = []; //Tom array för todos

    constructor() {
        this.todos = [];
    }

    addTodos(task: string, priority: number): boolean {
        //validering av prioritet 1-3
        if (![1, 2, 3].includes(priority)) {
            return false;
        }
        //validering av task-input
        if (task === "") {
            return false;
        }
        //skapa ny todo
        const newTodo: Todo = {
            task: task,
            completed: false,
            priority: priority
        }
        //push till todos array
        this.todos.push(newTodo);
        this.saveToLocalStorage(this.todos);
        return true;
    }

    markTodoComplete(todoIndex: number): void {
        if (this.todos[todoIndex]) {
            this.todos[todoIndex].completed = true; //uppdatera completed till true för todo-objekt
            this.saveToLocalStorage(this.todos); //spara till localstorgae
        }
    }

    getTodos(): Todo[] {
        return this.todos; //returnerar todos array
    }

    saveToLocalStorage(todos: Todo[]): void {
        localStorage.setItem("todos", JSON.stringify(todos)); //spara till localstorge
    }

    loadFromLocalStorage(): void {
        const storageData = localStorage.getItem("todos"); //hämta från localstorgae

        if (storageData) {
            this.todos = JSON.parse(storageData); //kovertera till objekt
        }
    }

    removeFromLocalStorage(todoIndex: number): void {
        const newTodos = this.todos; //hämta todosarray

        if (newTodos.length === 1) { //kontroll om array är endas ett värde
            localStorage.clear(); //töm localstorage
            this.todos = []; // töm todos array
        } else {
            newTodos.splice(todoIndex, 1); //ta bort värde ur array

            this.saveToLocalStorage(newTodos); //spara ny array till localstorage
        }
    }
}