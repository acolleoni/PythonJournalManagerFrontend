import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuesHomeComponent } from './issues-home/issues-home.component';
import { ArchiveComponent } from './archive/archive.component';
import { LastIssueComponent } from './last-issue/last-issue.component';
import { SingleArticleComponent } from './single-article/single-article.component';

const routes: Routes = [
  {
    path:'', component: IssuesHomeComponent, children:[
      {path:'', component: LastIssueComponent},
      {path:'archive', component: ArchiveComponent},
      {path: 'article/:id', component: SingleArticleComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuesRoutingModule { }
