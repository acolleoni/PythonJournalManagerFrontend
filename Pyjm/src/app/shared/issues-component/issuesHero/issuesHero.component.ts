import { Component, Input, OnInit } from '@angular/core';
import { IssueDTO } from 'src/dto/issueDTO';

@Component({
  selector: 'app-issues-hero',
  templateUrl: './issuesHero.component.html',
  styleUrls: ['./issuesHero.component.css']
})
export class IssuesHeroComponent implements OnInit{

  @Input() issue: IssueDTO;
  constructor(){}

  ngOnInit(): void {
    }
}
