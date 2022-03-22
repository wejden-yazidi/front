import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListJournallComponent } from "./list-journall/list-journall.component";



const routes: Routes = [
    {path:"journall",
    component:ListJournallComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournallRoutingModule {}