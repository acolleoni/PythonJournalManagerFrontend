import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from 'src/dto/categoryDTO';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(protected http: HttpClient) { }

  getAllCategories(): Observable<CategoryDTO[]>{
    return this.http.get<CategoryDTO[]>('http://127.0.0.1:8000/issues/categories/');
  }

}
