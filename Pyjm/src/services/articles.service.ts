import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleDTO } from 'src/dto/articleDTO';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  constructor(private http: HttpClient) { }

  getArticleByIssue(id: number): Observable<ArticleDTO[]> {
    return this.http.get<ArticleDTO[]>('http://127.0.0.1:8000/issues/' + id + '/articles/');
  }
}
