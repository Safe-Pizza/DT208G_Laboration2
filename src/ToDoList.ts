import type { Todo } from './ITodo';

export class ToDoList {
    private todos: Todo[] = []; //Tom array för todos

    constructor() {
        this.todos = [];
    }

    addTodos(task: string, priority: number): boolean {
        if(![1, 2, 3].includes(priority)) {
            return false; 
        }
        if (task === "") {
            return false;
        }
        const newTodo: Todo = {
            task: task,
            completed: false,
            priority: priority
        }

        this.todos.push(newTodo);
        return true;
    }

    markTodoComplete(todoIndex: number): void {

    }

    getTodos(): Todo[] {

    }

    saveToLocalStorage(): void {

    }

    loadFromLocalStorage(): void {

    }
}