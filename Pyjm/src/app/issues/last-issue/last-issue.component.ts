import { Component } from '@angular/core';
import { IssuesDTO } from 'src/app/dto/issuesDTO';
import { IssuesService } from 'src/services/issues.service';

@Component({
  selector: 'app-last-issue',
  templateUrl: './last-issue.component.html',
  styleUrls: ['./last-issue.component.css']
})
export class LastIssueComponent {

  constructor(private issuesService: IssuesService) {
  }

  numeri: IssuesDTO[];
  lastIssue: IssuesDTO;

  ngOnInit(): void {

    this.getLastIssue();

  }

  getLastIssue() {
    this.issuesService.getall().subscribe(numeri => this.numeri = numeri, (e) => console.log(e), () => this.lastIssue = this.numeri[this.numeri.length - 1]);
  }


}
