import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "ns-todo-edit-dialog",
    templateUrl: "./todo-edit-dialog.component.html"
})
export class TodoEditDialogComponent implements OnInit {

    shortText: string = "blub";

    constructor(private params: ModalDialogParams) { }

    ngOnInit() {
    }

    save(){
        this.params.closeCallback(this.shortText);
    }

}
