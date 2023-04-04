import { Component, OnInit } from '@angular/core';
import { IssueDTO } from 'src/dto/issueDTO';
import { IssuesService } from 'src/services/issues.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {


  constructor(private issuesService: IssuesService) {
  }

  lastIssue: IssueDTO;

  ngOnInit(): void {

  }

  getLastIssue() {
    this.issuesService.getLastIssue().subscribe(lastIssue => this.lastIssue = lastIssue,
      (e) => console.log(e),
      () => console.log(this.lastIssue));
  }
}
