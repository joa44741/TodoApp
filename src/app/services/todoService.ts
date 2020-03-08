import { Injectable } from '@angular/core';

import { Todo } from "../entity/Todo";

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor() { }

    updateTodo(todo: Todo) {
        console.log("update todo: ", todo.shortText, ", done:", todo.done);
    }

}
