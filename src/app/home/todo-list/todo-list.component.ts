import { Component, OnInit, ViewChild } from "@angular/core";
import { TodoService } from "../../services/todoService";
import { Todo } from "../../entity/Todo";


@Component({
    selector: "ns-todo-list",
    templateUrl: "./todo-list.component.html"
})
export class TodoListComponent implements OnInit {

    todos: Array<Todo> = [{ shortText: "Todo1", longText: "Todo1 must be done", done: true },
    { shortText: "Todo2", longText: "Todo2 must be done", done: false }];


    constructor(private todoService: TodoService) { }

    ngOnInit() {
    }


    checkedChange(event, todo: Todo) {
        const value = event.object.checked;
        console.log("checkedChange new value:", value);
        if (todo.done === value) {
            console.log("initial checkedChange event.");

            return;
        }
        todo.done = value;
        this.todoService.updateTodo(todo);
        // console.log("checkedChange:", this.checkTest);
    }
}
