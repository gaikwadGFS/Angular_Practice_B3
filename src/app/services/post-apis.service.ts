import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from '../Constants/cons';

@Injectable({
  providedIn: 'root'
})
export class PostAPIsService {

  // apiUrl:string ="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get(Constant.API_URL);
  }

  createPost(obj:any):Observable<any>{
  return this.http.post(Constant.API_URL,obj);
  }
}
