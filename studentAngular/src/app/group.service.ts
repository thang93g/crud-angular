import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GroupService{
  private baseUrl = 'http://127.0.0.1:8000/api/groups';

  constructor(private http: HttpClient) { }

  getGroupList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/`);
  }

  createGroup(group: Object): Observable<object>{
    return this.http.post(`${this.baseUrl}/store`,group);
  }

  deleteGroup(id: number): Observable<object>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`)
  }

  updateGroup(id: number , value: any): Observable<object>{
    return this.http.put(`${this.baseUrl}/update/${id}`,value)
  }

  getGroup(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  searchGroup(keyword: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/search/${keyword}`);
  }
}
