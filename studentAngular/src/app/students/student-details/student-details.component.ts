import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  id!: number;
  student!: any;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.student = new Student();
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudent(this.id).subscribe(
      (data) => {
        this.student = data;
      },
      (error) => console.log(error)
    );
  }

  gotoList() {
    this.router.navigate(['groups/' + this.student.group_id]);
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(data => {
      this.student = data;
    });
    this.gotoList();
  }
}
