import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesHomeComponent } from './issues-home/issues-home.component';

const routes: Routes = [
  {
    path:'', component: IssuesHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuesRoutingModule { }
