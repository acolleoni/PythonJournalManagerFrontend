import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorDTO } from 'src/dto/authorDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(protected http: HttpClient) { }

  getAllAuthors(): Observable<AuthorDTO[]>{
    return this.http.get<AuthorDTO[]>('http://127.0.0.1:8000/issues/authors/')
  }

}
