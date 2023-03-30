import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesHomeComponent } from './issues-home/issues-home.component';
import { ArchiveComponent } from './archive/archive.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LastIssueComponent } from './last-issue/last-issue.component';


@NgModule({
  declarations: [
    IssuesHomeComponent,
    ArchiveComponent,
    HeaderComponent,
    FooterComponent,
    LastIssueComponent,
  ],
  imports: [
    CommonModule,
    IssuesRoutingModule
  ]
})
export class IssuesModule { }
