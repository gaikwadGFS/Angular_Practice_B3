import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostAPIsService {

  apiUrl:string ="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  createPost(obj:any):Observable<any>{
  return this.http.post(this.apiUrl,obj);
  }
}
