import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, ModalDialogService } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoEditDialogComponent } from "./todo-edit-dialog/todo-edit-dialog.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,

        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        TodoListComponent,
        TodoEditDialogComponent
    ],
    entryComponents: [
        TodoEditDialogComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        ModalDialogService
    ]
})
export class HomeModule { }
