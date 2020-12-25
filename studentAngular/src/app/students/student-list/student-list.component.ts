import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students!: Observable<any>;
  keyword!: string;

  constructor(private studentService: StudentService,router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.students = this.studentService.getStudentsList();
  }

}
