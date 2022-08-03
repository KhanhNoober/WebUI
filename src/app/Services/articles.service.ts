import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private http: HttpClient) { }

  getA(page: number, perPage: number): any {
    return this.http.get(`https://social.runwayclub.dev/api/articles/latest?page=${page}&per_page=${perPage}`)
  }
}
