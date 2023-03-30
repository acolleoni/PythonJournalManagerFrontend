import { Component, OnInit } from '@angular/core';
import { IssuesDTO } from 'src/app/dto/issuesDTO';
import { IssuesService } from 'src/services/issues.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit{


  constructor(private issuesService: IssuesService) {
  }

  numeri: IssuesDTO[];

  ngOnInit(): void {
    this.issuesService.getall().subscribe(numeri => this.numeri = numeri, (e) => console.log(e), () => console.log(this.numeri));

  }



}
