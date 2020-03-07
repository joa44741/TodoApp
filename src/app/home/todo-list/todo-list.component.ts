import { Component, OnInit, ViewChild } from "@angular/core";

export interface Todo {
    shortText: string;
    longText: string;
    done: boolean;
}


@Component({
    selector: "ns-todo-list",
    templateUrl: "./todo-list.component.html"
})
export class TodoListComponent implements OnInit {

    todos: Array<Todo> = [{ shortText: "Todo1", longText: "Todo1 must be done", done: true },
    { shortText: "Todo2", longText: "Todo2 must be done", done: false }];


    constructor() { }

    ngOnInit() {
    }
    todoDone(todo: Todo) {
        console.log(`${todo.shortText} before: ${todo.done}`);
        todo.done = !todo.done;
        console.log(`${todo.shortText} after: ${todo.done}`);
    }
}
