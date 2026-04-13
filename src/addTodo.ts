import { Todo } from "./Todo"

export class ToDoList {
    private todos: Todo[] = [];

    constructor() {

    }

    addTodo(task: string, priority: number): boolean {
        if(task === "") {
            return false;
        } else return true;
}
}