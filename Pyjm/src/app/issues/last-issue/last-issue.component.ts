import { Component } from '@angular/core';
import { IssueDTO } from 'src/dto/issueDTO';
import { IssuesService } from 'src/services/issues.service';

@Component({
  selector: 'app-last-issue',
  templateUrl: './last-issue.component.html',
  styleUrls: ['./last-issue.component.css'],
  })
export class LastIssueComponent {

  constructor(
    private issuesService: IssuesService,
  ){}

  lastIssue: IssueDTO;

  ngOnInit(): void {
    this.getLastIssueArticle();
  }

  getLastIssueArticle() {
    this.issuesService.getLastIssue().subscribe(
      (lastIssue) => {this.lastIssue = lastIssue,   console.log(this.lastIssue);},
      (e) => console.log(e)

    );
  }


}
