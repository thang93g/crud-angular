import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private urlBase = "http://127.0.0.1:8000/api/students";

  constructor(private http: HttpClient) { }

  getStudentsList(): Observable<any>{
    return this.http.get(`${this.urlBase}/`);
  }

  createStudent(student: Object): Observable<object>{
    return this.http.post(`${this.urlBase}/store`,student);
  }

  getStudent(id: number): Observable<object>{
    return this.http.get(`${this.urlBase}/${id}`);
  }

  deleteStudent(id: number): Observable<object>{
    return this.http.delete(`${this.urlBase}/delete/${id}`);
  }

  updateStudent(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.urlBase}/update/${id}`,value);
  }
}
