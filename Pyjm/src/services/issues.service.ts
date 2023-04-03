import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IssueDTO } from 'src/dto/issueDTO';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(protected http: HttpClient) { }

    getall(): Observable<IssueDTO[]>{
      return this.http.get<IssueDTO[]>("http://127.0.0.1:8000/" + "issues/");
  }

}
