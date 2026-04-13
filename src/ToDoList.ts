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
            this.todos[todoIndex].completed = true;
            this.saveToLocalStorage(this.todos);
        }
    }

    getTodos(): Todo[] {
        return this.todos;
    }

    saveToLocalStorage(todos: Todo[]): void {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    loadFromLocalStorage(): void {
        const storageData = localStorage.getItem("todos");

        if (storageData) {
            this.todos = JSON.parse(storageData);
        }
    }

    removeFromLocalStorage(todoIndex: number): void {
        const newTodos = this.todos;

        if (newTodos.length === 1) {
            localStorage.clear();
        } else {
            newTodos.splice(todoIndex, 1);

            this.saveToLocalStorage(newTodos);
        }
    }
}