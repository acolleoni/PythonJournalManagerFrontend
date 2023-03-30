import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesHomeComponent } from './issues-home/issues-home.component';
import { ArchiveComponent } from './archive/archive.component';
import { LastIssueComponent } from './last-issue/last-issue.component';

const routes: Routes = [
  {
    path:'', component: IssuesHomeComponent, children:[
      {path:'archive', component: ArchiveComponent},
      {path:'', component: LastIssueComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuesRoutingModule { }
