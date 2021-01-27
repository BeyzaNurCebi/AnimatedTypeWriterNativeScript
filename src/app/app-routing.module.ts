import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { AnimatedTypeWriterComponent } from "../app/animated-type-writer/animated-type-writer.component";

const routes: Routes = [
    { path: "", redirectTo: "/animated-type-writer", pathMatch: "full" },
    { path: "animated-type-writer", component: AnimatedTypeWriterComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
