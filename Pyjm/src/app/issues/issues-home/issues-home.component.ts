import { Component, OnInit } from '@angular/core';
import { IssuesService } from 'src/services/issues.service';

@Component({
  selector: 'app-issues-home',
  templateUrl: './issues-home.component.html',
  styleUrls: ['./issues-home.component.css']
})
export class IssuesHomeComponent implements OnInit{

  constructor(private issuesService: IssuesService) {
  }

  articoli: any;

  ngOnInit(): void {
    this.issuesService.getall().subscribe(articoli => this.articoli = articoli, (e) => console.log(e), () => console.log(this.articoli));

  }

}
