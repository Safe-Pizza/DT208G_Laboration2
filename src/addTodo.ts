import type { Todo } from './ITodo';

export class ToDoList {
    private todos: Todo[] = []; //Tom array för todos

    constructor() {
        this.todos = [];
    }

    addTodos(task: string, priority: number): boolean {

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