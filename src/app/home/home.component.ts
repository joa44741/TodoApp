import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/common";
import { TodoEditDialogComponent } from "./todo-edit-dialog/todo-edit-dialog.component";


@Component({
    selector: "Home",
    providers: [ModalDialogService],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {


    constructor(private modalService: ModalDialogService, private vcRef: ViewContainerRef) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onAdd() {
        this.createModelView().then((result) => console.log("modal dialog result", result));
    }

    private createModelView(): Promise<any> {
        const today = new Date();
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: "Foo",
            fullscreen: false
        };

        // showModal returns a promise with the received parameters from the modal page
        return this.modalService.showModal(TodoEditDialogComponent, options);
    }
}
