import type { ITodo } from "./ITodo.ts";

export class Todo implements ITodo {
    task: string;
    completed: boolean;
    priority: number;

    constructor(task: string, completed: boolean, priority: number) {
        this.task = task;
        this.completed = completed;
        this. priority = priority;
    }
}