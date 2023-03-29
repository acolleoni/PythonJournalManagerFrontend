import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IssuesDTO } from 'src/app/dto/issuesDTO';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(protected http: HttpClient) { }

    getall(): Observable<IssuesDTO[]>{
      return this.http.get<IssuesDTO[]>("http://127.0.0.1:8000/" + "issues/");
  }
}
